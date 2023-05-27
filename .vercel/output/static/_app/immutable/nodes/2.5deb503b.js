import{J as Fs,K as Qa,S as ke,i as Ce,s as Me,e as Ut,b as Q,g as E,v as Xt,d as T,f as Gt,h as p,L as b,M as w,m as y,n as e,G as g,N as jt,O as me,C as ks,k as oe,q as Cs,a as W,l as ie,r as Ms,c as Z,P as xa,Q as pe,R as Ds,u as Ss,D as As,E as Is,F as Es,T as Ga,U as xt,o as Ft,H as Ie,V as $a,p as H,y as j,z,A as U,B as q,x as es,w as Ls,W as Ts,X as Bs}from"../chunks/index.e6eae6c9.js";import{i as R,R as gs,s as Ja,L as wt,g as ms}from"../chunks/globalTheme.b54fe020.js";import{w as Ya}from"../chunks/index.aaa42010.js";function ys(r){const t=r-1;return t*t*t+1}function Za(r,{delay:t=0,duration:a=400,easing:s=Fs}={}){const o=+getComputedStyle(r).opacity;return{delay:t,duration:a,easing:s,css:l=>`opacity: ${l*o}`}}function _t(r,{delay:t=0,duration:a=400,easing:s=ys,x:o=0,y:l=0,opacity:i=0}={}){const n=getComputedStyle(r),c=+n.opacity,v=n.transform==="none"?"":n.transform,h=c*(1-i),[k,F]=Qa(o),[d,u]=Qa(l);return{delay:t,duration:a,easing:s,css:(_,M)=>`
			transform: ${v} translate(${(1-_)*k}${F}, ${(1-_)*d}${u});
			opacity: ${c-h*M}`}}function Xa(r,{delay:t=0,duration:a=400,easing:s=ys,start:o=0,opacity:l=0}={}){const i=getComputedStyle(r),n=+i.opacity,c=i.transform==="none"?"":i.transform,v=1-o,h=n*(1-l);return{delay:t,duration:a,easing:s,css:(k,F)=>`
			transform: ${c} scale(${1-v*F});
			opacity: ${n-h*F}
		`}}function ts(r){let t,a,s,o,l,i,n,c,v,h,k,F,d,u,_;return{c(){t=b("svg"),a=b("rect"),o=b("rect"),i=b("rect"),c=b("rect"),this.h()},l(M){t=w(M,"svg",{class:!0,id:!0,width:!0,height:!0,style:!0,viewBox:!0,fill:!0,xmlns:!0});var A=y(t);a=w(A,"rect",{x:!0,y:!0,width:!0,height:!0,stroke:!0}),y(a).forEach(p),o=w(A,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,stroke:!0}),y(o).forEach(p),i=w(A,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,stroke:!0}),y(i).forEach(p),c=w(A,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,stroke:!0}),y(c).forEach(p),A.forEach(p),this.h()},h(){e(a,"x","0.5"),e(a,"y","0.5"),e(a,"width","299"),e(a,"height","299"),e(a,"stroke",s=r[4]?r[4]:"#2400FF"),e(o,"x","73.9028"),e(o,"y","148.838"),e(o,"width","107.085"),e(o,"height","107.085"),e(o,"transform","rotate(-45 73.9028 148.838)"),e(o,"stroke",l=r[4]?r[4]:"#2400FF"),e(i,"x","74.1312"),e(i,"y","165.65"),e(i,"width","107.085"),e(i,"height","107.085"),e(i,"transform","rotate(-45 74.1312 165.65)"),e(i,"stroke",n=r[4]?r[4]:"#2400FF"),e(c,"x","73.7071"),e(c,"y","134.428"),e(c,"width","107.085"),e(c,"height","107.085"),e(c,"transform","rotate(-45 73.7071 134.428)"),e(c,"stroke",v=r[4]?r[4]:"#2400FF"),e(t,"class","deco"),e(t,"id",h=r[1]?r[1]:""),e(t,"width",k=r[0]?r[0]:"5vh"),e(t,"height",F=r[0]?r[0]:"5vh"),e(t,"style",d=r[2]?r[2]:""),e(t,"viewBox","0 0 300 300"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(M,A){Q(M,t,A),g(t,a),g(t,o),g(t,i),g(t,c),_=!0},p(M,A){(!_||A&16&&s!==(s=M[4]?M[4]:"#2400FF"))&&e(a,"stroke",s),(!_||A&16&&l!==(l=M[4]?M[4]:"#2400FF"))&&e(o,"stroke",l),(!_||A&16&&n!==(n=M[4]?M[4]:"#2400FF"))&&e(i,"stroke",n),(!_||A&16&&v!==(v=M[4]?M[4]:"#2400FF"))&&e(c,"stroke",v),(!_||A&2&&h!==(h=M[1]?M[1]:""))&&e(t,"id",h),(!_||A&1&&k!==(k=M[0]?M[0]:"5vh"))&&e(t,"width",k),(!_||A&1&&F!==(F=M[0]?M[0]:"5vh"))&&e(t,"height",F),(!_||A&4&&d!==(d=M[2]?M[2]:""))&&e(t,"style",d)},i(M){_||(jt(()=>{_&&(u||(u=me(t,Xa,{duration:100},!0)),u.run(1))}),_=!0)},o(M){u||(u=me(t,Xa,{duration:100},!1)),u.run(0),_=!1},d(M){M&&p(t),M&&u&&u.end()}}}function Ps(r){let t,a,s=r[3]&&ts(r);return{c(){s&&s.c(),t=Ut()},l(o){s&&s.l(o),t=Ut()},m(o,l){s&&s.m(o,l),Q(o,t,l),a=!0},p(o,[l]){o[3]?s?(s.p(o,l),l&8&&E(s,1)):(s=ts(o),s.c(),E(s,1),s.m(t.parentNode,t)):s&&(Xt(),T(s,1,1,()=>{s=null}),Gt())},i(o){a||(E(s),a=!0)},o(o){T(s),a=!1},d(o){s&&s.d(o),o&&p(t)}}}function Rs(r,t,a){let{size:s}=t,{id:o}=t,{style:l}=t,{show:i}=t,{color:n}=t;return r.$$set=c=>{"size"in c&&a(0,s=c.size),"id"in c&&a(1,o=c.id),"style"in c&&a(2,l=c.style),"show"in c&&a(3,i=c.show),"color"in c&&a(4,n=c.color)},[s,o,l,i,n]}class Wa extends ke{constructor(t){super(),Ce(this,t,Rs,Ps,Me,{size:0,id:1,style:2,show:3,color:4})}}function Os(r){let t,a=(r[1]?r[1]:"")+"",s,o,l,i,n,c,v;const h=r[29].default,k=ks(h,r,r[28],null);return{c(){t=oe("div"),s=Cs(a),o=W(),k&&k.c(),this.h()},l(F){t=ie(F,"DIV",{id:!0,class:!0,style:!0});var d=y(t);s=Ms(d,a),o=Z(d),k&&k.l(d),d.forEach(p),this.h()},h(){e(t,"id",r[0]),e(t,"class",l=xa(`button ${J(r[2],"")}`)+" svelte-pt98vu"),e(t,"style",i="opacity: "+J(r[13],"1")+"; font-size: "+J(r[17],"2vh")+"; left: "+r[23](J(r[11],"auto"),J(r[15],"auto"))+"; top: "+r[23](J(r[10],"auto"),J(r[14],"auto"))+"; width: "+J(r[8],"auto")+"; height: "+J(r[9],"auto")+"; color: "+J(r[3],"#FFF")+"; background-color: "+J(r[19],"#0500FF00")+"; border: solid 1px "+J(r[5],"#0500FF")+"; border-radius: "+(parseFloat(J(r[16],"0px").substring(0,J(r[16],"0px").length-2))*100/360/100*r[18]+"px;")+"; backdrop-filter: "+J(r[12],"blur(0px)")+"; --webkit-backdrop-filter: "+J(r[12],"blur(0px)")+"; "+J(r[4],""))},m(F,d){Q(F,t,d),g(t,s),g(t,o),k&&k.m(t,null),n=!0,c||(v=[pe(window,"resize",r[22]),pe(t,"touchstart",r[30],{passive:!0}),pe(t,"touchend",r[21]),pe(t,"click",function(){Ds(r[7])&&r[7].apply(this,arguments)}),pe(t,"mouseenter",r[31]),pe(t,"mouseleave",r[32])],c=!0)},p(F,d){r=F,(!n||d[0]&2)&&a!==(a=(r[1]?r[1]:"")+"")&&Ss(s,a),k&&k.p&&(!n||d[0]&268435456)&&As(k,h,r,r[28],n?Es(h,r[28],d,null):Is(r[28]),null),(!n||d[0]&1)&&e(t,"id",r[0]),(!n||d[0]&4&&l!==(l=xa(`button ${J(r[2],"")}`)+" svelte-pt98vu"))&&e(t,"class",l),(!n||d[0]&1048376&&i!==(i="opacity: "+J(r[13],"1")+"; font-size: "+J(r[17],"2vh")+"; left: "+r[23](J(r[11],"auto"),J(r[15],"auto"))+"; top: "+r[23](J(r[10],"auto"),J(r[14],"auto"))+"; width: "+J(r[8],"auto")+"; height: "+J(r[9],"auto")+"; color: "+J(r[3],"#FFF")+"; background-color: "+J(r[19],"#0500FF00")+"; border: solid 1px "+J(r[5],"#0500FF")+"; border-radius: "+(parseFloat(J(r[16],"0px").substring(0,J(r[16],"0px").length-2))*100/360/100*r[18]+"px;")+"; backdrop-filter: "+J(r[12],"blur(0px)")+"; --webkit-backdrop-filter: "+J(r[12],"blur(0px)")+"; "+J(r[4],"")))&&e(t,"style",i)},i(F){n||(E(k,F),n=!0)},o(F){T(k,F),n=!1},d(F){F&&p(t),k&&k.d(F),c=!1,Ga(v)}}}function J(r,t){return r??t}function js(r,t,a){let{$$slots:s={},$$scope:o}=t;const l=xt();let{id:i}=t,{label:n}=t,{className:c}=t,{color:v}=t,{style:h}=t,{lightColor:k}=t,{borderColor:F}=t,{backgroundColor:d}=t,{onClick:u}=t,{width:_}=t,{height:M}=t,{top:A}=t,{left:D}=t,{horizontalFont:B}=t,{verticalFont:K}=t,{desktopFont:N}=t,{backdropFilter:ae}=t,{opacity:L}=t,{tabletTop:x}=t,{tabletLeft:V}=t,{borderRadius:X}=t,ee=0,fe="2.4vh";const te=document.documentElement;let Y=te.clientWidth,de=te.clientHeight,se;Ft(()=>{le(),a(19,se=d)});const G=S=>{l("onTouchStart"),ee=S},C=S=>{l("onTouchEnd"),Date.now()-ee<300&&(u!=null?u(S):console.log("onClick undefined"),k!=null&&(S.target.style.color=k,setTimeout(()=>{S.target.style.color=v},500)))};function I(S){a(18,de=te.clientHeight),Y=te.clientWidth,le()}function le(){if(R()==!0)(de>Y?"portrait":"landscape")=="portrait"?K!=null?a(17,fe=parseFloat(K.substring(0,K.length-2))*Y/360+"px"):a(17,fe="1.4vh"):B!=null?a(17,fe=parseFloat(B.substring(0,B.length-2))*Y/640+"px"):a(17,fe="2.8vh");else{let S;N!=null?(S=parseFloat(N.substring(0,N.length-2))*de/1080,a(17,fe=S+"px")):a(17,fe="15px"),Y<700&&S&&!R()&&a(17,fe=parseFloat(S-gs(S,10,48,0,18))+"px")}}function ye(S,ue){return Y>1050&&ue!="auto"?ue:S}const re=()=>G(Date.now()),ne=()=>{a(19,se=`${d==null?void 0:d.substring(0,d.length-2)}30`)},Te=()=>{a(19,se=`${d==null?void 0:d.substring(0,d.length-2)}00`)};return r.$$set=S=>{"id"in S&&a(0,i=S.id),"label"in S&&a(1,n=S.label),"className"in S&&a(2,c=S.className),"color"in S&&a(3,v=S.color),"style"in S&&a(4,h=S.style),"lightColor"in S&&a(24,k=S.lightColor),"borderColor"in S&&a(5,F=S.borderColor),"backgroundColor"in S&&a(6,d=S.backgroundColor),"onClick"in S&&a(7,u=S.onClick),"width"in S&&a(8,_=S.width),"height"in S&&a(9,M=S.height),"top"in S&&a(10,A=S.top),"left"in S&&a(11,D=S.left),"horizontalFont"in S&&a(25,B=S.horizontalFont),"verticalFont"in S&&a(26,K=S.verticalFont),"desktopFont"in S&&a(27,N=S.desktopFont),"backdropFilter"in S&&a(12,ae=S.backdropFilter),"opacity"in S&&a(13,L=S.opacity),"tabletTop"in S&&a(14,x=S.tabletTop),"tabletLeft"in S&&a(15,V=S.tabletLeft),"borderRadius"in S&&a(16,X=S.borderRadius),"$$scope"in S&&a(28,o=S.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&64&&a(19,se=d)},[i,n,c,v,h,F,d,u,_,M,A,D,ae,L,x,V,X,fe,de,se,G,C,I,ye,k,B,K,N,o,s,re,ne,Te]}class vt extends ke{constructor(t){super(),Ce(this,t,js,Os,Me,{id:0,label:1,className:2,color:3,style:4,lightColor:24,borderColor:5,backgroundColor:6,onClick:7,width:8,height:9,top:10,left:11,horizontalFont:25,verticalFont:26,desktopFont:27,backdropFilter:12,opacity:13,tabletTop:14,tabletLeft:15,borderRadius:16},null,[-1,-1])}}function Us(r){let t,a,s,o,l,i,n,c,v,h,k,F;return{c(){t=b("svg"),a=b("rect"),i=b("rect"),h=b("path"),this.h()},l(d){t=w(d,"svg",{class:!0,width:!0,height:!0,style:!0,viewBox:!0,fill:!0,xmlns:!0});var u=y(t);a=w(u,"rect",{x:!0,width:!0,height:!0,transform:!0,fill:!0,"fill-opacity":!0,stroke:!0,"stroke-width":!0,opacity:!0,class:!0}),y(a).forEach(p),i=w(u,"rect",{x:!0,width:!0,height:!0,transform:!0,fill:!0,"fill-opacity":!0,stroke:!0,"stroke-width":!0,opacity:!0,class:!0}),y(i).forEach(p),h=w(u,"path",{d:!0,stroke:!0,"stroke-width":!0,class:!0}),y(h).forEach(p),u.forEach(p),this.h()},h(){e(a,"x","0.724107"),e(a,"width","32.0353"),e(a,"height","31.9222"),e(a,"transform","matrix(0.724107 -0.689687 0.724107 0.689687 0.199776 23.2834)"),e(a,"fill",s=r[1]?"#444":"#6100DC"),e(a,"fill-opacity","0.2"),e(a,"stroke",o=r[1]?"#444":"#6100DC"),e(a,"stroke-width","0.5"),e(a,"opacity",l=r[3][0]),e(a,"class","svelte-1gs0khx"),e(i,"x","0.724107"),e(i,"width","32.0353"),e(i,"height","31.9222"),e(i,"transform","matrix(0.724107 -0.689687 0.724107 0.689687 8.43952 23.7934)"),e(i,"fill",n=r[1]?"#444":"#6100DC"),e(i,"fill-opacity","0.2"),e(i,"stroke",c=r[1]?"#444":"#6100DC"),e(i,"stroke-width","0.5"),e(i,"opacity",v=r[3][1]),e(i,"class","svelte-1gs0khx"),e(h,"d","M36.4576 22.7316C36.4576 27.0035 32.8145 30.5077 28.2685 30.5077C23.7226 30.5077 20.0794 27.0035 20.0794 22.7316C20.0794 18.4597 23.7226 14.9555 28.2685 14.9555C32.8145 14.9555 36.4576 18.4597 36.4576 22.7316Z"),e(h,"stroke",k=r[1]?"#444":"#6100DC"),e(h,"stroke-width","0.5"),e(h,"class","svelte-1gs0khx"),e(t,"class","deco"),e(t,"width",r[0]),e(t,"height",r[0]),e(t,"style",F="position: absolute; "+r[2]),e(t,"viewBox","0 0 56 46"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(d,u){Q(d,t,u),g(t,a),g(t,i),g(t,h)},p(d,[u]){u&2&&s!==(s=d[1]?"#444":"#6100DC")&&e(a,"fill",s),u&2&&o!==(o=d[1]?"#444":"#6100DC")&&e(a,"stroke",o),u&8&&l!==(l=d[3][0])&&e(a,"opacity",l),u&2&&n!==(n=d[1]?"#444":"#6100DC")&&e(i,"fill",n),u&2&&c!==(c=d[1]?"#444":"#6100DC")&&e(i,"stroke",c),u&8&&v!==(v=d[3][1])&&e(i,"opacity",v),u&2&&k!==(k=d[1]?"#444":"#6100DC")&&e(h,"stroke",k),u&1&&e(t,"width",d[0]),u&1&&e(t,"height",d[0]),u&4&&F!==(F="position: absolute; "+d[2])&&e(t,"style",F)},i:Ie,o:Ie,d(d){d&&p(t)}}}function qs(r,t,a){let{size:s="5vh"}=t,{monochrome:o=!1}=t,{style:l=""}=t,{animated:i=!1}=t,n=[],c;Ft(()=>{c=setInterval(()=>{a(3,n=[]);for(let h=0;h<=3;h++)n.push(v())},500)}),$a(()=>{clearInterval(c)});function v(){if(i){let h=Math.random();return h>.2?h:.2}}return r.$$set=h=>{"size"in h&&a(0,s=h.size),"monochrome"in h&&a(1,o=h.monochrome),"style"in h&&a(2,l=h.style),"animated"in h&&a(4,i=h.animated)},[s,o,l,n,i]}class _s extends ke{constructor(t){super(),Ce(this,t,qs,Us,Me,{size:0,monochrome:1,style:2,animated:4})}}function zs(r){let t,a,s,o,l,i,n,c,v,h,k,F,d,u,_,M,A,D,B,K,N,ae,L,x,V,X,ee,fe,te,Y,de,se,G,C,I,le,ye,re,ne,Te,S,ue,De,ge,we,qt,Fe,Be,zt,_e,Pe,Kt,Se,Re,Nt,ce,Vt,Oe,Ae,je,Ht,he,Wt,Ue,ve,kt,bt,be,Zt,O,P,$t,Jt,$,Yt,Qt,Ct,er,tr,Mt,rr,ar,Dt,sr,lr,St,or,ir,At,nr,fr,Je,ur,cr,Ye,hr,pr,qe,dr,gr,Qe,mr,yr,xe,_r,vr,Ee,br,wr,Fr,He,kr,Cr,We,Mr,Dr,et,Sr,Ar,tt,Ir,Er,Ze,Lr,Tr,rt,Br,Pr,Xe,Rr,Or,at,jr,Ur,st,qr,zr,ze,Kr,Nr,Ge,Vr,Hr,lt,Wr,Zr,ot,Xr,Gr,it,$r,Jr,nt,Yr,Qr,ft,xr,ea,$e,ta,ra,Ke,aa,sa,ut,la,oa,ct,ia,na,ht,fa,ua,pt,ca,ha,Ne,pa,da,It,ga,ma,Et,ya,_a,Lt,va,ba,Tt,wa,Fa,Bt,ka,Ca,Pt,Ma,Da,Rt,Sa,Aa,Ot,Ia,Ea,dt,La,Ta,gt,Ba,Pa,Ve,Ra,Oa,mt,ja,Ua,yt,qa,za,Le,Ka,Na,Va,Ha;return{c(){t=b("svg"),a=b("rect"),l=b("rect"),c=b("rect"),h=b("rect"),F=b("rect"),u=b("rect"),A=b("rect"),K=b("rect"),L=b("rect"),X=b("rect"),te=b("rect"),se=b("rect"),I=b("rect"),re=b("rect"),S=b("rect"),ge=b("rect"),Fe=b("rect"),_e=b("rect"),Se=b("rect"),ce=b("rect"),Ae=b("rect"),he=b("rect"),ve=b("rect"),be=b("path"),P=b("path"),$=b("path"),Ct=b("path"),Mt=b("path"),Dt=b("path"),St=b("path"),At=b("path"),Je=b("rect"),Ye=b("rect"),qe=b("rect"),Qe=b("rect"),xe=b("rect"),Ee=b("rect"),He=b("rect"),We=b("rect"),et=b("rect"),tt=b("rect"),Ze=b("rect"),rt=b("rect"),Xe=b("rect"),at=b("rect"),st=b("rect"),ze=b("rect"),Ge=b("rect"),lt=b("rect"),ot=b("rect"),it=b("rect"),nt=b("rect"),ft=b("rect"),$e=b("rect"),Ke=b("rect"),ut=b("rect"),ct=b("rect"),ht=b("rect"),pt=b("rect"),Ne=b("rect"),It=b("path"),Et=b("path"),Lt=b("path"),Tt=b("path"),Bt=b("path"),Pt=b("path"),Rt=b("path"),Ot=b("path"),dt=b("rect"),gt=b("rect"),Ve=b("rect"),mt=b("rect"),yt=b("rect"),Le=b("rect"),this.h()},l(m){t=w(m,"svg",{width:!0,height:!0,class:!0,style:!0,viewBox:!0,fill:!0,xmlns:!0});var f=y(t);a=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,"fill-opacity":!0,opacity:!0,class:!0}),y(a).forEach(p),l=w(f,"rect",{x:!0,width:!0,height:!0,fill:!0,opacity:!0,class:!0}),y(l).forEach(p),c=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,class:!0}),y(c).forEach(p),h=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,class:!0}),y(h).forEach(p),F=w(f,"rect",{y:!0,width:!0,height:!0,transform:!0,fill:!0,class:!0}),y(F).forEach(p),u=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(u).forEach(p),A=w(f,"rect",{x:!0,width:!0,height:!0,fill:!0,opacity:!0,class:!0}),y(A).forEach(p),K=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(K).forEach(p),L=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(L).forEach(p),X=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(X).forEach(p),te=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,opacity:!0,class:!0}),y(te).forEach(p),se=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(se).forEach(p),I=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(I).forEach(p),re=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(re).forEach(p),S=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(S).forEach(p),ge=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ge).forEach(p),Fe=w(f,"rect",{y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Fe).forEach(p),_e=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(_e).forEach(p),Se=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Se).forEach(p),ce=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ce).forEach(p),Ae=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Ae).forEach(p),he=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(he).forEach(p),ve=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ve).forEach(p),be=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(be).forEach(p),P=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(P).forEach(p),$=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y($).forEach(p),Ct=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Ct).forEach(p),Mt=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Mt).forEach(p),Dt=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Dt).forEach(p),St=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(St).forEach(p),At=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(At).forEach(p),Je=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Je).forEach(p),Ye=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Ye).forEach(p),qe=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(qe).forEach(p),Qe=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Qe).forEach(p),xe=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(xe).forEach(p),Ee=w(f,"rect",{x:!0,width:!0,height:!0,transform:!0,fill:!0,"fill-opacity":!0,stroke:!0,opacity:!0,class:!0}),y(Ee).forEach(p),He=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,"fill-opacity":!0,opacity:!0,class:!0}),y(He).forEach(p),We=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,opacity:!0,class:!0}),y(We).forEach(p),et=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(et).forEach(p),tt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(tt).forEach(p),Ze=w(f,"rect",{y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Ze).forEach(p),rt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(rt).forEach(p),Xe=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,opacity:!0,class:!0}),y(Xe).forEach(p),at=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(at).forEach(p),st=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(st).forEach(p),ze=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ze).forEach(p),Ge=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,opacity:!0,class:!0}),y(Ge).forEach(p),lt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(lt).forEach(p),ot=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ot).forEach(p),it=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(it).forEach(p),nt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(nt).forEach(p),ft=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ft).forEach(p),$e=w(f,"rect",{y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y($e).forEach(p),Ke=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Ke).forEach(p),ut=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ut).forEach(p),ct=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ct).forEach(p),ht=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(ht).forEach(p),pt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(pt).forEach(p),Ne=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Ne).forEach(p),It=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(It).forEach(p),Et=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Et).forEach(p),Lt=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Lt).forEach(p),Tt=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Tt).forEach(p),Bt=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Bt).forEach(p),Pt=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Pt).forEach(p),Rt=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Rt).forEach(p),Ot=w(f,"path",{d:!0,fill:!0,opacity:!0,class:!0}),y(Ot).forEach(p),dt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(dt).forEach(p),gt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(gt).forEach(p),Ve=w(f,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(Ve).forEach(p),mt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(mt).forEach(p),yt=w(f,"rect",{width:!0,height:!0,transform:!0,fill:!0,opacity:!0,class:!0}),y(yt).forEach(p),Le=w(f,"rect",{x:!0,width:!0,height:!0,transform:!0,fill:!0,"fill-opacity":!0,stroke:!0,opacity:!0,class:!0}),y(Le).forEach(p),f.forEach(p),this.h()},h(){e(a,"width","103.289"),e(a,"height","103.289"),e(a,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 75 151.261)"),e(a,"fill",s=r[1]?"#444":"#0000FF"),e(a,"fill-opacity","0.01"),e(a,"opacity",o=r[3][0]),e(a,"class","svelte-7pqnpm"),e(l,"x","43.8677"),e(l,"width","56.6038"),e(l,"height","1.3382"),e(l,"fill",i=r[1]?"#444":"#0000FF"),e(l,"opacity",n=r[3][1]),e(l,"class","svelte-7pqnpm"),e(c,"width","55.0874"),e(c,"height","1.37719"),e(c,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"),e(c,"fill",v=r[1]?"#444":"#0000FF"),e(c,"class","svelte-7pqnpm"),e(h,"width","55.0874"),e(h,"height","1.37719"),e(h,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"),e(h,"fill",k=r[1]?"#444":"#0000FF"),e(h,"class","svelte-7pqnpm"),e(F,"y","97.6887"),e(F,"width","53.5281"),e(F,"height","1.41509"),e(F,"transform","rotate(-90 0 97.6887)"),e(F,"fill",d=r[1]?"#444":"#0000FF"),e(F,"class","svelte-7pqnpm"),e(u,"width","55.0874"),e(u,"height","1.37719"),e(u,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 139.162)"),e(u,"fill",_=r[1]?"#444":"#0000FF"),e(u,"opacity",M=r[3][5]),e(u,"class","svelte-7pqnpm"),e(A,"x","43.8677"),e(A,"width","56.6038"),e(A,"height","1.3382"),e(A,"fill",D=r[1]?"#444":"#0000FF"),e(A,"opacity",B=r[3][6]),e(A,"class","svelte-7pqnpm"),e(K,"width","55.0874"),e(K,"height","1.37719"),e(K,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"),e(K,"fill",N=r[1]?"#444":"#0000FF"),e(K,"opacity",ae=r[3][7]),e(K,"class","svelte-7pqnpm"),e(L,"width","56.99"),e(L,"height","1.37719"),e(L,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"),e(L,"fill",x=r[1]?"#444":"#0000FF"),e(L,"opacity",V=r[3][8]),e(L,"class","svelte-7pqnpm"),e(X,"x","298.585"),e(X,"y","99.027"),e(X,"width","53.5281"),e(X,"height","1.41509"),e(X,"transform","rotate(-90 298.585 99.027)"),e(X,"fill",ee=r[1]?"#444":"#0000FF"),e(X,"opacity",fe=r[3][9]),e(X,"class","svelte-7pqnpm"),e(te,"x","199.528"),e(te,"y","1.3383"),e(te,"width","56.6038"),e(te,"height","1.3382"),e(te,"fill",Y=r[1]?"#444":"#0000FF"),e(te,"opacity",de=r[3][10]),e(te,"class","svelte-7pqnpm"),e(se,"width","55.0874"),e(se,"height","1.37719"),e(se,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 155.661 40.5265)"),e(se,"fill",G=r[1]?"#444":"#0000FF"),e(se,"opacity",C=r[3][11]),e(se,"class","svelte-7pqnpm"),e(I,"width","55.0874"),e(I,"height","1.37719"),e(I,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 259.964 2.67641)"),e(I,"fill",le=r[1]?"#444":"#0000FF"),e(I,"opacity",ye=r[3][12]),e(I,"class","svelte-7pqnpm"),e(re,"width","55.0874"),e(re,"height","1.37719"),e(re,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 102.65)"),e(re,"fill",ne=r[1]?"#444":"#0000FF"),e(re,"opacity",Te=r[3][13]),e(re,"class","svelte-7pqnpm"),e(S,"width","52.333"),e(S,"height","1.37719"),e(S,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 141.446)"),e(S,"fill",ue=r[1]?"#444":"#0000FF"),e(S,"opacity",De=r[3][14]),e(S,"class","svelte-7pqnpm"),e(ge,"width","52.333"),e(ge,"height","1.37719"),e(ge,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 105.326)"),e(ge,"fill",we=r[1]?"#444":"#0000FF"),e(ge,"opacity",qt=r[3][15]),e(ge,"class","svelte-7pqnpm"),e(Fe,"y","255.597"),e(Fe,"width","53.5281"),e(Fe,"height","1.41509"),e(Fe,"transform","rotate(-90 0 255.597)"),e(Fe,"fill",Be=r[1]?"#444":"#0000FF"),e(Fe,"opacity",zt=r[3][16]),e(Fe,"class","svelte-7pqnpm"),e(_e,"x","100.459"),e(_e,"y","298.408"),e(_e,"width","56.6038"),e(_e,"height","1.3382"),e(_e,"transform","rotate(-180 100.459 298.408)"),e(_e,"fill",Pe=r[1]?"#444":"#0000FF"),e(_e,"opacity",Kt=r[3][17]),e(_e,"class","svelte-7pqnpm"),e(Se,"width","55.0874"),e(Se,"height","1.37719"),e(Se,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 259.219)"),e(Se,"fill",Re=r[1]?"#444":"#0000FF"),e(Se,"opacity",Nt=r[3][18]),e(Se,"class","svelte-7pqnpm"),e(ce,"width","55.0874"),e(ce,"height","1.37719"),e(ce,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 297.07)"),e(ce,"fill",Vt=r[1]?"#444":"#0000FF"),e(ce,"opacity",Oe=r[3][19]),e(ce,"class","svelte-7pqnpm"),e(Ae,"width","55.0874"),e(Ae,"height","1.37719"),e(Ae,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 0 197.097)"),e(Ae,"fill",je=r[1]?"#444":"#0000FF"),e(Ae,"opacity",Ht=r[3][20]),e(Ae,"class","svelte-7pqnpm"),e(he,"width","52.333"),e(he,"height","1.37719"),e(he,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 105.718 160.585)"),e(he,"fill",Wt=r[1]?"#444":"#0000FF"),e(he,"opacity",Ue=r[3][21]),e(he,"class","svelte-7pqnpm"),e(ve,"x","298.585"),e(ve,"y","256.935"),e(ve,"width","53.5281"),e(ve,"height","1.41509"),e(ve,"transform","rotate(-90 298.585 256.935)"),e(ve,"fill",kt=r[1]?"#444":"#0000FF"),e(ve,"opacity",bt=r[3][22]),e(ve,"class","svelte-7pqnpm"),e(be,"d","M198.114 161.923V160.585H215.095L213.68 161.923H198.114Z"),e(be,"fill",Zt=r[1]?"#444":"#0000FF"),e(be,"opacity",O=r[3][23]),e(be,"class","svelte-7pqnpm"),e(P,"d","M198.114 140.511V141.85H215.095L213.68 140.511H198.114Z"),e(P,"fill",$t=r[1]?"#444":"#0000FF"),e(P,"opacity",Jt=r[3][24]),e(P,"class","svelte-7pqnpm"),e($,"d","M101.886 160.584V159.246H83.49L85.023 160.584H101.886Z"),e($,"fill",Yt=r[1]?"#444":"#0000FF"),e($,"opacity",Qt=r[3][25]),e($,"class","svelte-7pqnpm"),e(Ct,"d","M101.886 140.511V141.85H84.9051L86.3202 140.511H101.886Z"),e(Ct,"fill",er=r[1]?"#444":"#0000FF"),e(Ct,"opacity",tr=r[3][26]),e(Ct,"class","svelte-7pqnpm"),e(Mt,"d","M157.076 101.703H155.661V85.645L157.076 86.9832V101.703Z"),e(Mt,"fill",rr=r[1]?"#444":"#0000FF"),e(Mt,"opacity",ar=r[3][0]),e(Mt,"class","svelte-7pqnpm"),e(Dt,"d","M142.926 101.703H144.341V85.645L142.926 86.9832V101.703Z"),e(Dt,"fill",sr=r[1]?"#444":"#0000FF"),e(Dt,"opacity",lr=r[3][0]),e(Dt,"class","svelte-7pqnpm"),e(St,"d","M157.076 200.731H155.661V216.789L157.076 215.451V200.731Z"),e(St,"fill",or=r[1]?"#444":"#0000FF"),e(St,"opacity",ir=r[3][0]),e(St,"class","svelte-7pqnpm"),e(At,"d","M142.926 200.731H144.341V216.789L142.926 215.451V200.731Z"),e(At,"fill",nr=r[1]?"#444":"#0000FF"),e(At,"opacity",fr=r[3][0]),e(At,"class","svelte-7pqnpm"),e(Je,"width","52.333"),e(Je,"height","1.37719"),e(Je,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 155.661 196.542)"),e(Je,"fill",ur=r[1]?"#444":"#0000FF"),e(Je,"opacity",cr=r[3][0]),e(Je,"class","svelte-7pqnpm"),e(Ye,"width","55.0874"),e(Ye,"height","1.37719"),e(Ye,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 259.964 160.585)"),e(Ye,"fill",hr=r[1]?"#444":"#0000FF"),e(Ye,"opacity",pr=r[3][0]),e(Ye,"class","svelte-7pqnpm"),e(qe,"x","256.12"),e(qe,"y","299.746"),e(qe,"width","56.6038"),e(qe,"height","1.3382"),e(qe,"transform","rotate(-180 256.12 299.746)"),e(qe,"fill",dr=r[1]?"#444":"#0000FF"),e(qe,"opacity",gr=r[3][0]),e(qe,"class","svelte-7pqnpm"),e(Qe,"width","55.0874"),e(Qe,"height","1.37719"),e(Qe,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 260.558)"),e(Qe,"fill",mr=r[1]?"#444":"#0000FF"),e(Qe,"opacity",yr=r[3][0]),e(Qe,"class","svelte-7pqnpm"),e(xe,"width","56.8487"),e(xe,"height","1.37719"),e(xe,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 298.408)"),e(xe,"fill",_r=r[1]?"#444":"#0000FF"),e(xe,"opacity",vr=r[3][0]),e(xe,"class","svelte-7pqnpm"),e(Ee,"x","0.726571"),e(Ee,"width","38.9384"),e(Ee,"height","38.9384"),e(Ee,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 121.19 151.055)"),e(Ee,"fill",br=r[1]?"#444":"#0000FF"),e(Ee,"fill-opacity","0.5"),e(Ee,"stroke",wr=r[1]?"#444":"#0000FF"),e(Ee,"opacity",Fr=r[3][0]),e(Ee,"class","svelte-7pqnpm"),e(He,"width","103.289"),e(He,"height","103.289"),e(He,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 75 168.658)"),e(He,"fill",kr=r[1]?"#444":"#0000FF"),e(He,"fill-opacity","0.01"),e(He,"opacity",Cr=r[3][0]),e(He,"class","svelte-7pqnpm"),e(We,"x","43.8677"),e(We,"y","17.3967"),e(We,"width","56.6038"),e(We,"height","1.3382"),e(We,"fill",Mr=r[1]?"#444":"#0000FF"),e(We,"opacity",Dr=r[3][0]),e(We,"class","svelte-7pqnpm"),e(et,"width","55.0874"),e(et,"height","1.37719"),e(et,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"),e(et,"fill",Sr=r[1]?"#444":"#0000FF"),e(et,"opacity",Ar=r[3][0]),e(et,"class","svelte-7pqnpm"),e(tt,"width","55.0874"),e(tt,"height","1.37719"),e(tt,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"),e(tt,"fill",Ir=r[1]?"#444":"#0000FF"),e(tt,"opacity",Er=r[3][0]),e(tt,"class","svelte-7pqnpm"),e(Ze,"y","115.086"),e(Ze,"width","53.5281"),e(Ze,"height","1.41509"),e(Ze,"transform","rotate(-90 0 115.086)"),e(Ze,"fill",Lr=r[1]?"#444":"#0000FF"),e(Ze,"opacity",Tr=r[3][0]),e(Ze,"class","svelte-7pqnpm"),e(rt,"width","55.0874"),e(rt,"height","1.37719"),e(rt,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 156.558)"),e(rt,"fill",Br=r[1]?"#444":"#0000FF"),e(rt,"opacity",Pr=r[3][0]),e(rt,"class","svelte-7pqnpm"),e(Xe,"x","43.8677"),e(Xe,"y","17.3967"),e(Xe,"width","56.6038"),e(Xe,"height","1.3382"),e(Xe,"fill",Rr=r[1]?"#444":"#0000FF"),e(Xe,"opacity",Or=r[3][0]),e(Xe,"class","svelte-7pqnpm"),e(at,"width","55.0874"),e(at,"height","1.37719"),e(at,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"),e(at,"fill",jr=r[1]?"#444":"#0000FF"),e(at,"opacity",Ur=r[3][0]),e(at,"class","svelte-7pqnpm"),e(st,"width","56.99"),e(st,"height","1.37719"),e(st,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"),e(st,"fill",qr=r[1]?"#444":"#0000FF"),e(st,"opacity",zr=r[3][0]),e(st,"class","svelte-7pqnpm"),e(ze,"x","298.585"),e(ze,"y","116.424"),e(ze,"width","53.5281"),e(ze,"height","1.41509"),e(ze,"transform","rotate(-90 298.585 116.424)"),e(ze,"fill",Kr=r[1]?"#444":"#0000FF"),e(ze,"opacity",Nr=r[3][0]),e(ze,"class","svelte-7pqnpm"),e(Ge,"x","199.528"),e(Ge,"y","18.7348"),e(Ge,"width","56.6038"),e(Ge,"height","1.3382"),e(Ge,"fill",Vr=r[1]?"#444":"#0000FF"),e(Ge,"opacity",Hr=r[3][0]),e(Ge,"class","svelte-7pqnpm"),e(lt,"width","55.0874"),e(lt,"height","1.37719"),e(lt,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 155.661 57.9234)"),e(lt,"fill",Wr=r[1]?"#444":"#0000FF"),e(lt,"opacity",Zr=r[3][0]),e(lt,"class","svelte-7pqnpm"),e(ot,"width","55.0874"),e(ot,"height","1.37719"),e(ot,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 259.964 20.0731)"),e(ot,"fill",Xr=r[1]?"#444":"#0000FF"),e(ot,"opacity",Gr=r[3][0]),e(ot,"class","svelte-7pqnpm"),e(it,"width","55.0874"),e(it,"height","1.37719"),e(it,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 120.046)"),e(it,"fill",$r=r[1]?"#444":"#0000FF"),e(it,"opacity",Jr=r[3][0]),e(it,"class","svelte-7pqnpm"),e(nt,"width","52.333"),e(nt,"height","1.37719"),e(nt,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 158.843)"),e(nt,"fill",Yr=r[1]?"#444":"#0000FF"),e(nt,"opacity",Qr=r[3][0]),e(nt,"class","svelte-7pqnpm"),e(ft,"width","52.333"),e(ft,"height","1.37719"),e(ft,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 122.723)"),e(ft,"fill",xr=r[1]?"#444":"#0000FF"),e(ft,"opacity",ea=r[3][0]),e(ft,"class","svelte-7pqnpm"),e($e,"y","272.993"),e($e,"width","53.5281"),e($e,"height","1.41509"),e($e,"transform","rotate(-90 0 272.993)"),e($e,"fill",ta=r[1]?"#444":"#0000FF"),e($e,"opacity",ra=r[3][0]),e($e,"class","svelte-7pqnpm"),e(Ke,"x","100.459"),e(Ke,"y","315.805"),e(Ke,"width","56.6038"),e(Ke,"height","1.3382"),e(Ke,"transform","rotate(-180 100.459 315.805)"),e(Ke,"fill",aa=r[1]?"#444":"#0000FF"),e(Ke,"opacity",sa=r[3][0]),e(Ke,"class","svelte-7pqnpm"),e(ut,"width","55.0874"),e(ut,"height","1.37719"),e(ut,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 276.616)"),e(ut,"fill",la=r[1]?"#444":"#0000FF"),e(ut,"opacity",oa=r[3][0]),e(ut,"class","svelte-7pqnpm"),e(ct,"width","55.0874"),e(ct,"height","1.37719"),e(ct,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 314.466)"),e(ct,"fill",ia=r[1]?"#444":"#0000FF"),e(ct,"opacity",na=r[3][0]),e(ct,"class","svelte-7pqnpm"),e(ht,"width","55.0874"),e(ht,"height","1.37719"),e(ht,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 0 214.493)"),e(ht,"fill",fa=r[1]?"#444":"#0000FF"),e(ht,"opacity",ua=r[3][0]),e(ht,"class","svelte-7pqnpm"),e(pt,"width","52.333"),e(pt,"height","1.37719"),e(pt,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 105.718 177.981)"),e(pt,"fill",ca=r[1]?"#444":"#0000FF"),e(pt,"opacity",ha=r[3][0]),e(pt,"class","svelte-7pqnpm"),e(Ne,"x","298.585"),e(Ne,"y","274.332"),e(Ne,"width","53.5281"),e(Ne,"height","1.41509"),e(Ne,"transform","rotate(-90 298.585 274.332)"),e(Ne,"fill",pa=r[1]?"#444":"#0000FF"),e(Ne,"opacity",da=r[3][0]),e(Ne,"class","svelte-7pqnpm"),e(It,"d","M198.114 179.319V177.981H215.095L213.68 179.319H198.114Z"),e(It,"fill",ga=r[1]?"#444":"#0000FF"),e(It,"opacity",ma=r[3][0]),e(It,"class","svelte-7pqnpm"),e(Et,"d","M198.114 157.908V159.246H215.095L213.68 157.908H198.114Z"),e(Et,"fill",ya=r[1]?"#444":"#0000FF"),e(Et,"opacity",_a=r[3][0]),e(Et,"class","svelte-7pqnpm"),e(Lt,"d","M101.886 177.981V176.643H83.49L85.023 177.981H101.886Z"),e(Lt,"fill",va=r[1]?"#444":"#0000FF"),e(Lt,"opacity",ba=r[3][0]),e(Lt,"class","svelte-7pqnpm"),e(Tt,"d","M101.886 157.908V159.246H84.9051L86.3202 157.908H101.886Z"),e(Tt,"fill",wa=r[1]?"#444":"#0000FF"),e(Tt,"opacity",Fa=r[3][0]),e(Tt,"class","svelte-7pqnpm"),e(Bt,"d","M157.076 119.1H155.661V103.042L157.076 104.38V119.1Z"),e(Bt,"fill",ka=r[1]?"#444":"#0000FF"),e(Bt,"opacity",Ca=r[3][0]),e(Bt,"class","svelte-7pqnpm"),e(Pt,"d","M142.926 119.1H144.341V103.042L142.926 104.38V119.1Z"),e(Pt,"fill",Ma=r[1]?"#444":"#0000FF"),e(Pt,"opacity",Da=r[3][0]),e(Pt,"class","svelte-7pqnpm"),e(Rt,"d","M157.076 218.127H155.661V234.186L157.076 232.847V218.127Z"),e(Rt,"fill",Sa=r[1]?"#444":"#0000FF"),e(Rt,"opacity",Aa=r[3][0]),e(Rt,"class","svelte-7pqnpm"),e(Ot,"d","M142.926 218.127H144.341V234.186L142.926 232.847V218.127Z"),e(Ot,"fill",Ia=r[1]?"#444":"#0000FF"),e(Ot,"opacity",Ea=r[3][0]),e(Ot,"class","svelte-7pqnpm"),e(dt,"width","52.333"),e(dt,"height","1.37719"),e(dt,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 155.661 213.939)"),e(dt,"fill",La=r[1]?"#444":"#0000FF"),e(dt,"opacity",Ta=r[3][0]),e(dt,"class","svelte-7pqnpm"),e(gt,"width","55.0874"),e(gt,"height","1.37719"),e(gt,"transform","matrix(0.726571 0.687092 -0.726571 0.687092 259.964 177.981)"),e(gt,"fill",Ba=r[1]?"#444":"#0000FF"),e(gt,"opacity",Pa=r[3][0]),e(gt,"class","svelte-7pqnpm"),e(Ve,"x","256.12"),e(Ve,"y","317.143"),e(Ve,"width","56.6038"),e(Ve,"height","1.3382"),e(Ve,"transform","rotate(-180 256.12 317.143)"),e(Ve,"fill",Ra=r[1]?"#444":"#0000FF"),e(Ve,"opacity",Oa=r[3][0]),e(Ve,"class","svelte-7pqnpm"),e(mt,"width","55.0874"),e(mt,"height","1.37719"),e(mt,"transform","matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 277.954)"),e(mt,"fill",ja=r[1]?"#444":"#0000FF"),e(mt,"opacity",Ua=r[3][0]),e(mt,"class","svelte-7pqnpm"),e(yt,"width","56.8487"),e(yt,"height","1.37719"),e(yt,"transform","matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 315.805)"),e(yt,"fill",qa=r[1]?"#444":"#0000FF"),e(yt,"opacity",za=r[3][0]),e(yt,"class","svelte-7pqnpm"),e(Le,"x","0.726571"),e(Le,"width","38.9384"),e(Le,"height","38.9384"),e(Le,"transform","matrix(0.726571 -0.687092 0.726571 0.687092 121.19 168.452)"),e(Le,"fill",Ka=r[1]?"#444":"#0000FF"),e(Le,"fill-opacity","0.5"),e(Le,"stroke",Na=r[1]?"#444":"#0000FF"),e(Le,"opacity",Va=r[3][0]),e(Le,"class","svelte-7pqnpm"),e(t,"width",r[0]),e(t,"height",r[0]),e(t,"class","deco"),e(t,"style",Ha="position: absolute; "+r[2]),e(t,"viewBox","0 0 300 318"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(m,f){Q(m,t,f),g(t,a),g(t,l),g(t,c),g(t,h),g(t,F),g(t,u),g(t,A),g(t,K),g(t,L),g(t,X),g(t,te),g(t,se),g(t,I),g(t,re),g(t,S),g(t,ge),g(t,Fe),g(t,_e),g(t,Se),g(t,ce),g(t,Ae),g(t,he),g(t,ve),g(t,be),g(t,P),g(t,$),g(t,Ct),g(t,Mt),g(t,Dt),g(t,St),g(t,At),g(t,Je),g(t,Ye),g(t,qe),g(t,Qe),g(t,xe),g(t,Ee),g(t,He),g(t,We),g(t,et),g(t,tt),g(t,Ze),g(t,rt),g(t,Xe),g(t,at),g(t,st),g(t,ze),g(t,Ge),g(t,lt),g(t,ot),g(t,it),g(t,nt),g(t,ft),g(t,$e),g(t,Ke),g(t,ut),g(t,ct),g(t,ht),g(t,pt),g(t,Ne),g(t,It),g(t,Et),g(t,Lt),g(t,Tt),g(t,Bt),g(t,Pt),g(t,Rt),g(t,Ot),g(t,dt),g(t,gt),g(t,Ve),g(t,mt),g(t,yt),g(t,Le)},p(m,[f]){f&2&&s!==(s=m[1]?"#444":"#0000FF")&&e(a,"fill",s),f&8&&o!==(o=m[3][0])&&e(a,"opacity",o),f&2&&i!==(i=m[1]?"#444":"#0000FF")&&e(l,"fill",i),f&8&&n!==(n=m[3][1])&&e(l,"opacity",n),f&2&&v!==(v=m[1]?"#444":"#0000FF")&&e(c,"fill",v),f&2&&k!==(k=m[1]?"#444":"#0000FF")&&e(h,"fill",k),f&2&&d!==(d=m[1]?"#444":"#0000FF")&&e(F,"fill",d),f&2&&_!==(_=m[1]?"#444":"#0000FF")&&e(u,"fill",_),f&8&&M!==(M=m[3][5])&&e(u,"opacity",M),f&2&&D!==(D=m[1]?"#444":"#0000FF")&&e(A,"fill",D),f&8&&B!==(B=m[3][6])&&e(A,"opacity",B),f&2&&N!==(N=m[1]?"#444":"#0000FF")&&e(K,"fill",N),f&8&&ae!==(ae=m[3][7])&&e(K,"opacity",ae),f&2&&x!==(x=m[1]?"#444":"#0000FF")&&e(L,"fill",x),f&8&&V!==(V=m[3][8])&&e(L,"opacity",V),f&2&&ee!==(ee=m[1]?"#444":"#0000FF")&&e(X,"fill",ee),f&8&&fe!==(fe=m[3][9])&&e(X,"opacity",fe),f&2&&Y!==(Y=m[1]?"#444":"#0000FF")&&e(te,"fill",Y),f&8&&de!==(de=m[3][10])&&e(te,"opacity",de),f&2&&G!==(G=m[1]?"#444":"#0000FF")&&e(se,"fill",G),f&8&&C!==(C=m[3][11])&&e(se,"opacity",C),f&2&&le!==(le=m[1]?"#444":"#0000FF")&&e(I,"fill",le),f&8&&ye!==(ye=m[3][12])&&e(I,"opacity",ye),f&2&&ne!==(ne=m[1]?"#444":"#0000FF")&&e(re,"fill",ne),f&8&&Te!==(Te=m[3][13])&&e(re,"opacity",Te),f&2&&ue!==(ue=m[1]?"#444":"#0000FF")&&e(S,"fill",ue),f&8&&De!==(De=m[3][14])&&e(S,"opacity",De),f&2&&we!==(we=m[1]?"#444":"#0000FF")&&e(ge,"fill",we),f&8&&qt!==(qt=m[3][15])&&e(ge,"opacity",qt),f&2&&Be!==(Be=m[1]?"#444":"#0000FF")&&e(Fe,"fill",Be),f&8&&zt!==(zt=m[3][16])&&e(Fe,"opacity",zt),f&2&&Pe!==(Pe=m[1]?"#444":"#0000FF")&&e(_e,"fill",Pe),f&8&&Kt!==(Kt=m[3][17])&&e(_e,"opacity",Kt),f&2&&Re!==(Re=m[1]?"#444":"#0000FF")&&e(Se,"fill",Re),f&8&&Nt!==(Nt=m[3][18])&&e(Se,"opacity",Nt),f&2&&Vt!==(Vt=m[1]?"#444":"#0000FF")&&e(ce,"fill",Vt),f&8&&Oe!==(Oe=m[3][19])&&e(ce,"opacity",Oe),f&2&&je!==(je=m[1]?"#444":"#0000FF")&&e(Ae,"fill",je),f&8&&Ht!==(Ht=m[3][20])&&e(Ae,"opacity",Ht),f&2&&Wt!==(Wt=m[1]?"#444":"#0000FF")&&e(he,"fill",Wt),f&8&&Ue!==(Ue=m[3][21])&&e(he,"opacity",Ue),f&2&&kt!==(kt=m[1]?"#444":"#0000FF")&&e(ve,"fill",kt),f&8&&bt!==(bt=m[3][22])&&e(ve,"opacity",bt),f&2&&Zt!==(Zt=m[1]?"#444":"#0000FF")&&e(be,"fill",Zt),f&8&&O!==(O=m[3][23])&&e(be,"opacity",O),f&2&&$t!==($t=m[1]?"#444":"#0000FF")&&e(P,"fill",$t),f&8&&Jt!==(Jt=m[3][24])&&e(P,"opacity",Jt),f&2&&Yt!==(Yt=m[1]?"#444":"#0000FF")&&e($,"fill",Yt),f&8&&Qt!==(Qt=m[3][25])&&e($,"opacity",Qt),f&2&&er!==(er=m[1]?"#444":"#0000FF")&&e(Ct,"fill",er),f&8&&tr!==(tr=m[3][26])&&e(Ct,"opacity",tr),f&2&&rr!==(rr=m[1]?"#444":"#0000FF")&&e(Mt,"fill",rr),f&8&&ar!==(ar=m[3][0])&&e(Mt,"opacity",ar),f&2&&sr!==(sr=m[1]?"#444":"#0000FF")&&e(Dt,"fill",sr),f&8&&lr!==(lr=m[3][0])&&e(Dt,"opacity",lr),f&2&&or!==(or=m[1]?"#444":"#0000FF")&&e(St,"fill",or),f&8&&ir!==(ir=m[3][0])&&e(St,"opacity",ir),f&2&&nr!==(nr=m[1]?"#444":"#0000FF")&&e(At,"fill",nr),f&8&&fr!==(fr=m[3][0])&&e(At,"opacity",fr),f&2&&ur!==(ur=m[1]?"#444":"#0000FF")&&e(Je,"fill",ur),f&8&&cr!==(cr=m[3][0])&&e(Je,"opacity",cr),f&2&&hr!==(hr=m[1]?"#444":"#0000FF")&&e(Ye,"fill",hr),f&8&&pr!==(pr=m[3][0])&&e(Ye,"opacity",pr),f&2&&dr!==(dr=m[1]?"#444":"#0000FF")&&e(qe,"fill",dr),f&8&&gr!==(gr=m[3][0])&&e(qe,"opacity",gr),f&2&&mr!==(mr=m[1]?"#444":"#0000FF")&&e(Qe,"fill",mr),f&8&&yr!==(yr=m[3][0])&&e(Qe,"opacity",yr),f&2&&_r!==(_r=m[1]?"#444":"#0000FF")&&e(xe,"fill",_r),f&8&&vr!==(vr=m[3][0])&&e(xe,"opacity",vr),f&2&&br!==(br=m[1]?"#444":"#0000FF")&&e(Ee,"fill",br),f&2&&wr!==(wr=m[1]?"#444":"#0000FF")&&e(Ee,"stroke",wr),f&8&&Fr!==(Fr=m[3][0])&&e(Ee,"opacity",Fr),f&2&&kr!==(kr=m[1]?"#444":"#0000FF")&&e(He,"fill",kr),f&8&&Cr!==(Cr=m[3][0])&&e(He,"opacity",Cr),f&2&&Mr!==(Mr=m[1]?"#444":"#0000FF")&&e(We,"fill",Mr),f&8&&Dr!==(Dr=m[3][0])&&e(We,"opacity",Dr),f&2&&Sr!==(Sr=m[1]?"#444":"#0000FF")&&e(et,"fill",Sr),f&8&&Ar!==(Ar=m[3][0])&&e(et,"opacity",Ar),f&2&&Ir!==(Ir=m[1]?"#444":"#0000FF")&&e(tt,"fill",Ir),f&8&&Er!==(Er=m[3][0])&&e(tt,"opacity",Er),f&2&&Lr!==(Lr=m[1]?"#444":"#0000FF")&&e(Ze,"fill",Lr),f&8&&Tr!==(Tr=m[3][0])&&e(Ze,"opacity",Tr),f&2&&Br!==(Br=m[1]?"#444":"#0000FF")&&e(rt,"fill",Br),f&8&&Pr!==(Pr=m[3][0])&&e(rt,"opacity",Pr),f&2&&Rr!==(Rr=m[1]?"#444":"#0000FF")&&e(Xe,"fill",Rr),f&8&&Or!==(Or=m[3][0])&&e(Xe,"opacity",Or),f&2&&jr!==(jr=m[1]?"#444":"#0000FF")&&e(at,"fill",jr),f&8&&Ur!==(Ur=m[3][0])&&e(at,"opacity",Ur),f&2&&qr!==(qr=m[1]?"#444":"#0000FF")&&e(st,"fill",qr),f&8&&zr!==(zr=m[3][0])&&e(st,"opacity",zr),f&2&&Kr!==(Kr=m[1]?"#444":"#0000FF")&&e(ze,"fill",Kr),f&8&&Nr!==(Nr=m[3][0])&&e(ze,"opacity",Nr),f&2&&Vr!==(Vr=m[1]?"#444":"#0000FF")&&e(Ge,"fill",Vr),f&8&&Hr!==(Hr=m[3][0])&&e(Ge,"opacity",Hr),f&2&&Wr!==(Wr=m[1]?"#444":"#0000FF")&&e(lt,"fill",Wr),f&8&&Zr!==(Zr=m[3][0])&&e(lt,"opacity",Zr),f&2&&Xr!==(Xr=m[1]?"#444":"#0000FF")&&e(ot,"fill",Xr),f&8&&Gr!==(Gr=m[3][0])&&e(ot,"opacity",Gr),f&2&&$r!==($r=m[1]?"#444":"#0000FF")&&e(it,"fill",$r),f&8&&Jr!==(Jr=m[3][0])&&e(it,"opacity",Jr),f&2&&Yr!==(Yr=m[1]?"#444":"#0000FF")&&e(nt,"fill",Yr),f&8&&Qr!==(Qr=m[3][0])&&e(nt,"opacity",Qr),f&2&&xr!==(xr=m[1]?"#444":"#0000FF")&&e(ft,"fill",xr),f&8&&ea!==(ea=m[3][0])&&e(ft,"opacity",ea),f&2&&ta!==(ta=m[1]?"#444":"#0000FF")&&e($e,"fill",ta),f&8&&ra!==(ra=m[3][0])&&e($e,"opacity",ra),f&2&&aa!==(aa=m[1]?"#444":"#0000FF")&&e(Ke,"fill",aa),f&8&&sa!==(sa=m[3][0])&&e(Ke,"opacity",sa),f&2&&la!==(la=m[1]?"#444":"#0000FF")&&e(ut,"fill",la),f&8&&oa!==(oa=m[3][0])&&e(ut,"opacity",oa),f&2&&ia!==(ia=m[1]?"#444":"#0000FF")&&e(ct,"fill",ia),f&8&&na!==(na=m[3][0])&&e(ct,"opacity",na),f&2&&fa!==(fa=m[1]?"#444":"#0000FF")&&e(ht,"fill",fa),f&8&&ua!==(ua=m[3][0])&&e(ht,"opacity",ua),f&2&&ca!==(ca=m[1]?"#444":"#0000FF")&&e(pt,"fill",ca),f&8&&ha!==(ha=m[3][0])&&e(pt,"opacity",ha),f&2&&pa!==(pa=m[1]?"#444":"#0000FF")&&e(Ne,"fill",pa),f&8&&da!==(da=m[3][0])&&e(Ne,"opacity",da),f&2&&ga!==(ga=m[1]?"#444":"#0000FF")&&e(It,"fill",ga),f&8&&ma!==(ma=m[3][0])&&e(It,"opacity",ma),f&2&&ya!==(ya=m[1]?"#444":"#0000FF")&&e(Et,"fill",ya),f&8&&_a!==(_a=m[3][0])&&e(Et,"opacity",_a),f&2&&va!==(va=m[1]?"#444":"#0000FF")&&e(Lt,"fill",va),f&8&&ba!==(ba=m[3][0])&&e(Lt,"opacity",ba),f&2&&wa!==(wa=m[1]?"#444":"#0000FF")&&e(Tt,"fill",wa),f&8&&Fa!==(Fa=m[3][0])&&e(Tt,"opacity",Fa),f&2&&ka!==(ka=m[1]?"#444":"#0000FF")&&e(Bt,"fill",ka),f&8&&Ca!==(Ca=m[3][0])&&e(Bt,"opacity",Ca),f&2&&Ma!==(Ma=m[1]?"#444":"#0000FF")&&e(Pt,"fill",Ma),f&8&&Da!==(Da=m[3][0])&&e(Pt,"opacity",Da),f&2&&Sa!==(Sa=m[1]?"#444":"#0000FF")&&e(Rt,"fill",Sa),f&8&&Aa!==(Aa=m[3][0])&&e(Rt,"opacity",Aa),f&2&&Ia!==(Ia=m[1]?"#444":"#0000FF")&&e(Ot,"fill",Ia),f&8&&Ea!==(Ea=m[3][0])&&e(Ot,"opacity",Ea),f&2&&La!==(La=m[1]?"#444":"#0000FF")&&e(dt,"fill",La),f&8&&Ta!==(Ta=m[3][0])&&e(dt,"opacity",Ta),f&2&&Ba!==(Ba=m[1]?"#444":"#0000FF")&&e(gt,"fill",Ba),f&8&&Pa!==(Pa=m[3][0])&&e(gt,"opacity",Pa),f&2&&Ra!==(Ra=m[1]?"#444":"#0000FF")&&e(Ve,"fill",Ra),f&8&&Oa!==(Oa=m[3][0])&&e(Ve,"opacity",Oa),f&2&&ja!==(ja=m[1]?"#444":"#0000FF")&&e(mt,"fill",ja),f&8&&Ua!==(Ua=m[3][0])&&e(mt,"opacity",Ua),f&2&&qa!==(qa=m[1]?"#444":"#0000FF")&&e(yt,"fill",qa),f&8&&za!==(za=m[3][0])&&e(yt,"opacity",za),f&2&&Ka!==(Ka=m[1]?"#444":"#0000FF")&&e(Le,"fill",Ka),f&2&&Na!==(Na=m[1]?"#444":"#0000FF")&&e(Le,"stroke",Na),f&8&&Va!==(Va=m[3][0])&&e(Le,"opacity",Va),f&1&&e(t,"width",m[0]),f&1&&e(t,"height",m[0]),f&4&&Ha!==(Ha="position: absolute; "+m[2])&&e(t,"style",Ha)},i:Ie,o:Ie,d(m){m&&p(t)}}}function Ks(r,t,a){let{size:s="5vh"}=t,{monochrome:o=!1}=t,{style:l=""}=t,{animated:i=!1}=t,n=[],c;Ft(()=>{c=setInterval(()=>{a(3,n=[]);for(let h=0;h<=100;h++)n.push(v())},500)}),$a(()=>{clearInterval(c)});function v(){if(i){let h=Math.random();return h>.2?h:.2}}return r.$$set=h=>{"size"in h&&a(0,s=h.size),"monochrome"in h&&a(1,o=h.monochrome),"style"in h&&a(2,l=h.style),"animated"in h&&a(4,i=h.animated)},[s,o,l,n,i]}class vs extends ke{constructor(t){super(),Ce(this,t,Ks,zs,Me,{size:0,monochrome:1,style:2,animated:4})}}function Ns(r){let t,a,s,o,l,i,n,c,v,h,k,F,d,u,_,M,A,D,B,K,N,ae,L,x,V,X,ee,fe,te,Y,de,se,G,C,I,le,ye,re,ne,Te,S,ue,De,ge,we,qt,Fe,Be,zt,_e,Pe,Kt,Se,Re,Nt,ce,Vt,Oe,Ae,je,Ht,he,Wt,Ue,ve,kt,bt,be,Zt;return{c(){t=b("svg"),a=b("g"),s=b("mask"),o=b("path"),l=b("g"),i=b("path"),v=b("path"),F=b("path"),_=b("path"),D=b("path"),N=b("path"),x=b("path"),ee=b("path"),Y=b("path"),G=b("path"),le=b("path"),ne=b("path"),ue=b("path"),we=b("path"),Be=b("path"),Pe=b("path"),Re=b("path"),ce=b("path"),Oe=b("path"),je=b("path"),he=b("path"),Ue=b("path"),kt=b("defs"),bt=b("clipPath"),be=b("rect"),this.h()},l(O){t=w(O,"svg",{class:!0,width:!0,height:!0,style:!0,viewBox:!0,fill:!0,xmlns:!0});var P=y(t);a=w(P,"g",{"clip-path":!0});var $t=y(a);s=w($t,"mask",{id:!0,style:!0,maskUnits:!0,x:!0,y:!0,width:!0,height:!0});var Jt=y(s);o=w(Jt,"path",{d:!0,fill:!0,class:!0}),y(o).forEach(p),Jt.forEach(p),l=w($t,"g",{mask:!0});var $=y(l);i=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(i).forEach(p),v=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(v).forEach(p),F=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(F).forEach(p),_=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(_).forEach(p),D=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(D).forEach(p),N=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(N).forEach(p),x=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(x).forEach(p),ee=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(ee).forEach(p),Y=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(Y).forEach(p),G=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(G).forEach(p),le=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(le).forEach(p),ne=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(ne).forEach(p),ue=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(ue).forEach(p),we=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(we).forEach(p),Be=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(Be).forEach(p),Pe=w($,"path",{d:!0,stroke:!0,opacity:!0,class:!0}),y(Pe).forEach(p),Re=w($,"path",{d:!0,fill:!0,"fill-opacity":!0,class:!0}),y(Re).forEach(p),ce=w($,"path",{d:!0,fill:!0,"fill-opacity":!0,class:!0}),y(ce).forEach(p),Oe=w($,"path",{d:!0,fill:!0,"fill-opacity":!0,class:!0}),y(Oe).forEach(p),je=w($,"path",{d:!0,fill:!0,"fill-opacity":!0,class:!0}),y(je).forEach(p),he=w($,"path",{d:!0,fill:!0,"fill-opacity":!0,class:!0}),y(he).forEach(p),Ue=w($,"path",{d:!0,fill:!0,"fill-opacity":!0,class:!0}),y(Ue).forEach(p),$.forEach(p),$t.forEach(p),kt=w(P,"defs",{});var Yt=y(kt);bt=w(Yt,"clipPath",{id:!0});var Qt=y(bt);be=w(Qt,"rect",{width:!0,height:!0,fill:!0,transform:!0}),y(be).forEach(p),Qt.forEach(p),Yt.forEach(p),P.forEach(p),this.h()},h(){e(o,"d","M83.9228 0.338028H0.746582V83.5143H83.9228V0.338028Z"),e(o,"fill","white"),e(o,"class","svelte-1pyxg36"),e(s,"id","mask0_8_1080"),H(s,"mask-type","luminance"),e(s,"maskUnits","userSpaceOnUse"),e(s,"x","0"),e(s,"y","0"),e(s,"width","84"),e(s,"height","84"),e(i,"d","M42.002 134.418C73.0554 134.418 98.2291 109.244 98.2291 78.191C98.2291 47.1376 73.0554 21.9639 42.002 21.9639C10.9486 21.9639 -14.2251 47.1376 -14.2251 78.191C-14.2251 109.244 10.9486 134.418 42.002 134.418Z"),e(i,"stroke",n=r[1]?"#444":"#5200FF"),e(i,"opacity",c=r[3][0]),e(i,"class","svelte-1pyxg36"),e(v,"d","M42.6676 142.403C73.7209 142.403 98.8947 117.229 98.8947 86.1759C98.8947 55.1225 73.7209 29.9488 42.6676 29.9488C11.6142 29.9488 -13.5596 55.1225 -13.5596 86.1759C-13.5596 117.229 11.6142 142.403 42.6676 142.403Z"),e(v,"stroke",h=r[1]?"#444":"#5200FF"),e(v,"opacity",k=r[3][1]),e(v,"class","svelte-1pyxg36"),e(F,"d","M42.6676 149.723C73.7209 149.723 98.8947 124.549 98.8947 93.4954C98.8947 62.442 73.7209 37.2683 42.6676 37.2683C11.6142 37.2683 -13.5596 62.442 -13.5596 93.4954C-13.5596 124.549 11.6142 149.723 42.6676 149.723Z"),e(F,"stroke",d=r[1]?"#444":"#5200FF"),e(F,"opacity",u=r[3][2]),e(F,"class","svelte-1pyxg36"),e(_,"d","M42.6676 156.377C73.7209 156.377 98.8947 131.203 98.8947 100.15C98.8947 69.0961 73.7209 43.9224 42.6676 43.9224C11.6142 43.9224 -13.5596 69.0961 -13.5596 100.15C-13.5596 131.203 11.6142 156.377 42.6676 156.377Z"),e(_,"stroke",M=r[1]?"#444":"#5200FF"),e(_,"opacity",A=r[3][3]),e(_,"class","svelte-1pyxg36"),e(D,"d","M95.9005 108.467C126.954 108.467 152.128 83.2934 152.128 52.24C152.128 21.1866 126.954 -3.98714 95.9005 -3.98714C64.8471 -3.98714 39.6733 21.1866 39.6733 52.24C39.6733 83.2934 64.8471 108.467 95.9005 108.467Z"),e(D,"stroke",B=r[1]?"#444":"#5200FF"),e(D,"opacity",K=r[3][4]),e(D,"class","svelte-1pyxg36"),e(N,"d","M96.566 116.452C127.619 116.452 152.793 91.2783 152.793 60.2249C152.793 29.1715 127.619 3.99779 96.566 3.99779C65.5126 3.99779 40.3389 29.1715 40.3389 60.2249C40.3389 91.2783 65.5126 116.452 96.566 116.452Z"),e(N,"stroke",ae=r[1]?"#444":"#5200FF"),e(N,"opacity",L=r[3][5]),e(N,"class","svelte-1pyxg36"),e(x,"d","M96.566 123.772C127.619 123.772 152.793 98.5978 152.793 67.5444C152.793 36.491 127.619 11.3173 96.566 11.3173C65.5126 11.3173 40.3389 36.491 40.3389 67.5444C40.3389 98.5978 65.5126 123.772 96.566 123.772Z"),e(x,"stroke",V=r[1]?"#444":"#5200FF"),e(x,"opacity",X=r[3][6]),e(x,"class","svelte-1pyxg36"),e(ee,"d","M96.566 130.426C127.619 130.426 152.793 105.252 152.793 74.1985C152.793 43.1451 127.619 17.9714 96.566 17.9714C65.5126 17.9714 40.3389 43.1451 40.3389 74.1985C40.3389 105.252 65.5126 130.426 96.566 130.426Z"),e(ee,"stroke",fe=r[1]?"#444":"#5200FF"),e(ee,"opacity",te=r[3][7]),e(ee,"class","svelte-1pyxg36"),e(Y,"d","M2.07771 155.046C33.1311 155.046 58.3048 129.872 58.3048 98.8187C58.3048 67.7653 33.1311 42.5916 2.07771 42.5916C-28.9757 42.5916 -54.1494 67.7653 -54.1494 98.8187C-54.1494 129.872 -28.9757 155.046 2.07771 155.046Z"),e(Y,"stroke",de=r[1]?"#444":"#5200FF"),e(Y,"opacity",se=r[3][8]),e(Y,"class","svelte-1pyxg36"),e(G,"d","M2.74275 163.031C33.7961 163.031 58.9699 137.857 58.9699 106.804C58.9699 75.7502 33.7961 50.5765 2.74275 50.5765C-28.3106 50.5765 -53.4844 75.7502 -53.4844 106.804C-53.4844 137.857 -28.3106 163.031 2.74275 163.031Z"),e(G,"stroke",C=r[1]?"#444":"#5200FF"),e(G,"opacity",I=r[3][9]),e(G,"class","svelte-1pyxg36"),e(le,"d","M2.74275 170.35C33.7961 170.35 58.9699 145.176 58.9699 114.123C58.9699 83.0697 33.7961 57.896 2.74275 57.896C-28.3106 57.896 -53.4844 83.0697 -53.4844 114.123C-53.4844 145.176 -28.3106 170.35 2.74275 170.35Z"),e(le,"stroke",ye=r[1]?"#444":"#5200FF"),e(le,"opacity",re=r[3][10]),e(le,"class","svelte-1pyxg36"),e(ne,"d","M2.74275 177.004C33.7961 177.004 58.9699 151.831 58.9699 120.777C58.9699 89.7238 33.7961 64.5501 2.74275 64.5501C-28.3106 64.5501 -53.4844 89.7238 -53.4844 120.777C-53.4844 151.831 -28.3106 177.004 2.74275 177.004Z"),e(ne,"stroke",Te=r[1]?"#444":"#5200FF"),e(ne,"opacity",S=r[3][11]),e(ne,"class","svelte-1pyxg36"),e(ue,"d","M-29.1967 22.6293C1.85667 22.6293 27.0304 -2.54449 27.0304 -33.5979C27.0304 -64.6513 1.85667 -89.825 -29.1967 -89.825C-60.2501 -89.825 -85.4238 -64.6513 -85.4238 -33.5979C-85.4238 -2.54449 -60.2501 22.6293 -29.1967 22.6293Z"),e(ue,"stroke",De=r[1]?"#444":"#5200FF"),e(ue,"opacity",ge=r[3][12]),e(ue,"class","svelte-1pyxg36"),e(we,"d","M-28.5312 30.6142C2.5222 30.6142 27.6959 5.44043 27.6959 -25.613C27.6959 -56.6663 2.5222 -81.8401 -28.5312 -81.8401C-59.5846 -81.8401 -84.7583 -56.6663 -84.7583 -25.613C-84.7583 5.44043 -59.5846 30.6142 -28.5312 30.6142Z"),e(we,"stroke",qt=r[1]?"#444":"#5200FF"),e(we,"opacity",Fe=r[3][13]),e(we,"class","svelte-1pyxg36"),e(Be,"d","M-28.5312 37.9337C2.5222 37.9337 27.6959 12.7599 27.6959 -18.2934C27.6959 -49.3468 2.5222 -74.5206 -28.5312 -74.5206C-59.5846 -74.5206 -84.7583 -49.3468 -84.7583 -18.2934C-84.7583 12.7599 -59.5846 37.9337 -28.5312 37.9337Z"),e(Be,"stroke",zt=r[1]?"#444":"#5200FF"),e(Be,"opacity",_e=r[3][14]),e(Be,"class","svelte-1pyxg36"),e(Pe,"d","M-28.5312 44.5878C2.5222 44.5878 27.6959 19.414 27.6959 -11.6393C27.6959 -42.6927 2.5222 -67.8665 -28.5312 -67.8665C-59.5846 -67.8665 -84.7583 -42.6927 -84.7583 -11.6393C-84.7583 19.414 -59.5846 44.5878 -28.5312 44.5878Z"),e(Pe,"stroke",Kt=r[1]?"#444":"#5200FF"),e(Pe,"opacity",Se=r[3][15]),e(Pe,"class","svelte-1pyxg36"),e(Re,"d","M58.9014 23.4588L73.9782 34.1789L58.5376 41.9545L58.9014 23.4588Z"),e(Re,"fill",Nt=r[1]?"#444":"#4200FF"),e(Re,"fill-opacity","0.8"),e(Re,"class","svelte-1pyxg36"),e(ce,"d","M60.2096 26.0557L75.2861 36.7759L59.8457 44.5514L60.2096 26.0557Z"),e(ce,"fill",Vt=r[1]?"#444":"#4200FF"),e(ce,"fill-opacity","0.8"),e(ce,"class","svelte-1pyxg36"),e(Oe,"d","M28.2926 15.4738L43.3692 26.194L27.9287 33.9696L28.2926 15.4738Z"),e(Oe,"fill",Ae=r[1]?"#444":"#5200FF"),e(Oe,"fill-opacity","0.8"),e(Oe,"class","svelte-1pyxg36"),e(je,"d","M29.6007 18.0708L44.6773 28.7909L29.2368 36.5665L29.6007 18.0708Z"),e(je,"fill",Ht=r[1]?"#444":"#5200FF"),e(je,"fill-opacity","0.8"),e(je,"class","svelte-1pyxg36"),e(he,"d","M18.5402 46.0827L33.6168 56.8028L18.1763 64.5784L18.5402 46.0827Z"),e(he,"fill",Wt=r[1]?"#444":"#4200FF"),e(he,"fill-opacity","0.8"),e(he,"class","svelte-1pyxg36"),e(Ue,"d","M19.5617 48.6797L34.6383 59.3998L19.1978 67.1751L19.5617 48.6797Z"),e(Ue,"fill",ve=r[1]?"#444":"#4200FF"),e(Ue,"fill-opacity","0.8"),e(Ue,"class","svelte-1pyxg36"),e(l,"mask","url(#mask0_8_1080)"),e(a,"clip-path","url(#clip0_8_1080)"),e(be,"width","84.507"),e(be,"height","83.1762"),e(be,"fill","white"),e(be,"transform","translate(0.746582 0.338028)"),e(bt,"id","clip0_8_1080"),e(t,"class","deco"),e(t,"width",r[0]),e(t,"height",r[0]),e(t,"style",Zt="position: absolute; "+r[2]),e(t,"viewBox","0 0 86 84"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(O,P){Q(O,t,P),g(t,a),g(a,s),g(s,o),g(a,l),g(l,i),g(l,v),g(l,F),g(l,_),g(l,D),g(l,N),g(l,x),g(l,ee),g(l,Y),g(l,G),g(l,le),g(l,ne),g(l,ue),g(l,we),g(l,Be),g(l,Pe),g(l,Re),g(l,ce),g(l,Oe),g(l,je),g(l,he),g(l,Ue),g(t,kt),g(kt,bt),g(bt,be)},p(O,[P]){P&2&&n!==(n=O[1]?"#444":"#5200FF")&&e(i,"stroke",n),P&8&&c!==(c=O[3][0])&&e(i,"opacity",c),P&2&&h!==(h=O[1]?"#444":"#5200FF")&&e(v,"stroke",h),P&8&&k!==(k=O[3][1])&&e(v,"opacity",k),P&2&&d!==(d=O[1]?"#444":"#5200FF")&&e(F,"stroke",d),P&8&&u!==(u=O[3][2])&&e(F,"opacity",u),P&2&&M!==(M=O[1]?"#444":"#5200FF")&&e(_,"stroke",M),P&8&&A!==(A=O[3][3])&&e(_,"opacity",A),P&2&&B!==(B=O[1]?"#444":"#5200FF")&&e(D,"stroke",B),P&8&&K!==(K=O[3][4])&&e(D,"opacity",K),P&2&&ae!==(ae=O[1]?"#444":"#5200FF")&&e(N,"stroke",ae),P&8&&L!==(L=O[3][5])&&e(N,"opacity",L),P&2&&V!==(V=O[1]?"#444":"#5200FF")&&e(x,"stroke",V),P&8&&X!==(X=O[3][6])&&e(x,"opacity",X),P&2&&fe!==(fe=O[1]?"#444":"#5200FF")&&e(ee,"stroke",fe),P&8&&te!==(te=O[3][7])&&e(ee,"opacity",te),P&2&&de!==(de=O[1]?"#444":"#5200FF")&&e(Y,"stroke",de),P&8&&se!==(se=O[3][8])&&e(Y,"opacity",se),P&2&&C!==(C=O[1]?"#444":"#5200FF")&&e(G,"stroke",C),P&8&&I!==(I=O[3][9])&&e(G,"opacity",I),P&2&&ye!==(ye=O[1]?"#444":"#5200FF")&&e(le,"stroke",ye),P&8&&re!==(re=O[3][10])&&e(le,"opacity",re),P&2&&Te!==(Te=O[1]?"#444":"#5200FF")&&e(ne,"stroke",Te),P&8&&S!==(S=O[3][11])&&e(ne,"opacity",S),P&2&&De!==(De=O[1]?"#444":"#5200FF")&&e(ue,"stroke",De),P&8&&ge!==(ge=O[3][12])&&e(ue,"opacity",ge),P&2&&qt!==(qt=O[1]?"#444":"#5200FF")&&e(we,"stroke",qt),P&8&&Fe!==(Fe=O[3][13])&&e(we,"opacity",Fe),P&2&&zt!==(zt=O[1]?"#444":"#5200FF")&&e(Be,"stroke",zt),P&8&&_e!==(_e=O[3][14])&&e(Be,"opacity",_e),P&2&&Kt!==(Kt=O[1]?"#444":"#5200FF")&&e(Pe,"stroke",Kt),P&8&&Se!==(Se=O[3][15])&&e(Pe,"opacity",Se),P&2&&Nt!==(Nt=O[1]?"#444":"#4200FF")&&e(Re,"fill",Nt),P&2&&Vt!==(Vt=O[1]?"#444":"#4200FF")&&e(ce,"fill",Vt),P&2&&Ae!==(Ae=O[1]?"#444":"#5200FF")&&e(Oe,"fill",Ae),P&2&&Ht!==(Ht=O[1]?"#444":"#5200FF")&&e(je,"fill",Ht),P&2&&Wt!==(Wt=O[1]?"#444":"#4200FF")&&e(he,"fill",Wt),P&2&&ve!==(ve=O[1]?"#444":"#4200FF")&&e(Ue,"fill",ve),P&1&&e(t,"width",O[0]),P&1&&e(t,"height",O[0]),P&4&&Zt!==(Zt="position: absolute; "+O[2])&&e(t,"style",Zt)},i:Ie,o:Ie,d(O){O&&p(t)}}}function Vs(r,t,a){let{size:s="5vh"}=t,{monochrome:o=!1}=t,{style:l=""}=t,{animated:i=!1}=t,n=[],c;Ft(()=>{c=setInterval(()=>{a(3,n=[]);for(let h=0;h<=16;h++)n.push(v())},500)}),$a(()=>{clearInterval(c)});function v(){if(i){let h=Math.random();return h>.2?h:.2}}return r.$$set=h=>{"size"in h&&a(0,s=h.size),"monochrome"in h&&a(1,o=h.monochrome),"style"in h&&a(2,l=h.style),"animated"in h&&a(4,i=h.animated)},[s,o,l,n,i]}class bs extends ke{constructor(t){super(),Ce(this,t,Vs,Ns,Me,{size:0,monochrome:1,style:2,animated:4})}}function Hs(r){let t,a,s,o,l,i,n,c,v,h,k,F,d;return s=new _s({props:{size:"95%",monochrome:r[0]!="RingRelay"&&!r[1],style:"top: 0%; transform: "+(R()?"rotate(90deg)":"none")+";",animated:r[1]}}),i=new vs({props:{size:"95%",monochrome:r[0]!="ProjectEagle"&&!r[2],style:"top: 0%; transform: "+(R()?"rotate(90deg)":"none")+";",animated:r[2]}}),v=new bs({props:{size:"100%",monochrome:r[0]!="DroneBuzz"&&!r[3],style:"top: 0%; transform: "+(R()?"rotate(90deg)":"none")+";",animated:r[3]}}),{c(){t=oe("div"),a=oe("div"),j(s.$$.fragment),o=W(),l=oe("div"),j(i.$$.fragment),n=W(),c=oe("div"),j(v.$$.fragment),this.h()},l(u){t=ie(u,"DIV",{class:!0,id:!0,style:!0});var _=y(t);a=ie(_,"DIV",{class:!0,style:!0});var M=y(a);z(s.$$.fragment,M),M.forEach(p),o=Z(_),l=ie(_,"DIV",{class:!0,style:!0});var A=y(l);z(i.$$.fragment,A),A.forEach(p),n=Z(_),c=ie(_,"DIV",{class:!0,style:!0});var D=y(c);z(v.$$.fragment,D),D.forEach(p),_.forEach(p),this.h()},h(){e(a,"class","logoContainer svelte-1iy50r6"),H(a,"border","solid 0px #6100FF"),e(l,"class","logoContainer svelte-1iy50r6"),H(l,"border","solid 0px #444"),H(l,"top","34.868421053%"),e(c,"class","logoContainer svelte-1iy50r6"),H(c,"border","solid 0px #444"),H(c,"top","69.736842105%"),e(t,"class","projectsNavContainer svelte-1iy50r6"),e(t,"id","projectsNav"),H(t,"height",R()?"38.148148148%":"28.148148148%"),H(t,"top",R()?"74%":"0.555555556%"),H(t,"left",R()?"40%":r[4]),H(t,"transform",R()?"rotate(-90deg)":"none")},m(u,_){Q(u,t,_),g(t,a),U(s,a,null),g(t,o),g(t,l),U(i,l,null),g(t,n),g(t,c),U(v,c,null),k=!0,F||(d=[pe(window,"resize",r[7]),pe(a,"click",r[8]),pe(a,"mouseenter",r[9]),pe(a,"mouseleave",r[10]),pe(l,"click",r[11]),pe(l,"mouseenter",r[12]),pe(l,"mouseleave",r[13]),pe(c,"click",r[14]),pe(c,"mouseenter",r[15]),pe(c,"mouseleave",r[16])],F=!0)},p(u,[_]){const M={};_&3&&(M.monochrome=u[0]!="RingRelay"&&!u[1]),_&2&&(M.animated=u[1]),s.$set(M);const A={};_&5&&(A.monochrome=u[0]!="ProjectEagle"&&!u[2]),_&4&&(A.animated=u[2]),i.$set(A);const D={};_&9&&(D.monochrome=u[0]!="DroneBuzz"&&!u[3]),_&8&&(D.animated=u[3]),v.$set(D),(!k||_&16)&&H(t,"left",R()?"40%":u[4])},i(u){k||(E(s.$$.fragment,u),E(i.$$.fragment,u),E(v.$$.fragment,u),jt(()=>{k&&(h||(h=me(t,_t,{x:"20%",duration:200,delay:150},!0)),h.run(1))}),k=!0)},o(u){T(s.$$.fragment,u),T(i.$$.fragment,u),T(v.$$.fragment,u),h||(h=me(t,_t,{x:"20%",duration:200,delay:150},!1)),h.run(0),k=!1},d(u){u&&p(t),q(s),q(i),q(v),u&&h&&h.end(),F=!1,Ga(d)}}}function Ws(r,t,a){const s=xt(),o=document.documentElement;let{selectedProjectID:l}=t,i=!1,n=!1,c=!1,v="94.479166667%";function h(N){var L;let ae=0;o.clientWidth<1300&&!R()?ae=.05*o.clientWidth:ae=-.002*o.clientWidth,a(4,v=o.clientWidth-((L=document.getElementById("projectsNav"))==null?void 0:L.clientWidth)+ae+"px")}Ft(()=>{h()});const k=()=>{h()},F=()=>s("projectSelected","RingRelay"),d=()=>{a(1,i=!0)},u=()=>{a(1,i=!1)},_=()=>s("projectSelected","ProjectEagle"),M=()=>{a(2,n=!0)},A=()=>{a(2,n=!1)},D=()=>s("projectSelected","DroneBuzz"),B=()=>a(3,c=!0),K=()=>a(3,c=!1);return r.$$set=N=>{"selectedProjectID"in N&&a(0,l=N.selectedProjectID)},[l,i,n,c,v,s,h,k,F,d,u,_,M,A,D,B,K]}class Zs extends ke{constructor(t){super(),Ce(this,t,Ws,Hs,Me,{selectedProjectID:0})}}function Xs(r){let t,a,s,o;return{c(){t=b("svg"),a=b("path"),this.h()},l(l){t=w(l,"svg",{style:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var i=y(t);a=w(i,"path",{d:!0,fill:!0}),y(a).forEach(p),i.forEach(p),this.h()},h(){e(a,"d","M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"),e(a,"fill",s=r[0]?r[0]:"#FFF"),e(t,"style",o="position: absolute; "+r[1]),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"width","2.7vh"),e(t,"height","2.7vh"),e(t,"viewBox","0 0 24 24")},m(l,i){Q(l,t,i),g(t,a)},p(l,[i]){i&1&&s!==(s=l[0]?l[0]:"#FFF")&&e(a,"fill",s),i&2&&o!==(o="position: absolute; "+l[1])&&e(t,"style",o)},i:Ie,o:Ie,d(l){l&&p(t)}}}function Gs(r,t,a){let{color:s}=t,{style:o=""}=t;return r.$$set=l=>{"color"in l&&a(0,s=l.color),"style"in l&&a(1,o=l.style)},[s,o]}class $s extends ke{constructor(t){super(),Ce(this,t,Gs,Xs,Me,{color:0,style:1})}}function Js(r){let t,a,s;return{c(){t=b("svg"),a=b("path"),this.h()},l(o){t=w(o,"svg",{class:!0,style:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var l=y(t);a=w(l,"path",{d:!0,fill:!0}),y(a).forEach(p),l.forEach(p),this.h()},h(){e(a,"d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"),e(a,"fill",r[0]),e(t,"class","deco"),e(t,"style",s="position: absolute; "+r[1]),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"width","2.7vh"),e(t,"height","2.7vh"),e(t,"viewBox","0 0 24 24")},m(o,l){Q(o,t,l),g(t,a)},p(o,[l]){l&1&&e(a,"fill",o[0]),l&2&&s!==(s="position: absolute; "+o[1])&&e(t,"style",s)},i:Ie,o:Ie,d(o){o&&p(t)}}}function Ys(r,t,a){let{color:s}=t,{style:o=""}=t;return r.$$set=l=>{"color"in l&&a(0,s=l.color),"style"in l&&a(1,o=l.style)},[s,o]}class Qs extends ke{constructor(t){super(),Ce(this,t,Ys,Js,Me,{color:0,style:1})}}function rs(r){let t,a,s,o,l,i,n,c,v,h,k,F;return o=new wt({props:{desktopFont:"18px",color:r[1],text:"Find me on",top:"16.666666667%"}}),n=new vt({props:{label:r[2]?"":"Github",width:"calc(47.680412371% - 10%)",height:"44.117647059%",left:"0%",top:"55.882352941%",color:r[1],style:"justify-content: "+(r[2]?"center":"end")+"; padding-right: 10%;",borderColor:r[1],borderRadius:"3px",$$slots:{default:[xs]},$$scope:{ctx:r}}}),h=new vt({props:{label:r[2]?"":"LinkedIn",width:"calc(47.680412371% - 10%)",height:"44.117647059%",left:"52.319587629%",top:"55.882352941%",color:r[1],borderColor:r[1],style:"justify-content: "+(r[2]?"center":"end")+"; padding-right: 10%;",borderRadius:"3px",$$slots:{default:[el]},$$scope:{ctx:r}}}),{c(){t=oe("div"),a=oe("div"),s=W(),j(o.$$.fragment),l=W(),i=oe("a"),j(n.$$.fragment),c=W(),v=oe("a"),j(h.$$.fragment),this.h()},l(d){t=ie(d,"DIV",{class:!0,style:!0});var u=y(t);a=ie(u,"DIV",{class:!0,style:!0}),y(a).forEach(p),s=Z(u),z(o.$$.fragment,u),l=Z(u),i=ie(u,"A",{href:!0,target:!0});var _=y(i);z(n.$$.fragment,_),_.forEach(p),c=Z(u),v=ie(u,"A",{href:!0,target:!0});var M=y(v);z(h.$$.fragment,M),M.forEach(p),u.forEach(p),this.h()},h(){e(a,"class","contactDockBorderTop svelte-1skztn4"),H(a,"background","radial-gradient(50% 50% at 50% 50%, "+r[1]+" 0%, rgba(97, 0, 255, 0) 100%)"),e(i,"href","https://github.com/undefined1raven"),e(i,"target","_blank"),e(v,"href","https://linkedin.com/in/dominic-zlat-614253233"),e(v,"target","_blank"),e(t,"class","contactDockContainer svelte-1skztn4"),H(t,"display",r[2]?"none":"flex")},m(d,u){Q(d,t,u),g(t,a),g(t,s),U(o,t,null),g(t,l),g(t,i),U(n,i,null),g(t,c),g(t,v),U(h,v,null),F=!0},p(d,u){(!F||u&2)&&H(a,"background","radial-gradient(50% 50% at 50% 50%, "+d[1]+" 0%, rgba(97, 0, 255, 0) 100%)");const _={};u&2&&(_.color=d[1]),o.$set(_);const M={};u&4&&(M.label=d[2]?"":"Github"),u&2&&(M.color=d[1]),u&4&&(M.style="justify-content: "+(d[2]?"center":"end")+"; padding-right: 10%;"),u&2&&(M.borderColor=d[1]),u&38&&(M.$$scope={dirty:u,ctx:d}),n.$set(M);const A={};u&4&&(A.label=d[2]?"":"LinkedIn"),u&2&&(A.color=d[1]),u&2&&(A.borderColor=d[1]),u&4&&(A.style="justify-content: "+(d[2]?"center":"end")+"; padding-right: 10%;"),u&38&&(A.$$scope={dirty:u,ctx:d}),h.$set(A),(!F||u&4)&&H(t,"display",d[2]?"none":"flex")},i(d){F||(E(o.$$.fragment,d),E(n.$$.fragment,d),E(h.$$.fragment,d),jt(()=>{F&&(k||(k=me(t,_t,{y:"20%",duration:200,delay:150},!0)),k.run(1))}),F=!0)},o(d){T(o.$$.fragment,d),T(n.$$.fragment,d),T(h.$$.fragment,d),k||(k=me(t,_t,{y:"20%",duration:200,delay:150},!1)),k.run(0),F=!1},d(d){d&&p(t),q(o),q(n),q(h),d&&k&&k.end()}}}function xs(r){let t,a,s;return a=new Qs({props:{color:r[1],style:"left: "+(r[2]?"35%":"15%")+"; top: 20%;"}}),{c(){t=oe("div"),j(a.$$.fragment)},l(o){t=ie(o,"DIV",{});var l=y(t);z(a.$$.fragment,l),l.forEach(p)},m(o,l){Q(o,t,l),U(a,t,null),s=!0},p(o,l){const i={};l&2&&(i.color=o[1]),l&4&&(i.style="left: "+(o[2]?"35%":"15%")+"; top: 20%;"),a.$set(i)},i(o){s||(E(a.$$.fragment,o),s=!0)},o(o){T(a.$$.fragment,o),s=!1},d(o){o&&p(t),q(a)}}}function el(r){let t,a;return t=new $s({props:{color:r[1],style:"left: "+(r[2]?"35%":"12%")+";"}}),{c(){j(t.$$.fragment)},l(s){z(t.$$.fragment,s)},m(s,o){U(t,s,o),a=!0},p(s,o){const l={};o&2&&(l.color=s[1]),o&4&&(l.style="left: "+(s[2]?"35%":"12%")+";"),t.$set(l)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){T(t.$$.fragment,s),a=!1},d(s){q(t,s)}}}function tl(r){let t,a,s=r[0]&&rs(r);return{c(){s&&s.c(),t=Ut()},l(o){s&&s.l(o),t=Ut()},m(o,l){s&&s.m(o,l),Q(o,t,l),a=!0},p(o,[l]){o[0]?s?(s.p(o,l),l&1&&E(s,1)):(s=rs(o),s.c(),E(s,1),s.m(t.parentNode,t)):s&&(Xt(),T(s,1,1,()=>{s=null}),Gt())},i(o){a||(E(s),a=!0)},o(o){T(s),a=!1},d(o){s&&s.d(o),o&&p(t)}}}function rl(r,t,a){let{show:s=!0}=t,o,l=!1;function i(){!R()&&(o==null?void 0:o.width)>600?a(2,l=!1):a(2,l=!0)}Ft(()=>{Ja.subscribe(c=>{o=c,i()})});let{color:n}=t;return r.$$set=c=>{"show"in c&&a(0,s=c.show),"color"in c&&a(1,n=c.color)},[s,n,l]}class al extends ke{constructor(t){super(),Ce(this,t,rl,tl,Me,{show:0,color:1})}}function sl(){return`function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

function btoaTobuf(base64) {
    let binStr = window.atob(base64)//base64 to binary string
    let bytes = new Uint8Array(binStr.length);
    for (let ix = 0; ix < binStr.length; ix++) {
        bytes[ix] = binStr.charCodeAt(ix);
    }
    return bytes.buffer;
}

function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

export const getKeyPair = () => {
    const keyPairPromise = window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"]
    )
    return keyPairPromise;
}

export const keyToPem = async (key) => {
    const exported = await window.crypto.subtle.exportKey('pkcs8', key);
    const exps = ab2str(exported);
    const easb64 = window.btoa(exps);
    return "-----BEGIN PRIVATE KEY-----
$.{easb64}
-----END PRIVATE KEY-----";
}

export const getSigningKeyPair = async () => {
    const keyPairPromise = await window.crypto.subtle.generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-521",
        },
        true,
        ["sign", "verify"]
    );
    return keyPairPromise;
}

export const pemToKey = ((pem, algo) => {
    try {
        // fetch the part of the PEM string between header and footer
        const pemHeader = "-----BEGIN PRIVATE KEY-----";
        const pemFooter = "-----END PRIVATE KEY-----";
        const pemContents = pem.substring(
            pemHeader.length,
            pem.length - pemFooter.length
        );
        // base64 decode the string to get the binary data
        const binaryDerString = window.atob(pemContents);
        // convert from a binary string to an ArrayBuffer
        const binaryDer = str2ab(binaryDerString);

        var importKeyArgs = 0;
        if (algo == undefined || algo == 'RSA') {
            importKeyArgs = { algo: { name: 'RSA-OAEP', hash: 'SHA-256' }, ops: ['decrypt'] };
        } else if (algo == 'ECDSA') {
            importKeyArgs = { algo: { name: 'ECDSA', namedCurve: 'P-521' }, ops: ['sign'] };
        }
        if (importKeyArgs != 0) {
            return window.crypto.subtle.importKey(
                "pkcs8",
                binaryDer,
                importKeyArgs.algo,
                true,
                importKeyArgs.ops
            );
        } else {
            return 'Valid algo arg not provided (RSA/ECDSA)'
        }
    } catch (e) { return e }
})

export const sign = async (privateKey, encryptedMessage) => {
    const signature = await window.crypto.subtle.sign(
        {
            name: "ECDSA",
            hash: { name: "SHA-512" },
        },
        privateKey,
        new TextEncoder().encode(encryptedMessage)
    )

    return { base64: window.btoa(ab2str(signature)), buffer: signature };

}

export const JSONtoKey = ((jwk, algo) => {
    var importKeyArgs = 0;
    if (algo == undefined || algo == 'RSA') {
        importKeyArgs = { algo: { name: 'RSA-OAEP', hash: 'SHA-256' }, ops: ['encrypt'] };
    } else if (algo == 'ECDSA') {
        importKeyArgs = { algo: { name: 'ECDSA', namedCurve: 'P-521' }, ops: ['verify'] };
    }
    if (importKeyArgs != 0) {

        return window.crypto.subtle.importKey(
            "jwk",
            jwk,
            importKeyArgs.algo,
            true,
            importKeyArgs.ops
        );
    }
})

export const verify = async (publicSigningKey, encryptedMessage, signature) => {
    let sigCheck = await window.crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-512' }, publicSigningKey, btoaTobuf(signature), str2ab(encryptedMessage))
    return sigCheck;
}

export const encryptMessage = async (key, plaintext) => {
    let encoded = new TextEncoder().encode(plaintext)
    let ciphertext = await window.crypto.subtle.encrypt(
        {
            name: "RSA-OAEP"
        },
        key,
        encoded
    );

    return { buffer: ciphertext, base64: window.btoa(ab2str(ciphertext)) };
}

export const decryptMessage = async (key, ciphertext, cipherEncoding, returnBuffer) => {
    try {
        let cipherActual;
        if (cipherEncoding == 'base64') {
            cipherActual = btoaTobuf(ciphertext);
        }
        if (cipherEncoding == 'buffer') {
            cipherActual = ciphertext;
        }
        let decrypted = await window.crypto.subtle.decrypt(
            {
                name: "RSA-OAEP"
            },
            key,
            cipherActual
        );
        if (returnBuffer) {
            return decrypted;
        } else {
            return new TextDecoder().decode(decrypted);
        }

    } catch (e) { console.log(e) }
}

function getKeyMaterial(password) {
    const enc = new TextEncoder();
    return window.crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        "PBKDF2",
        false,
        ["deriveBits", "deriveKey"]
    );
}

function getKey(keyMaterial, salt) {
    return window.crypto.subtle.deriveKey(
        {
            "name": "PBKDF2",
            salt: salt,
            "iterations": 100000,
            "hash": "SHA-256"
        },
        keyMaterial,
        { "name": "AES-GCM", "length": 256 },
        true,
        ["encrypt", "decrypt"]
    );
}

export const symmetricEncrypt = async (salt, iv, plain, password) => {
    let keyMaterial = await getKeyMaterial(password);
    let key = await getKey(keyMaterial, salt);
    let encoded = new TextEncoder().encode(plain);

    let ciphertext = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        encoded
    );

    return { buffer: ciphertext, base64: window.btoa(ab2str(ciphertext)) };
}

export const symmetricDecrypt = async (password, salt, iv, ciphertext) => {

    let keyMaterial = await getKeyMaterial(password);
    let key = await getKey(keyMaterial, salt);

    try {
        let decrypted = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            key,
            ciphertext
        );

        return new TextDecoder().decode(decrypted);
    } catch (e) {
        return 'error';
    }
}`}function ll(){return` function imageOpsOnMessageHandler(e) {
        if (e.data.eid == 'onDecrypted') {
            if (e.data.status == 'Success') {
                setDecryptedImageData((prev) => { return [...prev, { ...e.data.msg }] });
            }
        }
        if (e.data.eid == 'onEncrypted') {
            if (e.data.status == 'Success') {
                setImageMessagePayload(e.data.payload);
            }
        }
    }

    const startImageDecrypt = (rawMsg, encryptedOwnImagaDataChunks, encryptedRemoteImagaDataChunks, pubSigningKey, privateKey, ownPUBSK) => {
        let imageDecryptorWorker = new Worker('./imageOps.js');
        setImageDecryptors(prev => [...prev, { MID: rawMsg.MID, worker: imageDecryptorWorker }])

        imageDecryptorWorker.postMessage({
            eid: 'onDecryptStart',
            MID: rawMsg.MID,
            rawMsg: rawMsg,
            encryptedOwnImagaDataChunks: encryptedOwnImagaDataChunks,
            encryptedRemoteImagaDataChunks: encryptedRemoteImagaDataChunks,
            pubSigningKey: pubSigningKey,
            privateKey: privateKey,
            ownPUBSK: ownPUBSK,
        });

        imageDecryptorWorker.onmessage = (e) => {
            imageOpsOnMessageHandler(e)
        }
    }

    const atomicDecrypt = async (rawMsg, ownPUBSK, privateKey, pubSigningKey, rawMsgArr) => {
        if (rawMsg.typeOverride == 'none' || rawMsg.typeOverride == undefined) {
            if (rawMsg.type == 'tx') {
                return verify(ownPUBSK, rawMsg.remoteContent, rawMsg.signature).then(async (ownSigStatus) => {
                    return await decryptMessage(privateKey, rawMsg.ownContent, 'base64').then(plain => {
                        try {
                            let messageContentsObj = JSON.parse(plain);
                            if (messageContentsObj.content.length > 0 && messageContentsObj.contentType == 'text' || messageContentsObj.contentType == 'color' || messageContentsObj.contentType == 'location') {
                                return { ...rawMsg, content: messageContentsObj.content, contentType: messageContentsObj.contentType, signed: (ownSigStatus) ? 'self' : 'no_self' }
                            } else {
                                return { ...rawMsg, content: plain, signed: (ownSigStatus) ? 'self' : 'no_self' }
                            }
                        } catch (e) {
                            return { ...rawMsg, content: plain, signed: (ownSigStatus) ? 'self' : 'no_self' }
                        }
                    })
                });
            } else {
                return verify(pubSigningKey, rawMsg.remoteContent, rawMsg.signature).then(async (sigStatus) => {
                    return await decryptMessage(privateKey, rawMsg.remoteContent, 'base64').then(plain => {
                        try {
                            let messageContentsObj = JSON.parse(plain);
                            if (messageContentsObj.content.length > 0 && messageContentsObj.contentType == 'text' || messageContentsObj.contentType == 'color' || messageContentsObj.contentType == 'location') {
                                return { ...rawMsg, content: messageContentsObj.content, contentType: messageContentsObj.contentType, signed: sigStatus }
                            } else {
                                return { ...rawMsg, content: plain, signed: sigStatus }
                            }
                        } catch (e) {
                            return { ...rawMsg, content: plain, signed: sigStatus }
                        }
                    })
                })
            }
        } else if (rawMsg.typeOverride.split('.')[0] == 'image') {
            if (rawMsg.typeOverride.split('.')[1] == 0) {

                axios.post('|{DomainGetter('devx')} api / dbop ? getImageData', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: rawMsg.MID }).then(res => {
                    if (res.data.imageChunks != undefined && res.data.error == undefined) {
                        let encryptedImageChunks = [];

                        encryptedImageChunks.push({ ...rawMsg });


                        res.data.imageChunks.forEach(imageChunk => {
                            encryptedImageChunks.push({ ...imageChunk });
                        })

                        let encryptedOwnImagaDataChunks = '';
                        let encryptedRemoteImagaDataChunks = '';

                        encryptedImageChunks.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) })

                        encryptedImageChunks.forEach(chunk => {
                            encryptedOwnImagaDataChunks += chunk.ownContent;
                            encryptedRemoteImagaDataChunks += chunk.remoteContent;
                        });

                        startImageDecrypt(rawMsg, encryptedOwnImagaDataChunks, encryptedRemoteImagaDataChunks, pubSigningKey, privateKey, ownPUBSK);
                    }
                }).catch(e => {

                })

                return { ...rawMsg, content: '[Decrypting Image]', contentType: 'image', signed: (false) ? 'self' : 'no_self' }
            } else {
                return { ...rawMsg, content: '', contentType: 'image', signed: (false) ? 'self' : 'no_self', hide: true }
            }
        }
    }

    const initialFetch = (rawMsgArr) => {
        if (rawMsgArr.length > 0) {
            let lastTXMID = ''
            for (let ix = 0; ix < rawMsgArr.length; ix++) {
                if (rawMsgArr[ix].type == 'tx') {
                    lastTXMID = rawMsgArr[ix].MID;
                }
            }
            try {
                if (localStorage.getItem('PUBSK - |{props.chatObj.remoteUID} ') != undefined) {
                    pemToKey(localStorage.getItem(privateKeyID)).then(privateKey => {
                        JSONtoKey(JSON.parse(localStorage.getItem('OWN-PUBSK')), 'ECDSA').then(ownPUBSK => {
                            window.crypto.subtle.importKey('jwk', publicSigningKeyJWK, { name: 'ECDSA', namedCurve: 'P-521' }, true, ['verify']).then(pubSigningKey => {
                                let promiseArray = [];
                                for (let ix = 0; ix < rawMsgArr.length; ix++) {
                                    promiseArray.push(atomicDecrypt(rawMsgArr[ix], ownPUBSK, privateKey, pubSigningKey, rawMsgArr));
                                }
                                Promise.all(promiseArray).then(msgArr => {
                                    setMsgArray({ ini: true, array: [...msgArr] });
                                    filterDeletedMessages('91');
                                    setChatLoadingLabel({ opacity: 0, label: '[Done]' });
                                    scrollToBottom();
                                })
                            }).catch(e => {
                                setMsgArray({ ini: true, array: rawMsgArr });
                            })
                        })
                    })
                }
            } catch (e) { }
        } else {
            setChatLoadingLabel({ opacity: 1, label: '[No Messages]' })
        }
    }

    const bx = (bufstr) => {
        let buf = new buffer.Buffer(bufstr);
        return (buf)
    }

    const getMessagesAndUpdateChat = () => {
        setChatLoadingLabel({ opacity: 1, label: '[Fetching Conversation]' });
        axios.post('|{DomainGetter('devx')} api / dbop ? getMessages', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), targetUID: props.chatObj.remoteUID, count: msgCount.count }).then(res => {
            if (res.data['error'] == undefined) {
                setChatLoadingLabel({ opacity: 1, label: '[Decrypting Conversation]' });
                let rawMsgArr = res.data.messages;

                // inflate(bx(rawMsgArr), (jsx) => {
                // })
                rawMsgArr.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) })
                setMSUID(res.data.MSUID);
                setPKSH(res.data.PKSH);
                setSPKSH(res.data.SPKSH);
                setConversationStartUnix(res.data.lastTX);
                initialFetch(rawMsgArr);
                let lastRXMID = ''
                for (let ix = 0; ix < rawMsgArr.length; ix++) {
                    if (rawMsgArr[ix].type == 'rx') {
                        lastRXMID = rawMsgArr[ix].MID;
                    }
                }
                if (lastRXMID != '') {
                    axios.post('|{DomainGetter('devx')} api / dbop ? setLastSeenMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: lastRXMID, MSUID: res.data.MSUID });
                }
            }

        });
    }


    useEffect(() => {
        setFetchingOlderMessages(true);
        scrollToTop();
        axios.post('|{DomainGetter('devx')} api / dbop ? getMessages', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MSUID: MSUID, count: 30, offset: msgCount.count, targetUID: props.chatObj.remoteUID }).then(async (resx) => {
            if (resx.data.error == undefined) {
                let rawMsgPrependArr = resx.data.messages;
                rawMsgPrependArr.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) });
                if (resx.data.start) {
                    setScrolledToStart(resx.data.start);
                }
                if (localStorage.getItem('PUBSK - |{props.chatObj.remoteUID} ') != undefined) {
                    pemToKey(localStorage.getItem(privateKeyID)).then((privateKey) => {
                        JSONtoKey(JSON.parse(localStorage.getItem('OWN-PUBSK')), 'ECDSA').then((ownPUBSK) => {
                            window.crypto.subtle.importKey('jwk', publicSigningKeyJWK, { name: 'ECDSA', namedCurve: 'P-521' }, true, ['verify']).then(async (pubSigningKey) => {
                                let promiseArray = [];
                                for (let ix = 0; ix < rawMsgPrependArr.length; ix++) {
                                    promiseArray.push(atomicDecrypt(rawMsgPrependArr[ix], ownPUBSK, privateKey, pubSigningKey));
                                }
                                Promise.all(promiseArray).then(oldMsgArr => {
                                    let firstMIDBeforeUpdate = msgArray.array[0]?.MID;
                                    setMsgArray({ ini: true, array: [...oldMsgArr, ...msgArray.array] })
                                    setTimeout(() => {
                                        if (document.getElementById(firstMIDBeforeUpdate)) {
                                            document.getElementById(firstMIDBeforeUpdate).scrollIntoView(true);
                                            let latestTop = document.getElementById('msgsList').scrollTop;
                                            document.getElementById('msgsList').scrollTo({ top: latestTop - 40 });
                                        }
                                    }, 50);
                                    setFetchingOlderMessages(false);
                                })
                            })
                        })
                    })
                }
            }
        }).catch(e => { })
    }, [msgCount])


    const atomicMsgSend = (nMsgObj, MID) => {
        set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /messages/|{MID} '), { ...nMsgObj, ghost: ghostModeEnabled });
        set(ref(db, 'messageBuffer / |{props.ownUID} /messages/|{MID} '), { ...nMsgObj, ghost: ghostModeEnabled });
        if (!ghostModeEnabled) {
            return axios.post('|{DomainGetter('devx')} api / dbop ? messageSent', {
                AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), ...nMsgObj, username: props.chatObj.name
            });
        }
    }

    const onSend = () => {
        setInputDynamicStyle({ top: '92.1875%', height: '6.5625%' })
        setMsgsListHeight('74.21875%')
        setMsgInputTextareaHeight('47%');
        scrollToBottom();
        setNewMessageContents('');
        let MID = '|{v4()} -|{v4()} ';
        let LocalMsgContent = 0;
        if (selectedMsgType == 'text') {
            LocalMsgContent = newMessageContents;
        }
        if (selectedMsgType == 'color') {
            LocalMsgContent = selectedColor;
            setNewMessageContents('');
            setSelectedMsgType('text');
        }
        if (selectedMsgType == 'location' && selectedLocation.ini) {
            LocalMsgContent = JSON.stringify(selectedLocation.locationObj);
            setNewMessageContents('');
            setSelectedMsgType('text');
        }
        if (selectedMsgType == 'image' && imageMessagePayload.ini) {
            LocalMsgContent = imageMessagePayload.localContent;
            setNewMessageContents('');
            setSelectedMsgType('text');
        }
        if (LocalMsgContent != 0) {
            let local_nMsgObj = { typeOverride: '|{selectedMsgType == 'image' ? 'image' : 'none'} ', contentType: selectedMsgType, type: 'tx', signed: 'self', targetUID: props.chatObj.remoteUID, MID: MID, content: LocalMsgContent, tx: Date.now(), auth: true, seen: false, liked: false }
            //add messages sent to the local realtime buffer. this improves the ux significantly while also maintaining the end-to-end encryption since this plain text message objects never hits the network
            setRealtimeBuffer((prevBuf) => {
                return [...prevBuf, { ...local_nMsgObj, ghost: ghostModeEnabled }]
            })
        }
        setTimeout(() => {
            filterDeletedMessages('159');
        }, 50);
        if (selectedMsgType != 'image') {
            window.crypto.subtle.importKey('jwk', JSON.parse(localStorage.getItem('PUBK - |{props.chatObj.remoteUID} ')), { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(remotePubkey => {
                window.crypto.subtle.importKey('jwk', JSON.parse(localStorage.getItem('OWN - PUBK')), { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(ownPubkey => {
                    let messageContentsObj = { contentType: '', content: '' };
                    if (selectedMsgType == 'text') {
                        messageContentsObj = { contentType: 'text', content: newMessageContents };
                    }
                    if (selectedMsgType == 'color') {
                        messageContentsObj = { contentType: 'color', content: selectedColor.toString() };
                    }
                    if (selectedMsgType == 'location' && selectedLocation.ini) {
                        messageContentsObj = { contentType: 'location', content: JSON.stringify(selectedLocation.locationObj) };
                    }
                    if (messageContentsObj.contentType != '' && messageContentsObj.content != '') {
                        encryptMessage(remotePubkey, JSON.stringify(messageContentsObj)).then(remoteCipher => {
                            encryptMessage(ownPubkey, JSON.stringify(messageContentsObj)).then(ownCipher => {
                                pemToKey(localStorage.getItem('SV - |{localStorage.getItem('PKGetter')} '), 'ECDSA').then(signingPrivateKey => {
                                    sign(signingPrivateKey, remoteCipher.base64).then(cipherSig => {
                                        let nMsgObj = { typeOverride: 'none', originUID: props.ownUID, targetUID: props.chatObj.remoteUID, MID: MID, ownContent: ownCipher.base64, remoteContent: remoteCipher.base64, tx: Date.now(), auth: true, seen: false, liked: false, signature: cipherSig.base64 }
                                        atomicMsgSend(nMsgObj, MID).then(resx => { }).catch(e => console.log(e));
                                    })
                                })
                            })
                        })
                    } else {
                        // setFailedMessageActionLabel({ opacity: 1, label: 'Failed to send message [NTYX]' });
                        // setTimeout(() => {
                        //     setFailedMessageActionLabel({ opacity: 0, label: 'Failed to send message [NTYX]' });
                        // }, 2000);
                    }
                });
            });
        } else if (imageMessagePayload.ini) {
            let ownTransportArray = imageMessagePayload.ownContent.toString().match(/.{1,38000}/g);
            let remoteTransportArray = imageMessagePayload.remoteContent.toString().match(/.{1,38000}/g);

            setImageDataChunksTransportStatus({ val: ownTransportArray.length, ini: ownTransportArray.length });
            setImageSending(true);
            for (let ix = 0; ix < ownTransportArray.length; ix++) {
                let nMsgObj = { typeOverride: 'image.|{ix} ', originUID: props.ownUID, targetUID: props.chatObj.remoteUID, MID: MID, ownContent: ownTransportArray[ix], remoteContent: remoteTransportArray[ix], tx: Date.now(), auth: true, seen: false, liked: false, signature: imageMessagePayload.signature }
                atomicMsgSend(nMsgObj, MID).then(res => {
                    setImageDataChunksTransportStatus((prev) => { return { ...prev, val: prev.val - 1 } });
                }).catch(e => {
                    setImageDataChunksTransportStatus((prev) => { return { ...prev, val: prev.val - 1 } });
                });
            }
        }
    }

    useEffect(() => {
        if (imageMessagePayload.ini) {
            setSelectedImage(prev => { return { ...prev, done: true } })
        }
    }, [imageMessagePayload])

    useEffect(() => {
        if (imageDataChunksTransportStatus.val == 0) {
            setImageSending(false);
        }
    }, [imageDataChunksTransportStatus])

    const deleteMessage = (MID) => {
        set(ref(db, 'messageBuffer / |{props.ownUID} /deleted/|{MID} '), { tx: Date.now() });
        set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /deleted/|{MID} '), { tx: Date.now() });
        setMsgList(msgArray.array.filter(elm => elm.MID != MID).map(x => <li style={{ display: '|{x?.hide ? 'none' : 'block'} ' }} id={x?.MID} key={x?.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x?.content != undefined ? true : false} msgObj={x}></Message></li>))

        setRealtimeBufferList(realtimeBuffer.filter(elm => elm.MID != MID).map(x => <li id={x.MID} key={x.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x.content != undefined ? true : false} msgObj={x}></Message></li>))

        axios.post('|{DomainGetter('devx')} api / dbop ? deleteMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: MID, MSUID: MSUID }).then(resx => { }).catch(e => {
            setFailedMessageActionLabel({ opacity: 1, label: 'Failed to delete' }); setTimeout(() => {
                setFailedMessageActionLabel({ opacity: 0, label: 'Message Action Failed' })
            }, 2000);
        })
    }

    const likeMessageUpdate = (args) => {
        update(ref(db, 'messageBuffer / |{props.ownUID} /liked/|{args.MID} '), { state: args.state })
        update(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /liked/|{args.MID} '), { state: args.state })
        axios.post('|{DomainGetter('devx')} api / dbop ? likeMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), state: args.state, MID: args.MID, MSUID: MSUID }).then(resx => {

        }).catch(e => {
            setFailedMessageActionLabel({ opacity: 1 })
            setTimeout(() => {
                setFailedMessageActionLabel({ opacity: 0 })
            }, 2000);
        });
    }


    const onChatScroll = (e) => {
        setMsgListScroll({ left: e.target.scrollLeft, top: e.target.scrollTop })
    }

    const onTouchEnd = (e) => {
        if (msgListScroll.left <= ((7.692307692 / 100) * document.documentElement.clientWidth)) {
            document.getElementById('msgsList').scrollLeft = 0
        } else {
            document.getElementById('msgsList').scrollLeft = ((15.384615385 / 100) * document.documentElement.clientWidth);
        }
    }


    useEffect(() => {
        if (msgListScroll.top < 100 && Date.now() - msgCount.last > 800 && !scrolledToStart && props.privateKeyStatus && !ghostModeEnabled) {
            setMsgCount((prev) => { return { count: prev.count + 30, last: Date.now() } })
        }
    }, [msgListScroll])

    useEffect(() => {
        if (realtimeBuffer.length > 0) {
            setChatLoadingLabel({ label: '[Done]', opacity: 0 });
            let lastRXMID = '';
            for (let ix = 0; ix < realtimeBuffer.length; ix++) {
                if (realtimeBuffer[ix].type == 'rx') {
                    lastRXMID = realtimeBuffer[ix].MID
                }
            }
            if (lastRXMID != '') {
                set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /seen/|{props.ownUID} '), { MID: lastRXMID, status: false });
            }

            setRealtimeBufferList(realtimeBuffer.map(x => <li id={x.MID} key={x.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x.content != undefined ? true : false} msgObj={x}></Message></li>))
            scrollToBottom();
        }
    }, [realtimeBuffer])


    useEffect(() => {
        remove(ref(db, 'messageBuffer / |{props.ownUID} '));
        var interval = false
        if (!msgArray.ini && props.visible) {
            getMessagesAndUpdateChat();
            interval = setInterval(() => {
                get(ref(db, 'activeUIDs / |{props.chatObj.remoteUID} ')).then(snap => {
                    const lastTx = snap.val()
                    if (lastTx != null) {
                        if (Date.now() - lastTx.tx < 5000) {
                            setStatusOverride('Online')
                            setStatusProps({ color: '#00FF85' })
                        } else {
                            setStatusOverride('Offline')
                            remove(ref(db, 'activeUIDs / |{props.chatObj.remoteUID} '));
                            setStatusProps({ color: '#FF002E' })
                        }
                    } else {
                        setStatusOverride('Offline')
                        setStatusProps({ color: '#FF002E' })
                    }
                })
            }, 1500)
        }
        return () => interval ? clearInterval(interval) : 0
    }, [])

    useEffect(() => {
        if (!statusOverride) {
            if (props.chatObj.status === 'Online') {
                setStatusProps({ color: '#00FF85' })
            } else {
                setStatusProps({ color: '#FF002E' })
            }
        }
    }, [props])

    useEffect(() => {
        setMsgList(msgArray.array.map(x => <li style={{ display: '|{x?.hide ? 'none' : 'block'} ' }} id={x?.MID} key={x?.MID + Math.random()}><Message deleteMessage={deleteMessage} likeMessageUpdate={likeMessageUpdate} decrypted={x?.content != undefined ? true : false} msgObj={x}></Message></li>))
    }, [msgArray])

    const filterDeletedMessages = (id) => {
        setTimeout(() => {
            let originalMsgArrLen = msgArray.array.length;
            let originalBufferMsgArrLen = realtimeBuffer.length;
            if (deletedMsgs.length > 0) {
                for (let ix = 0; ix < deletedMsgs.length; ix++) {
                    let filteredArray = msgArray.array.filter(elm => elm.MID != deletedMsgs[ix].MID)
                    let filteredBufferArray = realtimeBuffer.filter(elm => elm.MID != deletedMsgs[ix].MID)
                    if (filteredArray.length < originalMsgArrLen) {
                        setMsgArray({ ini: true, array: filteredArray });
                    }
                    if (filteredBufferArray.length < originalBufferMsgArrLen) {
                        setRealtimeBuffer(filteredBufferArray);
                    }
                }
            }
        }, 100);
    }


    useEffect(() => {
        if (realtimeBuffer.length > 0) {
            let lastRTBufMID = realtimeBuffer[realtimeBuffer.length - 1].MID
            if (lastRTBufMID == seenMsgs) {
                let updatedRTBuf = [];
                for (let ix = 0; ix < realtimeBuffer.length; ix++) {
                    if (realtimeBuffer[ix].MID == lastRTBufMID) {
                        updatedRTBuf.push({ ...realtimeBuffer[ix], seen: true });
                        axios.post('|{DomainGetter('devx')} api / dbop ? setLastSeenMessage', { AT: localStorage.getItem('AT'), CIP: localStorage.getItem('CIP'), MID: lastRTBufMID, MSUID: MSUID });
                    } else {
                        updatedRTBuf.push({ ...realtimeBuffer[ix] });
                    }
                }
                setRealtimeBuffer(updatedRTBuf)
                filterDeletedMessages();
            }
        }
    }, [seenMsgs])

    useEffect(() => {
        let lmsgArr = [];
        for (let ix = 0; ix < msgArray.array.length; ix++) {
            if (likedMsgs[msgArray.array[ix].MID] != undefined) {
                lmsgArr.push({ ...msgArray.array[ix], liked: likedMsgs[msgArray.array[ix].MID].state });
            } else {
                lmsgArr.push({ ...msgArray.array[ix] });
            }
        }
        setMsgArray({ ini: true, array: lmsgArr });//msgArray

        let lBufferMsgArr = [];
        for (let ix = 0; ix < realtimeBuffer.length; ix++) {
            if (likedMsgs[realtimeBuffer[ix].MID] != undefined) {
                lBufferMsgArr.push({ ...realtimeBuffer[ix], liked: likedMsgs[realtimeBuffer[ix].MID].state });
            } else {
                lBufferMsgArr.push({ ...realtimeBuffer[ix] });
            }
        }
        setRealtimeBuffer(lBufferMsgArr);//realtimeBuffermsgArray
    }, [likedMsgs]);

    useEffect(() => {
        filterDeletedMessages('297');
    }, [deletedMsgs])


    const onNewMessageContent = (e) => {
        set(ref(db, 'messageBuffer / |{props.chatObj.remoteUID} /typing'), { status: true, targetUID: props.chatObj.remoteUID, tx: Date.now(), ghost: ghostModeEnabled });
    setNewMessageContents(e.target.value);
    let inputActual = document.getElementById('msgInputActual');
    let overflowDelta = inputActual.scrollHeight - inputActual.clientHeight;
    if (overflowDelta / inputActual.clientHeight > 0.75) {
        setInputDynamicStyle({ top: '88.1875%', height: '10.5625%' })
        setMsgsListHeight('70.21875%')
        setMsgInputTextareaHeight('66%');
        setMessageTypeSelectorTop('82.9%');
    } else if (overflowDelta / inputActual.clientHeight < 0.1) {
        setInputDynamicStyle({ top: '92.1875%', height: '6.5625%' })
        setMsgsListHeight('74.21875%')
        setMsgInputTextareaHeight('47%');
        setMessageTypeSelectorTop('86.79375%');
    }
}

useEffect(() => {
    if (props.visible && props.ownMessageBuffer != 0) {
        let RXrealtimeBuffer = props.ownMessageBuffer;
        if (RXrealtimeBuffer != null) {
            if (RXrealtimeBuffer.messages != null) {
                let RTrawMessagesArray = []
                for (let MID in RXrealtimeBuffer.messages) {
                    RTrawMessagesArray.push({ ...RXrealtimeBuffer.messages[MID] });
                }
                RTrawMessagesArray.sort((a, b) => { return parseInt(a.tx) - parseInt(b.tx) })
                let privateKeyID = localStorage.getItem('PKGetter');
                if (RTrawMessagesArray.length > 3) {
                    remove(ref(db, 'messageBuffer/|{props.ownUID}'));//resetting the firebase buffer wont delete messages in chat since we dont reset state 
                }
                if (RTrawMessagesArray.length > 0) {
                    setChatLoadingLabel({ opacity: '0', label: '[Done]' });
                }
                try {
                    pemToKey(localStorage.getItem(privateKeyID), 'RSA').then(privateKey => {
                        window.crypto.subtle.importKey('jwk', publicSigningKeyJWK, { name: 'ECDSA', namedCurve: 'P-521' }, true, ['verify']).then(pubSigningKey => {
                            for (let ix = 0; ix < RTrawMessagesArray.length; ix++) {//looping over 3 messages everytime we have an update from the realtime buffer is way simpler than tracking what we're displaying by the Message ID (MID)
                                let rawMsg = RTrawMessagesArray[ix];
                                if (rawMsg.targetUID == props.ownUID && rawMsg?.originUID == props.chatObj.remoteUID) {
                                    verify(pubSigningKey, rawMsg.remoteContent, rawMsg.signature).then(sigStatus => {
                                        decryptMessage(privateKey, rawMsg.remoteContent, 'base64').then(plain => {
                                            setRealtimeBuffer((prevBuf) => {
                                                if (prevBuf.find(elm => elm.MID == rawMsg.MID) == undefined) {
                                                    try {
                                                        let messageContentObj = JSON.parse(plain);
                                                        if (messageContentObj.content.length > 0 && messageContentObj.contentType == 'text' || messageContentObj.contentType == 'color' || messageContentObj.contentType == 'location') {
                                                            return [...prevBuf, { signed: sigStatus, MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: messageContentObj.content, contentType: messageContentObj.contentType, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen, ghost: rawMsg.ghost }]

                                                        } else {
                                                            return [...prevBuf, { signed: sigStatus, MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: plain, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen, ghost: rawMsg.ghost }]

                                                        }
                                                    } catch (e) {
                                                        return [...prevBuf, { signed: sigStatus, MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: plain, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen, ghost: rawMsg.ghost }]
                                                    }
                                                } else {
                                                    return [...prevBuf]
                                                }
                                            })
                                            filterDeletedMessages('332');
                                        });
                                    })
                                }
                            }
                        })
                    }).catch(e => {
                        console.log(e)
                    })
                } catch (e) {
                    for (let ix = 0; ix < RTrawMessagesArray.length; ix++) {//looping over 3 messages everytime we have an update from the realtime buffer is way simpler than tracking what we're displaying by the Message ID (MID)
                        if (RTrawMessagesArray[ix].targetUID == props.ownUID) {
                            let rawMsg = RTrawMessagesArray[ix];
                            setRealtimeBuffer((prevBuf) => {
                                if (prevBuf.find(elm => elm.MID == rawMsg.MID) == undefined) {
                                    return [...prevBuf, { MID: rawMsg.MID, liked: rawMsg.liked, type: rawMsg.targetUID == props.ownUID ? 'rx' : 'tx', content: undefined, tx: rawMsg.tx, auth: rawMsg.auth, seen: rawMsg.seen }]
                                } else {
                                    return [...prevBuf]
                                }
                            })
                            filterDeletedMessages('352');
                        }
                    }
                }
            }
            if (RXrealtimeBuffer.deleted != null) {
                let ldelMsgs = [];
                for (let MID in RXrealtimeBuffer.deleted) {
                    ldelMsgs.push({ MID: MID });
                }
                setDeletedMsgs(ldelMsgs);
            }
            if (RXrealtimeBuffer.liked != null) {
                let llikedMsgs = {};
                for (let MID in RXrealtimeBuffer.liked) {
                    llikedMsgs[MID] = { state: RXrealtimeBuffer.liked[MID].state };
                }
                setLikedMsgs(llikedMsgs);
            }
            if (RXrealtimeBuffer.seen != null) {
                if (RXrealtimeBuffer.seen[props.chatObj.remoteUID] != undefined) {
                    setSeenMsgs(RXrealtimeBuffer.seen[props.chatObj.remoteUID].MID)
                }
            }
        }
    }
}, [props.ownMessageBuffer])


const msgListBorderColorController = () => {
    if (props.privateKeyStatus) {
        if (ghostModeEnabled) {
            return '#0500FF';
        } else {
            return '#7000FF';
        }
    } else {
        return '#FF002E';
    }
}

const ghostModeToggle = () => {
    setGhostModeEverBeenEnabled(true);
    setGhostModeEnabled(prev => { return !prev });
    setShowChatDetails(false);
    scrollToBottom();
}

useEffect(() => {
    msgInputBkgColorSetter();
    if (ghostModeEnabled) {
        document.documentElement.style.setProperty('--msgInputPlaceholderColor', "#0013BF")
    } else {
        document.documentElement.style.setProperty('--msgInputPlaceholderColor', "#5e00d1")
    }
    if (!ghostModeEnabled && ghostModeEverBeenEnabled) {
        props.onBackButton({ ghost: true, uid: props.chatObj.remoteUID });
    }
}, [ghostModeEnabled])


const msgInputBkgColorSetter = () => {
    if (msgInputHasFocus) {
        if (ghostModeEnabled) {
            setMsgInputBkgColor('#0500FF50');
        } else {
            setMsgInputBkgColor('#7000FF50');
        }
    } else {
        if (ghostModeEnabled) {
            setMsgInputBkgColor('#0500FF30');
        } else {
            setMsgInputBkgColor('#7000FF30');
        }
    }
}

useEffect(() => {
    msgInputBkgColorSetter();
}, [msgInputHasFocus])


const convoDetailsToggle = (e) => {
    if (e.target.id != 'chatHeaderBackButton') {
        setShowChatDetails((prev) => { return !prev });

    }
}

useEffect(() => {
    if (selectedMsgType == 'color') {
        setShowColorMsgPreview(true);
        setShowTextMsgPreview(false);
        setShowLocationMsgPreview(false);
        setShowImageMsgPreview(false);
    }
    if (selectedMsgType == 'text') {
        setShowColorMsgPreview(false);
        setShowLocationMsgPreview(false);
        setShowTextMsgPreview(true);
        setShowImageMsgPreview(false);
    }
    if (selectedMsgType == 'location') {
        setShowColorMsgPreview(false);
        setShowLocationMsgPreview(true);
        setShowTextMsgPreview(false);
        setShowImageMsgPreview(false);
    }
    if (selectedMsgType == 'image') {
        setShowColorMsgPreview(false);
        setShowLocationMsgPreview(false);
        setShowTextMsgPreview(false);
        setShowImageMsgPreview(true);
    }
}, [selectedMsgType])

const onColorInputChange = (e) => {
    setSelectedColor(e.target.value.toUpperCase())
}

useEffect(() => {
    if (!showChatDetails) {
        scrollToBottom();
    }
}, [showChatDetails])

const updateLocationInput = (e) => {
    if (e.viewState) {
        let u = { ini: true, locationObj: { long: e.viewState.longitude, lat: e.viewState.latitude, zoom: e.viewState.zoom } }
        setSelectedLocation(u)
    }
}

const refreshConversationWindow = () => {
    props.onBackButton({ ghost: true, uid: props.chatObj.remoteUID });
}


const updateSelectedMsgType = (typeID, e) => {
    if (typeID != 'image') {
        setSelectedMsgType(typeID);
    } else {
        const options = { fileType: 'image/webp', maxSizeMB: 0.5, onProgress: (e) => { setSelectedImage({ ini: true, fileSize: (file.size / 1024 / 1024).toFixed(2), fileName: file.name, compressionProgress: e, isEncrypting: false, done: false }) }, useWebWorker: true, preserveExif: false }

        const file = e.target.files[0]
        setSelectedImage({ ini: true, fileSize: (file.size / 1024 / 1024).toFixed(2), fileName: file.name, compressionProgress: 0, isEncrypting: false, done: false });

        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.onload = () => setSelectedImageBase64({ ini: true, data: fileReader.result })

        imageCompression(file, options).then(val => {
            let rawOwnEncryptionPukKey = JSON.parse(localStorage.getItem('OWN-PUBK'));
            window.crypto.subtle.importKey('jwk', JSON.parse(localStorage.getItem('PUBK-|{props.chatObj.remoteUID}')), { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(remotePubkey => {
                window.crypto.subtle.importKey('jwk', rawOwnEncryptionPukKey, { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']).then(key => {
                    new Response(val).arrayBuffer().then(buf => {
                        setSelectedImage({ ini: true, fileSize: (file.size / 1024 / 1024).toFixed(2), compressionProgress: 100, fileName: file.name, chunkCount: Math.round(buf.byteLength / 446), isEncrypting: true, done: false });

                        let base64encodedBuf = _arrayBufferToBase64(buf);

                        let chunkCount = Math.round(base64encodedBuf.length / 446);

                        const imageEncryptor = new Worker('./imageOps.js')

                        pemToKey(localStorage.getItem('SV-|{localStorage.getItem('PKGetter')}'), 'ECDSA').then(signingPrivateKey => {
                            imageEncryptor.postMessage({ eid: 'onEncryptStart', base64encodedBuf: base64encodedBuf, chunkCount: chunkCount, signingPrivateKey: signingPrivateKey, key: key, remotePubkey: remotePubkey })
                            imageEncryptor.onmessage = (e) => {
                                imageOpsOnMessageHandler(e)
                            }
                        });

                    })
                });
            });
        }).catch(e => console.log(e));
        setSelectedMsgType(typeID);
    }
}`}function ol(){return`
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

    if ("production" === 'production') {
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

                        if ("production" === 'production') {
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
`}function il(){return`
import { RedlineElement, BluelineElement, RangeElement, EnemyElement } from "./Markers.js";
import maplibre from "maplibre-gl";
import { RangeScaler } from "../../fn/RangeScaler.js";
import { Missle } from "./Missle.js";
import radiusFromPercentage from "../../fn/radiusFromPercentage.js";
import LaserCannonConfig from "../../config/weapons/LaserCannon.js";
import cartesianDistance from '../../fn/cartesianDistance.js';
import getDisplayRadius from '../../fn/getDisplayRadius.js'

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}//thx stackoverflow

//Args model
// {
//     map: map,
//     coords: coords,
//     type: "Enemy",
//     id: id,
//     enemiesArr: enemies,
//     missleArr: missles,
//     missleCount: 20,
//     missleCooldown: 1000,
//     countermeasuresCount: 2,
//     countermeasuresCooldown: 600,
//     enemyDefensiveMissles: enemyDefensiveMissles,
//     rawDefensiveRadius: 0.00425082508,
//     screenDistanceObj: {
//         vertical: verticalScreenDistance,
//         horizontal: horizontalScreenDistance,
//     },
//     rawOffensiveRadius: 0.00336666667,
// }

class Enemy {
    constructor(args) {
        this.screenWidth = document.documentElement.clientWidth;
        this.screenHeight = document.documentElement.clientHeight;
        this.enemyElement = new EnemyElement().getElement();
        this.bearing = 0;
        this.visible = false;
        this.lastMissle = 0;
        this.lastLaserCannonOverheat = Date.now();
        this.lastDefensiveMissle = Date.now();
        this.distance = 1000000;
        this.invisble = false;
        this.energyAbsorbed = 0;
        for (let arg in args) {
            this[arg] = args[arg];
        }
        this.isFiring = false;
        this.offensiveRadius = ((this.rawOffensiveRadius * this.screenDistanceObj.horizontal) / 0.0360059738);
        this.defensiveRadius = (this.rawDefensiveRadius * this.screenDistanceObj.horizontal) / 0.0361776352;
        this.renderedOffensiveRadius = radiusFromPercentage((23.104265403 * this.offensiveRadius) / 0.0033626539605827906);
        this.laserCannonConfig = LaserCannonConfig(2, this.offensiveRadius + 0.001, 0.08, 4000, 1500);
        this.targetEnergyAbsorbed = 0;
    }

    followStep(bearing) {
        const ran = Math.random().toString();
        this.bearing = bearing;
        if (this.visible) {
            this.playerMarker._rotation = (bearing - 90) * -1;
        }
        var mvs = this.mvs ? this.mvs : 0.00018;
        // if (Math.random() > .2) {
        //     mvs = parseFloat('0.0001'{ran[3]}'{ran[4]} ');
        // } else {
        //     mvs = parseFloat('0.0002'{ran[3]}'{ran[4]} ');
        // }
        // if (mvs >= 0.0002) {
        //     mvs = 0.00018;
        // }
        if (bearing <= 180 && bearing >= 0 && bearing != -1) {
            this.coords = { ...this.coords, lng: this.coords.lng + RangeScaler(bearing, 0, 180, mvs, mvs * -1) }
            this.coords = { ...this.coords, lat: this.coords.lat + RangeScaler(Math.abs(bearing - 90), 0, 90, mvs, 0) }
        }
        if (bearing > 180 && bearing < 360 && bearing != -1) {
            this.coords = { ...this.coords, lng: this.coords.lng + RangeScaler(bearing - 270, -90, 90, mvs * -1, mvs) }
            this.coords = { ...this.coords, lat: this.coords.lat + RangeScaler(Math.abs(bearing - 270), 90, 0, 0, mvs * -1) }
        }
        this.updateEnemy(this.coords);
        if (this.energyAbsorbed > 0.005) {
            this.energyAbsorbed -= 0.005;
        }
    }

    addEnemy() {
        let redline = new RedlineElement(getDisplayRadius((9 / 100) * this.screenDistanceObj.horizontal, this.screenDistanceObj.horizontal)).getElement();
        let rangeline = new RangeElement(getDisplayRadius((15 / 100) * this.screenDistanceObj.horizontal, this.screenDistanceObj.horizontal)).getElement();
        var playerMarker = new maplibre.Marker(this.enemyElement, {})
            .setLngLat([this.coords.lng, this.coords.lat])
            .addTo(this.map);

        var playerRedlineMarker = new maplibre.Marker(redline)
            .setLngLat([this.coords.lng, this.coords.lat])
            .addTo(this.map);


        var playerRangeMarker = new maplibre.Marker(rangeline)
            .setLngLat([this.coords.lng, this.coords.lat])
            .addTo(this.map);

        this.playerMarker = playerMarker;
        this.playerRedlineMarker = playerRedlineMarker;
        this.playerRangeMarker = playerRangeMarker;
    }

    updateEnemy(coords) {
        this.coords = coords;
        if (this.visible) {
            this.playerRangeMarker.setLngLat([coords.lng, coords.lat]);
            this.playerRedlineMarker.setLngLat([coords.lng, coords.lat]);
            this.playerMarker.setLngLat([coords.lng, coords.lat]);
        }
    }

    hideEnemy() {
        if (this.visible) {
            this.disableLaserTargeting();
            this.playerMarker.remove();
            this.playerRedlineMarker.remove();
            this.playerRangeMarker.remove();
            this.visible = false;
        }
    }

    onDistanceUpdate(enemyID) {
        if (this.isHunted == true && this.countermeasuresCount > 0 && !this.invisble && Date.now() - this.lastDefensiveMissle >= this.countermeasuresCooldown && this.distance < ((10 / 100) * this.screenDistanceObj.horizontal) + 0.001) {
            this.defensiveFire();
        }
        if (this.offensiveWeaponType == 'smartMissile' && this.missleCount > 0 && (this.lastMissle == 0 || Date.now() - this.lastMissle >= this.missleCooldown) && this.distance < ((9 / 100) * this.screenDistanceObj.horizontal) + 0.001 && !this.invisble) {
            this.fireMissle();
        }
        if (this.offensiveWeaponType == 'laserCannon' && !this.isFiring && this.distance < ((9 / 100) * this.screenDistanceObj.horizontal) + 0.003 && Date.now() - this.lastLaserCannonOverheat >= this.laserCannonConfig.overheatTimeout) {
            this.fireLaserCannon();
        }
    }


    enableLaserTargeting(sourceArray, layerArray) {
        if (
            sourceArray.indexOf(
                'LWAS - '{this.id} '
            ) == -1 && !this.invisble
        ) {
            sourceArray.push('LWAS - '{this.id} ');
        }
        this.map.addSource('LWAS - '{this.id} ', {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: [
                        [this.coords.lng, this.coords.lat],
                        [this.target.coords.lng, this.target.coords.lat],
                    ],
                },
            },
        });
        if (
            layerArray.indexOf(
                'LWA - '{this.id} '
            ) == -1
        ) {
            layerArray.push('LWA - '{this.id} ');
        }
        this.map.addLayer({
            id: 'LWA - '{this.id} ',
            type: "line",
            source: 'LWAS - '{this.id} ',
            paint: {
                "line-color": "rgba(255, 0, 36, 0.7)",
                "line-width": 2,
            },
        });
    }

    disableLaserTargeting() {
        if (this.map.getLayer('LWA - '{this.id} ')) {
            this.map.removeLayer('LWA - '{this.id} ');
        }
        if (this.map.getSource('LWAS - '{this.id} ')) {
            this.map.removeSource('LWAS - '{this.id} ');
        }
    }
    fireLaserCannon() {
        const config = this.laserCannonConfig;
        let sourceArray = [];
        let layerArray = [];

        this.isFiring = true;

        const intx = setInterval(() => {
            if (this.isFiring && !this.invisble) {
                const sqareLawRaw =
                    (50 * 0.00808) /
                    (this.distance * this.distance);
                const instaEnergyAbsorbtion =
                    (sqareLawRaw * config.powerScale) / 326432;
                if (this.targetEnergyAbsorbed != undefined) {
                    if (this.targetEnergyAbsorbed >= 1) {
                        this.playerHit();
                        this.updateTargetEnergyAbsorbed(0);
                        this.disableLaserTargeting();
                    } else {
                        this.updateTargetEnergyAbsorbed(this.targetEnergyAbsorbed += instaEnergyAbsorbtion);
                        this.disableLaserTargeting();
                        if (this.targetEnergyAbsorbed < 1) {
                            this.enableLaserTargeting(
                                sourceArray,
                                layerArray,
                            );
                        }
                    }
                } else {
                    this.updateTargetEnergyAbsorbed(instaEnergyAbsorbtion);
                    this.enableLaserTargeting(
                        sourceArray,
                        layerArray,
                    );
                }
            } else {
                this.isFiring = false;
                clearInterval(intx);
                for (let lidix = 0; lidix < layerArray.length; lidix++) {
                    if (this.map.getLayer(layerArray[lidix])) {
                        this.map.removeLayer(layerArray[lidix]);
                        this.map.removeSource(sourceArray[lidix]);
                    }
                }
            }
        }, 100);
        setTimeout(() => {
            this.lastLaserCannonOverheat = Date.now();
            this.isFiring = false;
            clearInterval(intx);
            for (let lidix = 0; lidix < layerArray.length; lidix++) {
                if (this.map.getLayer(layerArray[lidix])) {
                    this.map.removeLayer(layerArray[lidix]);
                    this.map.removeSource(sourceArray[lidix]);
                }
            }
        }, config.overheatDuration);
    }

    defensiveFire() {
        this.lastDefensiveMissle = Date.now();
        let defensiveMissle = new Missle(this.map, this.coords, 0.0008, 'defensive', '', ''{Math.random()} -'{Date.now()} ', 0, false, this.defensiveMissleMvs, this.screenDistanceObj);
        this.enemyDefensiveMissles.push(defensiveMissle);
        this.countermeasuresCount--;
    }

    fireMissle() {
        this.lastMissle = Date.now();
        let missle = new Missle(this.map, this.coords, 0.00008, 'offensive', '', ''{Math.random()} -'{Date.now()} ', 0, false, this.missleMvs, this.screenDistanceObj);
        this.missleArr.push(missle);
        this.missleCount--;
    }

    draw(coords) {
        if (coords != undefined) {
            let distance = cartesianDistance({ lat: coords.lat, lng: coords.lng }, { lat: this.coords.lat, lng: this.coords.lng });
            if (distance < ((17.644063474 / 100) * this.screenDistanceObj.horizontal) + 0.001) {
                if (!this.visible && !this.invisble) {
                    this.addEnemy();
                    this.visible = true;
                } else if (this.invisble) {
                    this.hideEnemy();
                }
            } else {
                this.hideEnemy();
            }
            if (distance > 5) {
                // this.destroy(this.enemiesArr);
            }
        } else {
            this.hideEnemy();
        }
    }
}

export { Enemy };`}function nl(){return`
        const dispatch = createEventDispatcher();

        const UAVConfig = UAVConfigFunc();
        const counterUAVConfig = counterUAVConfigFunc();
        const energyWeaponConfig = energyWeaponConfigFunc();

        let started;
        let scorestreakArray = ["UAV", "counterUAV", "energyWeapon"];
        let killCount;
        let energyAbsorbed = 0;
        let scorestreakActiveIndicatorTopHash = {}; //used to set the top for the labels showing active scorestreaks

        let dogWatcherInterval;

        let streakMap = {
            UAV: { deco: UAVDeco, config: UAVConfig },
            counterUAV: { deco: CounterUAVDeco, config: counterUAVConfig },
            energyWeapon: { deco: EnergyWeaponDeco, config: energyWeaponConfig },
        };

        let deployedStreaks = {};
        let availableScorestreaks = {};

        onMount(() => {
            scorestreakArray.forEach((key) => {
                availableScorestreaks[key] = false;
            });
            dogWatcherInterval = setInterval(() => {
                for (let deployedStreakKey in deployedStreaks) {
                    if (
                        Date.now() - deployedStreaks[deployedStreakKey].tx >
                        streakMap[deployedStreakKey].config.duration
                    ) {
                        dispatch("killScorestreak", { key: deployedStreakKey });
                        delete deployedStreaks[deployedStreakKey];
                    }
                }
            }, 50);
        });

        onDestroy(() => {
            clearInterval(dogWatcherInterval);
        });

        let buttonFillArray = [0, 0, 0];

        $: assessAvailability(killCount);

        function assessAvailability(killCount) {
            for (let ix = 0; ix < scorestreakArray.length; ix++) {
                const streakKey = scorestreakArray[ix];
                if (
                    killCount % parseFloat(streakMap[streakKey]?.config.cost) ==
                    0
                ) {
                    availableScorestreaks[streakKey] = true;
                    buttonFillArray[ix] = 0;
                } else {
                    buttonFillArray.forEach((fill, ix) => {
                        buttonFillArray[ix] = getButtonDynamicFill(ix);
                    });
                }
            }
        }

        const streakAvailableColor = "#2400FF";
        const streakUnavailableColor = "#555";

        function getButtonDynamicFill(scorestreakArrarIndex) {
            let cost = parseFloat(
                streakMap[scorestreakArray[scorestreakArrarIndex]]?.config.cost
            );
            return ((killCount % cost) * 100) / cost;
        }

        export { started, scorestreakArray, killCount, energyAbsorbed };
    <\/script>

    {#if started}
        <div class="scorestreakContainer">
            <Button
                onClick={() => {
                    if (availableScorestreaks[scorestreakArray[0]] == true) {
                        scorestreakActiveIndicatorTopHash[scorestreakArray[0]] =
                            dispatch("deployScorestreak", {
                                key: scorestreakArray[0],
                            });
                        deployedStreaks[scorestreakArray[0]] = { tx: Date.now() };
                        availableScorestreaks[scorestreakArray[0]] = false;
                    }
                }}
                top="62.222222222%"
                left="89.21875%"
                width="9.0625%"
                height="8.333333333%"
                borderColor="#0500ff00"
                style="{getLeftCurvedBorder(
                    5
                )} border-right: solid 1px {availableScorestreaks[
                    scorestreakArray[0]
                ] == true
                    ? streakAvailableColor
                    : streakUnavailableColor};"
                backgroundColor="{availableScorestreaks[scorestreakArray[0]] == true
                    ? streakAvailableColor
                    : streakUnavailableColor}40"
                backdropFilter="blur(5px)"
                ><svelte:component
                    this={streakMap[scorestreakArray[0]].deco}
                    size="8vh"
                    style="z-index: 150;"
                    color={availableScorestreaks[scorestreakArray[0]] == true
                        ? streakAvailableColor
                        : streakUnavailableColor}
                /><Label
                    width="100%"
                    height="{buttonFillArray[0]}%"
                    backgroundColor="#2400FF40"
                    text=""
                    borderColor="#2400FF00"
                    top="{100 - buttonFillArray[0]}%"
                    className="scorestreakFill"
                    left="0%"
                    style="{getLeftCurvedBorder(5)} border-top-left-radius: 0px;"
                /></Button
            >
            <Button
                onClick={() => {
                    if (availableScorestreaks[scorestreakArray[1]] == true) {
                        scorestreakActiveIndicatorTopHash[scorestreakArray[1]] =
                            dispatch("deployScorestreak", {
                                key: scorestreakArray[1],
                            });
                        deployedStreaks[scorestreakArray[1]] = { tx: Date.now() };
                        availableScorestreaks[scorestreakArray[1]] = false;
                    }
                }}
                top="51.111111111%"
                left="89.21875%"
                width="9.0625%"
                height="8.333333333%"
                borderColor="#0500ff00"
                style="{getLeftCurvedBorder(
                    5
                )} border-right: solid 1px {availableScorestreaks[
                    scorestreakArray[1]
                ] == true
                    ? streakAvailableColor
                    : streakUnavailableColor};"
                backgroundColor="{availableScorestreaks[scorestreakArray[1]] == true
                    ? streakAvailableColor
                    : streakUnavailableColor}40"
                backdropFilter="blur(5px)"
                ><svelte:component
                    this={streakMap[scorestreakArray[1]].deco}
                    width="10vh"
                    style="z-index: 150;"
                    height="7vh"
                    color={availableScorestreaks[scorestreakArray[1]] == true
                        ? streakAvailableColor
                        : streakUnavailableColor}
                />
                <Label
                    className="scorestreakFill"
                    width="100%"
                    height="{buttonFillArray[1]}%"
                    backgroundColor="#2400FF40"
                    text=""
                    borderColor="#2400FF00"
                    top="{100 - buttonFillArray[1]}%"
                    left="0%"
                    style="{getLeftCurvedBorder(5)} border-top-left-radius: 0px;"
                /></Button
            >
            <Button
                onClick={() => {
                    if (availableScorestreaks[scorestreakArray[2]] == true) {
                        scorestreakActiveIndicatorTopHash[scorestreakArray[2]] =
                            dispatch("deployScorestreak", {
                                key: scorestreakArray[2],
                            });
                        deployedStreaks[scorestreakArray[2]] = { tx: Date.now() };
                        availableScorestreaks[scorestreakArray[2]] = false;
                    }
                }}
                top="40%"
                left="89.21875%"
                width="9.0625%"
                height="8.333333333%"
                borderColor="#0500ff00"
                style="{getLeftCurvedBorder(
                    5
                )} border-right: solid 1px {availableScorestreaks[
                    scorestreakArray[2]
                ] == true
                    ? streakAvailableColor
                    : streakUnavailableColor};"
                backgroundColor="{availableScorestreaks[scorestreakArray[2]] == true
                    ? streakAvailableColor
                    : streakUnavailableColor}40"
                backdropFilter="blur(5px)"
                ><svelte:component
                    this={streakMap[scorestreakArray[2]].deco}
                    size="8vh"
                    style="z-index: 150;"
                    color={availableScorestreaks[scorestreakArray[2]] == true
                        ? streakAvailableColor
                        : streakUnavailableColor}
                />
                <Label
                    className="scorestreakFill"
                    width="100%"
                    height="{buttonFillArray[2]}%"
                    backgroundColor="#2400FF40"
                    text=""
                    borderColor="#2400FF00"
                    top="{100 - buttonFillArray[2]}%"
                    left="0%"
                    style="{getLeftCurvedBorder(5)} border-top-left-radius: 0px;"
                /></Button
            >
        </div>
        <ul id="deployedStreaksActiveLabelsList">
            {#if deployedStreaks["counterUAV"]}
                <div
                    class="enemyLockContainer deployedScorestreakActiveLabelItem"
                    transition:fade={{ duration: 150 }}
                >
                    <Label
                        id="enemyLockLabel"
                        left="0%"
                        color="#5C41FF"
                        borderColor="#2400FF00"
                        text="Jamming Active"
                        width="96%"
                        height="100%"
                        horizontalFont="6px"
                        tabletWidth="99%"
                        VerticalFont="8px"
                        backdropFilter="blur(5px)"
                        style="{getRightCurvedBorder(
                            5
                        )} border-left: solid 1px #5C41FF; justify-content: start; padding-left: 4%; transition: all linear 0.1s; transition: color linear 0s;"
                        backgroundColor="#5C41FF20"
                        ><MisslesCounterDeco
                            size="2.5vh"
                            style="left: 83%;"
                        /></Label
                    >
                </div>
            {/if}
            {#if deployedStreaks["energyWeapon"]}
                <div
                    class="energyWeaponOnlineIndi deployedScorestreakActiveLabelItem"
                    transition:fade={{ duration: 150 }}
                >
                    <Label
                        id="energyWeaponOnlineLabel"
                        left="0%"
                        color="#5C41FF"
                        borderColor="#2400FF00"
                        text="Laser Array Online"
                        width="96%"
                        tabletWidth="99%"
                        height="100%"
                        horizontalFont="5px"
                        VerticalFont="8px"
                        backdropFilter="blur(5px)"
                        style="{getRightCurvedBorder(
                            5
                        )} border-left: solid 1px #5C41FF; justify-content: start; padding-left: 4%; transition: all linear 0.1s; transition: color linear 0s;"
                        backgroundColor="#5C41FF20"
                        ><svelte:component
                            this={streakMap["energyWeapon"].deco}
                            size="2.05vh"
                            color="#5C41FF"
                            style="left: 82%;"
                        /></Label
                    >
                </div>
            {/if}
            {#if energyAbsorbed > 0}
                <div
                    class="energyWeaponOnlineIndi deployedScorestreakActiveLabelItem"
                    transition:fade={{ duration: 150 }}
                >
                    <Label
                        id="energyWeaponOnlineLabel"
                        left="0%"
                        color="rgba(255, 0, 30, {energyAbsorbed + 0.2})"
                        borderColor="#2400FF00"
                        text="Laser Lock {Math.round(energyAbsorbed.toFixed(2) * 100)}%"
                        width="96%"
                        tabletWidth="99%"
                        height="100%"
                        horizontalFont="5px"
                        VerticalFont="8px"
                        backdropFilter="blur(5px)"
                        style="{getRightCurvedBorder(
                            5
                        )} border-left: solid 1px rgba(255, 0, 30, {energyAbsorbed + 0.2}); justify-content: start; padding-left: 4%; transition: all linear 0.1s; transition: color linear 0s;"
                        backgroundColor="#5C41FF20"
                        ><svelte:component
                            this={streakMap["energyWeapon"].deco}
                            size="2.05vh"
                            color="rgba(255, 0, 30, {energyAbsorbed + 0.2})"
                            style="left: 82%;"
                        /></Label
                    >
                </div>
            {/if}
        </ul>
    {/if}`}function fl(r){let t,a,s,o,l,i;return a=new wt({props:{id:"sourceCodeSnippet",top:"0%",left:"3%",width:"100%",height:"100%",color:`${r[0]}${R()||r[1].width<1300?"60":"FF"}`,text:r[2],style:"white-space: break-spaces; text-align: start; letter-spacing: 0.08vh;",desktopFont:"13px"}}),{c(){t=oe("div"),j(a.$$.fragment),this.h()},l(n){t=ie(n,"DIV",{class:!0,style:!0});var c=y(t);z(a.$$.fragment,c),c.forEach(p),this.h()},h(){e(t,"class","sourceCodeSnippetContainer svelte-1by875g"),e(t,"style",s=`width: ${r[3]}; height: ${R()?"100%":"72%"}; top: ${R()?"0%":"28%"};`)},m(n,c){Q(n,t,c),U(a,t,null),o=!0,l||(i=pe(window,"resize",r[6]),l=!0)},p(n,[c]){const v={};c&3&&(v.color=`${n[0]}${R()||n[1].width<1300?"60":"FF"}`),c&4&&(v.text=n[2]),a.$set(v),(!o||c&8&&s!==(s=`width: ${n[3]}; height: ${R()?"100%":"72%"}; top: ${R()?"0%":"28%"};`))&&e(t,"style",s)},i(n){o||(E(a.$$.fragment,n),o=!0)},o(n){T(a.$$.fragment,n),o=!1},d(n){n&&p(t),q(a),l=!1,i()}}}function ul(r,t,a){var A;let{source:s="RingRelay.Crypto"}=t,o={"RingRelay.0":sl(),"RingRelay.1":ll(),"ProjectEagle.0":ol(),"DroneBuzz.0":il(),"DroneBuzz.1":nl()};const l=document.documentElement;let i=(A=o[s])==null?void 0:A.split(""),n="",c,{color:v="#999"}=t,h="20%",k={width:l.clientWidth,height:l.clientHeight};function F(D){R()?a(3,h="100%"):D.width<1300?D.width<800?a(3,h="100%"):a(3,h="30%"):a(3,h="20%")}function d(){i=o[s].split(""),a(2,n=""),u()}function u(){let D=0;c!=null&&clearInterval(c),c=setInterval(()=>{D<i.length?(_(D),D++):u()},15)}function _(D){a(2,n+=i[D])}Ft(()=>{u()});const M=()=>{a(1,k={height:l.clientHeight,width:l.clientWidth})};return r.$$set=D=>{"source"in D&&a(5,s=D.source),"color"in D&&a(0,v=D.color)},r.$$.update=()=>{r.$$.dirty&2&&F(k),r.$$.dirty&32&&d()},[v,k,n,h,l,s,M]}class cl extends ke{constructor(t){super(),Ce(this,t,ul,fl,Me,{source:5,color:0})}}function hl(r){let t,a,s,o,l;return{c(){t=b("svg"),a=b("path"),s=b("rect"),o=b("rect"),this.h()},l(i){t=w(i,"svg",{class:!0,width:!0,height:!0,style:!0,viewBox:!0,fill:!0,xmlns:!0});var n=y(t);a=w(n,"path",{d:!0,fill:!0}),y(a).forEach(p),s=w(n,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),y(s).forEach(p),o=w(n,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),y(o).forEach(p),n.forEach(p),this.h()},h(){e(a,"d","M18.1236 7.59704C18.3023 7.46455 18.3405 7.21157 18.1996 7.03942C17.1118 5.71022 15.6404 4.74337 13.9814 4.27414C12.193 3.7683 10.2874 3.86928 8.5625 4.5613C6.83757 5.25333 5.39055 6.49739 4.44763 8.09901C3.50472 9.70063 3.11906 11.5695 3.35094 13.4136C3.58282 15.2576 4.41918 16.9729 5.72926 18.2912C7.03935 19.6095 8.74933 20.4566 10.5919 20.7C12.4344 20.9434 14.3057 20.5695 15.9132 19.6366C17.4044 18.7713 18.5905 17.4702 19.3154 15.9131C19.4093 15.7114 19.3097 15.4758 19.1037 15.3917V15.3917C18.8978 15.3075 18.6636 15.4069 18.5687 15.6081C17.9119 17.0005 16.846 18.1639 15.5089 18.9399C14.0554 19.7833 12.3634 20.1215 10.6974 19.9014C9.03138 19.6813 7.48524 18.9153 6.30068 17.7233C5.11612 16.5313 4.3599 14.9804 4.15023 13.3131C3.94057 11.6457 4.28928 9.95587 5.14185 8.50771C5.99442 7.05954 7.3028 5.93468 8.86245 5.30897C10.4221 4.68325 12.1451 4.59194 13.7622 5.04932C15.2498 5.47008 16.5705 6.33335 17.5517 7.51984C17.6934 7.69128 17.9449 7.72953 18.1236 7.59704V7.59704Z"),e(a,"fill",r[1]),e(s,"x","18.3899"),e(s,"y","7.00916"),e(s,"width","0.672628"),e(s,"height","3.69945"),e(s,"rx","0.336314"),e(s,"transform","rotate(100.454 18.3899 7.00916)"),e(s,"fill",r[1]),e(o,"x","16.9482"),e(o,"y","4.20935"),e(o,"width","0.672628"),e(o,"height","3.69945"),e(o,"rx","0.336314"),e(o,"transform","rotate(-16.3712 16.9482 4.20935)"),e(o,"fill",r[1]),e(t,"class","deco"),e(t,"width",r[0]),e(t,"height",r[0]),e(t,"style",l=`position: absolute; transform: rotate(${r[3]}deg); ${r[2]}`),e(t,"viewBox","0 0 25 25"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(i,n){Q(i,t,n),g(t,a),g(t,s),g(t,o)},p(i,[n]){n&2&&e(a,"fill",i[1]),n&2&&e(s,"fill",i[1]),n&2&&e(o,"fill",i[1]),n&1&&e(t,"width",i[0]),n&1&&e(t,"height",i[0]),n&12&&l!==(l=`position: absolute; transform: rotate(${i[3]}deg); ${i[2]}`)&&e(t,"style",l)},i:Ie,o:Ie,d(i){i&&p(t)}}}function pl(r,t,a){let{size:s="3vh"}=t,{color:o="#FFF"}=t,{style:l=""}=t,i=0;const n=c=>{let v=c/360;const h=setInterval(()=>{i<360?a(3,i+=6):(a(3,i=0),clearInterval(h))},v)};return r.$$set=c=>{"size"in c&&a(0,s=c.size),"color"in c&&a(1,o=c.color),"style"in c&&a(2,l=c.style)},[s,o,l,i,n]}class dl extends ke{constructor(t){super(),Ce(this,t,pl,hl,Me,{size:0,color:1,style:2,refreshAni:4})}get refreshAni(){return this.$$.ctx[4]}}function as(r,t){return r=Math.ceil(r),t=Math.floor(t),Math.floor(Math.random()*(t-r)+r)}const ss=Ya([{x:0,y:0}]),ls=Ya([{x:0,y:0}]),os=Ya([{x:0,y:0}]);function is(r){let t,a,s,o,l,i,n,c,v,h,k,F,d,u,_,M,A,D,B,K,N,ae,L,x,V,X,ee,fe,te,Y;var de=r[6][r[1]].deco;function se(C){return{props:{size:"100%",style:"left: 50%; transform: translate(-50%); top: "+(R()?"-15%":"0%")+";",monochrome:!1,animated:!0}}}de&&(s=es(de,se())),i=new wt({props:{id:"title",className:"transitionAll1",style:R()?"letter-spacing: 1vh;":"letter-spacing: 2vh;",text:r[6][r[1]].title,color:r[6][r[1]].themeColorPrimary,left:R()?"53%":"50%",top:R()?"42.232686981%":"56.232686981%",width:"100%",desktopFont:"50px",verticalFont:"28px"}}),c=new wt({props:{className:"alignHorizontalAlign transitionAll1",id:"description",text:r[6][r[1]].description,color:r[6][r[1]].themeColorPrimary,left:"50%",top:R()?"52.191135734%":"68.191135734%",width:"100%",desktopFont:"28px",backdropFilter:R()?"blur(2px)":"",verticalFont:"18px",borderRadius:"6px",style:"padding: 2%",borderColor:R()?`${r[6][r[1]].themeColorPrimary}30`:"#00000000"}}),k=new vt({props:{color:r[6][r[1]].appURL!=null?r[6][r[1]].themeColorPrimary:"#444",top:R()?"82%":"88.947368421%",left:R()?"5%":"23.348519362%",desktopFont:"25px",borderColor:r[6][r[1]].appURL!=null?r[6][r[1]].themeColorPrimary:"#444",width:R()?"90%":"25.056947608%",height:"8.033240997%",className:"transitionAll2",label:"Go to app",backdropFilter:R()?"blur(4px)":"",borderRadius:R()?"4px":"0px",verticalFont:"18px",$$slots:{default:[gl]},$$scope:{ctx:r}}}),_=new vt({props:{color:r[6][r[1]].themeColorPrimary,top:R()?`${82+12}%`:"88.947368421%",left:R()?"5%":"51.480637813%",desktopFont:"25px",borderColor:r[6][r[1]].themeColorPrimary,width:R()?"90%":"25.056947608%",height:"8.033240997%",className:"transitionAll2",label:"View Code",backdropFilter:R()?"blur(4px)":"",borderRadius:R()?"4px":"0px",verticalFont:"18px"}}),D=new vt({props:{color:r[6][r[1]].themeColorPrimary,top:R()?`${82+24}%`:"101.966759003%",left:R()?"5%":"23.348519362%",desktopFont:"25px",horizontalFont:"7.5vh",borderColor:r[6][r[1]].themeColorPrimary,width:R()?"90%":"53.189066059%",className:"transitionAll2",height:"8.033240997%",label:"Details",backdropFilter:R()?"blur(4px)":"",borderRadius:R()?"4px":"0px",verticalFont:"18px"}}),N=new Zs({props:{selectedProjectID:r[1]}}),N.$on("projectSelected",r[11]),L=new cl({props:{color:r[6][r[1]].themeColorPrimary,source:`${r[1]}.${r[5]}`}}),X=new vt({props:{label:"Source Code Extract ["+r[6][r[1]].sourceCodeExtractLabels[r[5]]+"]",style:"z-index: 500; border-bottom-left-radius: 0px; border-top-left-radius: 0px; justify-content: start; padding-left: 5%;",desktopFont:"15px",top:"0%",left:"0%",opacity:R()?0:1,className:"transitionAll2",borderColor:r[6][r[1]].themeColorPrimary,color:r[6][r[1]].themeColorPrimary,width:"95.5%",height:"100%",backgroundColor:r[6][r[1]].themeColorPrimary+"20",backdropFilter:"blur(5px)",onClick:r[13],$$slots:{default:[ml]},$$scope:{ctx:r}}});let G=r[4]>0&&ns(r);return{c(){t=oe("div"),a=oe("div"),s&&j(s.$$.fragment),l=W(),j(i.$$.fragment),n=W(),j(c.$$.fragment),v=W(),h=oe("a"),j(k.$$.fragment),d=W(),u=oe("a"),j(_.$$.fragment),A=W(),j(D.$$.fragment),K=W(),j(N.$$.fragment),ae=W(),j(L.$$.fragment),x=W(),V=oe("div"),j(X.$$.fragment),fe=W(),G&&G.c(),te=Ut(),this.h()},l(C){t=ie(C,"DIV",{class:!0});var I=y(t);a=ie(I,"DIV",{class:!0});var le=y(a);s&&z(s.$$.fragment,le),le.forEach(p),l=Z(I),z(i.$$.fragment,I),n=Z(I),z(c.$$.fragment,I),v=Z(I),h=ie(I,"A",{href:!0,target:!0});var ye=y(h);z(k.$$.fragment,ye),ye.forEach(p),d=Z(I),u=ie(I,"A",{href:!0,target:!0});var re=y(u);z(_.$$.fragment,re),re.forEach(p),A=Z(I),z(D.$$.fragment,I),I.forEach(p),K=Z(C),z(N.$$.fragment,C),ae=Z(C),z(L.$$.fragment,C),x=Z(C),V=ie(C,"DIV",{id:!0,style:!0,class:!0});var ne=y(V);z(X.$$.fragment,ne),ne.forEach(p),fe=Z(C),G&&G.l(C),te=Ut(),this.h()},h(){var C;e(a,"class","logoContainer svelte-1ih2g32"),e(h,"href",F=r[6][r[1]].appURL),e(h,"target","_blank"),e(u,"href",M=r[6][r[1]].repoURL),e(u,"target","_blank"),e(t,"class","projectOverviewContainer svelte-1ih2g32"),e(V,"id","sourceCodeExtractButton"),H(V,"position","absolute"),H(V,"top","26.296296296%"),H(V,"left","0.3125%"),H(V,"width","14.589583333%"),H(V,"height","3.518518519%"),H(V,"display",((C=r[2])==null?void 0:C.width)<800&&!R()?"none":"flex"),e(V,"class","svelte-1ih2g32")},m(C,I){Q(C,t,I),g(t,a),s&&U(s,a,null),g(t,l),U(i,t,null),g(t,n),U(c,t,null),g(t,v),g(t,h),U(k,h,null),g(t,d),g(t,u),U(_,u,null),g(t,A),U(D,t,null),Q(C,K,I),U(N,C,I),Q(C,ae,I),U(L,C,I),Q(C,x,I),Q(C,V,I),U(X,V,null),Q(C,fe,I),G&&G.m(C,I),Q(C,te,I),Y=!0},p(C,I){var ge;if(I&2&&de!==(de=C[6][C[1]].deco)){if(s){Xt();const we=s;T(we.$$.fragment,1,0,()=>{q(we,1)}),Gt()}de?(s=es(de,se()),j(s.$$.fragment),E(s.$$.fragment,1),U(s,a,null)):s=null}const le={};I&2&&(le.text=C[6][C[1]].title),I&2&&(le.color=C[6][C[1]].themeColorPrimary),i.$set(le);const ye={};I&2&&(ye.text=C[6][C[1]].description),I&2&&(ye.color=C[6][C[1]].themeColorPrimary),I&2&&(ye.borderColor=R()?`${C[6][C[1]].themeColorPrimary}30`:"#00000000"),c.$set(ye);const re={};I&2&&(re.color=C[6][C[1]].appURL!=null?C[6][C[1]].themeColorPrimary:"#444"),I&2&&(re.borderColor=C[6][C[1]].appURL!=null?C[6][C[1]].themeColorPrimary:"#444"),I&2097154&&(re.$$scope={dirty:I,ctx:C}),k.$set(re),(!Y||I&2&&F!==(F=C[6][C[1]].appURL))&&e(h,"href",F);const ne={};I&2&&(ne.color=C[6][C[1]].themeColorPrimary),I&2&&(ne.borderColor=C[6][C[1]].themeColorPrimary),_.$set(ne),(!Y||I&2&&M!==(M=C[6][C[1]].repoURL))&&e(u,"href",M);const Te={};I&2&&(Te.color=C[6][C[1]].themeColorPrimary),I&2&&(Te.borderColor=C[6][C[1]].themeColorPrimary),D.$set(Te);const S={};I&2&&(S.selectedProjectID=C[1]),N.$set(S);const ue={};I&2&&(ue.color=C[6][C[1]].themeColorPrimary),I&34&&(ue.source=`${C[1]}.${C[5]}`),L.$set(ue);const De={};I&34&&(De.label="Source Code Extract ["+C[6][C[1]].sourceCodeExtractLabels[C[5]]+"]"),I&2&&(De.borderColor=C[6][C[1]].themeColorPrimary),I&2&&(De.color=C[6][C[1]].themeColorPrimary),I&2&&(De.backgroundColor=C[6][C[1]].themeColorPrimary+"20"),I&42&&(De.onClick=C[13]),I&2097162&&(De.$$scope={dirty:I,ctx:C}),X.$set(De),(!Y||I&4)&&H(V,"display",((ge=C[2])==null?void 0:ge.width)<800&&!R()?"none":"flex"),C[4]>0?G?G.p(C,I):(G=ns(C),G.c(),G.m(te.parentNode,te)):G&&(G.d(1),G=null)},i(C){Y||(s&&E(s.$$.fragment,C),jt(()=>{Y&&(o||(o=me(a,Za,{duration:100},!0)),o.run(1))}),E(i.$$.fragment,C),E(c.$$.fragment,C),E(k.$$.fragment,C),E(_.$$.fragment,C),E(D.$$.fragment,C),jt(()=>{Y&&(B||(B=me(t,_t,{y:"-10%",duration:150,delay:150},!0)),B.run(1))}),E(N.$$.fragment,C),E(L.$$.fragment,C),E(X.$$.fragment,C),jt(()=>{Y&&(ee||(ee=me(V,_t,{x:"-10%",y:"-10%",duration:150,delay:150},!0)),ee.run(1))}),Y=!0)},o(C){s&&T(s.$$.fragment,C),o||(o=me(a,Za,{duration:100},!1)),o.run(0),T(i.$$.fragment,C),T(c.$$.fragment,C),T(k.$$.fragment,C),T(_.$$.fragment,C),T(D.$$.fragment,C),B||(B=me(t,_t,{y:"-10%",duration:150,delay:150},!1)),B.run(0),T(N.$$.fragment,C),T(L.$$.fragment,C),T(X.$$.fragment,C),ee||(ee=me(V,_t,{x:"-10%",y:"-10%",duration:150,delay:150},!1)),ee.run(0),Y=!1},d(C){C&&p(t),s&&q(s),C&&o&&o.end(),q(i),q(c),q(k),q(_),q(D),C&&B&&B.end(),C&&p(K),q(N,C),C&&p(ae),q(L,C),C&&p(x),C&&p(V),q(X),C&&ee&&ee.end(),C&&p(fe),G&&G.d(C),C&&p(te)}}}function gl(r){let t,a;return t=new wt({props:{show:r[6][r[1]].appURL===null,color:"#444",top:R()?"60%":"72%",desktopFont:"14px",verticalFont:"10px",text:"Available during hardware tests only"}}),{c(){j(t.$$.fragment)},l(s){z(t.$$.fragment,s)},m(s,o){U(t,s,o),a=!0},p(s,o){const l={};o&2&&(l.show=s[6][s[1]].appURL===null),t.$set(l)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){T(t.$$.fragment,s),a=!1},d(s){q(t,s)}}}function ml(r){let t,a,s;function o(i){r[12](i)}let l={style:"left: 85%;",color:r[6][r[1]].themeColorPrimary,size:"3.2vh"};return r[3]!==void 0&&(l.refreshAni=r[3]),t=new dl({props:l}),Ls.push(()=>Ts(t,"refreshAni",o)),{c(){j(t.$$.fragment)},l(i){z(t.$$.fragment,i)},m(i,n){U(t,i,n),s=!0},p(i,n){const c={};n&2&&(c.color=i[6][i[1]].themeColorPrimary),!a&&n&8&&(a=!0,c.refreshAni=i[3],Bs(()=>a=!1)),t.$set(c)},i(i){s||(E(t.$$.fragment,i),s=!0)},o(i){T(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function ns(r){let t;return{c(){t=oe("div"),this.h()},l(a){t=ie(a,"DIV",{id:!0,style:!0,class:!0}),y(t).forEach(p),this.h()},h(){e(t,"id","blurTransitionOverlay"),H(t,"backdrop-filter","blur("+r[4]+"px)"),e(t,"class","svelte-1ih2g32")},m(a,s){Q(a,t,s)},p(a,s){s&16&&H(t,"backdrop-filter","blur("+a[4]+"px)")},d(a){a&&p(t)}}}function yl(r){let t,a,s,o,l=r[0]&&is(r);return{c(){l&&l.c(),t=Ut()},l(i){l&&l.l(i),t=Ut()},m(i,n){l&&l.m(i,n),Q(i,t,n),a=!0,s||(o=[pe(window,"touchend",r[8]),pe(window,"touchmove",r[9]),pe(window,"touchstart",r[10])],s=!0)},p(i,[n]){i[0]?l?(l.p(i,n),n&1&&E(l,1)):(l=is(i),l.c(),E(l,1),l.m(t.parentNode,t)):l&&(Xt(),T(l,1,1,()=>{l=null}),Gt())},i(i){a||(E(l),a=!0)},o(i){T(l),a=!1},d(i){l&&l.d(i),i&&p(t),s=!1,Ga(o)}}}function _l(r,t,a){let{show:s}=t,o,l,i={x:0,y:0},n={x:0,y:0},c=!1,v=0;Ft(()=>{Ja.subscribe(L=>{a(2,o=L)}),ss.subscribe(L=>{i={x:L[0].clientX,y:L[0].clientY}}),ls.subscribe(L=>{let x=.32*document.documentElement.clientWidth,V=n.x-i.x,X=x*100/Math.abs(V);n={x:L[0].clientX,y:L[0].clientY},a(4,v=gs(X,0,100,0,14)),!c&&Math.abs(V)>x/5&&(c=!0,h(V))}),os.subscribe(L=>{L.length>0&&(L[0].clientX,L[0].clientY),c=!1;let x=.15*document.documentElement.clientWidth,V=n.x-i.x;Math.abs(V)<x&&h(V*-1),a(4,v=0)})});function h(L){L>0?_-1<0?a(7,_=u.length-1):a(7,_--,_):_+1>u.length-1?a(7,_=0):a(7,_++,_)}function k(L){ms.set({primary:M[L].themeColorPrimary,secondary:M[L].themeColorSecondary,gradientColorPrimary:M[L].gradientColorPrimary,gradientColorSecondary:M[L].gradientColorSecondary})}let F=0;var d="RingRelay";let u=["RingRelay","ProjectEagle","DroneBuzz"],_=0,M={RingRelay:{title:"RING RELAY",description:"The Ring Relay is an end-to-end encrypted messaging app with many other features for enhanced security and a great user experience",themeColorPrimary:"#6100FF",themeColorSecondary:"#35008B",deco:_s,gradientColorPrimary:"rgba(97, 0, 220, 0.2)",gradientColorSecondary:"rgba(53, 0, 122, 0.1)",repoURL:"https://github.com/undefined1raven/Ring-Relay",appURL:"https://ring-relay.live",sourceCodeExtractLabels:["Crypto","Chat"]},ProjectEagle:{title:"PROJECT EAGLE",description:"Project Eagle aims to build a fully remote flyable custom UAV with the goal of achieving an autonomous system that can be managed from anywhere in the world using the web app",themeColorPrimary:"#0500FF",themeColorSecondary:"#030096",deco:vs,gradientColorPrimary:"rgba(5, 0, 255, 0.2)",gradientColorSecondary:"rgba(5, 0, 180, 0.1)",repoURL:"https://github.com/undefined1raven/VultureLink",appURL:null,sourceCodeExtractLabels:["Auth"]},DroneBuzz:{title:"Drone Buzz",description:"Drone Buzz is a mobile game where you are a drone trying to survive while completing objectives, upgrading and strategizing your path to victory ",themeColorPrimary:"#2400FF",themeColorSecondary:"#1C00C5",deco:bs,gradientColorPrimary:"rgba(5, 0, 255, 0.2)",gradientColorSecondary:"rgba(5, 0, 180, 0.1)",repoURL:"https://github.com/undefined1raven/DroneBuzz",appURL:"https://dronebuzz.vercel.app",sourceCodeExtractLabels:["Enemy","Scorestreaks"]}};const A=L=>{os.set(L.touches)},D=L=>{ls.set(L.touches)},B=L=>{ss.set(L.touches)},K=L=>{a(1,d=L.detail),a(5,F=as(0,M[d].sourceCodeExtractLabels.length))};function N(L){l=L,a(3,l)}const ae=()=>{a(5,F=as(0,M[d].sourceCodeExtractLabels.length)),l.call()};return r.$$set=L=>{"show"in L&&a(0,s=L.show)},r.$$.update=()=>{r.$$.dirty&128&&a(1,d=u[_]),r.$$.dirty&2&&k(d)},[s,d,o,l,v,F,M,_,A,D,B,K,N,ae]}class vl extends ke{constructor(t){super(),Ce(this,t,_l,yl,Me,{show:0})}}function bl(r){let t,a,s,o,l,i;return{c(){t=b("svg"),a=b("rect"),s=b("rect"),o=b("rect"),this.h()},l(n){t=w(n,"svg",{id:!0,width:!0,height:!0,style:!0,viewBox:!0,fill:!0,xmlns:!0});var c=y(t);a=w(c,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,stroke:!0,class:!0}),y(a).forEach(p),s=w(c,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,stroke:!0,class:!0}),y(s).forEach(p),o=w(c,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,stroke:!0,class:!0}),y(o).forEach(p),c.forEach(p),this.h()},h(){e(a,"x","1.10554"),e(a,"y","30.6127"),e(a,"width","35.0285"),e(a,"height","35.0285"),e(a,"transform","rotate(-45 1.10554 30.6127)"),e(a,"stroke",r[2]),e(a,"class","svelte-hg4zg9"),e(s,"x","1.18172"),e(s,"y","36.2166"),e(s,"width","35.0285"),e(s,"height","35.0285"),e(s,"transform","rotate(-45 1.18172 36.2166)"),e(s,"stroke",r[2]),e(s,"class","svelte-hg4zg9"),e(o,"x","1.0406"),e(o,"y","25.8093"),e(o,"width","35.0285"),e(o,"height","35.0285"),e(o,"transform","rotate(-45 1.0406 25.8093)"),e(o,"stroke",r[2]),e(o,"class","svelte-hg4zg9"),e(t,"id",l=r[3]?r[3]:""),e(t,"width",r[0]),e(t,"height",r[0]),e(t,"style",i="position: absolute; "+r[1]),e(t,"viewBox","0 0 52 62"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(n,c){Q(n,t,c),g(t,a),g(t,s),g(t,o)},p(n,[c]){c&4&&e(a,"stroke",n[2]),c&4&&e(s,"stroke",n[2]),c&4&&e(o,"stroke",n[2]),c&8&&l!==(l=n[3]?n[3]:"")&&e(t,"id",l),c&1&&e(t,"width",n[0]),c&1&&e(t,"height",n[0]),c&2&&i!==(i="position: absolute; "+n[1])&&e(t,"style",i)},i:Ie,o:Ie,d(n){n&&p(t)}}}function wl(r,t,a){let{size:s="2vh"}=t,{style:o=""}=t,{color:l="#2400FF"}=t,{id:i}=t;return r.$$set=n=>{"size"in n&&a(0,s=n.size),"style"in n&&a(1,o=n.style),"color"in n&&a(2,l=n.color),"id"in n&&a(3,i=n.id)},[s,o,l,i]}class ws extends ke{constructor(t){super(),Ce(this,t,wl,bl,Me,{size:0,style:1,color:2,id:3})}}function Fl(r){let t,a,s,o,l;return{c(){t=b("svg"),a=b("rect"),s=b("rect"),this.h()},l(i){t=w(i,"svg",{id:!0,class:!0,width:!0,height:!0,style:!0,viewBox:!0,fill:!0,xmlns:!0});var n=y(t);a=w(n,"rect",{width:!0,height:!0,transform:!0,fill:!0,class:!0}),y(a).forEach(p),s=w(n,"rect",{width:!0,height:!0,transform:!0,fill:!0,class:!0}),y(s).forEach(p),n.forEach(p),this.h()},h(){e(a,"width","22.7261"),e(a,"height","0.505025"),e(a,"transform","matrix(0.700071 -0.714073 0.700071 0.714073 0 32.7081)"),e(a,"fill",r[0]),e(a,"class","svelte-nw337m"),e(s,"width","22.6602"),e(s,"height","0.505025"),e(s,"transform","matrix(0.700071 0.714073 -0.700071 0.714073 0.399475 0.670044)"),e(s,"fill",r[0]),e(s,"class","svelte-nw337m"),e(t,"id",o=r[4]?r[4]:""),e(t,"class","deco"),e(t,"width",r[3]),e(t,"height",r[2]),e(t,"style",l="position: absolute; "+r[1]),e(t,"viewBox","0 0 17 34"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(i,n){Q(i,t,n),g(t,a),g(t,s)},p(i,[n]){n&1&&e(a,"fill",i[0]),n&1&&e(s,"fill",i[0]),n&16&&o!==(o=i[4]?i[4]:"")&&e(t,"id",o),n&8&&e(t,"width",i[3]),n&4&&e(t,"height",i[2]),n&2&&l!==(l="position: absolute; "+i[1])&&e(t,"style",l)},i:Ie,o:Ie,d(i){i&&p(t)}}}function kl(r,t,a){let{color:s="#FFF"}=t,{style:o=""}=t,{height:l="auto"}=t,{width:i="auto"}=t,{id:n}=t;return r.$$set=c=>{"color"in c&&a(0,s=c.color),"style"in c&&a(1,o=c.style),"height"in c&&a(2,l=c.height),"width"in c&&a(3,i=c.width),"id"in c&&a(4,n=c.id)},[s,o,l,i,n]}class fs extends ke{constructor(t){super(),Ce(this,t,kl,Fl,Me,{color:0,style:1,height:2,width:3,id:4})}}function Cl(r){let t,a,s,o,l,i,n,c,v,h,k,F;s=new ws({props:{id:"mobileNavControlllerContainerI",color:r[0],size:"65%",style:"top: 50%; transform: translate(0, -50%); left: 2%;"}}),l=new fs({props:{id:"mobileNavControlllerContainerI",color:r[1]?`${r[0]}70`:r[0],height:"70%",style:"top: 50%; transform: translate(0, -50%); left: 26%;"}}),n=new fs({props:{id:"mobileNavControlllerContainerI",color:r[1]?r[0]:`${r[0]}70`,height:"70%",style:"top: 50%; transform: translate(0, -50%) rotate(180deg); left: 31%;"}});let d=r[1]&&us(r);return{c(){t=oe("div"),a=oe("div"),j(s.$$.fragment),o=W(),j(l.$$.fragment),i=W(),j(n.$$.fragment),v=W(),d&&d.c(),this.h()},l(u){t=ie(u,"DIV",{class:!0});var _=y(t);a=ie(_,"DIV",{id:!0,class:!0,style:!0});var M=y(a);z(s.$$.fragment,M),o=Z(M),z(l.$$.fragment,M),i=Z(M),z(n.$$.fragment,M),M.forEach(p),v=Z(_),d&&d.l(_),_.forEach(p),this.h()},h(){e(a,"id","mobileNavControlllerContainerI"),e(a,"class","mobileNavControlllerContainer svelte-18l6xvs"),H(a,"border-radius",r[1]?"5px 5px 0 0":"5px"),H(a,"border-color",r[0]),H(a,"background-color","#00000001"),e(t,"class","mobileNavContainer")},m(u,_){Q(u,t,_),g(t,a),U(s,a,null),g(a,o),U(l,a,null),g(a,i),U(n,a,null),g(t,v),d&&d.m(t,null),h=!0,k||(F=pe(a,"click",r[5]),k=!0)},p(u,_){const M={};_&1&&(M.color=u[0]),s.$set(M);const A={};_&3&&(A.color=u[1]?`${u[0]}70`:u[0]),l.$set(A);const D={};_&3&&(D.color=u[1]?u[0]:`${u[0]}70`),n.$set(D),(!h||_&2)&&H(a,"border-radius",u[1]?"5px 5px 0 0":"5px"),(!h||_&1)&&H(a,"border-color",u[0]),u[1]?d?(d.p(u,_),_&2&&E(d,1)):(d=us(u),d.c(),E(d,1),d.m(t,null)):d&&(Xt(),T(d,1,1,()=>{d=null}),Gt())},i(u){h||(E(s.$$.fragment,u),E(l.$$.fragment,u),E(n.$$.fragment,u),jt(()=>{h&&(c||(c=me(a,_t,{x:"-20%",duration:150,delay:150},!0)),c.run(1))}),E(d),h=!0)},o(u){T(s.$$.fragment,u),T(l.$$.fragment,u),T(n.$$.fragment,u),c||(c=me(a,_t,{x:"-20%",duration:150,delay:150},!1)),c.run(0),T(d),h=!1},d(u){u&&p(t),q(s),q(l),q(n),u&&c&&c.end(),d&&d.d(),k=!1,F()}}}function us(r){let t,a,s,o,l,i,n,c;return a=new vt({props:{onClick:r[6],className:"mobileNavMenuComponent",left:"9.943181818%",width:"80.397727273%",height:"16.438356164%",verticalFont:"18px",borderRadius:"5px",top:"13.698630137%",color:r[0],borderColor:r[0],label:"Projects"}}),o=new vt({props:{onClick:r[7],className:"mobileNavMenuComponent",left:"9.943181818%",width:"80.397727273%",height:"16.438356164%",verticalFont:"18px",borderRadius:"5px",top:"42.922374429%",color:r[0],borderColor:r[0],label:"Skills"}}),i=new vt({props:{className:"mobileNavMenuComponent",left:"9.943181818%",width:"80.397727273%",height:"16.438356164%",verticalFont:"18px",borderRadius:"5px",top:"69.406392694%",color:r[0],borderColor:r[0],label:"About Me & Contact"}}),{c(){t=oe("div"),j(a.$$.fragment),s=W(),j(o.$$.fragment),l=W(),j(i.$$.fragment),this.h()},l(v){t=ie(v,"DIV",{class:!0,style:!0});var h=y(t);z(a.$$.fragment,h),s=Z(h),z(o.$$.fragment,h),l=Z(h),z(i.$$.fragment,h),h.forEach(p),this.h()},h(){e(t,"class","mobileNavMenuContainer mobileNavMenuComponent svelte-18l6xvs"),H(t,"border-color",r[0]),H(t,"background-color","#00000000")},m(v,h){Q(v,t,h),U(a,t,null),g(t,s),U(o,t,null),g(t,l),U(i,t,null),c=!0},p(v,h){const k={};h&1&&(k.color=v[0]),h&1&&(k.borderColor=v[0]),a.$set(k);const F={};h&1&&(F.color=v[0]),h&1&&(F.borderColor=v[0]),o.$set(F);const d={};h&1&&(d.color=v[0]),h&1&&(d.borderColor=v[0]),i.$set(d),(!c||h&1)&&H(t,"border-color",v[0])},i(v){c||(E(a.$$.fragment,v),E(o.$$.fragment,v),E(i.$$.fragment,v),jt(()=>{c&&(n||(n=me(t,Xa,{x:"-10%",y:"-30%",duration:100},!0)),n.run(1))}),c=!0)},o(v){T(a.$$.fragment,v),T(o.$$.fragment,v),T(i.$$.fragment,v),n||(n=me(t,Xa,{x:"-10%",y:"-30%",duration:100},!1)),n.run(0),c=!1},d(v){v&&p(t),q(a),q(o),q(i),v&&n&&n.end()}}}function Ml(r){let t=R(),a,s,o,l,i=t&&Cl(r);return{c(){i&&i.c(),a=Ut()},l(n){i&&i.l(n),a=Ut()},m(n,c){i&&i.m(n,c),Q(n,a,c),s=!0,o||(l=pe(window,"click",r[3]),o=!0)},p(n,[c]){t&&i.p(n,c)},i(n){s||(E(i),s=!0)},o(n){T(i),s=!1},d(n){i&&i.d(n),n&&p(a),o=!1,l()}}}function Dl(r,t,a){const s=xt();let{primaryColor:o}=t,{secondaryColor:l}=t,i=!1;function n(k){k.target.id!="mobileNavControlllerContainerI"&&a(1,i=!1)}const c=()=>{a(1,i=!i)},v=()=>{s("onSelectionSelected","projects")},h=()=>{s("onSelectionSelected","skills")};return r.$$set=k=>{"primaryColor"in k&&a(0,o=k.primaryColor),"secondaryColor"in k&&a(4,l=k.secondaryColor)},[o,i,s,n,l,c,v,h]}class Sl extends ke{constructor(t){super(),Ce(this,t,Dl,Ml,Me,{primaryColor:0,secondaryColor:4})}}function Al(r){let t,a,s,o,l,i,n,c,v,h,k,F,d;return s=new wt({props:{text:r[1]?"":"undefined1raven _dev_",width:"60.070671378%",color:r[0],style:"font-size: 2vh;",left:"33.085501859%",desktopFont:"15px"}}),l=new ws({props:{size:"7vh",style:"left: "+(r[1]?"auto":"5%")+";",color:r[0]}}),n=new vt({props:{onClick:r[4],label:"Projects",top:"46.564885496%",color:r[0],borderColor:r[0],backgroundColor:r[0]+"20",width:"100%",height:"13.740458015%",desktopFont:"20px"}}),v=new vt({props:{onClick:r[5],label:"Skills",top:"66.41221374%",color:r[0],borderColor:r[0],backgroundColor:r[0]+"00",width:"100%",height:"13.740458015%",desktopFont:"20px"}}),k=new vt({props:{onClick:r[6],label:"About Me & Contact",top:"86.259541985%",color:r[0],borderColor:r[0],backgroundColor:r[0]+"00",width:"100%",height:"13.740458015%",desktopFont:"20px"}}),{c(){t=oe("div"),a=oe("div"),j(s.$$.fragment),o=W(),j(l.$$.fragment),i=W(),j(n.$$.fragment),c=W(),j(v.$$.fragment),h=W(),j(k.$$.fragment),this.h()},l(u){t=ie(u,"DIV",{class:!0,style:!0});var _=y(t);a=ie(_,"DIV",{class:!0,style:!0});var M=y(a);z(s.$$.fragment,M),o=Z(M),z(l.$$.fragment,M),M.forEach(p),i=Z(_),z(n.$$.fragment,_),c=Z(_),z(v.$$.fragment,_),h=Z(_),z(k.$$.fragment,_),_.forEach(p),this.h()},h(){e(a,"class","titleContainer svelte-ouflqk"),H(a,"border-color",r[0]),e(t,"class","navContainer svelte-ouflqk"),H(t,"display",R()?"none":"flex")},m(u,_){Q(u,t,_),g(t,a),U(s,a,null),g(a,o),U(l,a,null),g(t,i),U(n,t,null),g(t,c),U(v,t,null),g(t,h),U(k,t,null),d=!0},p(u,[_]){const M={};_&2&&(M.text=u[1]?"":"undefined1raven _dev_"),_&1&&(M.color=u[0]),s.$set(M);const A={};_&2&&(A.style="left: "+(u[1]?"auto":"5%")+";"),_&1&&(A.color=u[0]),l.$set(A),(!d||_&1)&&H(a,"border-color",u[0]);const D={};_&1&&(D.color=u[0]),_&1&&(D.borderColor=u[0]),_&1&&(D.backgroundColor=u[0]+"20"),n.$set(D);const B={};_&1&&(B.color=u[0]),_&1&&(B.borderColor=u[0]),_&1&&(B.backgroundColor=u[0]+"00"),v.$set(B);const K={};_&1&&(K.color=u[0]),_&1&&(K.borderColor=u[0]),_&1&&(K.backgroundColor=u[0]+"00"),k.$set(K)},i(u){d||(E(s.$$.fragment,u),E(l.$$.fragment,u),E(n.$$.fragment,u),E(v.$$.fragment,u),E(k.$$.fragment,u),jt(()=>{d&&(F||(F=me(t,_t,{x:"-20%",duration:200,delay:150},!0)),F.run(1))}),d=!0)},o(u){T(s.$$.fragment,u),T(l.$$.fragment,u),T(n.$$.fragment,u),T(v.$$.fragment,u),T(k.$$.fragment,u),F||(F=me(t,_t,{x:"-20%",duration:200,delay:150},!1)),F.run(0),d=!1},d(u){u&&p(t),q(s),q(l),q(n),q(v),q(k),u&&F&&F.end()}}}function Il(r,t,a){const s=xt();let o,l=!1;function i(){!R()&&(o==null?void 0:o.width)>800?a(1,l=!1):a(1,l=!0)}Ft(()=>{Ja.subscribe(d=>{o=d,i()})});function n(d){s("onSelectionSelected",d)}let{primaryColor:c="#2400FF"}=t,{secondaryColor:v="#1300AA"}=t;const h=()=>n("projects"),k=()=>n("skills"),F=()=>n("contact");return r.$$set=d=>{"primaryColor"in d&&a(0,c=d.primaryColor),"secondaryColor"in d&&a(3,v=d.secondaryColor)},[c,l,n,v,h,k,F]}class El extends ke{constructor(t){super(),Ce(this,t,Il,Al,Me,{primaryColor:0,secondaryColor:3})}}function Ll(r){let t,a,s,o,l,i,n,c,v,h,k,F,d,u,_,M,A;return a=new Wa({props:{id:"mainLogo",color:"#2400ff",size:"30vh",show:r[0][3]}}),o=new Wa({props:{id:"mainLogo",color:"#11007C",size:"30vh",show:r[0][2]&&!R(),style:"left: calc(25.833333333% + 8%);"}}),i=new Wa({props:{id:"mainLogo",color:"#11007C",size:"30vh",show:r[0][1]&&!R(),style:"left: calc(9.479166667% + 8%);"}}),c=new Wa({props:{id:"mainLogo",color:"#11007C",size:"30vh",show:r[0][0]&&!R(),style:"left: calc(-6.770833333% + 8%);"}}),h=new wt({props:{className:"introText",text:"[raven@axq]>Link Established with host [xx.xvx.xxs.xa]",color:"#2400FF",show:r[0][0],top:"2%",horizontalFont:"5px",desktopFont:"15px"}}),F=new wt({props:{className:"introText",text:"[raven@axq]>[Requesting Deep Storage Link]",color:"#2400FF",show:r[0][1],top:"5%",horizontalFont:"5px",desktopFont:"15px"}}),u=new wt({props:{className:"introText",text:"[raven@axq]>[Running ini seq]",color:"#2400FF",show:r[0][2],top:"8%",horizontalFont:"5px",desktopFont:"15px"}}),M=new wt({props:{className:"introText",text:"[raven@axq]>[Loaded]",color:"#2400FF",show:r[0][3],horizontalFont:"5px",top:"11%",desktopFont:"15px"}}),{c(){t=oe("div"),j(a.$$.fragment),s=W(),j(o.$$.fragment),l=W(),j(i.$$.fragment),n=W(),j(c.$$.fragment),v=W(),j(h.$$.fragment),k=W(),j(F.$$.fragment),d=W(),j(u.$$.fragment),_=W(),j(M.$$.fragment),this.h()},l(D){t=ie(D,"DIV",{class:!0});var B=y(t);z(a.$$.fragment,B),s=Z(B),z(o.$$.fragment,B),l=Z(B),z(i.$$.fragment,B),n=Z(B),z(c.$$.fragment,B),v=Z(B),z(h.$$.fragment,B),k=Z(B),z(F.$$.fragment,B),d=Z(B),z(u.$$.fragment,B),_=Z(B),z(M.$$.fragment,B),B.forEach(p),this.h()},h(){e(t,"class","iniSeqContainer")},m(D,B){Q(D,t,B),U(a,t,null),g(t,s),U(o,t,null),g(t,l),U(i,t,null),g(t,n),U(c,t,null),g(t,v),U(h,t,null),g(t,k),U(F,t,null),g(t,d),U(u,t,null),g(t,_),U(M,t,null),A=!0},p(D,[B]){const K={};B&1&&(K.show=D[0][3]),a.$set(K);const N={};B&1&&(N.show=D[0][2]&&!R()),o.$set(N);const ae={};B&1&&(ae.show=D[0][1]&&!R()),i.$set(ae);const L={};B&1&&(L.show=D[0][0]&&!R()),c.$set(L);const x={};B&1&&(x.show=D[0][0]),h.$set(x);const V={};B&1&&(V.show=D[0][1]),F.$set(V);const X={};B&1&&(X.show=D[0][2]),u.$set(X);const ee={};B&1&&(ee.show=D[0][3]),M.$set(ee)},i(D){A||(E(a.$$.fragment,D),E(o.$$.fragment,D),E(i.$$.fragment,D),E(c.$$.fragment,D),E(h.$$.fragment,D),E(F.$$.fragment,D),E(u.$$.fragment,D),E(M.$$.fragment,D),A=!0)},o(D){T(a.$$.fragment,D),T(o.$$.fragment,D),T(i.$$.fragment,D),T(c.$$.fragment,D),T(h.$$.fragment,D),T(F.$$.fragment,D),T(u.$$.fragment,D),T(M.$$.fragment,D),A=!1},d(D){D&&p(t),q(a),q(o),q(i),q(c),q(h),q(F),q(u),q(M)}}}function Tl(r,t,a){const s=xt();let o=[!1,!1,!1,!1,!1];return Ft(()=>{setTimeout(()=>{a(0,o[0]=!0,o)},100),setTimeout(()=>{a(0,o[1]=!0,o)},200),setTimeout(()=>{a(0,o[2]=!0,o)},300),setTimeout(()=>{a(0,o[3]=!0,o)},400),setTimeout(()=>{o.forEach((l,i)=>{a(0,o[i]=!1,o)}),s("introFinished")},800)}),[o]}class Bl extends ke{constructor(t){super(),Ce(this,t,Tl,Ll,Me,{})}}function cs(r){let t,a;return t=new Bl({}),t.$on("introFinished",r[4]),{c(){j(t.$$.fragment)},l(s){z(t.$$.fragment,s)},m(s,o){U(t,s,o),a=!0},p:Ie,i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){T(t.$$.fragment,s),a=!1},d(s){q(t,s)}}}function hs(r){let t,a,s;return{c(){t=oe("div"),this.h()},l(o){t=ie(o,"DIV",{id:!0,style:!0,class:!0}),y(t).forEach(p),this.h()},h(){e(t,"id","gradientBkg"),H(t,"background","radial-gradient( 60.7% 60.73% at 50% 24.65%, "+r[2].gradientColorPrimary+" 0%, "+r[2].gradientColorSecondary+" 100% )"),H(t,"transition","background ease-in-out 0.2s"),e(t,"class","svelte-1o8qew4")},m(o,l){Q(o,t,l),s=!0},p(o,l){(!s||l&4)&&H(t,"background","radial-gradient( 60.7% 60.73% at 50% 24.65%, "+o[2].gradientColorPrimary+" 0%, "+o[2].gradientColorSecondary+" 100% )")},i(o){s||(jt(()=>{s&&(a||(a=me(t,Za,{duration:150},!0)),a.run(1))}),s=!0)},o(o){a||(a=me(t,Za,{duration:150},!1)),a.run(0),s=!1},d(o){o&&p(t),o&&a&&a.end()}}}function ps(r){let t,a;return t=new vl({props:{show:r[3]}}),{c(){j(t.$$.fragment)},l(s){z(t.$$.fragment,s)},m(s,o){U(t,s,o),a=!0},p(s,o){const l={};o&8&&(l.show=s[3]),t.$set(l)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){T(t.$$.fragment,s),a=!1},d(s){q(t,s)}}}function ds(r){let t,a,s,o;return t=new El({props:{primaryColor:r[2].primary}}),t.$on("onSelectionSelected",r[5]),s=new Sl({props:{secondaryColor:r[2].secondary,primaryColor:r[2].primary}}),s.$on("onSelectionSelected",r[6]),{c(){j(t.$$.fragment),a=W(),j(s.$$.fragment)},l(l){z(t.$$.fragment,l),a=Z(l),z(s.$$.fragment,l)},m(l,i){U(t,l,i),Q(l,a,i),U(s,l,i),o=!0},p(l,i){const n={};i&4&&(n.primaryColor=l[2].primary),t.$set(n);const c={};i&4&&(c.secondaryColor=l[2].secondary),i&4&&(c.primaryColor=l[2].primary),s.$set(c)},i(l){o||(E(t.$$.fragment,l),E(s.$$.fragment,l),o=!0)},o(l){T(t.$$.fragment,l),T(s.$$.fragment,l),o=!1},d(l){q(t,l),l&&p(a),q(s,l)}}}function Pl(r){let t,a,s,o,l,i,n,c,v,h=!r[3]&&cs(r),k=r[3]&&hs(r),F=r[0]=="projects"&&ps(r);l=new al({props:{show:r[3],color:r[2].primary}});let d=r[3]&&ds(r);return c=new wt({props:{text:"[This page is currently under active dev]",color:"#555",style:"left: 50%; transform: translate(-50%);"}}),{c(){t=oe("div"),h&&h.c(),a=W(),k&&k.c(),s=W(),F&&F.c(),o=W(),j(l.$$.fragment),i=W(),d&&d.c(),n=W(),j(c.$$.fragment),this.h()},l(u){t=ie(u,"DIV",{id:!0});var _=y(t);h&&h.l(_),a=Z(_),k&&k.l(_),s=Z(_),F&&F.l(_),o=Z(_),z(l.$$.fragment,_),i=Z(_),d&&d.l(_),n=Z(_),z(c.$$.fragment,_),_.forEach(p),this.h()},h(){e(t,"id","root")},m(u,_){Q(u,t,_),h&&h.m(t,null),g(t,a),k&&k.m(t,null),g(t,s),F&&F.m(t,null),g(t,o),U(l,t,null),g(t,i),d&&d.m(t,null),g(t,n),U(c,t,null),v=!0},p(u,[_]){u[3]?h&&(Xt(),T(h,1,1,()=>{h=null}),Gt()):h?(h.p(u,_),_&8&&E(h,1)):(h=cs(u),h.c(),E(h,1),h.m(t,a)),u[3]?k?(k.p(u,_),_&8&&E(k,1)):(k=hs(u),k.c(),E(k,1),k.m(t,s)):k&&(Xt(),T(k,1,1,()=>{k=null}),Gt()),u[0]=="projects"?F?(F.p(u,_),_&1&&E(F,1)):(F=ps(u),F.c(),E(F,1),F.m(t,o)):F&&(Xt(),T(F,1,1,()=>{F=null}),Gt());const M={};_&8&&(M.show=u[3]),_&4&&(M.color=u[2].primary),l.$set(M),u[3]?d?(d.p(u,_),_&8&&E(d,1)):(d=ds(u),d.c(),E(d,1),d.m(t,n)):d&&(Xt(),T(d,1,1,()=>{d=null}),Gt())},i(u){v||(E(h),E(k),E(F),E(l.$$.fragment,u),E(d),E(c.$$.fragment,u),v=!0)},o(u){T(h),T(k),T(F),T(l.$$.fragment,u),T(d),T(c.$$.fragment,u),v=!1},d(u){u&&p(t),h&&h.d(),k&&k.d(),F&&F.d(),q(l),d&&d.d(),q(c)}}}function Rl(r,t,a){let s={primary:"#6100FF",secondary:"#35008B"},o="projects";Ft(()=>{ms.subscribe(h=>{a(2,s=h)})});let l=!1,i=!1;const n=()=>{a(3,i=!0)},c=h=>{a(0,o=h.detail),h.detail=="skills"?a(1,l=!0):a(1,l=!1)},v=h=>{a(0,o=h.detail),h.detail=="skills"?a(1,l=!0):a(1,l=!1)};return r.$$.update=()=>{r.$$.dirty&2&&console.log(l),r.$$.dirty&1},[o,l,s,i,n,c,v]}class ql extends ke{constructor(t){super(),Ce(this,t,Rl,Pl,Me,{})}}export{ql as component};
