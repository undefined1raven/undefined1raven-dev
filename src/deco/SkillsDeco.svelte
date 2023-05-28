<script>
	import { onMount } from "svelte";
    import { scale } from "svelte/transition";
	import getRandomInt from "../fn/getRandomInt";
    let color = '#6100FF';
    let width = '5vh';
    let height = '3vh';
    let opacity = 1;

    let randomArray = [];
    onMount(() => {
        setInterval(() => {
            randomArray = [];
            for(let ix = 0; ix < 60; ix++){
                randomArray.push(getRandomOpacity());
            }
        }, 500)
    })

    function getRandomOpacity(){
        const ran = Math.random();
        if(ran < .3){
            return 0;
        }else{
            return (getRandomInt(3, 6) / 10).toFixed(0);
        }
    }

    export { width, height, color, opacity };
</script>

<div style="position: absolute; width: {width}; height: {height}; display: flex; align-items: center; justify-content: center; opacity: {opacity};">
<svg transition:scale={{duration: 200}} width="100%" height="100%" viewBox="0 0 1189 815" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="419.507" y="96.5543" width="3" height="361" transform="rotate(39.6443 419.507 96.5543)" fill={color} fill-opacity={randomArray[0]}/>
<rect x="275" y="287.148" width="3" height="361" transform="rotate(-22.4975 275 287.148)" fill={color} fill-opacity={randomArray[1]}/>
<rect x="345" y="130.148" width="3" height="361" transform="rotate(-22.4975 345 130.148)" fill={color} fill-opacity={randomArray[2]}/>
<rect x="652" y="1.14795" width="3" height="361" transform="rotate(-22.4975 652 1.14795)" fill={color} fill-opacity={randomArray[3]}/>
<rect x="793.716" y="1.49365" width="3" height="629.387" transform="rotate(23.7293 793.716 1.49365)" fill={color} fill-opacity={randomArray[4]}/>
<rect x="135.895" y="329.427" width="3" height="361" transform="rotate(-116.991 135.895 329.427)" fill={color} fill-opacity={randomArray[5]}/>
<rect x="125.136" y="188.12" width="3" height="629.387" transform="rotate(-70.7645 125.136 188.12)" fill={color} fill-opacity={randomArray[6]}/>
<rect x="887.371" y="290" width="3" height="361" transform="rotate(39.6443 887.371 290)" fill={color} fill-opacity={randomArray[7]}/>
<rect x="742.864" y="480.594" width="3" height="361" transform="rotate(-22.4975 742.864 480.594)" fill={color} fill-opacity={randomArray[8]}/>
<rect x="812.864" y="323.594" width="3" height="361" transform="rotate(-22.4975 812.864 323.594)" fill={color} fill-opacity={randomArray[9]}/>
<rect x="603.759" y="522.873" width="3" height="361" transform="rotate(-116.991 603.759 522.873)" fill={color} fill-opacity={randomArray[10]}/>
<rect x="214.846" y="727.1" width="3" height="460.852" transform="rotate(152.586 214.846 727.1)" fill={color} fill-opacity={randomArray[11]}/>
<rect x="593" y="381.566" width="3" height="629.387" transform="rotate(-70.7645 593 381.566)" fill={color} fill-opacity={randomArray[12]}/>
<path d="M185.105 58L147 124L108.895 58L185.105 58Z" fill={color} fill-opacity={randomArray[20]}  stroke={color} stroke-opacity={randomArray[13]}/>
<path d="M156.895 127L195 61L233.105 127H156.895Z" fill={color} fill-opacity={randomArray[19]}  stroke={color} stroke-opacity={randomArray[14]}/>
<path d="M62.8949 127L101 61L139.105 127H62.8949Z" fill={color} fill-opacity={randomArray[18]} stroke={color} stroke-opacity={randomArray[16]}/>
<path d="M647.846 709.034L687.208 643.776L724.043 710.494L647.846 709.034Z" fill={color} fill-opacity={randomArray[21]} stroke={color} stroke-opacity={randomArray[36]}/>
<path d="M677.373 640.587L638.011 705.845L601.177 639.128L677.373 640.587Z" fill={color} fill-opacity={randomArray[22]} stroke={color} stroke-opacity={randomArray[37]}/>
<path d="M771.356 642.387L731.994 707.645L695.16 640.928L771.356 642.387Z" fill={color} fill-opacity={randomArray[23]} stroke={color} stroke-opacity={randomArray[38]}/>
<path d="M236.946 389.51L278.73 453.244L202.642 457.563L236.946 389.51Z" fill={color} fill-opacity={randomArray[24]} stroke={color} stroke-opacity={randomArray[39]}/>
<path d="M287.811 447.086L246.027 383.352L322.115 379.033L287.811 447.086Z" fill={color} fill-opacity={randomArray[25]} stroke={color} stroke-opacity={randomArray[40]}/>
<path d="M245.5 531.025L203.716 467.291L279.804 462.972L245.5 531.025Z" fill={color} fill-opacity={randomArray[26]} stroke={color} stroke-opacity={randomArray[41]}/>
<path d="M819.946 128.51L861.73 192.244L785.642 196.563L819.946 128.51Z" fill={color} fill-opacity={randomArray[28]} stroke={color} stroke-opacity={randomArray[42]}/>
<path d="M869.512 184.368L827.728 120.634L903.816 116.315L869.512 184.368Z" fill={color} fill-opacity={randomArray[29]} stroke={color} stroke-opacity={randomArray[43]}/>
<path d="M827.2 268.307L785.416 204.573L861.504 200.254L827.2 268.307Z" fill={color} fill-opacity={randomArray[30]} stroke={color} stroke-opacity={randomArray[44]}/>
<path d="M539.84 164.71L534.216 240.713L471.208 197.841L539.84 164.71Z" fill={color} fill-opacity={randomArray[31]} stroke={color} stroke-opacity={randomArray[45]}/>
<path d="M542.989 239.417L548.613 163.415L611.621 206.287L542.989 239.417Z" fill={color} fill-opacity={randomArray[32]} stroke={color} stroke-opacity={randomArray[46]}/>
<path d="M458.336 280.281L463.96 204.279L526.968 247.151L458.336 280.281Z" fill={color} fill-opacity={randomArray[33]} stroke={color} stroke-opacity={randomArray[47]}/>
<path d="M1059 255.5C1059 287.256 1033.26 313 1001.5 313C969.744 313 944 287.256 944 255.5C944 223.744 969.744 198 1001.5 198C1033.26 198 1059 223.744 1059 255.5ZM946.787 255.5C946.787 285.717 971.283 310.213 1001.5 310.213C1031.72 310.213 1056.21 285.717 1056.21 255.5C1056.21 225.283 1031.72 200.787 1001.5 200.787C971.283 200.787 946.787 225.283 946.787 255.5Z" fill={color} fill-opacity={randomArray[47]}/>
<path d="M1076 255C1076 296.421 1042.42 330 1001 330C959.579 330 926 296.421 926 255C926 213.579 959.579 180 1001 180C1042.42 180 1076 213.579 1076 255ZM929.678 255C929.678 294.39 961.61 326.322 1001 326.322C1040.39 326.322 1072.32 294.39 1072.32 255C1072.32 215.61 1040.39 183.678 1001 183.678C961.61 183.678 929.678 215.61 929.678 255Z" fill={color} fill-opacity={randomArray[49]}/>
<path d="M1151 255C1151 337.843 1083.84 405 1001 405C918.157 405 851 337.843 851 255C851 172.157 918.157 105 1001 105C1083.84 105 1151 172.157 1151 255ZM854.831 255C854.831 335.727 920.273 401.169 1001 401.169C1081.73 401.169 1147.17 335.727 1147.17 255C1147.17 174.273 1081.73 108.831 1001 108.831C920.273 108.831 854.831 174.273 854.831 255Z" fill={color} fill-opacity={randomArray[50]}/>
<path d="M503 333.5C503 365.256 477.256 391 445.5 391C413.744 391 388 365.256 388 333.5C388 301.744 413.744 276 445.5 276C477.256 276 503 301.744 503 333.5ZM390.787 333.5C390.787 363.717 415.283 388.213 445.5 388.213C475.717 388.213 500.213 363.717 500.213 333.5C500.213 303.283 475.717 278.787 445.5 278.787C415.283 278.787 390.787 303.283 390.787 333.5Z" fill={color} fill-opacity={randomArray[51]}/>
<path d="M521 437C521 478.421 487.421 512 446 512C404.579 512 371 478.421 371 437C371 395.579 404.579 362 446 362C487.421 362 521 395.579 521 437ZM374.678 437C374.678 476.39 406.61 508.322 446 508.322C485.39 508.322 517.322 476.39 517.322 437C517.322 397.61 485.39 365.678 446 365.678C406.61 365.678 374.678 397.61 374.678 437Z" fill={color} fill-opacity={randomArray[52]}/>
<path d="M439 351C439 433.843 371.843 501 289 501C206.157 501 139 433.843 139 351C139 268.157 206.157 201 289 201C371.843 201 439 268.157 439 351ZM142.831 351C142.831 431.727 208.273 497.169 289 497.169C369.727 497.169 435.169 431.727 435.169 351C435.169 270.273 369.727 204.831 289 204.831C208.273 204.831 142.831 270.273 142.831 351Z" fill={color} fill-opacity={randomArray[53]}/>
</svg>
<div style="position: absolute; width: 100%; height: 100%; z-index: 2; backdrop-filter: blur(2px);"></div>
</div>

<style>
    rect, path{
        transition: all ease-in-out 0.4s;
    }
</style>