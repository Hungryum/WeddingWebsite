import{g as mi,K as gi,W as D,m as Gu,a as Ku,w as bo,s as Ao,b as Wu}from"./helpers.40b7fd8c.js";import{d as qt,j as P,o as M,c as L,a as f,u as x,F as $e,b as Tt,l as Ue,m as ut,t as Pe,_ as Gt,r as ee,e as Xa,n as Yu,h as Ja,p as Za,k as Qu,q as ec,w as pt,s as xr,v as pi,x as Xu,y as Ju,z as Zu,A as Ro,B as Do,C as ko,R as eh,D as th,E as Z,G as Ye,H as tn,I as xo,J as dr,K as bt,i as Qe,g as Ne,L as nh,M as No,N as sh,f as rh}from"./index.d722f90d.js";import{g as $o,i as ih,S as oh}from"./ScrollToTop.1863850a.js";import{C as ah}from"./CountdownSection.ffbe52d9.js";const ch=Tt('<section id="location" class="no-padding-bottom"><div class="container"><div class="row"><div class="col-sm-12"><h2 class="section-title">Localisation &amp; d\xE9roulement</h2></div></div></div><div class="gmap" id="map_canvas_full"></div><div class="map_pins_full" data-animation-direction="fade" data-animation-delay="200"><ul class="pins"><li><i class="fas fa-praying-hands"></i>C\xE9r\xE9monie Cambodgienne</li><li><i class="fas fa-church"></i>C\xE9r\xE9monie Eglise</li><li><i class="fas fa-glass-cheers"></i>R\xE9ception Domaine</li><li><i class="fas fa-utensils"></i>Brunch</li></ul></div></section>',1),lh={id:"wedding-details"},uh={class:"container"},hh={class:"row mt-5"},dh={class:"col-md-3 my-5 wedding-details","data-animation-direction":"from-bottom","data-animation-delay":"300"},fh=f("i",{class:"fas fa-praying-hands fa-xs"},null,-1),mh=f("br",null,null,-1),gh=f("h4",null,[Ue(" C\xE9r\xE9monie Cambodgienne "),f("small",null,"Le DD MM YYYY"),f("small",null,"08H30 - 16H00")],-1),ph=f("p",null,[Ue("Paris, France "),f("br")],-1),yh=["href"],vh=Tt('<div class="col-md-3 my-5 wedding-details" data-animation-direction="from-bottom" data-animation-delay="300"><i class="fas fa-church fa-xs"></i><br><h4> C\xE9r\xE9monie Eglise <small>Le DD MM YYYY</small><small>13H30 - 15H00</small></h4><p>Paris, France <br></p><a href="#location" class="btn btn-primary"> Plus de d\xE9tails \xE0 venir </a></div><div class="col-md-3 my-5 wedding-details" data-animation-direction="from-bottom" data-animation-delay="300"><i class="fas fa-glass-cheers fa-xs"></i><br><h4> R\xE9ception Domaine <small>Le DD MM YYYY</small><small>17H30 - 03H00</small></h4><p>Paris, France <br></p><a href="#" class="btn btn-primary">H\xE9bergements aux alentours</a></div><div class="col-md-3 my-5 wedding-details" data-animation-direction="from-bottom" data-animation-delay="300"><i class="fas fa-utensils fa-xs"></i><br><h4> Brunch <br><br><small>Le DD MM YYYY</small><small>11h-14h au Domaine</small></h4><p>Paris, France <br></p><a href="#" class="btn btn-primary">Voir le site du Domaine</a></div>',3),Eh=qt({__name:"WeddingLocationFullSection",setup(t){const e=P(()=>{const n=mi(gi);return n!=null?n:null});return(n,s)=>(M(),L($e,null,[ch,f("section",lh,[f("div",uh,[f("div",hh,[f("div",dh,[fh,mh,gh,ph,f("a",{href:"/khmer-ceremony?key="+x(e),class:"btn btn-primary"}," Le d\xE9roulement de la c\xE9r\xE9monie ",8,yh)]),vh])])])],64))}}),wh={id:"bmiadsgmen",class:"parallax-background bg-color-overlay"},_h={class:"container"},Th=f("div",{class:"row"},[f("div",{class:"col-sm-12"},[f("h2",{class:"section-title"}," Demoiselles d'honneur & gar\xE7ons d'honneur ")])],-1),Sh={class:"row center"},Ch={class:"image"},Ih=["src","alt"],bh={class:"hover-info neela-style"},Ah={class:"content center"},Rh={class:"row center"},Dh={class:"image"},kh=["src","alt"],xh={class:"hover-info neela-style"},Nh={class:"content center"},$h=qt({__name:"BridesMaidsAndGroomsMenSection",setup(t){const e=[{name:"BRIDESMAID 1",image:"600x600",type:"Demoiselle d'honneur"},{name:"BRIDESMAID 2",image:"600x600",type:"Demoiselle d'honneur"},{name:"BRIDESMAID 3",image:"600x600",type:"Demoiselle d'honneur"},{name:"BRIDESMAID 4",image:"600x600",type:"Demoiselle d'honneur"}],n=[{name:"GROOMSMAN1",image:"600x600",type:"Gar\xE7on d'honneur"},{name:"GROOMSMAN2",image:"600x600",type:"Gar\xE7on d'honneur"},{name:"GROOMSMAN3",image:"600x600",type:"Gar\xE7on d'honneur"},{name:"GROOMSMAN4",image:"600x600",type:"Gar\xE7on d'honneur"}];return(s,r)=>(M(),L("section",wh,[f("div",_h,[Th,f("div",Sh,[(M(),L($e,null,ut(e,(i,o)=>f("div",{key:o,class:"element bmaid-gmen col-sm-6 col-md-3 col-lg-3","data-animation-direction":"from-bottom","data-animation-delay":"300"},[f("div",Ch,[f("img",{src:x($o)(i.image),alt:i.name},null,8,Ih),f("div",bh,[f("div",Ah,[f("h5",null,[Ue(Pe(i.name),1),f("small",null,Pe(i.type),1)])])])])])),64))]),f("div",Rh,[(M(),L($e,null,ut(n,(i,o)=>f("div",{key:o,class:"element bmaid-gmen col-sm-6 col-md-3 col-lg-3","data-animation-direction":"from-bottom","data-animation-delay":"300"},[f("div",Dh,[f("img",{src:x($o)(i.image),alt:i.name},null,8,kh),f("div",xh,[f("div",Nh,[f("h5",null,[Ue(Pe(i.name),1),f("small",null,Pe(i.type),1)])])])])])),64))])])]))}}),Ph={},Mh={id:"giftregistry",class:"section-bg-color parallax-background"},Oh=Tt('<div class="container"><div class="row mt-4"><div class="col-md-8 col-xl-6"><h3 class="section-title-md uppercase desc"><strong>Projet</strong><small>Apr\xE8s mariage</small></h3><div class="section-desc"><div class="row"><div class="center mb-2 col-md-2 col-sm-12"><i class="fa-solid fa-earth-asia fa-5x"></i></div><div class="col-md-10 col-sm-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div></div><br><br><div class="row"><div class="center mb-2 col-md-2 col-sm-12"><i class="fa-solid fa-gift fa-5x"></i></div><div class="col-md-10 col-sm-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div></div><br><br><div class="row"><div class="center mb-2 col-md-2 col-sm-12"><i class="fa-solid fa-route fa-5x"></i></div><div class="col-md-10 col-sm-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div></div></div></div></div><div class="row"><div class="col-md-8 col-xl-6"><ul class="wedding-gifts"><li id="help-honeymoon" data-animation-direction="from-bottom" data-animation-delay="300"><div class="neela-style"><span class="h-lines"></span><span class="v-lines"></span><i class="icon-honeymoon"></i><h3>Contribuer \xE0<br>nos projets</h3><div class="info"><a href="#" id="otheramount" class="btn btn-primary reverse"><span class="h-lines"></span><span class="v-lines"></span> Participer </a></div></div></li></ul></div></div></div>',1),Vh=[Oh];function Lh(t,e){return M(),L("section",Mh,Vh)}const Fh=Gt(Ph,[["render",Lh]]),Bh={},Uh={id:"gallery",class:"section-bg-color"},jh=Tt('<div class="container"><div class="row"><div class="col-sm-12"><h1 class="section-title">Galerie photos</h1></div></div></div><div class="container"><div class="row justify-content-md-center"><div class="col-md-4 wedding-details"><i data-animation-direction="from-bottom" data-animation-delay="200" class="icon-photo-camera"></i><h4 data-animation-direction="from-bottom" data-animation-delay="200"> Photo \xE0 venir ici </h4><p data-animation-direction="from-bottom" data-animation-delay="800"> Attention souriez dans 1, 2, 3... <i class="fa-regular fa-face-smile-beam fa-lg"></i></p></div></div></div>',2),zh=[jh];function Hh(t,e){return M(),L("section",Uh,zh)}const qh=Gt(Bh,[["render",Hh]]),Gh={},Kh={id:"testimonials",class:"bg-color side-flowers-light"},Wh=Tt('<div class="container"><div class="row"><div class="col-lg-12 col-xl-10 offset-xl-1"><div id="testimonials-slider" class="owl-carousel testimonials light" data-animation-direction="from-bottom" data-animation-delay="300"><div class="item"><blockquote> Il n\u2019y a pas plus adorable, tendre et charmante relation que celle d\u2019un bon mariage. </blockquote><div class="author"><h3>Martin Luther</h3></div></div><div class="item"><blockquote>Le mariage est une vie dans la vie.</blockquote><div class="author"><h3>Honor\xE9 de Balzac</h3></div></div><div class="item"><blockquote> Quand on aime le jour de son mariage, on aime pour la vie. </blockquote><div class="author"><h3>Joseph Lallier</h3></div></div></div></div></div></div>',1),Yh=[Wh];function Qh(t,e){return M(),L("section",Kh,Yh)}const Xh=Gt(Gh,[["render",Qh]]);function Nr(){return Nr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Nr.apply(this,arguments)}var Jh=function(){var e=!1,n=[],s=function(){if(!e){e=!0;for(var a=0,c=n.length;a<c;a++)n[a]()}},r=function(a){if(!e){n.push(a);return}a()},i={resolved:function(){return e},resolve:s,promise:{then:r}};return i},Po=Object.prototype.hasOwnProperty;function Zh(){var t=Jh();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(n,s,r){this.wait().then(function(){r(window.grecaptcha.render(n,s))})},reset:function(n){typeof n>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(n)}))},execute:function(n){typeof n>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(n)}))},checkRecaptchaLoad:function(){Po.call(window,"grecaptcha")&&Po.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var an=Zh();typeof window<"u"&&(window.vueRecaptchaApiLoaded=an.notify);var ed=qt({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(e,n){var s=n.slots,r=n.emit,i=ee(null),o=ee(null),a=function(h){r("verify",h)},c=function(){r("expired")},l=function(){r("error")};return Xa(function(){if(an.checkRecaptchaLoad(),e.loadRecaptchaScript&&!document.getElementById(e.recaptchaScriptId)){var u=document.createElement("script");u.id=e.recaptchaScriptId,u.src="https://"+e.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+e.language,u.async=!0,u.defer=!0,document.head.appendChild(u)}var h=Nr({},e,{callback:a,"expired-callback":c,"error-callback":l}),m=i.value,g=s.default?m.children[0]:m;an.render(g,h,function(d){o.value=d,r("render",d)})}),{root:i,widgetId:o,reset:function(){an.reset(o.value)},execute:function(){an.execute(o.value)}}},render:function(){var e=this.$slots.default,n;return typeof e=="function"?n=e():n=e,Yu("div",{ref:"root"},n)}});const tc="recaptcha-success",nc="recaptcha-failure",td=qt({name:"ReCaptcha",components:{VueRecaptcha:ed},setup(t,{emit:e}){const n=P(()=>({}).VITE_RECAPTCHA_SECRET_KEY||"env-not-set");return{handleSuccess:i=>{e(tc)},handleError:()=>{e(nc)},siteKey:n}}});function nd(t,e,n,s,r,i){const o=Za("VueRecaptcha");return M(),Ja(o,{sitekey:t.siteKey,"load-recaptcha-script":!0,onVerify:t.handleSuccess,onError:t.handleError},null,8,["sitekey","onVerify","onError"])}const sd=Gt(td,[["render",nd]]);function Mo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,s)=>(e.includes(s)||(n[s]=x(t[s])),n),{})}function ws(t){return typeof t=="function"}function rd(t){return Ju(t)||Zu(t)}function sc(t,e,n){let s=t;const r=e.split(".");for(let i=0;i<r.length;i++){if(!s[r[i]])return n;s=s[r[i]]}return s}function fr(t,e,n){return P(()=>t.some(s=>sc(e,s,{[n]:!1})[n]))}function Oo(t,e,n){return P(()=>t.reduce((s,r)=>{const i=sc(e,r,{[n]:!1})[n]||[];return s.concat(i)},[]))}function rc(t,e,n,s){return t.call(s,x(e),x(n),s)}function ic(t){return t.$valid!==void 0?!t.$valid:!t}function id(t,e,n,s,r,i,o){let{$lazy:a,$rewardEarly:c}=r,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,m=arguments.length>10?arguments[10]:void 0;const g=ee(!!s.value),d=ee(0);n.value=!1;const v=pt([e,s].concat(l,m),()=>{if(a&&!s.value||c&&!h.value&&!n.value)return;let E;try{E=rc(t,e,u,o)}catch(b){E=Promise.reject(b)}d.value++,n.value=!!d.value,g.value=!1,Promise.resolve(E).then(b=>{d.value--,n.value=!!d.value,i.value=b,g.value=ic(b)}).catch(b=>{d.value--,n.value=!!d.value,i.value=b,g.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:g,$unwatch:v}}function od(t,e,n,s,r,i,o,a){let{$lazy:c,$rewardEarly:l}=s;const u=()=>({}),h=P(()=>{if(c&&!n.value||l&&!a.value)return!1;let m=!0;try{const g=rc(t,e,o,i);r.value=g,m=ic(g)}catch(g){r.value=g}return m});return{$unwatch:u,$invalid:h}}function ad(t,e,n,s,r,i,o,a,c,l,u){const h=ee(!1),m=t.$params||{},g=ee(null);let d,v;t.$async?{$invalid:d,$unwatch:v}=id(t.$validator,e,h,n,s,g,r,t.$watchTargets,c,l,u):{$invalid:d,$unwatch:v}=od(t.$validator,e,n,s,g,r,c,l);const E=t.$message;return{$message:ws(E)?P(()=>E(Mo({$pending:h,$invalid:d,$params:Mo(m),$model:e,$response:g,$validator:i,$propertyPath:a,$property:o}))):E||"",$params:m,$pending:h,$invalid:d,$response:g,$unwatch:v}}function cd(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=x(t),n=Object.keys(e),s={},r={},i={};let o=null;return n.forEach(a=>{const c=e[a];switch(!0){case ws(c.$validator):s[a]=c;break;case ws(c):s[a]={$validator:c};break;case a==="$validationGroups":o=c;break;case a.startsWith("$"):i[a]=c;break;default:r[a]=c}}),{rules:s,nestedValidators:r,config:i,validationGroups:o}}function ld(){}const ud="__root";function oc(t,e,n){if(n)return e?e(t()):t();try{var s=Promise.resolve(t());return e?s.then(e):s}catch(r){return Promise.reject(r)}}function hd(t,e){return oc(t,ld,e)}function dd(t,e){var n=t();return n&&n.then?n.then(e):e(n)}function fd(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(s){return Promise.reject(s)}}}function md(t,e,n,s,r,i,o,a,c){const l=Object.keys(t),u=s.get(r,t),h=ee(!1),m=ee(!1),g=ee(0);if(u){if(!u.$partial)return u;u.$unwatch(),h.value=u.$dirty.value}const d={$dirty:h,$path:r,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return l.length?(l.forEach(v=>{d[v]=ad(t[v],e,d.$dirty,i,o,v,n,r,c,m,g)}),d.$externalResults=P(()=>a.value?[].concat(a.value).map((v,E)=>({$propertyPath:r,$property:n,$validator:"$externalResults",$uid:`${r}-externalResult-${E}`,$message:v,$params:{},$response:null,$pending:!1})):[]),d.$invalid=P(()=>{const v=l.some(E=>x(d[E].$invalid));return m.value=v,!!d.$externalResults.value.length||v}),d.$pending=P(()=>l.some(v=>x(d[v].$pending))),d.$error=P(()=>d.$dirty.value?d.$pending.value||d.$invalid.value:!1),d.$silentErrors=P(()=>l.filter(v=>x(d[v].$invalid)).map(v=>{const E=d[v];return pi({$propertyPath:r,$property:n,$validator:v,$uid:`${r}-${v}`,$message:E.$message,$params:E.$params,$response:E.$response,$pending:E.$pending})}).concat(d.$externalResults.value)),d.$errors=P(()=>d.$dirty.value?d.$silentErrors.value:[]),d.$unwatch=()=>l.forEach(v=>{d[v].$unwatch()}),d.$commit=()=>{m.value=!0,g.value=Date.now()},s.set(r,t,d),d):(u&&s.set(r,t,d),d)}function gd(t,e,n,s,r,i,o){const a=Object.keys(t);return a.length?a.reduce((c,l)=>(c[l]=$r({validations:t[l],state:e,key:l,parentKey:n,resultsCache:s,globalConfig:r,instance:i,externalResults:o}),c),{}):{}}function pd(t,e,n){const s=P(()=>[e,n].filter(d=>d).reduce((d,v)=>d.concat(Object.values(x(v))),[])),r=P({get(){return t.$dirty.value||(s.value.length?s.value.every(d=>d.$dirty):!1)},set(d){t.$dirty.value=d}}),i=P(()=>{const d=x(t.$silentErrors)||[],v=s.value.filter(E=>(x(E).$silentErrors||[]).length).reduce((E,b)=>E.concat(...b.$silentErrors),[]);return d.concat(v)}),o=P(()=>{const d=x(t.$errors)||[],v=s.value.filter(E=>(x(E).$errors||[]).length).reduce((E,b)=>E.concat(...b.$errors),[]);return d.concat(v)}),a=P(()=>s.value.some(d=>d.$invalid)||x(t.$invalid)||!1),c=P(()=>s.value.some(d=>x(d.$pending))||x(t.$pending)||!1),l=P(()=>s.value.some(d=>d.$dirty)||s.value.some(d=>d.$anyDirty)||r.value),u=P(()=>r.value?c.value||a.value:!1),h=()=>{t.$touch(),s.value.forEach(d=>{d.$touch()})},m=()=>{t.$commit(),s.value.forEach(d=>{d.$commit()})},g=()=>{t.$reset(),s.value.forEach(d=>{d.$reset()})};return s.value.length&&s.value.every(d=>d.$dirty)&&h(),{$dirty:r,$errors:o,$invalid:a,$anyDirty:l,$error:u,$pending:c,$touch:h,$reset:g,$silentErrors:i,$commit:m}}function $r(t){const e=fd(function(){return at(),dd(function(){if(E.$rewardEarly)return en(),hd(ko)},function(){return oc(ko,function(){return new Promise(G=>{if(!Se.value)return G(!R.value);const ct=pt(Se,()=>{G(!R.value),ct()})})})})});let{validations:n,state:s,key:r,parentKey:i,childResults:o,resultsCache:a,globalConfig:c={},instance:l,externalResults:u}=t;const h=i?`${i}.${r}`:r,{rules:m,nestedValidators:g,config:d,validationGroups:v}=cd(n),E=Object.assign({},c,d),b=r?P(()=>{const G=x(s);return G?x(G[r]):void 0}):s,V=Object.assign({},x(u)||{}),K=P(()=>{const G=x(u);return r?G?x(G[r]):void 0:G}),W=md(m,b,r,a,h,E,l,K,s),X=gd(g,b,h,a,E,l,K),ue={};v&&Object.entries(v).forEach(G=>{let[ct,We]=G;ue[ct]={$invalid:fr(We,X,"$invalid"),$error:fr(We,X,"$error"),$pending:fr(We,X,"$pending"),$errors:Oo(We,X,"$errors"),$silentErrors:Oo(We,X,"$silentErrors")}});const{$dirty:xe,$errors:Zn,$invalid:R,$anyDirty:Ee,$error:we,$pending:Se,$touch:at,$reset:es,$silentErrors:ts,$commit:en}=pd(W,X,o),ns=r?P({get:()=>x(b),set:G=>{xe.value=!0;const ct=x(s),We=x(u);We&&(We[r]=V[r]),xr(ct[r])?ct[r].value=G:ct[r]=G}}):null;r&&E.$autoDirty&&pt(b,()=>{xe.value||at();const G=x(u);G&&(G[r]=V[r])},{flush:"sync"});function ss(G){return(o.value||{})[G]}function J(){xr(u)?u.value=V:Object.keys(V).length===0?Object.keys(u).forEach(G=>{delete u[G]}):Object.assign(u,V)}return pi(Object.assign({},W,{$model:ns,$dirty:xe,$error:we,$errors:Zn,$invalid:R,$anyDirty:Ee,$pending:Se,$touch:at,$reset:es,$path:h||ud,$silentErrors:ts,$validate:e,$commit:en},o&&{$getResultsForChild:ss,$clearExternalResults:J,$validationGroups:ue},X))}class yd{constructor(){this.storage=new Map}set(e,n,s){this.storage.set(e,{rules:n,result:s})}checkRulesValidity(e,n,s){const r=Object.keys(s),i=Object.keys(n);return i.length!==r.length||!i.every(a=>r.includes(a))?!1:i.every(a=>n[a].$params?Object.keys(n[a].$params).every(c=>x(s[a].$params[c])===x(n[a].$params[c])):!0)}get(e,n){const s=this.storage.get(e);if(!s)return;const{rules:r,result:i}=s,o=this.checkRulesValidity(e,n,r),a=i.$unwatch?i.$unwatch:()=>({});return o?i:{$dirty:i.$dirty,$partial:!0,$unwatch:a}}}const ps={COLLECT_ALL:!0,COLLECT_NONE:!1},Vo=Symbol("vuelidate#injectChildResults"),Lo=Symbol("vuelidate#removeChildResults");function vd(t){let{$scope:e,instance:n}=t;const s={},r=ee([]),i=P(()=>r.value.reduce((u,h)=>(u[h]=x(s[h]),u),{}));function o(u,h){let{$registerAs:m,$scope:g,$stopPropagation:d}=h;d||e===ps.COLLECT_NONE||g===ps.COLLECT_NONE||e!==ps.COLLECT_ALL&&e!==g||(s[m]=u,r.value.push(m))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(u){r.value=r.value.filter(h=>h!==u),delete s[u]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const c=Ro(Vo,[]);Do(Vo,n.__vuelidateInjectInstances);const l=Ro(Lo,[]);return Do(Lo,n.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:c,removeValidationResultsFromParent:l}}function ac(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?ac(e[n]):P(()=>e[n])}})}let Fo=0;function Ed(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(s=t,t=void 0,e=void 0);let{$registerAs:r,$scope:i=ps.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:c}=s;const l=c||((n=Qu())===null||n===void 0?void 0:n.proxy),u=l?l.$options:{};r||(Fo+=1,r=`_vuelidate_${Fo}`);const h=ee({}),m=new yd,{childResults:g,sendValidationResultsToParent:d,removeValidationResultsFromParent:v}=l?vd({$scope:i,instance:l}):{childResults:ee({})};if(!t&&u.validations){const E=u.validations;e=ee({}),ec(()=>{e.value=l,pt(()=>ws(E)?E.call(e.value,new ac(e.value)):E,b=>{h.value=$r({validations:b,state:e,childResults:g,resultsCache:m,globalConfig:s,instance:l,externalResults:a||l.vuelidateExternalResults})},{immediate:!0})}),s=u.validationsConfig||s}else{const E=xr(t)||rd(t)?t:pi(t||{});pt(E,b=>{h.value=$r({validations:b,state:e,childResults:g,resultsCache:m,globalConfig:s,instance:l!=null?l:{},externalResults:a})},{immediate:!0})}return l&&(d.forEach(E=>E(h,{$registerAs:r,$scope:i,$stopPropagation:o})),Xu(()=>v.forEach(E=>E(r)))),P(()=>Object.assign({},x(h.value),g.value))}function _s(t){return typeof t=="function"}function Pr(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Ls(t){return _s(t.$validator)?Object.assign({},t):{$validator:t}}function cc(t){return typeof t=="object"?t.$valid:t}function lc(t){return t.$validator||t}function wd(t,e){if(!Pr(t))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof t}`);if(!Pr(e)&&!_s(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=Ls(e);return n.$params=Object.assign({},n.$params||{},t),n}function _d(t,e){if(!_s(t)&&typeof x(t)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof t}`);if(!Pr(e)&&!_s(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=Ls(e);return n.$message=t,n}function Td(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const n=Ls(t);return Object.assign({},n,{$async:!0,$watchTargets:e})}function Sd(t){return{$validator(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return x(e).reduce((i,o,a)=>{const c=Object.entries(o).reduce((l,u)=>{let[h,m]=u;const g=t[h]||{},d=Object.entries(g).reduce((v,E)=>{let[b,V]=E;const W=lc(V).call(this,m,o,a,...s),X=cc(W);if(v.$data[b]=W,v.$data.$invalid=!X||!!v.$data.$invalid,v.$data.$error=v.$data.$invalid,!X){let ue=V.$message||"";const xe=V.$params||{};typeof ue=="function"&&(ue=ue({$pending:!1,$invalid:!X,$params:xe,$model:m,$response:W})),v.$errors.push({$property:h,$message:ue,$params:xe,$response:W,$model:m,$pending:!1,$validator:b})}return{$valid:v.$valid&&X,$data:v.$data,$errors:v.$errors}},{$valid:!0,$data:{},$errors:[]});return l.$data[h]=d.$data,l.$errors[h]=d.$errors,{$valid:l.$valid&&d.$valid,$data:l.$data,$errors:l.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:i.$valid&&c.$valid,$data:i.$data.concat(c.$data),$errors:i.$errors.concat(c.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:n}=e;return n?n.$errors.map(s=>Object.values(s).map(r=>r.map(i=>i.$message)).reduce((r,i)=>r.concat(i),[])):[]}}}const Fs=t=>{if(t=x(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},Cd=t=>(t=x(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function rt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return s=>(s=x(s),!Fs(s)||e.every(r=>r.test(s)))}var rs=Object.freeze({__proto__:null,withParams:wd,withMessage:_d,withAsync:Td,forEach:Sd,req:Fs,len:Cd,regex:rt,unwrap:x,unwrapNormalizedValidator:lc,unwrapValidatorResponse:cc,normalizeValidatorObject:Ls});rt(/^[a-zA-Z]*$/);rt(/^[a-zA-Z0-9]*$/);rt(/^\d*(\.\d+)?$/);const Id=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var bd=rt(Id),Ad={$validator:bd,$message:"Value is not a valid email address",$params:{type:"email"}};function Rd(t){return typeof t=="string"&&(t=t.trim()),Fs(t)}var _e={$validator:Rd,$message:"Value is required",$params:{type:"required"}};const Bo=(t,e)=>t?Fs(typeof e=="string"?e.trim():e):!0;function Dd(t){return function(e,n){if(typeof t!="function")return Bo(x(t),e);const s=t.call(this,e,n);return Bo(s,e)}}function nn(t){return{$validator:Dd(t),$message:"The value is required",$params:{type:"requiredIf",prop:t}}}const kd=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;rt(kd);rt(/(^[0-9]*$)|(^-[0-9]+$)/);rt(/^[-]?\d*(\.\d+)?$/);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let m=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(m=64)),s.push(n[u],n[h],n[m],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Nd;const m=i<<2|a>>4;if(s.push(m),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const d=l<<6&192|h;s.push(d)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $d=function(t){const e=uc(t);return yi.encodeByteArray(e,!0)},Ts=function(t){return $d(t).replace(/\./g,"")},Pd=function(t){try{return yi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=()=>hc().__FIREBASE_DEFAULTS__,Od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pd(t[1]);return e&&JSON.parse(e)},dc=()=>{try{return Md()||Od()||Vd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ld=t=>{var e,n;return(n=(e=dc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fd=t=>{const e=Ld(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fc=()=>{var t;return(t=dc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ts(JSON.stringify(n)),Ts(JSON.stringify(o)),a].join(".")}function vi(){try{return typeof indexedDB=="object"}catch{return!1}}function Ud(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="FirebaseError";class Kt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=jd,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?zd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Kt(r,a,s)}}function zd(t,e){return t.replace(Hd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Hd=/\{\$([^}]+)}/g;function Mr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Uo(i)&&Uo(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Uo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=1e3,Kd=2,Wd=4*60*60*1e3,Yd=.5;function Qd(t,e=Gd,n=Kd){const s=e*Math.pow(n,t),r=Math.round(Yd*s*(Math.random()-.5)*2);return Math.min(Wd,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){return t&&t._delegate?t._delegate:t}class yt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zd(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lt){return this.instances.has(e)}getOptions(e=lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=lt){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jd(t){return t===lt?void 0:t}function Zd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const tf={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},nf=F.INFO,sf={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},rf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wi{constructor(e){this.name=e,this._logLevel=nf,this._logHandler=rf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const of=(t,e)=>e.some(n=>t instanceof n);let jo,zo;function af(){return jo||(jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cf(){return zo||(zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mc=new WeakMap,Or=new WeakMap,gc=new WeakMap,mr=new WeakMap,_i=new WeakMap;function lf(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Je(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mc.set(n,t)}).catch(()=>{}),_i.set(e,t),e}function uf(t){if(Or.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Or.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hf(t){Vr=t(Vr)}function df(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gr(this),e,...n);return gc.set(s,e.sort?e.sort():[e]),Je(s)}:cf().includes(t)?function(...e){return t.apply(gr(this),e),Je(mc.get(this))}:function(...e){return Je(t.apply(gr(this),e))}}function ff(t){return typeof t=="function"?df(t):(t instanceof IDBTransaction&&uf(t),of(t,af())?new Proxy(t,Vr):t)}function Je(t){if(t instanceof IDBRequest)return lf(t);if(mr.has(t))return mr.get(t);const e=ff(t);return e!==t&&(mr.set(t,e),_i.set(e,t)),e}const gr=t=>_i.get(t);function mf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Je(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Je(o.result),c.oldVersion,c.newVersion,Je(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const gf=["get","getKey","getAll","getAllKeys","count"],pf=["put","add","delete","clear"],pr=new Map;function Ho(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pr.get(e))return pr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=pf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||gf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return pr.set(e,i),i}hf(t=>({...t,get:(e,n,s)=>Ho(e,n)||t.get(e,n,s),has:(e,n)=>!!Ho(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function vf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lr="@firebase/app",qo="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new wi("@firebase/app"),Ef="@firebase/app-compat",wf="@firebase/analytics-compat",_f="@firebase/analytics",Tf="@firebase/app-check-compat",Sf="@firebase/app-check",Cf="@firebase/auth",If="@firebase/auth-compat",bf="@firebase/database",Af="@firebase/database-compat",Rf="@firebase/functions",Df="@firebase/functions-compat",kf="@firebase/installations",xf="@firebase/installations-compat",Nf="@firebase/messaging",$f="@firebase/messaging-compat",Pf="@firebase/performance",Mf="@firebase/performance-compat",Of="@firebase/remote-config",Vf="@firebase/remote-config-compat",Lf="@firebase/storage",Ff="@firebase/storage-compat",Bf="@firebase/firestore",Uf="@firebase/firestore-compat",jf="firebase",zf="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]",Hf={[Lr]:"fire-core",[Ef]:"fire-core-compat",[_f]:"fire-analytics",[wf]:"fire-analytics-compat",[Sf]:"fire-app-check",[Tf]:"fire-app-check-compat",[Cf]:"fire-auth",[If]:"fire-auth-compat",[bf]:"fire-rtdb",[Af]:"fire-rtdb-compat",[Rf]:"fire-fn",[Df]:"fire-fn-compat",[kf]:"fire-iid",[xf]:"fire-iid-compat",[Nf]:"fire-fcm",[$f]:"fire-fcm-compat",[Pf]:"fire-perf",[Mf]:"fire-perf-compat",[Of]:"fire-rc",[Vf]:"fire-rc-compat",[Lf]:"fire-gcs",[Ff]:"fire-gcs-compat",[Bf]:"fire-fst",[Uf]:"fire-fst-compat","fire-js":"fire-js",[jf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Map,Br=new Map;function qf(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(Br.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,t);for(const n of Ss.values())qf(n,t);return!0}function Ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ze=new Ei("app","Firebase",Gf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=zf;function pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ze.create("bad-app-name",{appName:String(r)});if(n||(n=fc()),!n)throw Ze.create("no-options");const i=Ss.get(r);if(i){if(Mr(n,i.options)&&Mr(s,i.config))return i;throw Ze.create("duplicate-app",{appName:r})}const o=new ef(r);for(const c of Br.values())o.addComponent(c);const a=new Kf(n,s,o);return Ss.set(r,a),a}function yc(t=Fr){const e=Ss.get(t);if(!e&&t===Fr&&fc())return pc();if(!e)throw Ze.create("no-app",{appName:t});return e}function mt(t,e,n){var s;let r=(s=Hf[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}Ot(new yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="firebase-heartbeat-database",Qf=1,En="firebase-heartbeat-store";let yr=null;function vc(){return yr||(yr=mf(Yf,Qf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(En)}}}).catch(t=>{throw Ze.create("idb-open",{originalErrorMessage:t.message})})),yr}async function Xf(t){try{return await(await vc()).transaction(En).objectStore(En).get(Ec(t))}catch(e){if(e instanceof Kt)vt.warn(e.message);else{const n=Ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function Go(t,e){try{const s=(await vc()).transaction(En,"readwrite");await s.objectStore(En).put(e,Ec(t)),await s.done}catch(n){if(n instanceof Kt)vt.warn(n.message);else{const s=Ze.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(s.message)}}}function Ec(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=1024,Zf=30*24*60*60*1e3;class em{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Zf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:n,unsentEntries:s}=tm(this._heartbeatsCache.heartbeats),r=Ts(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ko(){return new Date().toISOString().substring(0,10)}function tm(t,e=Jf){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Wo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Wo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vi()?Ud().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Go(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Go(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wo(t){return Ts(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){Ot(new yt("platform-logger",e=>new yf(e),"PRIVATE")),Ot(new yt("heartbeat",e=>new em(e),"PRIVATE")),mt(Lr,qo,t),mt(Lr,qo,"esm2017"),mt("fire-js","")}sm("");var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Si=Si||{},C=rm||self;function Bs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ln(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function im(t){return Object.prototype.hasOwnProperty.call(t,vr)&&t[vr]||(t[vr]=++om)}var vr="closure_uid_"+(1e9*Math.random()>>>0),om=0;function am(t,e,n){return t.call.apply(t.bind,arguments)}function cm(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ge=am:ge=cm,ge.apply(null,arguments)}function is(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function it(){this.s=this.s,this.o=this.o}var lm=0;it.prototype.s=!1;it.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lm!=0)&&im(this)};it.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ci(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yo(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Bs(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var um=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{C.addEventListener("test",()=>{},e),C.removeEventListener("test",()=>{},e)}catch{}return t}();function wn(t){return/^[\s\xa0]*$/.test(t)}function Us(){var t=C.navigator;return t&&(t=t.userAgent)?t:""}function Me(t){return Us().indexOf(t)!=-1}function Ii(t){return Ii[" "](t),t}Ii[" "]=function(){};function hm(t,e){var n=sg;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var dm=Me("Opera"),Vt=Me("Trident")||Me("MSIE"),_c=Me("Edge"),Ur=_c||Vt,Tc=Me("Gecko")&&!(Us().toLowerCase().indexOf("webkit")!=-1&&!Me("Edge"))&&!(Me("Trident")||Me("MSIE"))&&!Me("Edge"),fm=Us().toLowerCase().indexOf("webkit")!=-1&&!Me("Edge");function Sc(){var t=C.document;return t?t.documentMode:void 0}var jr;e:{var Er="",wr=function(){var t=Us();if(Tc)return/rv:([^\);]+)(\)|;)/.exec(t);if(_c)return/Edge\/([\d\.]+)/.exec(t);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fm)return/WebKit\/(\S+)/.exec(t);if(dm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wr&&(Er=wr?wr[1]:""),Vt){var _r=Sc();if(_r!=null&&_r>parseFloat(Er)){jr=String(_r);break e}}jr=Er}var zr;if(C.document&&Vt){var Qo=Sc();zr=Qo||parseInt(jr,10)||void 0}else zr=void 0;var mm=zr;function _n(t,e){if(pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tc){e:{try{Ii(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_n.$.h.call(this)}}oe(_n,pe);var gm={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fn="closure_listenable_"+(1e6*Math.random()|0),pm=0;function ym(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++pm,this.fa=this.ia=!1}function js(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bi(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function vm(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Cc(t){const e={};for(const n in t)e[n]=t[n];return e}const Xo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ic(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Xo.length;i++)n=Xo[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function zs(t){this.src=t,this.g={},this.h=0}zs.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=qr(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ym(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Hr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=wc(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(js(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qr(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),Tr={};function bc(t,e,n,s,r){if(s&&s.once)return Rc(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)bc(t,e[i],n,s,r);return null}return n=ki(n),t&&t[Fn]?t.O(e,n,Ln(s)?!!s.capture:!!s,r):Ac(t,e,n,!1,s,r)}function Ac(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ln(r)?!!r.capture:!!r,a=Di(t);if(a||(t[Ai]=a=new zs(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Em(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)um||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(kc(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Em(){function t(n){return e.call(t.src,t.listener,n)}const e=wm;return t}function Rc(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Rc(t,e[i],n,s,r);return null}return n=ki(n),t&&t[Fn]?t.P(e,n,Ln(s)?!!s.capture:!!s,r):Ac(t,e,n,!0,s,r)}function Dc(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dc(t,e[i],n,s,r);else s=Ln(s)?!!s.capture:!!s,n=ki(n),t&&t[Fn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=qr(i,n,s,r),-1<n&&(js(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Di(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qr(e,n,s,r)),(n=-1<t?e[t]:null)&&Ri(n))}function Ri(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fn])Hr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(kc(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Di(e))?(Hr(n,t),n.h==0&&(n.src=null,e[Ai]=null)):js(t)}}}function kc(t){return t in Tr?Tr[t]:Tr[t]="on"+t}function wm(t,e){if(t.fa)t=!0;else{e=new _n(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Ri(t),t=n.call(s,e)}return t}function Di(t){return t=t[Ai],t instanceof zs?t:null}var Sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ki(t){return typeof t=="function"?t:(t[Sr]||(t[Sr]=function(e){return t.handleEvent(e)}),t[Sr])}function ie(){it.call(this),this.i=new zs(this),this.S=this,this.J=null}oe(ie,it);ie.prototype[Fn]=!0;ie.prototype.removeEventListener=function(t,e,n,s){Dc(this,t,e,n,s)};function le(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new pe(e,t);else if(e instanceof pe)e.target=e.target||t;else{var r=e;e=new pe(s,t),Ic(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=os(o,s,!0,e)&&r}if(o=e.g=t,r=os(o,s,!0,e)&&r,r=os(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=os(o,s,!1,e)&&r}ie.prototype.N=function(){if(ie.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)js(n[s]);delete t.g[e],t.h--}}this.J=null};ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ie.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function os(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Hr(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var xi=C.JSON.stringify;class _m{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Tm(){var t=Ni;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Sm{constructor(){this.h=this.g=null}add(e,n){const s=xc.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var xc=new _m(()=>new Cm,t=>t.reset());class Cm{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Im(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function bm(t){C.setTimeout(()=>{throw t},0)}let Tn,Sn=!1,Ni=new Sm,Nc=()=>{const t=C.Promise.resolve(void 0);Tn=()=>{t.then(Am)}};var Am=()=>{for(var t;t=Tm();){try{t.h.call(t.g)}catch(n){bm(n)}var e=xc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sn=!1};function Hs(t,e){ie.call(this),this.h=t||1,this.g=e||C,this.j=ge(this.qb,this),this.l=Date.now()}oe(Hs,ie);w=Hs.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),le(this,"tick"),this.ga&&($i(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $i(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}w.N=function(){Hs.$.N.call(this),$i(this),delete this.g};function Pi(t,e,n){if(typeof t=="function")n&&(t=ge(t,n));else if(t&&typeof t.handleEvent=="function")t=ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(t,e||0)}function $c(t){t.g=Pi(()=>{t.g=null,t.i&&(t.i=!1,$c(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Rm extends it{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$c(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cn(t){it.call(this),this.h=t,this.g={}}oe(Cn,it);var Jo=[];function Pc(t,e,n,s){Array.isArray(n)||(n&&(Jo[0]=n.toString()),n=Jo);for(var r=0;r<n.length;r++){var i=bc(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Mc(t){bi(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ri(e)},t),t.g={}}Cn.prototype.N=function(){Cn.$.N.call(this),Mc(this)};Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qs(){this.g=!0}qs.prototype.Ea=function(){this.g=!1};function Dm(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function km(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function kt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Nm(t,n)+(s?" "+s:"")})}function xm(t,e){t.info(function(){return"TIMEOUT: "+e})}qs.prototype.info=function(){};function Nm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return xi(n)}catch{return e}}var St={},Zo=null;function Gs(){return Zo=Zo||new ie}St.Ta="serverreachability";function Oc(t){pe.call(this,St.Ta,t)}oe(Oc,pe);function In(t){const e=Gs();le(e,new Oc(e))}St.STAT_EVENT="statevent";function Vc(t,e){pe.call(this,St.STAT_EVENT,t),this.stat=e}oe(Vc,pe);function Te(t){const e=Gs();le(e,new Vc(e,t))}St.Ua="timingevent";function Lc(t,e){pe.call(this,St.Ua,t),this.size=e}oe(Lc,pe);function Bn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){t()},e)}var Ks={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mi(){}Mi.prototype.h=null;function ea(t){return t.h||(t.h=t.i())}function Bc(){}var Un={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Oi(){pe.call(this,"d")}oe(Oi,pe);function Vi(){pe.call(this,"c")}oe(Vi,pe);var Gr;function Ws(){}oe(Ws,Mi);Ws.prototype.g=function(){return new XMLHttpRequest};Ws.prototype.i=function(){return{}};Gr=new Ws;function jn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Cn(this),this.P=$m,t=Ur?125:void 0,this.V=new Hs(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Uc}function Uc(){this.i=null,this.g="",this.h=!1}var $m=45e3,Kr={},Cs={};w=jn.prototype;w.setTimeout=function(t){this.P=t};function Wr(t,e,n){t.L=1,t.v=Qs(He(e)),t.s=n,t.S=!0,jc(t,null)}function jc(t,e){t.G=Date.now(),zn(t),t.A=He(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Qc(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Uc,t.g=yl(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Rm(ge(t.Pa,t,t.g),t.O)),Pc(t.U,t.g,"readystatechange",t.nb),e=t.I?Cc(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),In(),Dm(t.j,t.u,t.A,t.m,t.W,t.s)}w.nb=function(t){t=t.target;const e=this.M;e&&Oe(t)==3?e.l():this.Pa(t)};w.Pa=function(t){try{if(t==this.g)e:{const u=Oe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ur||this.g&&(this.h.h||this.g.ja()||ra(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?In(3):In(2)),Ys(this);var n=this.g.da();this.ca=n;t:if(zc(this)){var s=ra(this.g);t="";var r=s.length,i=Oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ht(this),dn(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,km(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wn(a)){var l=a;break t}}l=null}if(n=l)kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yr(this,n);else{this.i=!1,this.o=3,Te(12),ht(this),dn(this);break e}}this.S?(Hc(this,u,o),Ur&&this.i&&u==3&&(Pc(this.U,this.V,"tick",this.mb),this.V.start())):(kt(this.j,this.m,o,null),Yr(this,o)),u==4&&ht(this),this.i&&!this.J&&(u==4?fl(this.l,this):(this.i=!1,zn(this)))}else eg(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Te(12)):(this.o=0,Te(13)),ht(this),dn(this)}}}catch{}finally{}};function zc(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Hc(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=Pm(t,n),r==Cs){e==4&&(t.o=4,Te(14),s=!1),kt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Kr){t.o=4,Te(15),kt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else kt(t.j,t.m,r,null),Yr(t,r);zc(t)&&r!=Cs&&r!=Kr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Te(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zi(e),e.M=!0,Te(11))):(kt(t.j,t.m,n,"[Invalid Chunked Response]"),ht(t),dn(t))}w.mb=function(){if(this.g){var t=Oe(this.g),e=this.g.ja();this.C<e.length&&(Ys(this),Hc(this,t,e),this.i&&t!=4&&zn(this))}};function Pm(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Cs:(n=Number(e.substring(n,s)),isNaN(n)?Kr:(s+=1,s+n>e.length?Cs:(e=e.slice(s,s+n),t.C=s+n,e)))}w.cancel=function(){this.J=!0,ht(this)};function zn(t){t.Y=Date.now()+t.P,qc(t,t.P)}function qc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bn(ge(t.lb,t),e)}function Ys(t){t.B&&(C.clearTimeout(t.B),t.B=null)}w.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xm(this.j,this.A),this.L!=2&&(In(),Te(17)),ht(this),this.o=2,dn(this)):qc(this,this.Y-t)};function dn(t){t.l.H==0||t.J||fl(t.l,t)}function ht(t){Ys(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,$i(t.V),Mc(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Yr(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qr(n.i,t))){if(!t.K&&Qr(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)As(n),Zs(n);else break e;ji(n),Te(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bn(ge(n.ib,n),6e3));if(1>=Zc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else dt(n,11)}else if((t.K||n.g==t)&&As(n),!wn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const m=l[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const d=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var i=s.i;i.g||d.indexOf("spdy")==-1&&d.indexOf("quic")==-1&&d.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Li(i,i.h),i.h=null))}if(s.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,U(s.I,s.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=pl(s,s.J?s.pa:null,s.Y),o.K){el(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Ys(a),zn(a)),s.g=o}else hl(s);0<n.j.length&&er(n)}else l[0]!="stop"&&l[0]!="close"||dt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?dt(n,7):Ui(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}In(4)}catch{}}function Mm(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Om(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Gc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Om(t),s=Mm(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vm(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gt){this.h=t.h,Is(this,t.j),this.s=t.s,this.g=t.g,bs(this,t.m),this.l=t.l;var e=t.i,n=new bn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ta(this,n),this.o=t.o}else t&&(e=String(t).match(Kc))?(this.h=!1,Is(this,e[1]||"",!0),this.s=cn(e[2]||""),this.g=cn(e[3]||"",!0),bs(this,e[4]),this.l=cn(e[5]||"",!0),ta(this,e[6]||"",!0),this.o=cn(e[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}gt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ln(e,na,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ln(e,na,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ln(n,n.charAt(0)=="/"?Bm:Fm,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ln(n,jm)),t.join("")};function He(t){return new gt(t)}function Is(t,e,n){t.j=n?cn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ta(t,e,n){e instanceof bn?(t.i=e,zm(t.i,t.h)):(n||(e=ln(e,Um)),t.i=new bn(e,t.h))}function U(t,e,n){t.i.set(e,n)}function Qs(t){return U(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ln(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Lm),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lm(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var na=/[#\/\?@]/g,Fm=/[#\?:]/g,Bm=/[#\?]/g,Um=/[#\?@]/g,jm=/#/g;function bn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ot(t){t.g||(t.g=new Map,t.h=0,t.i&&Vm(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}w=bn.prototype;w.add=function(t,e){ot(this),this.i=null,t=Wt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wc(t,e){ot(t),e=Wt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Yc(t,e){return ot(t),e=Wt(t,e),t.g.has(e)}w.forEach=function(t,e){ot(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};w.ta=function(){ot(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};w.Z=function(t){ot(this);let e=[];if(typeof t=="string")Yc(this,t)&&(e=e.concat(this.g.get(Wt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};w.set=function(t,e){return ot(this),this.i=null,t=Wt(this,t),Yc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Qc(t,e,n){Wc(t,e),0<n.length&&(t.i=null,t.g.set(Wt(t,e),Ci(n)),t.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Wt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zm(t,e){e&&!t.j&&(ot(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wc(this,s),Qc(this,r,n))},t)),t.j=e}var Hm=class{constructor(t,e){this.g=t,this.map=e}};function Xc(t){this.l=t||qm,C.PerformanceNavigationTiming?(t=C.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qm=10;function Jc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zc(t){return t.h?1:t.g?t.g.size:0}function Qr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Li(t,e){t.g?t.g.add(e):t.h=e}function el(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Xc.prototype.cancel=function(){if(this.i=tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tl(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ci(t.i)}var Gm=class{stringify(t){return C.JSON.stringify(t,void 0)}parse(t){return C.JSON.parse(t,void 0)}};function Km(){this.g=new Gm}function Wm(t,e,n){const s=n||"";try{Gc(t,function(r,i){let o=r;Ln(r)&&(o=xi(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ym(t,e){const n=new qs;if(C.Image){const s=new Image;s.onload=is(as,n,s,"TestLoadImage: loaded",!0,e),s.onerror=is(as,n,s,"TestLoadImage: error",!1,e),s.onabort=is(as,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=is(as,n,s,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function as(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hn(t){this.l=t.fc||null,this.j=t.ob||!1}oe(Hn,Mi);Hn.prototype.g=function(){return new Xs(this.l,this.j)};Hn.prototype.i=function(t){return function(){return t}}({});function Xs(t,e){ie.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(Xs,ie);var Fi=0;w=Xs.prototype;w.open=function(t,e){if(this.readyState!=Fi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,An(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||C).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=Fi};w.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nl(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function nl(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}w.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qn(this):An(this),this.readyState==3&&nl(this)}};w.Za=function(t){this.g&&(this.response=this.responseText=t,qn(this))};w.Ya=function(t){this.g&&(this.response=t,qn(this))};w.ka=function(){this.g&&qn(this)};function qn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,An(t)}w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function An(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qm=C.JSON.parse;function q(t){ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sl,this.L=this.M=!1}oe(q,ie);var sl="",Xm=/^https?$/i,Jm=["POST","PUT"];w=q.prototype;w.Oa=function(t){this.M=t};w.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gr.g(),this.C=this.u?ea(this.u):ea(Gr),this.g.onreadystatechange=ge(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sa(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=C.FormData&&t instanceof C.FormData,!(0<=wc(Jm,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ol(this),0<this.B&&((this.L=Zm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ge(this.ua,this)):this.A=Pi(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sa(this,i)}};function Zm(t){return Vt&&typeof t.timeout=="number"&&t.ontimeout!==void 0}w.ua=function(){typeof Si<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))};function sa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rl(t),Js(t)}function rl(t){t.F||(t.F=!0,le(t,"complete"),le(t,"error"))}w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,le(this,"complete"),le(this,"abort"),Js(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Js(this,!0)),q.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?il(this):this.kb())};w.kb=function(){il(this)};function il(t){if(t.h&&typeof Si<"u"&&(!t.C[1]||Oe(t)!=4||t.da()!=2)){if(t.v&&Oe(t)==4)Pi(t.La,0,t);else if(le(t,"readystatechange"),Oe(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Kc)[1]||null;!r&&C.self&&C.self.location&&(r=C.self.location.protocol.slice(0,-1)),s=!Xm.test(r?r.toLowerCase():"")}n=s}if(n)le(t,"complete"),le(t,"success");else{t.m=6;try{var i=2<Oe(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",rl(t)}}finally{Js(t)}}}}function Js(t,e){if(t.g){ol(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||le(t,"ready");try{n.onreadystatechange=s}catch{}}}function ol(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(C.clearTimeout(t.A),t.A=null)}w.isActive=function(){return!!this.g};function Oe(t){return t.g?t.g.readyState:0}w.da=function(){try{return 2<Oe(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qm(e)}};function ra(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sl:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function eg(t){const e={};t=(t.g&&2<=Oe(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(wn(t[s]))continue;var n=Im(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}vm(e,function(s){return s.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function al(t){let e="";return bi(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Bi(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=al(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):U(t,e,n))}function sn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cl(t){this.Ga=0,this.j=[],this.l=new qs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=sn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=sn("baseRetryDelayMs",5e3,t),this.hb=sn("retryDelaySeedMs",1e4,t),this.eb=sn("forwardChannelMaxRetries",2,t),this.xa=sn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Xc(t&&t.concurrentRequestLimit),this.Ja=new Km,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=cl.prototype;w.ra=8;w.H=1;function Ui(t){if(ll(t),t.H==3){var e=t.W++,n=He(t.I);if(U(n,"SID",t.K),U(n,"RID",e),U(n,"TYPE","terminate"),Gn(t,n),e=new jn(t,t.l,e),e.L=2,e.v=Qs(He(n)),n=!1,C.navigator&&C.navigator.sendBeacon)try{n=C.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&C.Image&&(new Image().src=e.v,n=!0),n||(e.g=yl(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zn(e)}gl(t)}function Zs(t){t.g&&(zi(t),t.g.cancel(),t.g=null)}function ll(t){Zs(t),t.u&&(C.clearTimeout(t.u),t.u=null),As(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&C.clearTimeout(t.m),t.m=null)}function er(t){if(!Jc(t.i)&&!t.m){t.m=!0;var e=t.Na;Tn||Nc(),Sn||(Tn(),Sn=!0),Ni.add(e,t),t.C=0}}function tg(t,e){return Zc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bn(ge(t.Na,t,e),ml(t,t.C)),t.C++,!0)}w.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new jn(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Cc(i),Ic(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ul(this,r,e),n=He(this.I),U(n,"RID",t),U(n,"CVER",22),this.F&&U(n,"X-HTTP-Session-Id",this.F),Gn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(al(i)))+"&"+e:this.o&&Bi(n,this.o,i)),Li(this.i,r),this.bb&&U(n,"TYPE","init"),this.P?(U(n,"$req",e),U(n,"SID","null"),r.aa=!0,Wr(r,n,null)):Wr(r,n,e),this.H=2}}else this.H==3&&(t?ia(this,t):this.j.length==0||Jc(this.i)||ia(this))};function ia(t,e){var n;e?n=e.m:n=t.W++;const s=He(t.I);U(s,"SID",t.K),U(s,"RID",n),U(s,"AID",t.V),Gn(t,s),t.o&&t.s&&Bi(s,t.o,t.s),n=new jn(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ul(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Li(t.i,n),Wr(n,s,e)}function Gn(t,e){t.na&&bi(t.na,function(n,s){U(e,s,n)}),t.h&&Gc({},function(n,s){U(e,s,n)})}function ul(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ge(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{Wm(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function hl(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Tn||Nc(),Sn||(Tn(),Sn=!0),Ni.add(e,t),t.A=0}}function ji(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bn(ge(t.Ma,t),ml(t,t.A)),t.A++,!0)}w.Ma=function(){if(this.u=null,dl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bn(ge(this.jb,this),t)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Te(10),Zs(this),dl(this))};function zi(t){t.B!=null&&(C.clearTimeout(t.B),t.B=null)}function dl(t){t.g=new jn(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=He(t.wa);U(e,"RID","rpc"),U(e,"SID",t.K),U(e,"AID",t.V),U(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&U(e,"TO",t.qa),U(e,"TYPE","xmlhttp"),Gn(t,e),t.o&&t.s&&Bi(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Qs(He(e)),n.s=null,n.S=!0,jc(n,t)}w.ib=function(){this.v!=null&&(this.v=null,Zs(this),ji(this),Te(19))};function As(t){t.v!=null&&(C.clearTimeout(t.v),t.v=null)}function fl(t,e){var n=null;if(t.g==e){As(t),zi(t),t.g=null;var s=2}else if(Qr(t.i,e))n=e.F,el(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Gs(),le(s,new Lc(s,n)),er(t)}else hl(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&tg(t,e)||s==2&&ji(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:dt(t,5);break;case 4:dt(t,10);break;case 3:dt(t,6);break;default:dt(t,2)}}}function ml(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function dt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ge(t.pb,t);n||(n=new gt("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||Is(n,"https"),Qs(n)),Ym(n.toString(),s)}else Te(2);t.H=0,t.h&&t.h.za(e),gl(t),ll(t)}w.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Te(2)):(this.l.info("Failed to ping google.com"),Te(1))};function gl(t){if(t.H=0,t.ma=[],t.h){const e=tl(t.i);(e.length!=0||t.j.length!=0)&&(Yo(t.ma,e),Yo(t.ma,t.j),t.i.i.length=0,Ci(t.j),t.j.length=0),t.h.ya()}}function pl(t,e,n){var s=n instanceof gt?He(n):new gt(n);if(s.g!="")e&&(s.g=e+"."+s.g),bs(s,s.m);else{var r=C.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new gt(null);s&&Is(i,s),e&&(i.g=e),r&&bs(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&U(s,n,e),U(s,"VER",t.ra),Gn(t,s),s}function yl(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new q(new Hn({ob:!0})):new q(t.va),e.Oa(t.J),e}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function vl(){}w=vl.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function Rs(){if(Vt&&!(10<=Number(mm)))throw Error("Environmental error: no available transport.")}Rs.prototype.g=function(t,e){return new Ie(t,e)};function Ie(t,e){ie.call(this),this.g=new cl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!wn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yt(this)}oe(Ie,ie);Ie.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Te(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pl(t,null,t.Y),er(t)};Ie.prototype.close=function(){Ui(this.g)};Ie.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xi(t),t=n);e.j.push(new Hm(e.fb++,t)),e.H==3&&er(e)};Ie.prototype.N=function(){this.g.h=null,delete this.j,Ui(this.g),delete this.g,Ie.$.N.call(this)};function El(t){Oi.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}oe(El,Oi);function wl(){Vi.call(this),this.status=1}oe(wl,Vi);function Yt(t){this.g=t}oe(Yt,vl);Yt.prototype.Ba=function(){le(this.g,"a")};Yt.prototype.Aa=function(t){le(this.g,new El(t))};Yt.prototype.za=function(t){le(this.g,new wl)};Yt.prototype.ya=function(){le(this.g,"b")};function ng(){this.blockSize=-1}function ke(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(ke,ng);ke.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Cr(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}ke.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Cr(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Cr(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Cr(this,s),r=0;break}}this.h=r,this.i+=e};ke.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function B(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var sg={};function Hi(t){return-128<=t&&128>t?hm(t,function(e){return new B([e|0],0>e?-1:0)}):new B([t|0],0>t?-1:0)}function Ve(t){if(isNaN(t)||!isFinite(t))return Nt;if(0>t)return ce(Ve(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Xr;return new B(e,0)}function _l(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ce(_l(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ve(Math.pow(e,8)),s=Nt,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Ve(Math.pow(e,i)),s=s.R(i).add(Ve(o))):(s=s.R(n),s=s.add(Ve(o)))}return s}var Xr=4294967296,Nt=Hi(0),Jr=Hi(1),oa=Hi(16777216);w=B.prototype;w.ea=function(){if(be(this))return-ce(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Xr+s)*e,e*=Xr}return t};w.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(je(this))return"0";if(be(this))return"-"+ce(this).toString(t);for(var e=Ve(Math.pow(t,6)),n=this,s="";;){var r=ks(n,e).g;n=Ds(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,je(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};w.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function je(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function be(t){return t.h==-1}w.X=function(t){return t=Ds(this,t),be(t)?-1:je(t)?0:1};function ce(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new B(n,~t.h).add(Jr)}w.abs=function(){return be(this)?ce(this):this};w.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new B(n,n[n.length-1]&-2147483648?-1:0)};function Ds(t,e){return t.add(ce(e))}w.R=function(t){if(je(this)||je(t))return Nt;if(be(this))return be(t)?ce(this).R(ce(t)):ce(ce(this).R(t));if(be(t))return ce(this.R(ce(t)));if(0>this.X(oa)&&0>t.X(oa))return Ve(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,cs(n,2*s+2*r),n[2*s+2*r+1]+=i*c,cs(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,cs(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,cs(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new B(n,0)};function cs(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function rn(t,e){this.g=t,this.h=e}function ks(t,e){if(je(e))throw Error("division by zero");if(je(t))return new rn(Nt,Nt);if(be(t))return e=ks(ce(t),e),new rn(ce(e.g),ce(e.h));if(be(e))return e=ks(t,ce(e)),new rn(ce(e.g),e.h);if(30<t.g.length){if(be(t)||be(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Jr,s=e;0>=s.X(t);)n=aa(n),s=aa(s);var r=At(n,1),i=At(s,1);for(s=At(s,2),n=At(n,2);!je(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=At(s,1),n=At(n,1)}return e=Ds(t,r.R(e)),new rn(r,e)}for(r=Nt;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Ve(n),o=i.R(e);be(o)||0<o.X(t);)n-=s,i=Ve(n),o=i.R(e);je(i)&&(i=Jr),r=r.add(i),t=Ds(t,o)}return new rn(r,t)}w.gb=function(t){return ks(this,t).h};w.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new B(n,this.h&t.h)};w.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new B(n,this.h|t.h)};w.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new B(n,this.h^t.h)};function aa(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new B(n,t.h)}function At(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new B(r,t.h)}Rs.prototype.createWebChannel=Rs.prototype.g;Ie.prototype.send=Ie.prototype.u;Ie.prototype.open=Ie.prototype.m;Ie.prototype.close=Ie.prototype.close;Ks.NO_ERROR=0;Ks.TIMEOUT=8;Ks.HTTP_ERROR=6;Fc.COMPLETE="complete";Bc.EventType=Un;Un.OPEN="a";Un.CLOSE="b";Un.ERROR="c";Un.MESSAGE="d";ie.prototype.listen=ie.prototype.O;q.prototype.listenOnce=q.prototype.P;q.prototype.getLastError=q.prototype.Sa;q.prototype.getLastErrorCode=q.prototype.Ia;q.prototype.getStatus=q.prototype.da;q.prototype.getResponseJson=q.prototype.Wa;q.prototype.getResponseText=q.prototype.ja;q.prototype.send=q.prototype.ha;q.prototype.setWithCredentials=q.prototype.Oa;ke.prototype.digest=ke.prototype.l;ke.prototype.reset=ke.prototype.reset;ke.prototype.update=ke.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=Ve;B.fromString=_l;var rg=function(){return new Rs},ig=function(){return Gs()},Ir=Ks,og=Fc,ag=St,ca={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cg=Hn,ls=Bc,lg=q,ug=ke,$t=B;const la="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new wi("@firebase/firestore");function ua(){return Et.logLevel}function _(t,...e){if(Et.logLevel<=F.DEBUG){const n=e.map(qi);Et.debug(`Firestore (${Qt}): ${t}`,...n)}}function qe(t,...e){if(Et.logLevel<=F.ERROR){const n=e.map(qi);Et.error(`Firestore (${Qt}): ${t}`,...n)}}function Lt(t,...e){if(Et.logLevel<=F.WARN){const n=e.map(qi);Et.warn(`Firestore (${Qt}): ${t}`,...n)}}function qi(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t="Unexpected state"){const e=`FIRESTORE (${Qt}) INTERNAL ASSERTION FAILED: `+t;throw qe(e),new Error(e)}function j(t,e){t||I()}function k(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(de.UNAUTHENTICATED))}shutdown(){}}class dg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fg{constructor(e){this.t=e,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new et,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new et)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(j(typeof s.accessToken=="string"),new Tl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new de(e)}}class mg{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=de.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class gg{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new mg(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yg{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.T=n.token,new pg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=vg(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function O(t,e){return t<e?-1:t>e?1:0}function Ft(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new ne(0,0))}static max(){return new A(new ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,s){n===void 0?n=0:n>e.length&&I(),s===void 0?s=e.length-n:s>e.length-n&&I(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class H extends Rn{construct(e,n,s){return new H(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new S(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new H(n)}static emptyPath(){return new H([])}}const Eg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Rn{construct(e,n,s){return new me(e,n,s)}static isValidIdentifier(e){return Eg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new S(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new S(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(n)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(H.fromString(e))}static fromName(e){return new T(H.fromString(e).popFirst(5))}static empty(){return new T(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&H.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return H.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new H(e.slice()))}}function wg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=A.fromTimestamp(s===1e9?new ne(n+1,0):new ne(n,s));return new tt(r,T.empty(),e)}function _g(t){return new tt(t.readTime,t.key,-1)}class tt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new tt(A.min(),T.empty(),-1)}static max(){return new tt(A.max(),T.empty(),-1)}}function Tg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=T.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==Sg)throw t;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(r=>r?y.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new y((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new y((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Gi.ct=-1;function tr(t){return t==null}function xs(t){return t===0&&1/t==-1/0}function Ig(t){return typeof t=="number"&&Number.isInteger(t)&&!xs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.comparator=e,this.root=n||ae.EMPTY}insert(e,n){return new z(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new us(this.root,e,this.comparator,!1)}getReverseIterator(){return new us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new us(this.root,e,this.comparator,!0)}}class us{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:ae.RED,this.left=r!=null?r:ae.EMPTY,this.right=i!=null?i:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ae(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ae.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new da(this.data.getIterator())}getIteratorFrom(e){return new da(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class da{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new De([])}unionWith(e){let n=new ye(me.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new De(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ft(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Il("Invalid base64 string: "+r):r}}(e);return new ve(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const bg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nt(t){if(j(!!t),typeof t=="string"){let e=0;const n=bg.exec(t);if(j(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Q(t.seconds),nanos:Q(t.nanos)}}function Q(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wt(t){return typeof t=="string"?ve.fromBase64String(t):ve.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wi(t){const e=t.mapValue.fields.__previous_value__;return Ki(e)?Wi(e):e}function Dn(t){const e=nt(t.mapValue.fields.__local_write_time__.timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class kn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _t(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ki(t)?4:Rg(t)?9007199254740991:10:I()}function Fe(t,e){if(t===e)return!0;const n=_t(t);if(n!==_t(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dn(t).isEqual(Dn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=nt(s.timestampValue),o=nt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return wt(s.bytesValue).isEqual(wt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Q(s.geoPointValue.latitude)===Q(r.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Q(s.integerValue)===Q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Q(s.doubleValue),o=Q(r.doubleValue);return i===o?xs(i)===xs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ft(t.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ha(i)!==ha(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Fe(i[a],o[a])))return!1;return!0}(t,e);default:return I()}}function xn(t,e){return(t.values||[]).find(n=>Fe(n,e))!==void 0}function Bt(t,e){if(t===e)return 0;const n=_t(t),s=_t(e);if(n!==s)return O(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Q(r.integerValue||r.doubleValue),a=Q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return fa(t.timestampValue,e.timestampValue);case 4:return fa(Dn(t),Dn(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(r,i){const o=wt(r),a=wt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=O(o[c],a[c]);if(l!==0)return l}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=O(Q(r.latitude),Q(i.latitude));return o!==0?o:O(Q(r.longitude),Q(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Bt(o[c],a[c]);if(l)return l}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===hs.mapValue&&i===hs.mapValue)return 0;if(r===hs.mapValue)return 1;if(i===hs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=O(a[u],l[u]);if(h!==0)return h;const m=Bt(o[a[u]],c[l[u]]);if(m!==0)return m}return O(a.length,l.length)}(t.mapValue,e.mapValue);default:throw I()}}function fa(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=nt(t),s=nt(e),r=O(n.seconds,s.seconds);return r!==0?r:O(n.nanos,s.nanos)}function Ut(t){return Zr(t)}function Zr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=nt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?wt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,T.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Zr(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Zr(s.fields[a])}`;return i+"}"}(t.mapValue):I();var e,n}function ei(t){return!!t&&"integerValue"in t}function Yi(t){return!!t&&"arrayValue"in t}function ma(t){return!!t&&"nullValue"in t}function ga(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ys(t){return!!t&&"mapValue"in t}function fn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=fn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ys(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fn(n)}setAll(e){let n=me.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=fn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ys(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ys(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Xt(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ae(fn(this.value))}}function bl(t){const e=[];return Xt(t.fields,(n,s)=>{const r=new me([n]);if(ys(s)){const i=bl(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new De(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new fe(e,0,A.min(),A.min(),A.min(),Ae.empty(),0)}static newFoundDocument(e,n,s,r){return new fe(e,1,n,A.min(),s,r,0)}static newNoDocument(e,n){return new fe(e,2,n,A.min(),A.min(),Ae.empty(),0)}static newUnknownDocument(e,n){return new fe(e,3,n,A.min(),A.min(),Ae.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.position=e,this.inclusive=n}}function pa(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Bt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ya(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Dg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{}class te extends Al{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new xg(e,n,s):n==="array-contains"?new Pg(e,s):n==="in"?new Mg(e,s):n==="not-in"?new Og(e,s):n==="array-contains-any"?new Vg(e,s):new te(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Ng(e,s):new $g(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bt(n,this.value)):n!==null&&_t(this.value)===_t(n)&&this.matchesComparison(Bt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Be extends Al{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Be(e,n)}matches(e){return Rl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Rl(t){return t.op==="and"}function Dl(t){return kg(t)&&Rl(t)}function kg(t){for(const e of t.filters)if(e instanceof Be)return!1;return!0}function ti(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+Ut(t.value);if(Dl(t))return t.filters.map(e=>ti(e)).join(",");{const e=t.filters.map(n=>ti(n)).join(",");return`${t.op}(${e})`}}function kl(t,e){return t instanceof te?function(n,s){return s instanceof te&&n.op===s.op&&n.field.isEqual(s.field)&&Fe(n.value,s.value)}(t,e):t instanceof Be?function(n,s){return s instanceof Be&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&kl(i,s.filters[o]),!0):!1}(t,e):void I()}function xl(t){return t instanceof te?function(e){return`${e.field.canonicalString()} ${e.op} ${Ut(e.value)}`}(t):t instanceof Be?function(e){return e.op.toString()+" {"+e.getFilters().map(xl).join(" ,")+"}"}(t):"Filter"}class xg extends te{constructor(e,n,s){super(e,n,s),this.key=T.fromName(s.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ng extends te{constructor(e,n){super(e,"in",n),this.keys=Nl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $g extends te{constructor(e,n){super(e,"not-in",n),this.keys=Nl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class Pg extends te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yi(n)&&xn(n.arrayValue,this.value)}}class Mg extends te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xn(this.value.arrayValue,n)}}class Og extends te{constructor(e,n){super(e,"not-in",n)}matches(e){if(xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xn(this.value.arrayValue,n)}}class Vg extends te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function va(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Lg(t,e,n,s,r,i,o)}function Qi(t){const e=k(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ti(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),tr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ut(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ut(s)).join(",")),e.dt=n}return e.dt}function Xi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Dg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ya(t.startAt,e.startAt)&&ya(t.endAt,e.endAt)}function ni(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Fg(t,e,n,s,r,i,o,a){return new nr(t,e,n,s,r,i,o,a)}function Ji(t){return new nr(t)}function Ea(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ug(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function jg(t){return t.collectionGroup!==null}function Pt(t){const e=k(t);if(e.wt===null){e.wt=[];const n=Ug(e),s=Bg(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new mn(n)),e.wt.push(new mn(me.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new mn(me.keyField(),i))}}}return e.wt}function Ge(t){const e=k(t);if(!e._t)if(e.limitType==="F")e._t=va(e.path,e.collectionGroup,Pt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Pt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new mn(i.field,o))}const s=e.endAt?new Ns(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ns(e.startAt.position,e.startAt.inclusive):null;e._t=va(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function si(t,e,n){return new nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sr(t,e){return Xi(Ge(t),Ge(e))&&t.limitType===e.limitType}function $l(t){return`${Qi(Ge(t))}|lt:${t.limitType}`}function ri(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>xl(s)).join(", ")}]`),tr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ut(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ut(s)).join(",")),`Target(${n})`}(Ge(t))}; limitType=${t.limitType})`}function rr(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Pt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=pa(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Pt(n),s)||n.endAt&&!function(r,i,o){const a=pa(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Pt(n),s))}(t,e)}function zg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pl(t){return(e,n)=>{let s=!1;for(const r of Pt(t)){const i=Hg(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Hg(t,e,n){const s=t.field.isKeyField()?T.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Bt(a,c):I()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xt(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Cl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new z(T.comparator);function Ke(){return qg}const Ml=new z(T.comparator);function un(...t){let e=Ml;for(const n of t)e=e.insert(n.key,n);return e}function Ol(t){let e=Ml;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ft(){return gn()}function Vl(){return gn()}function gn(){return new Jt(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gg=new z(T.comparator),Kg=new ye(T.comparator);function N(...t){let e=Kg;for(const n of t)e=e.add(n);return e}const Wg=new ye(O);function Yg(){return Wg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xs(e)?"-0":e}}function Fl(t){return{integerValue:""+t}}function Qg(t,e){return Ig(e)?Fl(e):Ll(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this._=void 0}}function Xg(t,e,n){return t instanceof $s?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ki(r)&&(r=Wi(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Nn?Ul(t,e):t instanceof $n?jl(t,e):function(s,r){const i=Bl(s,r),o=wa(i)+wa(s.gt);return ei(i)&&ei(s.gt)?Fl(o):Ll(s.serializer,o)}(t,e)}function Jg(t,e,n){return t instanceof Nn?Ul(t,e):t instanceof $n?jl(t,e):n}function Bl(t,e){return t instanceof Ps?ei(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class $s extends ir{}class Nn extends ir{constructor(e){super(),this.elements=e}}function Ul(t,e){const n=zl(e);for(const s of t.elements)n.some(r=>Fe(r,s))||n.push(s);return{arrayValue:{values:n}}}class $n extends ir{constructor(e){super(),this.elements=e}}function jl(t,e){let n=zl(e);for(const s of t.elements)n=n.filter(r=>!Fe(r,s));return{arrayValue:{values:n}}}class Ps extends ir{constructor(e,n){super(),this.serializer=e,this.gt=n}}function wa(t){return Q(t.integerValue||t.doubleValue)}function zl(t){return Yi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Zg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Nn&&s instanceof Nn||n instanceof $n&&s instanceof $n?Ft(n.elements,s.elements,Fe):n instanceof Ps&&s instanceof Ps?Fe(n.gt,s.gt):n instanceof $s&&s instanceof $s}(t.transform,e.transform)}class ep{constructor(e,n){this.version=e,this.transformResults=n}}class ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class or{}function Hl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gl(t.key,ze.none()):new Yn(t.key,t.data,ze.none());{const n=t.data,s=Ae.empty();let r=new ye(me.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ct(t.key,s,new De(r.toArray()),ze.none())}}function tp(t,e,n){t instanceof Yn?function(s,r,i){const o=s.value.clone(),a=Ta(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ct?function(s,r,i){if(!vs(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ta(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ql(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function pn(t,e,n,s){return t instanceof Yn?function(r,i,o,a){if(!vs(r.precondition,i))return o;const c=r.value.clone(),l=Sa(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ct?function(r,i,o,a){if(!vs(r.precondition,i))return o;const c=Sa(r.fieldTransforms,a,i),l=i.data;return l.setAll(ql(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return vs(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function np(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Bl(s.transform,r||null);i!=null&&(n===null&&(n=Ae.empty()),n.set(s.field,i))}return n||null}function _a(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ft(n,s,(r,i)=>Zg(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yn extends or{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ct extends or{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ql(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ta(t,e,n){const s=new Map;j(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Jg(o,a,n[r]))}return s}function Sa(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Xg(i,o,e))}return s}class Gl extends or{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sp extends or{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&tp(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=pn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=pn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Vl();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Hl(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),N())}isEqual(e){return this.batchId===e.batchId&&Ft(this.mutations,e.mutations,(n,s)=>_a(n,s))&&Ft(this.baseMutations,e.baseMutations,(n,s)=>_a(n,s))}}class Zi{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){j(e.mutations.length===s.length);let r=Gg;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Zi(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,$;function ap(t){switch(t){default:return I();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Kl(t){if(t===void 0)return qe("GRPC error has no .code"),p.UNKNOWN;switch(t){case Y.OK:return p.OK;case Y.CANCELLED:return p.CANCELLED;case Y.UNKNOWN:return p.UNKNOWN;case Y.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case Y.INTERNAL:return p.INTERNAL;case Y.UNAVAILABLE:return p.UNAVAILABLE;case Y.UNAUTHENTICATED:return p.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case Y.NOT_FOUND:return p.NOT_FOUND;case Y.ALREADY_EXISTS:return p.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return p.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case Y.ABORTED:return p.ABORTED;case Y.OUT_OF_RANGE:return p.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return p.UNIMPLEMENTED;case Y.DATA_LOSS:return p.DATA_LOSS;default:return I()}}($=Y||(Y={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ds}static getOrCreateInstance(){return ds===null&&(ds=new eo),ds}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ds=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new $t([4294967295,4294967295],0);function Ca(t){const e=cp().encode(t),n=new ug;return n.update(e),new Uint8Array(n.digest())}function Ia(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $t([n,s],0),new $t([r,i],0)]}class to{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new hn(`Invalid padding: ${n}`);if(s<0)throw new hn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new hn(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=$t.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply($t.fromNumber(s)));return r.compare(lp)===1&&(r=new $t([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Ca(e),[s,r]=Ia(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new to(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Ca(e),[s,r]=Ia(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Qn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ar(A.min(),r,new z(O),Ke(),N())}}class Qn{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Qn(s,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Wl{constructor(e,n){this.targetId=e,this.Vt=n}}class Yl{constructor(e,n,s=ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ba{constructor(){this.St=0,this.Dt=Ra(),this.Ct=ve.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=N(),n=N(),s=N();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new Qn(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Ra()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class up{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ke(),this.zt=Aa(),this.Wt=new z(O)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:I()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(ni(o))if(r===0){const a=new T(o.path);this.Yt(s,a,fe.newNoDocument(a,A.min()))}else j(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=eo.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var m,g,d,v,E,b;const V={localCacheCount:u,existenceFilterCount:h.count},K=h.unchangedNames;return K&&(V.bloomFilter={applied:l===0,hashCount:(m=K==null?void 0:K.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(v=(d=(g=K==null?void 0:K.bits)===null||g===void 0?void 0:g.bitmap)===null||d===void 0?void 0:d.length)!==null&&v!==void 0?v:0,padding:(b=(E=K==null?void 0:K.bits)===null||E===void 0?void 0:E.padding)!==null&&b!==void 0?b:0}),V}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=wt(i).toUint8Array()}catch(u){if(u instanceof Il)return Lt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new to(c,o,a)}catch(u){return Lt(u instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&ni(a.target)){const c=new T(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,fe.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=N();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new ar(e,n,this.Wt,this.jt,s);return this.jt=Ke(),this.zt=Aa(),this.Wt=new z(O),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ba,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ye(O),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||_("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ba),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Aa(){return new z(T.comparator)}function Ra(){return new z(T.comparator)}const hp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fp=(()=>({and:"AND",or:"OR"}))();class mp{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ii(t,e){return t.useProto3Json||tr(e)?e:{value:e}}function Ms(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ql(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gp(t,e){return Ms(t,e.toTimestamp())}function Le(t){return j(!!t),A.fromTimestamp(function(e){const n=nt(e);return new ne(n.seconds,n.nanos)}(t))}function no(t,e){return function(n){return new H(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xl(t){const e=H.fromString(t);return j(tu(e)),e}function oi(t,e){return no(t.databaseId,e.path)}function br(t,e){const n=Xl(e);if(n.get(1)!==t.databaseId.projectId)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(Jl(n))}function ai(t,e){return no(t.databaseId,e)}function pp(t){const e=Xl(t);return e.length===4?H.emptyPath():Jl(e)}function ci(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jl(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Da(t,e,n){return{name:oi(t,e),fields:n.value.mapValue.fields}}function yp(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(j(l===void 0||typeof l=="string"),ve.fromBase64String(l||"")):(j(l===void 0||l instanceof Uint8Array),ve.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?p.UNKNOWN:Kl(c.code);return new S(l,c.message||"")}(o);n=new Yl(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=br(t,s.document.name),i=Le(s.document.updateTime),o=s.document.createTime?Le(s.document.createTime):A.min(),a=new Ae({mapValue:{fields:s.document.fields}}),c=fe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Es(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=br(t,s.document),i=s.readTime?Le(s.readTime):A.min(),o=fe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Es([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=br(t,s.document),i=s.removedTargetIds||[];n=new Es([],i,r,null)}else{if(!("filter"in e))return I();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new op(r,i),a=s.targetId;n=new Wl(a,o)}}return n}function vp(t,e){let n;if(e instanceof Yn)n={update:Da(t,e.key,e.value)};else if(e instanceof Gl)n={delete:oi(t,e.key)};else if(e instanceof Ct)n={update:Da(t,e.key,e.data),updateMask:Ap(e.fieldMask)};else{if(!(e instanceof sp))return I();n={verify:oi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof $s)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Nn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $n)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ps)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw I()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:gp(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:I()}(t,e.precondition)),n}function Ep(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Le(s.updateTime):Le(r);return i.isEqual(A.min())&&(i=Le(r)),new ep(i,s.transformResults||[])}(n,e))):[]}function wp(t,e){return{documents:[ai(t,e.path)]}}function _p(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ai(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ai(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return eu(Be.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Rt(u.field),direction:Cp(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ii(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Tp(t){let e=pp(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){j(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Zl(u);return h instanceof Be&&Dl(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new mn(Dt(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,tr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,m=u.values||[];return new Ns(m,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,m=u.values||[];return new Ns(m,h)}(n.endAt)),Fg(e,r,o,i,a,"F",c,l)}function Sp(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zl(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Dt(e.unaryFilter.field);return te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Dt(e.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Dt(e.unaryFilter.field);return te.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Dt(e.unaryFilter.field);return te.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(t):t.fieldFilter!==void 0?function(e){return te.create(Dt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Be.create(e.compositeFilter.filters.map(n=>Zl(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(e.compositeFilter.op))}(t):I()}function Cp(t){return hp[t]}function Ip(t){return dp[t]}function bp(t){return fp[t]}function Rt(t){return{fieldPath:t.canonicalString()}}function Dt(t){return me.fromServerFormat(t.fieldPath)}function eu(t){return t instanceof te?function(e){if(e.op==="=="){if(ga(e.value))return{unaryFilter:{field:Rt(e.field),op:"IS_NAN"}};if(ma(e.value))return{unaryFilter:{field:Rt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ga(e.value))return{unaryFilter:{field:Rt(e.field),op:"IS_NOT_NAN"}};if(ma(e.value))return{unaryFilter:{field:Rt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rt(e.field),op:Ip(e.op),value:e.value}}}(t):t instanceof Be?function(e){const n=e.getFilters().map(s=>eu(s));return n.length===1?n[0]:{compositeFilter:{op:bp(e.op),filters:n}}}(t):I()}function Ap(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,s,r,i=A.min(),o=A.min(),a=ve.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.fe=e}}function Dp(t){const e=Tp({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?si(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.rn=new xp}addToCollectionParentIndex(e,n){return this.rn.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(tt.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(tt.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class xp{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ye(H.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ye(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new jt(0)}static Mn(){return new jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.changes=new Jt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&pn(s.mutation,r,De.empty(),ne.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,n,s=N()){const r=ft();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=un();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ft();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,N()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Ke();const o=gn(),a=gn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Ct)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),pn(u.mutation,l,u.mutation.getFieldMask(),ne.now())):o.set(l.key,De.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new $p(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=gn();let r=new z((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||De.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||N()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vl();u.forEach(m=>{if(!i.has(m)){const g=Hl(n.get(m),s.get(m));g!==null&&h.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):y.resolve(ft());let a=-1,c=i;return o.next(l=>y.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?y.resolve():this.remoteDocumentCache.getEntry(e,u).next(m=>{c=c.insert(u,m)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,N())).next(u=>({batchId:a,changes:Ol(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new T(n)).next(s=>{let r=un();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=un();return this.indexManager.getCollectionParents(e,r).next(o=>y.forEach(o,a=>{const c=function(l,u){return new nr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,fe.newInvalidDocument(l)))});let o=un();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&pn(l.mutation,c,De.empty(),ne.now()),rr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return y.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Le(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Dp(s.bundledQuery),readTime:Le(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.overlays=new z(T.comparator),this.ls=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ft();return y.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const r=ft(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return y.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new z((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ft(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ft(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return y.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ip(n,s));let i=this.ls.get(n);i===void 0&&(i=N(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.fs=new ye(re.ds),this.ws=new ye(re._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new re(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new re(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new T(new H([])),s=new re(n,e),r=new re(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new T(new H([])),s=new re(n,e),r=new re(n,e+1);let i=N();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new re(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class re{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return T.comparator(e.key,n.key)||O(e.As,n.As)}static _s(e,n){return O(e.As,n.As)||T.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ye(re.ds)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rp(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new re(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new re(n,0),r=new re(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ye(O);return n.forEach(r=>{const i=new re(r,0),o=new re(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),y.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;T.isDocumentKey(i)||(i=i.child(""));const o=new re(new T(i),0);let a=new ye(O);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),y.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){j(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return y.forEach(n.mutations,r=>{const i=new re(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new re(n,0),r=this.Rs.firstAfterOrEqual(s);return y.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.Ds=e,this.docs=new z(T.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():fe.newInvalidDocument(n))}getEntries(e,n){let s=Ke();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():fe.newInvalidDocument(r))}),y.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Ke();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Tg(_g(u),s)<=0||(r.has(u.key)||rr(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,n,s,r){I()}Cs(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Fp(this)}getSize(e){return y.resolve(this.size)}}class Fp extends Np{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.persistence=e,this.xs=new Jt(n=>Qi(n),Xi),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Ns=0,this.ks=new so,this.targetCount=0,this.Ms=jt.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),y.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new jt(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Fn(n),y.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),y.waitFor(i).next(()=>r)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.$s={},this.overlays={},this.Os=new Gi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Bp(this),this.indexManager=new kp,this.remoteDocumentCache=function(s){return new Lp(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Rp(n),this.qs=new Mp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Op,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new Vp(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){_("MemoryPersistence","Starting transaction:",e);const r=new jp(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return y.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class jp extends Cg{constructor(e){super(),this.currentSequenceNumber=e}}class ro{constructor(e){this.persistence=e,this.Qs=new so,this.js=null}static zs(e){return new ro(e)}get Ws(){if(this.js)return this.js;throw I()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),y.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Ws,s=>{const r=T.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,A.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return y.or([()=>y.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=N(),r=N();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new io(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Ea(n))return y.resolve(null);let s=Ge(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=si(n,null,"F"),s=Ge(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,si(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return Ea(n)||r.isEqual(A.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(ua()<=F.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ri(n)),this.Wi(e,o,n,wg(r,-1)))})}ji(e,n){let s=new ye(Pl(e));return n.forEach((r,i)=>{rr(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return ua()<=F.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ri(n)),this.Ui.getDocumentsMatchingQuery(e,n,tt.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new z(O),this.Yi=new Jt(i=>Qi(i),Xi),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pp(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function qp(t,e,n,s){return new Hp(t,e,n,s)}async function nu(t,e){const n=k(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=N();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Gp(t,e){const n=k(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let m=y.resolve();return h.forEach(g=>{m=m.next(()=>l.getEntry(a,g)).next(d=>{const v=c.docVersions.get(g);j(v!==null),d.version.compareTo(v)<0&&(u.applyToRemoteDocument(d,c),d.isValidDocument()&&(d.setReadTime(c.commitVersion),l.addEntry(d)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function su(t){const e=k(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Kp(t,e){const n=k(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const m=r.get(h);if(!m)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(ve.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(d,v,E){return d.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let c=Ke(),l=N();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Wp(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(A.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function Wp(t,e,n){let s=N(),r=N();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Ke();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function Yp(t,e){const n=k(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Qp(t,e){const n=k(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,y.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Xe(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function li(t,e,n){const s=k(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function ka(t,e,n){const s=k(t);let r=A.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=k(a),h=u.Yi.get(l);return h!==void 0?y.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,Ge(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:A.min(),n?i:N())).next(a=>(Xp(s,zg(e),a),{documents:a,ir:i})))}function Xp(t,e,n){let s=t.Xi.get(e)||A.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class xa{constructor(){this.activeTargetIds=Yg()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jp{constructor(){this.Hr=new xa,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new xa,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs=null;function Ar(){return fs===null?fs=268435456+Math.round(2147483648*Math.random()):fs++,"0x"+fs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="WebChannelConnection";class ny extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Ar(),a=this.To(e,n);_("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(_("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Lt("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=ey[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Ar();return new Promise((o,a)=>{const c=new lg;c.setWithCredentials(!0),c.listenOnce(og.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ir.NO_ERROR:const u=c.getResponseJson();_(he,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ir.TIMEOUT:_(he,`RPC '${e}' ${i} timed out`),a(new S(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ir.HTTP_ERROR:const h=c.getStatus();if(_(he,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const d=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(E)>=0?E:p.UNKNOWN}(g.status);a(new S(d,g.message))}else a(new S(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new S(p.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{_(he,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);_(he,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Ar(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rg(),a=ig(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new cg({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");_(he,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let m=!1,g=!1;const d=new ty({ro:E=>{g?_(he,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(m||(_(he,`Opening RPC '${e}' stream ${r} transport.`),h.open(),m=!0),_(he,`RPC '${e}' stream ${r} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,b,V)=>{E.listen(b,K=>{try{V(K)}catch(W){setTimeout(()=>{throw W},0)}})};return v(h,ls.EventType.OPEN,()=>{g||_(he,`RPC '${e}' stream ${r} transport opened.`)}),v(h,ls.EventType.CLOSE,()=>{g||(g=!0,_(he,`RPC '${e}' stream ${r} transport closed`),d.wo())}),v(h,ls.EventType.ERROR,E=>{g||(g=!0,Lt(he,`RPC '${e}' stream ${r} transport errored:`,E),d.wo(new S(p.UNAVAILABLE,"The operation could not be completed")))}),v(h,ls.EventType.MESSAGE,E=>{var b;if(!g){const V=E.data[0];j(!!V);const K=V,W=K.error||((b=K[0])===null||b===void 0?void 0:b.error);if(W){_(he,`RPC '${e}' stream ${r} received error:`,W);const X=W.status;let ue=function(Zn){const R=Y[Zn];if(R!==void 0)return Kl(R)}(X),xe=W.message;ue===void 0&&(ue=p.INTERNAL,xe="Unknown error status: "+X+" with message "+W.message),g=!0,d.wo(new S(ue,xe)),h.close()}else _(he,`RPC '${e}' stream ${r} received:`,V),d._o(V)}}),v(a,ag.STAT_EVENT,E=>{E.stat===ca.PROXY?_(he,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===ca.NOPROXY&&_(he,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.fo()},0),d}}function Rr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){return new mp(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ru(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(qe(n.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new S(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sy extends iu{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=yp(this.serializer,e),s=function(r){if(!("targetChange"in r))return A.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?A.min():i.readTime?Le(i.readTime):A.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=ci(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=ni(a)?{documents:wp(r,a)}:{query:_p(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Ql(r,i.resumeToken);const c=ii(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(A.min())>0){o.readTime=Ms(r,i.snapshotVersion.toTimestamp());const c=ii(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=Sp(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=ci(this.serializer),n.removeTarget=e,this.Wo(n)}}class ry extends iu{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Ep(e.writeResults,e.commitTime),s=Le(e.commitTime);return this.listener.cu(s,n)}return j(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ci(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>vp(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new S(p.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(p.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class oy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(qe(n),this.mu=!1):_("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{It(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=k(a);c.vu.add(4),await Xn(c),c.bu.set("Unknown"),c.vu.delete(4),await lr(c)}(this))})}),this.bu=new oy(s,r)}}async function lr(t){if(It(t))for(const e of t.Ru)await e(!0)}async function Xn(t){for(const e of t.Ru)await e(!1)}function ou(t,e){const n=k(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),co(n)?ao(n):Zt(n).Ko()&&oo(n,e))}function au(t,e){const n=k(t),s=Zt(n);n.Au.delete(e),s.Ko()&&cu(n,e),n.Au.size===0&&(s.Ko()?s.jo():It(n)&&n.bu.set("Unknown"))}function oo(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(A.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zt(t).su(e)}function cu(t,e){t.Vu.qt(e),Zt(t).iu(e)}function ao(t){t.Vu=new up({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Zt(t).start(),t.bu.gu()}function co(t){return It(t)&&!Zt(t).Uo()&&t.Au.size>0}function It(t){return k(t).vu.size===0}function lu(t){t.Vu=void 0}async function cy(t){t.Au.forEach((e,n)=>{oo(t,e)})}async function ly(t,e){lu(t),co(t)?(t.bu.Iu(e),ao(t)):t.bu.set("Unknown")}async function uy(t,e,n){if(t.bu.set("Online"),e instanceof Yl&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Os(t,s)}else if(e instanceof Es?t.Vu.Ht(e):e instanceof Wl?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(A.min()))try{const s=await su(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(ve.EMPTY_BYTE_STRING,l.snapshotVersion)),cu(r,a);const u=new Xe(l.target,a,c,l.sequenceNumber);oo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await Os(t,s)}}async function Os(t,e,n){if(!Wn(e))throw e;t.vu.add(1),await Xn(t),t.bu.set("Offline"),n||(n=()=>su(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await lr(t)})}function uu(t,e){return e().catch(n=>Os(t,n,e))}async function ur(t){const e=k(t),n=st(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;hy(e);)try{const r=await Yp(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,dy(e,r)}catch(r){await Os(e,r)}hu(e)&&du(e)}function hy(t){return It(t)&&t.Eu.length<10}function dy(t,e){t.Eu.push(e);const n=st(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function hu(t){return It(t)&&!st(t).Uo()&&t.Eu.length>0}function du(t){st(t).start()}async function fy(t){st(t).hu()}async function my(t){const e=st(t);for(const n of t.Eu)e.uu(n.mutations)}async function gy(t,e,n){const s=t.Eu.shift(),r=Zi.from(s,e,n);await uu(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ur(t)}async function py(t,e){e&&st(t).ou&&await async function(n,s){if(r=s.code,ap(r)&&r!==p.ABORTED){const i=n.Eu.shift();st(n).Qo(),await uu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ur(n)}var r}(t,e),hu(t)&&du(t)}async function $a(t,e){const n=k(t);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=It(n);n.vu.add(3),await Xn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await lr(n)}async function yy(t,e){const n=k(t);e?(n.vu.delete(2),await lr(n)):e||(n.vu.add(2),await Xn(n),n.bu.set("Unknown"))}function Zt(t){return t.Su||(t.Su=function(e,n,s){const r=k(e);return r.fu(),new sy(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:cy.bind(null,t),ao:ly.bind(null,t),nu:uy.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),co(t)?ao(t):t.bu.set("Unknown")):(await t.Su.stop(),lu(t))})),t.Su}function st(t){return t.Du||(t.Du=function(e,n,s){const r=k(e);return r.fu(),new ry(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:fy.bind(null,t),ao:py.bind(null,t),au:my.bind(null,t),cu:gy.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ur(t)):(await t.Du.stop(),t.Eu.length>0&&(_("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new lo(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uo(t,e){if(qe("AsyncQueue",`${e}: ${t}`),Wn(t))return new S(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=un(),this.sortedSet=new z(this.comparator)}static emptySet(e){return new Mt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.Cu=new z(T.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):I():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class zt{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zt(e,n,Mt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.Nu=void 0,this.listeners=[]}}class Ey{constructor(){this.queries=new Jt(e=>$l(e),sr),this.onlineState="Unknown",this.ku=new Set}}async function wy(t,e){const n=k(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new vy),r)try{i.Nu=await n.onListen(s)}catch(o){const a=uo(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&ho(n)}async function _y(t,e){const n=k(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ty(t,e){const n=k(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&ho(n)}function Sy(t,e,n){const s=k(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ho(t){t.ku.forEach(e=>{e.next()})}class Cy{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new zt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=zt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.key=e}}class mu{constructor(e){this.key=e}}class Iy{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=N(),this.mutatedKeys=N(),this.tc=Pl(e),this.ec=new Mt(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Pa,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const m=r.get(u),g=rr(this.query,h)?h:null,d=!!m&&this.mutatedKeys.has(m.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;m&&g?m.data.isEqual(g.data)?d!==v&&(s.track({type:3,doc:g}),E=!0):this.rc(m,g)||(s.track({type:2,doc:g}),E=!0,(c&&this.tc(g,c)>0||l&&this.tc(g,l)<0)&&(a=!0)):!m&&g?(s.track({type:0,doc:g}),E=!0):m&&!g&&(s.track({type:1,doc:m}),E=!0,(c||l)&&(a=!0)),E&&(g?(o=o.add(g),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,m){const g=d=>{switch(d){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return g(h)-g(m)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new zt(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Pa,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=N(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new mu(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new fu(s))}),n}hc(e){this.Yu=e.ir,this.Zu=N();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return zt.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class by{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ay{constructor(e){this.key=e,this.fc=!1}}class Ry{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Jt(a=>$l(a),sr),this._c=new Map,this.mc=new Set,this.gc=new z(T.comparator),this.yc=new Map,this.Ic=new so,this.Tc={},this.Ec=new Map,this.Ac=jt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Dy(t,e){const n=Fy(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await Qp(n.localStore,Ge(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await ky(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&ou(n.remoteStore,o)}return r}async function ky(t,e,n,s,r){t.Rc=(h,m,g)=>async function(d,v,E,b){let V=v.view.sc(E);V.zi&&(V=await ka(d.localStore,v.query,!1).then(({documents:X})=>v.view.sc(X,V)));const K=b&&b.targetChanges.get(v.targetId),W=v.view.applyChanges(V,d.isPrimaryClient,K);return Oa(d,v.targetId,W.cc),W.snapshot}(t,h,m,g);const i=await ka(t.localStore,e,!0),o=new Iy(e,i.ir),a=o.sc(i.documents),c=Qn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Oa(t,n,l.cc);const u=new by(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function xy(t,e){const n=k(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!sr(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await li(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),au(n.remoteStore,s.targetId),ui(n,s.targetId)}).catch(Kn)):(ui(n,s.targetId),await li(n.localStore,s.targetId,!0))}async function Ny(t,e,n){const s=By(t);try{const r=await function(i,o){const a=k(i),c=ne.now(),l=o.reduce((m,g)=>m.add(g.key),N());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Ke(),d=N();return a.Zi.getEntries(m,l).next(v=>{g=v,g.forEach((E,b)=>{b.isValidDocument()||(d=d.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,g)).next(v=>{u=v;const E=[];for(const b of o){const V=np(b,u.get(b.key).overlayedDocument);V!=null&&E.push(new Ct(b.key,V,bl(V.value.mapValue),ze.exists(!0)))}return a.mutationQueue.addMutationBatch(m,c,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(u,d);return a.documentOverlayCache.saveOverlays(m,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Ol(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new z(O)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Jn(s,r.changes),await ur(s.remoteStore)}catch(r){const i=uo(r,"Failed to persist write");n.reject(i)}}async function gu(t,e){const n=k(t);try{const s=await Kp(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(j(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?j(o.fc):r.removedDocuments.size>0&&(j(o.fc),o.fc=!1))}),await Jn(n,s,e)}catch(s){await Kn(s)}}function Ma(t,e,n){const s=k(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=k(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&ho(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $y(t,e,n){const s=k(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new z(T.comparator);o=o.insert(i,fe.newNoDocument(i,A.min()));const a=N().add(i),c=new ar(A.min(),new Map,new z(O),o,a);await gu(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),fo(s)}else await li(s.localStore,e,!1).then(()=>ui(s,e,n)).catch(Kn)}async function Py(t,e){const n=k(t),s=e.batch.batchId;try{const r=await Gp(n.localStore,e);yu(n,s,null),pu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Jn(n,r)}catch(r){await Kn(r)}}async function My(t,e,n){const s=k(t);try{const r=await function(i,o){const a=k(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(j(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);yu(s,e,n),pu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Jn(s,r)}catch(r){await Kn(r)}}function pu(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function yu(t,e,n){const s=k(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function ui(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||vu(t,s)})}function vu(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(au(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),fo(t))}function Oa(t,e,n){for(const s of n)s instanceof fu?(t.Ic.addReference(s.key,e),Oy(t,s)):s instanceof mu?(_("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||vu(t,s.key)):I()}function Oy(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(_("SyncEngine","New document in limbo: "+n),t.mc.add(s),fo(t))}function fo(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new T(H.fromString(e)),s=t.Ac.next();t.yc.set(s,new Ay(n)),t.gc=t.gc.insert(n,s),ou(t.remoteStore,new Xe(Ge(Ji(n.path)),s,"TargetPurposeLimboResolution",Gi.ct))}}async function Jn(t,e,n){const s=k(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=io.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=k(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>y.forEach(c,h=>y.forEach(h.Fi,m=>l.persistence.referenceDelegate.addReference(u,h.targetId,m)).next(()=>y.forEach(h.Bi,m=>l.persistence.referenceDelegate.removeReference(u,h.targetId,m)))))}catch(u){if(!Wn(u))throw u;_("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const m=l.Ji.get(h),g=m.snapshotVersion,d=m.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(h,d)}}}(s.localStore,i))}async function Vy(t,e){const n=k(t);if(!n.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const s=await nu(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new S(p.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Jn(n,s.er)}}function Ly(t,e){const n=k(t),s=n.yc.get(e);if(s&&s.fc)return N().add(s.key);{let r=N();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function Fy(t){const e=k(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ly.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$y.bind(null,e),e.dc.nu=Ty.bind(null,e.eventManager),e.dc.Pc=Sy.bind(null,e.eventManager),e}function By(t){const e=k(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Py.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=My.bind(null,e),e}class Va{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=cr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qp(this.persistence,new zp,e.initialUser,this.serializer)}createPersistence(e){return new Up(ro.zs,this.serializer)}createSharedClientState(e){return new Jp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ma(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vy.bind(null,this.syncEngine),await yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ey}createDatastore(e){const n=cr(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new ny(r));var r;return function(i,o,a,c){return new iy(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Ma(this.syncEngine,a,0),o=Na.D()?new Na:new Zp,new ay(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Ry(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=k(e);_("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Xn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):qe("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=de.UNAUTHENTICATED,this.clientId=Sl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=uo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Dr(t,e){t.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await nu(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function La(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qy(t);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>$a(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$a(e.remoteStore,i)),t._onlineComponents=e}function Hy(t){return t.name==="FirebaseError"?t.code===p.FAILED_PRECONDITION||t.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function qy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dr(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Hy(n))throw n;Lt("Error using user provided cache. Falling back to memory cache: "+n),await Dr(t,new Va)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Dr(t,new Va);return t._offlineComponents}async function Eu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await La(t,t._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await La(t,new Uy))),t._onlineComponents}function Gy(t){return Eu(t).then(e=>e.syncEngine)}async function Ky(t){const e=await Eu(t),n=e.eventManager;return n.onListen=Dy.bind(null,e.syncEngine),n.onUnlisten=xy.bind(null,e.syncEngine),n}function Wy(t,e,n={}){const s=new et;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new jy({next:h=>{i.enqueueAndForget(()=>_y(r,u));const m=h.docs.has(o);!m&&h.fromCache?c.reject(new S(p.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&a&&a.source==="server"?c.reject(new S(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Cy(Ji(o.path),l,{includeMetadataChanges:!0,Ku:!0});return wy(r,u)}(await Ky(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e,n){if(!n)throw new S(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qy(t,e,n,s){if(e===!0&&s===!0)throw new S(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ba(t){if(!T.isDocumentKey(t))throw new S(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":I()}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mo(t);throw new S(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new S(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wu((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class go{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hg;switch(n.type){case"firstParty":return new gg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new S(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fa.get(e);n&&(_("ComponentProvider","Removing Datastore"),Fa.delete(e),n.terminate())}(this),Promise.resolve()}}function Xy(t,e,n,s={}){var r;const i=(t=Pn(t,go))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=de.MOCK_USER;else{a=Bd(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new S(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new de(l)}t._authCredentials=new dg(new Tl(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class po{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new po(this.firestore,e,this._query)}}class Mn extends po{constructor(e,n,s){super(e,n,Ji(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new T(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function ja(t,e,...n){if(t=vn(t),arguments.length===1&&(e=Sl.A()),Yy("doc","path",e),t instanceof go){const s=H.fromString(e,...n);return Ba(s),new Re(t,null,new T(s))}{if(!(t instanceof Re||t instanceof Mn))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(H.fromString(e,...n));return Ba(s),new Re(t.firestore,t instanceof Mn?t.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ru(this,"async_queue_retry"),this.Xc=()=>{const n=Rr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Rr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Rr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new et;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Wn(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw qe("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=lo.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&I()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class yo extends go{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Jy,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tu(this),this._firestoreClient.terminate()}}function Zy(t,e){const n=typeof t=="object"?t:yc(),s=typeof t=="string"?t:e||"(default)",r=Ti(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Fd("firestore");i&&Xy(r,...i)}return r}function _u(t){return t._firestoreClient||Tu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tu(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new Ag(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,wu(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new zy(t._authCredentials,t._appCheckCredentials,t._queue,i),((n=r.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=r.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ht(ve.fromBase64String(e))}catch(n){throw new S(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ht(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=/^__.*__$/;class tv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ct(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yn(e,this.data,n,this.fieldTransforms)}}function Cu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class wo{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new wo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Vs(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Cu(this.ca)&&ev.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class nv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||cr(e)}ya(e,n,s,r=!1){return new wo({ca:e,methodName:n,ga:s,path:me.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sv(t){const e=t._freezeSettings(),n=cr(t._databaseId);return new nv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rv(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);Ru("Data must be an object, but it was:",o,s);const a=bu(s,o);let c,l;if(i.merge)c=new De(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const m=iv(e,h,n);if(!o.contains(m))throw new S(p.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);av(u,m)||u.push(m)}c=new De(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new tv(new Ae(a),c,l)}function Iu(t,e){if(Au(t=vn(t)))return Ru("Unsupported field value:",e,t),bu(t,e);if(t instanceof Su)return function(n,s){if(!Cu(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Iu(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=vn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qg(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ne.fromDate(n);return{timestampValue:Ms(s.serializer,r)}}if(n instanceof ne){const r=new ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ms(s.serializer,r)}}if(n instanceof Eo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ht)return{bytesValue:Ql(s.serializer,n._byteString)};if(n instanceof Re){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:no(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${mo(n)}`)}(t,e)}function bu(t,e){const n={};return Cl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xt(t,(s,r)=>{const i=Iu(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Au(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ne||t instanceof Eo||t instanceof Ht||t instanceof Re||t instanceof Su)}function Ru(t,e,n){if(!Au(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=mo(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function iv(t,e,n){if((e=vn(e))instanceof vo)return e._internalPath;if(typeof e=="string")return Du(t,e);throw Vs("Field path arguments must be of type string or ",t,!1,void 0,n)}const ov=new RegExp("[~\\*/\\[\\]]");function Du(t,e,n){if(e.search(ov)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vo(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vs(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new S(p.INVALID_ARGUMENT,a+t+c)}function av(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cv extends ku{data(){return super.data()}}function xu(t,e){return typeof e=="string"?Du(t,e):e instanceof vo?e._internalPath:e._delegate._internalPath}class lv{convertValue(e,n="none"){switch(_t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw I()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Xt(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Eo(Q(e.latitude),Q(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Wi(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Dn(e));default:return null}}convertTimestamp(e){const n=nt(e);return new ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=H.fromString(e);j(tu(s));const r=new kn(s.get(1),s.get(3)),i=new T(s.popFirst(5));return r.isEqual(n)||qe(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nu extends ku{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(xu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class dv extends Nu{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){t=Pn(t,Re);const e=Pn(t.firestore,yo);return Wy(_u(e),t._key).then(n=>yv(e,t,n))}class mv extends lv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ht(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function gv(t,e,n){t=Pn(t,Re);const s=Pn(t.firestore,yo),r=uv(t.converter,e,n);return pv(s,[rv(sv(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ze.none())])}function pv(t,e){return function(n,s){const r=new et;return n.asyncQueue.enqueueAndForget(async()=>Ny(await Gy(n),s,r)),r.promise}(_u(t),e)}function yv(t,e,n){const s=n.docs.get(e._key),r=new mv(t);return new Nu(t,r,e._key,s,new hv(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Qt=n})(Wf),Ot(new yt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new yo(new fg(n.getProvider("auth-internal")),new yg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),mt(la,"3.13.0",t),mt(la,"3.13.0","esm2017")})();var vv="firebase",Ev="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(vv,Ev,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map,$u={activated:!1,tokenObservers:[]},wv={initialized:!1,enabled:!1};function se(t){return hi.get(t)||Object.assign({},$u)}function _v(t,e){return hi.set(t,e),hi.get(t)}function hr(){return wv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="https://content-firebaseappcheck.googleapis.com/v1",Tv="exchangeRecaptchaV3Token",Sv="exchangeDebugToken",za={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},Cv=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new yn,await bv(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new yn,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function bv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ce=new Ei("appCheck","AppCheck",Av);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function _o(t){if(!se(t).activated)throw Ce.create("use-before-activation",{appName:t.name})}function Mu(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),s=Math.floor((e-n*3600*24)/3600),r=Math.floor((e-n*3600*24-s*3600)/60),i=e-n*3600*24-s*3600-r*60;let o="";return n&&(o+=ms(n)+"d:"),s&&(o+=ms(s)+"h:"),o+=ms(r)+"m:"+ms(i)+"s",o}function ms(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To({url:t,body:e},n){const s={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&(s["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(e),headers:s};let o;try{o=await fetch(t,i)}catch(h){throw Ce.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw Ce.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw Ce.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Ce.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=Number(c[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+l,issuedAtTimeMillis:u}}function Rv(t,e){const{projectId:n,appId:s,apiKey:r}=t.options;return{url:`${Pu}/projects/${n}/apps/${s}:${Tv}?key=${r}`,body:{recaptcha_v3_token:e}}}function Ou(t,e){const{projectId:n,appId:s,apiKey:r}=t.options;return{url:`${Pu}/projects/${n}/apps/${s}:${Sv}?key=${r}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="firebase-app-check-database",kv=1,On="firebase-app-check-store",Vu="debug-token";let gs=null;function Lu(){return gs||(gs=new Promise((t,e)=>{try{const n=indexedDB.open(Dv,kv);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Ce.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(On,{keyPath:"compositeKey"})}}}catch(n){e(Ce.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),gs)}function xv(t){return Bu(Uu(t))}function Nv(t,e){return Fu(Uu(t),e)}function $v(t){return Fu(Vu,t)}function Pv(){return Bu(Vu)}async function Fu(t,e){const s=(await Lu()).transaction(On,"readwrite"),i=s.objectStore(On).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Ce.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}async function Bu(t){const n=(await Lu()).transaction(On,"readonly"),r=n.objectStore(On).get(t);return new Promise((i,o)=>{r.onsuccess=a=>{const c=a.target.result;i(c?c.value:void 0)},n.onerror=a=>{var c;o(Ce.create("storage-get",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function Uu(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new wi("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(t){if(vi()){let e;try{e=await xv(t)}catch(n){Vn.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function kr(t,e){return vi()?Nv(t,e).catch(n=>{Vn.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Ov(){let t;try{t=await Pv()}catch{}if(t)return t;{const e=qd();return $v(e).catch(n=>Vn.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){return hr().enabled}async function Co(){const t=hr();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Vv(){const t=hc(),e=hr();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new yn;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Ov())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={error:"UNKNOWN_ERROR"};function Fv(t){return yi.encodeString(JSON.stringify(t),!1)}async function di(t,e=!1){const n=t.app;_o(n);const s=se(n);let r=s.token,i;if(r&&!xt(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(xt(c)?r=c:await kr(n,void 0))}if(!e&&r&&xt(r))return{token:r.token};let o=!1;if(So()){s.exchangeTokenPromise||(s.exchangeTokenPromise=To(Ou(n,await Co()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),o=!0);const c=await s.exchangeTokenPromise;return await kr(n,c),s.token=c,{token:c.token}}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await se(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Vn.warn(c.message):Vn.error(c),i=c}let a;return r?i?xt(r)?a={token:r.token,internalError:i}:a=Ga(i):(a={token:r.token},s.token=r,await kr(n,r)):a=Ga(i),o&&Hu(n,a),a}async function Bv(t){const e=t.app;_o(e);const{provider:n}=se(e);if(So()){const s=await Co(),{token:r}=await To(Ou(e,s),t.heartbeatServiceProvider);return{token:r}}else{const{token:s}=await n.getToken();return{token:s}}}function ju(t,e,n,s){const{app:r}=t,i=se(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&xt(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),qa(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>qa(t))}function zu(t,e){const n=se(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function qa(t){const{app:e}=t,n=se(e);let s=n.tokenRefresher;s||(s=Uv(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function Uv(t){const{app:e}=t;return new Iv(async()=>{const n=se(e);let s;if(n.token?s=await di(t,!0):s=await di(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=se(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},za.RETRIAL_MIN_WAIT,za.RETRIAL_MAX_WAIT)}function Hu(t,e){const n=se(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function xt(t){return t.expireTimeMillis-Date.now()>0}function Ga(t){return{token:Fv(Lv),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=se(this.app);for(const n of e)zu(this.app,n.next);return Promise.resolve()}}function zv(t,e){return new jv(t,e)}function Hv(t){return{getToken:e=>di(t,e),getLimitedUseToken:()=>Bv(t),addTokenListener:e=>ju(t,"INTERNAL",e),removeTokenListener:e=>zu(t.app,e)}}const qv="@firebase/app-check",Gv="0.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="https://www.google.com/recaptcha/api.js";function Wv(t,e){const n=new yn,s=se(t);s.reCAPTCHAState={initialized:n};const r=Yv(t),i=Ha(!1);return i?Ka(t,e,i,r,n):Jv(()=>{const o=Ha(!1);if(!o)throw new Error("no recaptcha");Ka(t,e,o,r,n)}),n.promise}function Ka(t,e,n,s,r){n.ready(()=>{Xv(t,e,n,s),r.resolve(n)})}function Yv(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Qv(t){_o(t);const n=await se(t).reCAPTCHAState.initialized.promise;return new Promise((s,r)=>{const i=se(t).reCAPTCHAState;n.ready(()=>{s(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function Xv(t,e,n,s){const r=n.render(s,{sitekey:e,size:"invisible",callback:()=>{se(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{se(t).reCAPTCHAState.succeeded=!1}}),i=se(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:r})}function Jv(t){const e=document.createElement("script");e.src=Kv,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,s;eE(this._throttleData);const r=await Qv(this._app).catch(o=>{throw Ce.create("recaptcha-error")});if(!(!((e=se(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Ce.create("recaptcha-error");let i;try{i=await To(Rv(this._app,r),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=Zv(Number((s=o.customData)===null||s===void 0?void 0:s.httpStatus),this._throttleData),Ce.create("throttled",{time:Mu(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=Ti(e,"heartbeat"),Wv(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Io?this._siteKey===e._siteKey:!1}}function Zv(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+Cv,httpStatus:t};{const n=e?e.backoffCount:0,s=Qd(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:t}}}function eE(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Ce.create("throttled",{time:Mu(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t=yc(),e){t=vn(t);const n=Ti(t,"app-check");if(hr().initialized||Vv(),So()&&Co().then(r=>console.log(`App Check debug token: ${r}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return r;throw Ce.create("already-initialized",{appName:t.name})}const s=n.initialize({options:e});return nE(t,e.provider,e.isTokenAutoRefreshEnabled),se(t).isTokenAutoRefreshEnabled&&ju(s,"INTERNAL",()=>{}),s}function nE(t,e,n){const s=_v(t,Object.assign({},$u));s.activated=!0,s.provider=e,s.cachedTokenPromise=Mv(t).then(r=>(r&&xt(r)&&(s.token=r,Hu(t,{token:r.token})),r)),s.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,s.provider.initialize(t)}const sE="app-check",Wa="app-check-internal";function rE(){Ot(new yt(sE,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return zv(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Wa).initialize()})),Ot(new yt(Wa,t=>{const e=t.getProvider("app-check").getImmediate();return Hv(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),mt(qv,Gv)}rE();const iE={apiKey:{}.VITE_FIREBASE_API_KEY||"env-not-set",authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN||"env-not-set",databaseURL:{}.VITE_FIREBASE_DATABASE_URL||"env-not-set",projectId:{}.VITE_FIREBASE_PROJECT_ID||"env-not-set",storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET||"env-not-set",messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID||"env-not-set",appId:{}.VITE_FIREBASE_APP_ID||"env-not-set",measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID||"env-not-set"},qu=pc(iE);tE(qu,{provider:new Io({}.VITE_FIREBASE_RECAPTCHA_SECRET_KEY||"api-key-not-set"),isTokenAutoRefreshEnabled:!0});const Ya=Zy(qu);var fi=(t=>(t.ADULT="Adulte",t.CHILD="Enfant (moins de 12 ans)",t))(fi||{});class oE{async getById(e){try{const n=ja(Ya,"rsvp",e),s=await fv(n);if(s.exists())return s.data()}catch(n){throw new Error(`Error on get RSVP data for ${e}: ${n}`)}return null}async createOrUpdate(e){try{await gv(ja(Ya,"rsvp",e.id),e)}catch(n){throw new Error(`Error on create or update RSVP data: ${n}`)}}}const Qa=new oE,aE=8,cE="requiredIfWeddingChoices",on="requiredIfGuestListAvailable",lE={setup(){const t=th(),e=P(()=>{const R=mi(gi);return R!=null?R:null}),n=P(()=>{const R=Object.values(Ku).find(Ee=>{const we=Ao[Ee];return Object.keys(we).find(Se=>Se===e.value)});return R!=null?R:null}),s=P(()=>n.value&&bo[n.value]?bo[n.value]:[]),r=P(()=>{if(n.value===null)return null;const R=Ao[n.value];return e.value?R[e.value]:null}),i=Wu,o=ee({RSVPName:"",RSVPEmail:"",RSVPIsComing:"yes",RSVPWeddingChoices:[],RSVPWeddingGuests:{[D.KHMER_CEREMONY]:[],[D.CHURCH_CEREMONY]:[],[D.CELEBRATION]:[],[D.BRUNCH]:[]},RSVPMealPreferences:[],RSVPMessage:""}),a=ee({[D.KHMER_CEREMONY]:!0,[D.CHURCH_CEREMONY]:!0,[D.CELEBRATION]:!0,[D.BRUNCH]:!0}),c=R=>u.value.includes(R),l=P(()=>m.value.RSVPWeddingGuests.$invalid&&m.value.RSVPWeddingGuests.$silentErrors.find(R=>R.$validator===on)),u=P(()=>{const R=Object.values(D);return[...o.value.RSVPWeddingChoices].sort((we,Se)=>R.indexOf(we)-R.indexOf(Se))}),h=P(()=>({RSVPName:{required:_e,$autoDirty:!0},RSVPEmail:{email:Ad,$autoDirty:!0},RSVPIsComing:{required:_e,$autoDirty:!0},RSVPWeddingChoices:{[cE]:nn(o.value.RSVPIsComing==="yes"),$autoDirty:!0},RSVPWeddingGuests:{[D.KHMER_CEREMONY]:{[on]:nn(c(D.KHMER_CEREMONY)),$each:rs.forEach({name:{required:_e},firstName:{required:_e},guestType:{required:_e}})},[D.CHURCH_CEREMONY]:{[on]:nn(c(D.CHURCH_CEREMONY)),$each:rs.forEach({name:{required:_e},firstName:{required:_e},guestType:{required:_e}})},[D.CELEBRATION]:{[on]:nn(c(D.CELEBRATION)),$each:rs.forEach({name:{required:_e},firstName:{required:_e},guestType:{required:_e}})},[D.BRUNCH]:{[on]:nn(c(D.BRUNCH)),$each:rs.forEach({name:{required:_e},firstName:{required:_e},guestType:{required:_e}})}}})),m=Ed(h,o);pt(()=>o.value.RSVPIsComing,()=>{o.value.RSVPIsComing==="no"&&(o.value.RSVPWeddingChoices=[],o.value.RSVPWeddingGuests={[D.KHMER_CEREMONY]:[],[D.CHURCH_CEREMONY]:[],[D.CELEBRATION]:[],[D.BRUNCH]:[]},o.value.RSVPMealPreferences=[])}),pt(()=>[a.value,o.value.RSVPWeddingGuests[u.value[0]]],()=>{if(!u.value.length)return;const R=u.value[0],Ee=[...o.value.RSVPWeddingGuests[R]];Object.keys(a.value).forEach(we=>{const Se=we;Se!==R&&a.value[Se]&&(o.value.RSVPWeddingGuests[Se]=Ee)})},{deep:!0}),ec(()=>{n.value===null&&t.push({name:eh.DENIED}),V()});const g=ee(!1),d=ee(null),v=()=>{setTimeout(()=>{d.value=null},5e3)},E=()=>{const R={[D.KHMER_CEREMONY]:[],[D.CHURCH_CEREMONY]:[],[D.CELEBRATION]:[],[D.BRUNCH]:[]};return Object.keys(o.value.RSVPWeddingGuests).forEach(Ee=>{const we=Ee;u.value.includes(we)?R[we]=o.value.RSVPWeddingGuests[we]:R[we]=[]}),R},b=()=>{if(!ue.value||m.value.$invalid)return;const R=E(),Ee={id:e.value,name:o.value.RSVPName,familyList:r.value,email:o.value.RSVPEmail,isComing:o.value.RSVPIsComing,weddingChoices:u.value,weddingGuests:R,weddingGuestsState:a.value,mealPreferences:o.value.RSVPMealPreferences,message:o.value.RSVPMessage};g.value=!0,Qa.createOrUpdate(Ee).then(()=>{g.value=!1,d.value={type:"alert-success",icon:"fa-circle-check",message:"Envoi de votre r\xE9ponse avec succ\xE8s!"},v()}).catch(()=>{g.value=!1,d.value={type:"alert-danger",icon:"fa-circle-exclamation",message:"Erreur lors de l'envoi de votre r\xE9ponse..."},v()})},V=async()=>{var R,Ee,we,Se,at,es,ts,en,ns,ss;if(e.value){const J=await Qa.getById(e.value);J&&(a.value={[D.KHMER_CEREMONY]:(R=J.weddingGuestsState[D.KHMER_CEREMONY])!=null?R:!0,[D.CHURCH_CEREMONY]:(Ee=J.weddingGuestsState[D.CHURCH_CEREMONY])!=null?Ee:!0,[D.CELEBRATION]:(we=J.weddingGuestsState[D.CELEBRATION])!=null?we:!0,[D.BRUNCH]:(Se=J.weddingGuestsState[D.BRUNCH])!=null?Se:!0},o.value={RSVPName:J.name,RSVPEmail:(at=J.email)!=null?at:"",RSVPIsComing:J.isComing,RSVPWeddingChoices:J.weddingChoices,RSVPWeddingGuests:{[D.KHMER_CEREMONY]:(es=J.weddingGuests[D.KHMER_CEREMONY])!=null?es:[],[D.CHURCH_CEREMONY]:(ts=J.weddingGuests[D.CHURCH_CEREMONY])!=null?ts:[],[D.CELEBRATION]:(en=J.weddingGuests[D.CELEBRATION])!=null?en:[],[D.BRUNCH]:(ns=J.weddingGuests[D.BRUNCH])!=null?ns:[]},RSVPMealPreferences:J.mealPreferences&&J.mealPreferences.length?J.mealPreferences:[],RSVPMessage:(ss=J.message)!=null?ss:""})}},K=R=>{o.value.RSVPWeddingGuests[R].push({name:"",firstName:"",guestType:fi.ADULT})},W=(R,Ee)=>{o.value.RSVPWeddingGuests[R].splice(Ee,1)},X=R=>R!==u.value[0]&&a.value[R],ue=ee(!1);return{v$:m,state:o,copyState:a,weddingEvents:s,weddingIcon:i,weddingChoicesSorted:u,loading:g,alertUser:d,sendRSVP:b,addNewGuest:K,removeGuest:W,isDisabledByCopyState:X,isGuestsListAvailableError:l,recaptcha:ue,onRecaptchaSuccess:()=>{ue.value=!0},onRecaptchaFailure:()=>{ue.value=!1}}},components:{Recaptcha:sd},data:()=>({mealPreferences:Gu,EMIT_RECAPTCHA_SUCCESS:tc,EMIT_RECAPTCHA_FAILURE:nc,WEDDING_EVENTS:D,GUEST_TYPES:fi,MAX_GUESTS_BY_EVENT:aE}),validations(){return{RSVPName:{required:_e}}}},uE={class:"col-xl-6 col-lg-7"},hE={class:"form-wrapper no-shadow overflow neela-style","data-animation-direction":"from-right","data-animation-delay":"250"},dE=f("h3",{class:"section-title"},"Serez-vous des n\xF4tres?",-1),fE={id:"form-rsvp",ref:"form-rsvp",class:"mx-2"},mE={class:"invalid-field"},gE={class:"form-floating"},pE=f("label",{for:"name"},"Nom de la famille*",-1),yE={class:"invalid-field"},vE={class:"form-floating"},EE=f("label",{for:"email"},"E-mail (optionnel)",-1),wE={class:"invalid-field"},_E={class:"form-check-wrapper"},TE={class:"form-check form-check-inline"},SE=f("label",{for:"attend_wedding_yes"},"Oui, je serais l\xE0!",-1),CE={class:"form-check form-check-inline"},IE=f("label",{for:"attend_wedding_no"},"Malheureusement non...",-1),bE={key:0},AE=f("label",null," Veuillez s\xE9lectionner le ou les \xE9v\xE8nement(s): ",-1),RE={class:"invalid-field"},DE=["id","value"],kE=["for"],xE={class:"invalid-field"},NE={key:1,class:"form-floating d-flex justify-content-center"},$E=f("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#guestsModal"}," Liste des invit\xE9s (y compris vous) ",-1),PE=[$E],ME={key:2,class:"form-check-wrapper required",name:"Meal Preferences",id:"meal_pref"},OE=f("label",null,"Pr\xE9f\xE9rences alimentaires :",-1),VE=["value","id"],LE={class:"form-floating"},FE=f("label",{for:"message"},"Message",-1),BE={class:"form-check-wrapper d-flex justify-content-center"},UE={class:"center"},jE=["disabled"],zE={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},HE={key:1},qE={key:2,class:"ms-2"},GE=f("br",null,null,-1),KE=f("br",null,null,-1),WE={key:0},YE={class:"modal fade rsvp-modal mt-4","data-bs-backdrop":"static",id:"guestsModal","aria-hidden":"true"},QE={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"},XE={class:"modal-content"},JE=f("div",{class:"modal-header"},[f("h5",{class:"modal-title",id:"exampleModalToggleLabel"}," Liste des invit\xE9s (y compris vous) "),f("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ZE={class:"modal-body"},ew={class:"accordion",id:"accordionGuestsByEvent"},tw=["id"],nw=["data-bs-target","aria-controls"],sw={class:"container-guests"},rw={key:0,class:"form-check"},iw=["id","onUpdate:modelValue"],ow={class:"tooltip-custom"},aw=f("i",{class:"fa-solid fa-circle-question"},null,-1),cw={class:"tooltip-custom-text"},lw=["id","aria-labelledby"],uw={class:"accordion-body"},hw={class:"invalid-field"},dw={class:"invalid-field"},fw={class:"invalid-field"},mw={class:"col-md-4 form-floating"},gw=["onUpdate:modelValue","disabled"],pw=f("label",{class:"ms-2",for:"name"},"Nom*",-1),yw={class:"col-md-4 form-floating"},vw=["onUpdate:modelValue","disabled"],Ew=f("label",{class:"ms-2",for:"name"},"Pr\xE9nom*",-1),ww={class:"col-md-3 form-floating"},_w=["onUpdate:modelValue","disabled"],Tw=["value"],Sw=f("label",{class:"ms-2",for:"age_guest"},"Tranche d'\xE2ge",-1),Cw={class:"col-md-1 text-center"},Iw=["disabled","onClick"],bw=f("i",{class:"fa-solid fa-circle-minus mx-0"},null,-1),Aw=[bw],Rw={class:"row justify-content-center"},Dw=["disabled","onClick"],kw=f("span",{class:"ms-2"},"Ajouter un invit\xE9",-1),xw=f("i",{class:"fa-solid fa-circle-plus ms-2"},null,-1),Nw=[kw,xw],$w={class:"modal-footer"},Pw={class:"center"},Mw=["disabled"];function Ow(t,e,n,s,r,i){const o=Za("Recaptcha");return M(),L($e,null,[f("div",uE,[f("div",hE,[dE,f("form",fE,[Z(f("div",mE," Veuillez renseigner le champ. ",512),[[Ye,s.v$.RSVPName.$error]]),f("div",gE,[Z(f("input",{type:"text",name:"Name",id:"name",placeholder:"Nom de la famille ou du groupe",class:"form-control required fromName","onUpdate:modelValue":e[0]||(e[0]=a=>s.state.RSVPName=a)},null,512),[[tn,s.state.RSVPName]]),pE]),Z(f("div",yE," Veuillez rentrez un e-mail valide. ",512),[[Ye,s.v$.RSVPEmail.$error]]),f("div",vE,[Z(f("input",{type:"email",name:"E-mail",id:"email",placeholder:"E-mail*",class:"form-control required fromEmail","onUpdate:modelValue":e[1]||(e[1]=a=>s.state.RSVPEmail=a)},null,512),[[tn,s.state.RSVPEmail]]),EE]),Z(f("div",wE," Veuillez rentrez un choix. ",512),[[Ye,s.v$.RSVPIsComing.$error]]),f("div",_E,[f("div",TE,[Z(f("input",{class:"form-check-input required",type:"radio",name:"Attend wedding",id:"attend_wedding_yes",value:"yes","onUpdate:modelValue":e[2]||(e[2]=a=>s.state.RSVPIsComing=a)},null,512),[[xo,s.state.RSVPIsComing]]),SE]),f("div",CE,[Z(f("input",{class:"form-check-input required",type:"radio",name:"Attend wedding",id:"attend_wedding_no",value:"no","onUpdate:modelValue":e[3]||(e[3]=a=>s.state.RSVPIsComing=a)},null,512),[[xo,s.state.RSVPIsComing]]),IE])]),s.state.RSVPIsComing==="yes"?(M(),L("div",bE,[AE,Z(f("div",RE," Veuillez rentrez votre choix. ",512),[[Ye,s.v$.RSVPWeddingChoices.$error]]),(M(!0),L($e,null,ut(s.weddingEvents,(a,c)=>(M(),L("div",{class:"form-check-wrapper d-flex justify-content-center",key:c},[Z(f("input",{type:"checkbox",class:"btn-check",id:"wedding-choice-"+c,autocomplete:"off",value:a,"onUpdate:modelValue":e[4]||(e[4]=l=>s.state.RSVPWeddingChoices=l)},null,8,DE),[[dr,s.state.RSVPWeddingChoices]]),f("label",{class:"btn btn-outline-secondary btn-check-label d-flex justify-content-center",for:"wedding-choice-"+c},[f("i",{class:bt([s.weddingIcon[a],"me-1"])},null,2),Ue(" "+Pe(a),1)],8,kE)]))),128))])):Qe("",!0),Z(f("div",xE," Veuillez renseigner votre liste d'invit\xE9s. ",512),[[Ye,s.isGuestsListAvailableError]]),s.state.RSVPWeddingChoices.length?(M(),L("div",NE,PE)):Qe("",!0),s.state.RSVPIsComing==="yes"?(M(),L("fieldset",ME,[OE,(M(!0),L($e,null,ut(t.mealPreferences,(a,c)=>(M(),L("div",{class:"form-check",key:c},[Z(f("input",{class:"form-check-input",type:"checkbox",value:a,id:"meal_"+c,"onUpdate:modelValue":e[5]||(e[5]=l=>s.state.RSVPMealPreferences=l)},null,8,VE),[[dr,s.state.RSVPMealPreferences]]),Ue(" "+Pe(a),1)]))),128))])):Qe("",!0),f("div",LE,[Z(f("textarea",{id:"message",name:"Message",placeholder:"Message",class:"form-control",rows:"4","onUpdate:modelValue":e[6]||(e[6]=a=>s.state.RSVPMessage=a)},null,512),[[tn,s.state.RSVPMessage]]),FE]),f("div",BE,[Ne(o,nh({[No(t.EMIT_RECAPTCHA_SUCCESS)]:s.onRecaptchaSuccess},{[No(t.EMIT_RECAPTCHA_FAILURE)]:s.onRecaptchaFailure}),null,16)]),f("div",UE,[f("button",{type:"button",class:"btn btn-primary",disabled:!s.recaptcha||s.v$.$invalid,onClick:e[7]||(e[7]=(...a)=>s.sendRSVP&&s.sendRSVP(...a))},[s.loading?(M(),L("span",zE)):Qe("",!0),s.loading?(M(),L("span",qE,"Envoi en cours...")):(M(),L("span",HE,"Envoyer"))],8,jE),GE,KE,s.alertUser?(M(),L("div",WE,[f("div",{class:bt("alert alert-dismissible "+s.alertUser.type),role:"alert"},[f("i",{class:bt("me-2 fa-solid "+s.alertUser.icon)},null,2),Ue(" "+Pe(s.alertUser.message)+" ",1),f("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:e[8]||(e[8]=a=>s.alertUser=null)})],2)])):Qe("",!0)])],512)])]),f("div",YE,[f("div",QE,[f("div",XE,[JE,f("div",ZE,[f("div",ew,[(M(!0),L($e,null,ut(s.weddingChoicesSorted,(a,c)=>(M(),L("div",{class:"accordion-item",key:c},[f("div",{class:"accordion-header",id:"heading"+c},[f("button",{class:bt([c!==0?"collapsed":"","accordion-button"]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+c,"aria-expanded":"true","aria-controls":"collapse"+c},[f("i",{class:bt([s.weddingIcon[a],"me-2"])},null,2),Ue(" "+Pe(a),1)],10,nw),f("div",sw,[c>0?(M(),L("div",rw,[Z(f("input",{class:"form-check-input",type:"checkbox",id:"copyGuestsFor"+c,"onUpdate:modelValue":l=>s.copyState[a]=l},null,8,iw),[[dr,s.copyState[a]]]),f("div",ow,[aw,f("span",cw,[Ue("Dupliquer la liste des invit\xE9s renseign\xE9e pour l'\xE9v\xE8nement "),f("b",null,Pe(s.weddingChoicesSorted[0]),1)])])])):Qe("",!0)])],8,tw),f("div",{id:"collapse"+c,class:bt([c===0?"show":"","accordion-collapse collapse"]),"aria-labelledby":"heading"+c,"data-bs-parent":"#accordionGuestsByEvent"},[f("div",uw,[(M(!0),L($e,null,ut(s.state.RSVPWeddingGuests[a],(l,u)=>(M(),L("div",{class:"row",key:u},[Z(f("div",hw," Veuillez rentrez un nom. ",512),[[Ye,s.v$.RSVPWeddingGuests[a].$each.$response.$errors[u].name.length]]),Z(f("div",dw," Veuillez rentrez un pr\xE9nom. ",512),[[Ye,s.v$.RSVPWeddingGuests[a].$each.$response.$errors[u].firstName.length]]),Z(f("div",fw," Veuillez rentrez une tranche d'\xE2ge. ",512),[[Ye,s.v$.RSVPWeddingGuests[a].$each.$response.$errors[u].guestType.length]]),f("div",mw,[Z(f("input",{type:"text",name:"Name",id:"name",placeholder:"Nom",class:"form-control required","onUpdate:modelValue":h=>l.name=h,disabled:s.isDisabledByCopyState(a)},null,8,gw),[[tn,l.name]]),pw]),f("div",yw,[Z(f("input",{type:"text",name:"FirstName",id:"name",placeholder:"Pr\xE9nom",class:"form-control required","onUpdate:modelValue":h=>l.firstName=h,disabled:s.isDisabledByCopyState(a)},null,8,vw),[[tn,l.firstName]]),Ew]),f("div",ww,[Z(f("select",{class:"form-select","aria-label":"Age",name:"Age",id:"age_guest","onUpdate:modelValue":h=>l.guestType=h,disabled:s.isDisabledByCopyState(a)},[(M(!0),L($e,null,ut(t.GUEST_TYPES,(h,m)=>(M(),L("option",{key:m,value:h},Pe(h),9,Tw))),128))],8,_w),[[sh,l.guestType]]),Sw]),f("div",Cw,[f("button",{disabled:s.isDisabledByCopyState(a),onClick:h=>s.removeGuest(a,u),class:"btn button-action-remove-row"},Aw,8,Iw)])]))),128)),f("div",Rw,[s.state.RSVPWeddingGuests[a].length<t.MAX_GUESTS_BY_EVENT?(M(),L("button",{key:0,class:"btn button-action-add-row",disabled:s.isDisabledByCopyState(a),onClick:l=>s.addNewGuest(a)},Nw,8,Dw)):Qe("",!0)])])],10,lw)]))),128))])]),f("div",$w,[f("div",Pw,[f("button",{type:"button","data-bs-dismiss":"modal",disabled:s.v$.RSVPWeddingGuests.$invalid,class:"btn btn-primary",style:{width:"200px"}}," Valider ",8,Mw)])])])])])],64)}const Vw=Gt(lE,[["render",Ow]]),Lw={id:"rsvp",class:"section-bg-color overflow-content-over"},Fw=f("div",{class:"side-flowers"},null,-1),Bw={class:"container"},Uw={class:"row gx-6"},jw={class:"col-xl-6 col-lg-5 overflow-image-wrapper center"},zw=f("i",{class:"icon-diamond-ring icon_large","data-animation-direction":"from-top","data-animation-delay":"250"},null,-1),Hw={"data-animation-direction":"from-top","data-animation-delay":"250"},qw=f("h2",{class:"title"},"Ils vont se marier !",-1),Gw=f("p",null," Ils se sont dit oui! M\xE9laine et Michel se marient les DD et DD MM YYYY et vous invitent \xE0 partager ce merveilleux moment \xE0 leurs c\xF4t\xE9s. ",-1),Kw=f("p",null," La c\xE9r\xE9monie de mariage se d\xE9roulera sur plusieurs jours. Vous trouverez le carton d'invitation \xE0 remplir. N'h\xE9sitez pas \xE0 nous contacter si vous avez la moindre question ou autre. ",-1),Ww=["href"],Yw=Tt('<blockquote class="neela-quote small extra-margin"> Merci de confirmer votre pr\xE9sence<br>avant le DD MM YYYY </blockquote><strong> Voici une petite vid\xE9o explicative pour vous aider \xE0 confirmer votre pr\xE9sence \xE0 notre Mariage: <br><a href="#"><i class="fa-brands fa-youtube fa-2x"></i></a></strong><br><br><strong><i class="fa-sharp fa-solid fa-circle-info me-1"></i> Si vous avez la moindre question ou probl\xE8me dans le remplissage du Faire part de Mariage. N&#39;h\xE9sitez pas \xE0 nous contacter afin que nous puissions vous aider \xE0 le remplir. </strong><br><br><ul class="contact-info"><li><span>E-mail:</span><a href="mailto:mariage.mm@loremipsum.com"> mariage.mm@loremipsum.com </a></li></ul><ul class="sn-icons"><li><a href="#"><i class="fab fa-instagram-square"></i></a></li></ul>',9),Qw=qt({__name:"RSVPFormSection",setup(t){const e=P(()=>{const n=mi(gi);return n!=null?n:null});return(n,s)=>(M(),L("section",Lw,[Fw,f("div",Bw,[f("div",Uw,[f("div",jw,[zw,f("div",Hw,[qw,Gw,Kw,f("a",{href:"/?key="+x(e),class:"btn btn-primary"}," D\xE9couvrir notre histoire ",8,Ww),Yw])]),Ne(Vw)])])]))}}),Xw={},Jw={id:"the-wedding",class:"parallax-background bg-color-overlay padding-divider-top section-divider-bottom-1 section-divider-bg-color"},Zw=Tt('<div class="container"><div class="row"><div class="col-sm-12 mt-4"><h1 class="section-title">Invitation</h1></div></div><div class="row"><div class="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 center"><div class="invite neela-style" data-animation-direction="from-left" data-animation-delay="100"><span class="h-lines"></span><span class="v-lines"></span><div class="invite_title invite_title_rsvp"><div class="text">Faire part<small>de</small>Mariage</div></div><div class="invite_info"><div class="row"><div class="col-6"><h2> Mme. DOE Jane <br><small>&amp;</small> <br> M. DOE John </h2></div><div class="col-6"><h2> Mme. ROE Rosalie <br><small>&amp;</small> <br> M. ROE Richard </h2></div></div><div class="uppercase my-4"> ont la joie de vous faire part du mariage de leurs enfants </div><h1 class="my-2">M\xE9laine <small>&amp;</small> Michel</h1><div class="date">le DD-DD MM, YYYY</div><div class="uppercase"><i class="me-1 fas fa-map-marker-alt"></i> Localisation: Ile-De-France </div></div></div></div></div></div>',1),e0=[Zw];function t0(t,e){return M(),L("section",Jw,e0)}const n0=Gt(Xw,[["render",t0]]),a0=qt({__name:"RSVPView",setup(t){const e=ee(!1),n=()=>{e.value=ih()};return Xa(()=>{window.addEventListener("scroll",n)}),rh(()=>{window.document.body.removeEventListener("scroll",n)}),(s,r)=>(M(),L($e,null,[Ne(n0),Ne(Qw),Ne(Eh),Ne($h),Ne(Fh),Ne(qh),Ne(ah),Ne(Xh),e.value?(M(),Ja(oh,{key:0})):Qe("",!0)],64))}});export{a0 as default};
