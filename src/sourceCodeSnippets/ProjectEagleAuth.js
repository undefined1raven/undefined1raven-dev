function ProjectEagleAuth() {
    return `
    const MFA_mobile_poll_rate_limiter = new limiter_src.RateLimiter({ tokensPerInterval: 675, interval: 'hour' });
    app.post('/MFA_mobile_poll', (req, res) => {
    if (rate_limiter_checker(MFA_mobile_poll_rate_limiter, res)) {
        if (req.cookies.frstp_aprvd_tid != undefined) {
            get_snapshot_from_path('frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} ').then(snapshot => {
                const data = snapshot.val();
                if (data != null) {
                    try {
                        let agl = uap.parse(req.headers["user-agent"]);
                        let os = agl.os.family;
                        let os_version = agl.os.major;

                        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
                        let ipx = ip.split(',')[0];
                        if (!data.notification_sent) {
                            getipld(ipx).then(location => {
                                try {
                                    set(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '), { notification_sent: true, state: data.state, tx: data.tx, acid: data.acid });
                                } catch (e) { }
                                io.to('|{data.acid} ').emit('login_req', { iso_code: location.country.iso_code, state: location.state.name, city: location.city.name, os: os, os_version: os_version, tx: Date.now(), tid: req.cookies.frstp_aprvd_tid.tid });
                                console.log('nfw: 0')
                            }).catch(e => {
                                try {
                                    set(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '), { notification_sent: true, state: data.state, tx: data.tx, acid: data.acid });
                                } catch (e) { }
                                io.to('|{data.acid} ').emit('login_req', { iso_code: false, state: false, city: false, os: os, os_version: os_version, tx: Date.now(), tid: req.cookies.frstp_aprvd_tid.tid });
                                console.log('nfw: 1')
                            });
                        }

                        UAC_v2.find({ acid: req.cookies.frstp_aprvd_tid.acid }).then(r => {
                            if (r.length > 0) {
                                const user = r[0];
                                if (data.state == true) {
                                    remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
                                    setTimeout(() => {
                                        let user_acc_auth_methods_arr = user.acc_auth_methods_arr;
                                        UAC_v2.findOneAndUpdate({ acid: req.cookies.frstp_aprvd_tid.acid }, { acc_auth_methods_arr: { TOTP: user_acc_auth_methods_arr.TOTP, security_key: user_acc_auth_methods_arr.security_key, app: true, email: user_acc_auth_methods_arr.email, first: user_acc_auth_methods_arr.first } }, { upsert: true }, (err, doc) => { });

                                        successful_auth_post(req, res, user, false);

                                        res.clearCookie('frstp_aprvd_tid');

                                        res.json({ failure_id: 'none', res_tx: Date.now(), redirect_path: req.cookies.wid, result: true });
                                        res.end();
                                    }, 100);
                                }
                                if (data.state == false) {
                                    remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
                                    res.clearCookie('frstp_aprvd_tid');
                                    res.json({ failure_id: 'user_denied_req', res_tx: Date.now(), result: false });
                                    res.end();
                                }
                                if (Math.abs(Date.now() - data.tx) > 180000) {
                                    res.json({ failure_id: 'request_timeout', res_tx: Date.now(), result: false });
                                    io.to('|{data.acid} ').emit('login_req_timeout_sig');
                                    remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
                                }
                                else {
                                    if (data.state != true && data.state != false) {
                                        res.end();
                                    }
                                }
                            }
                            else {
                                res.json({ failure_id: 'failed_acid_fetch', res_tx: Date.now(), result: false });
                            }
                        });

                    } catch (e) { res.json({ failure_id: 'cookie TID not in RTDB', res_tx: Date.now(), result: false }); }
                }
                else {
                    res.json({ failure_id: 'cookie TID not in RTDB [RTDB returned null]', res_tx: Date.now(), result: false });
                }
            });
        }
    }
});


function successful_auth_post(req, res, user, redirect) {
    const tid = '|{uuid.v4()}|{uuid.v4()} ';
    const token = jwt.sign({ acid: user.acid, tid: tid }, jwt_scrt, {
        algorithm: 'HS256',
        expiresIn: 21600,//6h ttl
    });

    const add_tid_to_rtdb = ref(db, 'adv_tele_aprvd_tids / |{tid} ');
    set(add_tid_to_rtdb, {
        tx: Date.now(),
        acid: user.acid,
        mobile: req.useragent.isMobile
    });
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    var at_expiry_date = new Date();
    at_expiry_date.setHours(at_expiry_date.getHours() + 6);

    if (process.env.NODE_ENV === 'production') {
        add_activity_log_tdb(req, ip, 'Advanced Telemetry login', req.body.user_identifier);
        // res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: true });
        res.cookie('at', { tac: token, tid: tid, exp: at_expiry_date }, { httpOnly: true, secure: true, expires: at_expiry_date });
        res.cookie('adv_tele_sio_ath', tid, { secure: true });
        res.cookie('wid', 'advanced_telemetry', { httpOnly: true, secure: true });
        res.cookie('acid', user.acid, { secure: true });
    }
    else {
        // add_activity_log_tdb(req, ip, 'Advanced Telemetry login', req.body.user_identifier);
        // res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: false });
        res.cookie('at', { tac: token, tid: tid, exp: at_expiry_date }, { httpOnly: true, expires: at_expiry_date });
        res.cookie('adv_tele_sio_ath', tid);
        res.cookie('wid', 'advanced_telemetry', { httpOnly: true });
        res.cookie('acid', user.acid, { secure: false });
    }
    if (req.cookies.frstp_aprvd_tid != undefined) {
        remove(ref(db, 'frstp_aprvd_tids / |{req.cookies.frstp_aprvd_tid.tid} '));
    }
    setTimeout(() => {
        if (redirect) {
            res.redirect('advanced_telemetry');
        }
    }, 50);
}


app.post('/auth_post', json_parser, (req, res) => {
    UAC_v2.find({ $or: [{ email: req.body.user_identifier }, { username: req.body.user_identifier }] }).exec().then(usr => {
        if (usr.length > 0) {
            const user = usr[0];
            bcrypt.compare(req.body.password, user.password).then(rslt => {
                console.log(user.password)
                if (rslt) {
                    let tid = '|{uuid.v4()}|{uuid.v4()} ';
                    if (user.acc_auth_methods_arr.TOTP || user.acc_auth_methods_arr.security_key || user.acc_auth_methods_arr.app) {
                        MFA_prep_and_redirect(req, res, user, 0, tid);
                    }
                    else {
                        successful_auth_post(req, res, user, false);

                        if (process.env.NODE_ENV === 'production') {
                            res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: true });
                        }
                        else {
                            res.cookie('eor', req.body.user_identifier, { httpOnly: false, secure: false });
                        }
                        if (req.cookies.wid != undefined) {
                            setTimeout(() => {
                                res.json({ result: true, redirect_path: req.cookies.wid });
                            }, 100);
                        } else {
                            setTimeout(() => {
                                res.json({ result: true, redirect_path: '/advanced_telemetry' });
                            }, 100);

                        }
                    }
                }
                else {
                    res.json({ result: false, code: 'LNN-550' });
                }
            });
        }
        else {
            res.json({ result: false, code: 'XNF-3312' });
        }
    });
});

function gen_rc() {
    return '|{uuid.v4().split('-')[0].toUpperCase()} -|{uuid.v4().split('-')[3].toUpperCase()} ';
}

const doesUserExist_limiter = new limiter_src.RateLimiter({ tokensPerInterval: 4000, interval: 'hour' });
app.post('/doesUserExist', json_parser, (req, res) => {
    if (rate_limiter_checker(doesUserExist_limiter, res)) {
        UAC_v2.findOne({ username: req.body.username }).exec().then(query_res => {
            if (query_res) {
                res.json({ isUsernameTaken: true });
            }
            else {
                res.json({ isUsernameTaken: false });
            }
        });
    }
});

app.post('/opsec_to_adv_tele', (req, res) => {
    res.clearCookie('sat');
    res.clearCookie('sio_ath');
    res.redirect('advanced_telemetry');
});


// const dock_model = new RELAY_STATION_SCH({
//     relay_station_id: uuid.v4(),
//     dock_array: [{dock_id: '21f9a158-5953-48fc-a4f1-a9af2bf4d27d'}],
//     relay_station_name: 'RS-1',
//     activity_logs: [],
//     user_access_array: [{acid: '88d9e113-520b-45d0-9370-213dc2557a40'}]
// });
// dock_model.save();

// DOCK_SCH.findOneAndUpdate({dock_id: '536413de-9134-4c61-a859-1da3a12478f7'}, {payload_array: [{type: 'Thermal Camera', id: 'PY-2F'}, {type: 'Flood Lights', id: 'PY-1Z'}]}, {upsert: true}, (err, doc) => {});
// RELAY_STATION_SCH.findOneAndUpdate({relay_station_id: 'e2b67ec5-bea9-4251-a58d-cfefd75294fd'}, {dock_array: [{dock_id: '21f9a158-5953-48fc-a4f1-a9af2bf4d27d'}]}, {upsert: true}, (err, doc) => {});


app.post('/genesis_post', (req, res) => {
    async function add_udb() {
        try {
            var es = await bcrypt.hash(req.body.password, 10);
            var eq = encryptor.encrypt(req.body.email);
            let nvid = uuid.v4();
            let nacid = uuid.v4();
            let nvn = 'VULTURE - |{str.random(3).toUpperCase()}|{getRandomInt(100, 999)} ';
            const uacq = new UAC_v2({
                username: req.body.username,
                email: req.body.email,
                password: es,
                vid: uuid.v4(),
                acid: nacid,
                did: [],
                secca: es,
                mfa_tkn: mfa_mgr.generateSecret({ length: 40 }),
                sec_auth_methods_arr: [true, false, false],//pass | mfa | security key
                sec_rcvry_methods_arr: [],
                acc_auth_methods_arr: [true, false, false],
                acc_rcvry_methods_arr: [],
                rcvry_codes_arr: [gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc(), gen_rc()],
                vow: [{ vid: nvid, vn: nvn }],
                dock_array: [],
                contact_emails_arr: [],
                contact_phone_numbers_arr: [],
            });
            uacq.save().then((r) => console.log('|{r.vid} added to DeepStorage'))
            console.log('|{uuid.v4()} saved to UAC');

            const vulture_sch = new VULTURE_SCH({
                vid: nvid,
                vn: nvn,
                u_access_arr: gen_admin_u_access_array(nacid, 0),
                local_prefs_arr: [],
                security_rules_arr: [],
                flt_logs: [],
            });

            vulture_sch.save().then(r => { });

        } catch (e) {
            res.redirect('genesis');
        }
        res.redirect('/login');
    }
    add_udb();
});
`
}


export default ProjectEagleAuth;