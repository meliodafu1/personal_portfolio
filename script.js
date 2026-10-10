/* ===== EDIT YOUR CONTENT HERE ===== */
const CONFIG={
 status:"Open to opportunities",
 email:"maurin.raphaelmarfe@gmail.com",
 phone:"+63 961 508 2378",
 location:"Cagayan de Oro City, Philippines",
 resumeUrl:"https://drive.google.com/uc?export=download&id=1V1YmYGotXJ3ZpRYLVpfYk8cUV5Ebp2cG",
 linkedin:"https://www.linkedin.com/in/raphael-maurin-2b18b2270/",
 photo:""        // TODO: optional image URL or data URI
};
const ABOUT=[
 ["code","WordPress and Shopify","Custom plugins for WordPress and custom sections for Shopify, using Elementor, Beaver Builder, and ACF when a project needs them."],
 ["rocket","Getting it live","Moving sites from staging to production, and sorting out DNS and domains so launch day stays calm."],
 ["check","Testing and fixing","Checking that a site works and looks right on every screen, then tracking down whatever doesn't."],
 ["users","Helping the team","Handing out tasks, supporting junior developers, and reviewing work before it goes out."]
];
const SKILLS={
 "Development":["PHP","JavaScript","HTML5","CSS3","Shopify Liquid","MCP integration for WordPress"],
 "CMS & e-commerce":["WordPress","Shopify","WooCommerce"],
 "Builders & tools":["Elementor","Beaver Builder","Beaver Themer","Advanced Custom Fields","Git","Visual Studio Code"],
 "Technical operations":["DNS and domain management","Website deployment","Staging and production","Website maintenance","QA and debugging","Responsive design"]
};
const JOBS=[
 {t:"Senior Developer",p:"2025 – 2026",b:["Lead WordPress and Shopify development from initial implementation to deployment.","Develop custom WordPress plugins and Shopify Liquid sections.","Manage website launches, DNS settings, and domain configuration.","Perform quality assurance and troubleshoot technical issues.","Assign development tasks and support junior developers.","Review websites for functionality, responsiveness, and overall quality."]},
 {t:"Junior Developer",p:"2023 – 2025",b:["Developed and maintained WordPress websites and Shopify stores.","Implemented responsive layouts and website functionality.","Worked with page builders and CMS tools based on project needs.","Troubleshot website issues and assisted with quality assurance.","Supported projects from development through launch."]}
];
/* url: add only approved live links. PLACEHOLDER entries need real names, descriptions, and permission. */
const PROJECTS=[
 {n:"Hallett Stone",c:"WordPress",d:"A WordPress website built with Beaver Builder.",t:["WordPress","Beaver Builder"],url:"https://hallettstone.com.au/",src:"",g:["#2447d6","#7a4bd6"]},
 {n:"Blacktop Maintenance",c:"WordPress",d:"A WordPress website built with Elementor.",t:["WordPress","Elementor"],url:"https://blacktopmaintenance.com.au/",src:"",g:["#334155","#2447d6"]},
 {n:"Abundant Living",c:"WordPress",d:"A WordPress website built with Beaver Builder.",t:["WordPress","Beaver Builder"],url:"https://abundantliving.com.au/",src:"",g:["#0f7b6c","#2447d6"]},
 {n:"Electron City",c:"WordPress",d:"A WordPress website built with Beaver Builder.",t:["WordPress","Beaver Builder"],url:"https://electroncity.net.au/",src:"",g:["#e8590c","#b3206b"]},
 {n:"Sealing Wax Australia",c:"E-commerce",d:"A WooCommerce online store on WordPress, built with Beaver Builder.",t:["WordPress","Beaver Builder","WooCommerce"],url:"https://www.sealingwaxaustralia.com/",src:"",g:["#5b21b6","#0f7b6c"]}
];
const BADGES=["WordPress","Shopify","PHP","JavaScript","Liquid","HTML","CSS"];
const CHECK=["Build on staging","Responsive and QA review","DNS and domain configured","Deployed to production"];
/* ===== END CONTENT ===== */

const I={
 home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
 skills:'<path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>',exp:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3"/>',
 proj:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
 pin:'<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
 gh:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.900 1S18.700.6 16 2.500a13.400 13.400 0 0 0-7 0C6.300.6 5.100 1 5.100 1A5 5 0 0 0 5 4.800a5.400 5.400 0 0 0-1.500 3.700c0 5.500 3.300 6.700 6.400 7a3.400 3.400 0 0 0-1 2.600V22"/>',
 li:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
 copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',dl:'<path d="M12 4v11m-5-4l5 5 5-5M4 20h16"/>',
 code:'<path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>',rocket:'<path d="M5 15c-1 1-2 4-2 6 2 0 5-1 6-2M14 4c4-1 6-1 6-1s0 2-1 6l-7 7-5-5zM9 9l-4 1-2 3 4 1"/>',
 check:'<path d="M20 6L9 17l-5-5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.500 3-5.500 7-5.500s7 2 7 5.500M17 4.500a3.500 3.500 0 0 1 0 7M22 20c0-2.500-1.500-4-4-5"/>'
};
const ic=k=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${I[k]}</svg>`;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const safe=f=>{try{return f()}catch(e){return null}};

/* nav */
const NAV=[["home","Home","home"],["about","About","user"],["skills","Skills & expertise","skills"],["experience","Experience","exp"],["projects","Projects","proj"],["plugins","Custom plugins","code"],["contact","Contact","mail"]];
$("#nav").innerHTML=NAV.map(([id,l,i])=>`<li><a href="#${id}" data-id="${id}">${ic(i)}<span class="lbl">${esc(l)}</span></a></li>`).join("");
const link=(url,icon,label)=>url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${ic(icon)}</a>`:`<span role="link" aria-disabled="true" aria-label="${label} (add URL in CONFIG)" title="Add your ${label} URL in CONFIG">${ic(icon)}</span>`;
$("#soc").innerHTML=link(CONFIG.linkedin,"li","LinkedIn");
$("#st").textContent=CONFIG.status;
$("#resume").innerHTML=CONFIG.resumeUrl?`<a class="btn" href="${esc(CONFIG.resumeUrl)}" download>${ic("dl")} Download resume</a>`:`<span class="btn" role="link" aria-disabled="true" title="Add resumeUrl in CONFIG">${ic("dl")} Download resume</span>`;
$("#badges").innerHTML=BADGES.map(b=>`<span>${b}</span>`).join("");
{const out=$("#tout"),inp=$("#tcmd"),hist=[];let hi=0;
 const E=esc;
 const L=h=>{const d=document.createElement("div");d.innerHTML=h;out.appendChild(d);out.scrollTop=out.scrollHeight};
 const a=(u,t)=>`<a href="${E(u)}" target="_blank" rel="noopener noreferrer">${E(t)}</a>`;
 const CMD={
  help:()=>["Commands:","  about      who I am","  skills     what I work with","  projects   sites I've worked on","  plugins    plugins I've built","  contact    how to reach me","  clear      clear the screen"].map(E),
  about:()=>["Raphael M. Maurin","Web developer based in "+CONFIG.location+".","I manage websites and build the custom functionality they need."].map(E),
  skills:()=>Object.entries(SKILLS).map(([k,v])=>`<span class="c">${E(k)}</span>: ${E(v.join(", "))}`),
  projects:()=>PROJECTS.map(p=>`${E(p.n)} (${E(p.t.join(", "))}) ${a(p.url,"visit")}`),
  plugins:()=>PLUGINS.map(p=>`${E(p[0])}`),
  contact:()=>[`email     ${E(CONFIG.email)}`,`phone     ${E(CONFIG.phone)}`,`linkedin  ${CONFIG.linkedin?a(CONFIG.linkedin,"open profile"):"(not added yet)"}`]
 };
 const run=raw=>{const c=raw.trim().toLowerCase();L(`<span class="m">$</span> ${E(raw)}`);
  if(!c)return;
  if(c=="clear"){out.innerHTML="";return}
  if(CMD[c])CMD[c]().forEach(L);else L(`command not found: ${E(c)}. Type <span class="c">help</span>.`)};
 inp.addEventListener("keydown",e=>{
  if(e.key=="Enter"){const v=inp.value;if(v.trim())hist.push(v);hi=hist.length;run(v);inp.value=""}
  else if(e.key=="ArrowUp"&&hist.length){e.preventDefault();hi=Math.max(0,hi-1);inp.value=hist[hi]}
  else if(e.key=="ArrowDown"&&hist.length){e.preventDefault();hi=Math.min(hist.length,hi+1);inp.value=hist[hi]||""}});
 $("#term").addEventListener("click",e=>{if(!e.target.closest("a,button")&&!getSelection().toString())inp.focus({preventScroll:true})});
 $("#tchips").innerHTML=["help","about","skills","projects","plugins","contact"].map(c=>`<button type="button">${c}</button>`).join("");
 $("#tchips").onclick=e=>{const b=e.target.closest("button");if(b)run(b.textContent)};
 run("about");L(`<span class="m">Type </span><span class="c">help</span><span class="m"> or tap a command below.</span>`)}
if(CONFIG.photo)document.querySelectorAll(".dep .av").forEach(a=>{a.style.cssText="background:url('"+CONFIG.photo+"') center/cover";a.textContent=""});
$("#yr").textContent=new Date().getFullYear();

/* about */
$("#abt").innerHTML=ABOUT.map(([i,t,d])=>`<div class="card rv">${ic(i)}<h3>${t}</h3><p>${d}</p></div>`).join("");

const PLUGINS=[["Custom order form plugin","A WordPress plugin that adds a custom order form to a site."],["Google reviews plugin","A WordPress plugin that shows Google reviews on a site."],["MCP Bridge plugin","A WordPress plugin that connects a site to MCP."]];
$("#plg").innerHTML=PLUGINS.map(([n,d])=>`<div class="card rv">${ic("code")}<h3>${esc(n)}</h3><p>${esc(d)}</p></div>`).join("");

/* skills tabs */
const cats=Object.keys(SKILLS);
$("#tabs").innerHTML=cats.map((c,i)=>`<button class="tab" role="tab" aria-selected="${i==0}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
const showSkills=c=>{$("#chips").innerHTML=SKILLS[c].map(s=>`<span class="chip">${esc(s)}</span>`).join("");document.querySelectorAll("#tabs .tab").forEach(t=>t.setAttribute("aria-selected",t.dataset.c==c))};
$("#tabs").onclick=e=>{const b=e.target.closest(".tab");if(b)showSkills(b.dataset.c)};
showSkills(cats[0]);

/* experience */
$("#tl").innerHTML=JOBS.map(j=>`<article class="job rv"><h3>${j.t}</h3><div class="meta">Ad On Group PH &middot; ${j.p}</div><ul>${j.b.map(x=>`<li>${x}</li>`).join("")}</ul></article>`).join("");

/* projects */
const fc=["All",...new Set(PROJECTS.map(p=>p.c))];
$("#flt").innerHTML=fc.map((c,i)=>`<button class="tab" aria-pressed="${i==0}" data-f="${esc(c)}">${esc(c)}</button>`).join("");
$("#pg").innerHTML=PROJECTS.map(p=>`<article class="card pc rv" data-c="${esc(p.c)}"><span class="tag">${esc(p.c)}</span><h3>${esc(p.n)}</h3><p class="tech">${p.t.map(esc).join(", ")}</p>${p.url?`<a class="btn p" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${esc(p.n)} live site (opens in a new tab)">Visit live site</a>`:`<span class="btn" role="link" aria-disabled="true">Live link coming soon</span>`}</article>`).join("");
$("#flt").onclick=e=>{const b=e.target.closest("[data-f]");if(!b)return;
 document.querySelectorAll("#flt .tab").forEach(t=>t.setAttribute("aria-pressed",t==b));
 document.querySelectorAll("#pg .pc").forEach(c=>{const on=b.dataset.f=="All"||c.dataset.c==b.dataset.f;c.classList.toggle("hide",!on);if(on){c.style.animation="none";c.offsetWidth;c.style.animation="in .3s both"}})};

/* contact */
$("#ci").innerHTML=`<div class="row">${ic("mail")}<span>${esc(CONFIG.email)}</span><button class="ib" id="cp" aria-label="Copy email address">${ic("copy")}</button></div>
<a class="row" href="tel:${CONFIG.phone.replace(/\s/g,"")}">${ic("phone")}<span>${esc(CONFIG.phone)}</span></a>
<div class="row">${ic("pin")}<span>${esc(CONFIG.location)}</span></div>
<a class="btn p" href="mailto:${esc(CONFIG.email)}?subject=${encodeURIComponent("Freelance / remote opportunity")}">Discuss a freelance or remote role</a>`;
$("#cp").onclick=async()=>{const b=$("#cp");let ok=false;
 try{await navigator.clipboard.writeText(CONFIG.email);ok=true}catch(e){try{const t=document.createElement("textarea");t.value=CONFIG.email;document.body.appendChild(t);t.select();ok=document.execCommand("copy");t.remove()}catch(_){}}
 $("#msg").style.color=ok?"var(--ok)":"#d9304f";$("#msg").textContent=ok?"Email address copied.":"Couldn't copy. Select the address and copy it manually.";
 b.setAttribute("aria-label",ok?"Copied":"Copy failed");setTimeout(()=>b.setAttribute("aria-label","Copy email address"),1800)};
$("#f").onsubmit=e=>{e.preventDefault();const f=e.target;let bad=false;
 f.querySelectorAll("input,textarea").forEach(el=>{const v=el.value.trim();let m="";
  if(!v)m="This field is required.";else if(el.type=="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))m="Enter a valid email address.";
  el.setAttribute("aria-invalid",!!m);el.nextElementSibling.textContent=m;if(m)bad=true});
 const out=$("#msg");
 if(bad){out.style.color="#d9304f";out.textContent="Fix the highlighted fields and send again.";return}
 const d=new FormData(f);
 const body=`${d.get("message")}\n\nFrom: ${d.get("name")} <${d.get("email")}>`;
 location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent(d.get("subject"))}&body=${encodeURIComponent(body)}`;
 out.style.color="var(--ok)";out.textContent="Your email app should open with the message ready to send. If it doesn't, write to "+CONFIG.email+".";f.reset()};

/* sidebar behavior */
const body=document.body;
const setOpen=o=>{body.classList.toggle("open",o);$("#mo").setAttribute("aria-expanded",o)};
$("#mo").onclick=()=>setOpen(!body.classList.contains("open"));
$("#scrim").onclick=()=>setOpen(false);
document.addEventListener("keydown",e=>{if(e.key=="Escape")setOpen(false)});
$("#nav").onclick=e=>{if(e.target.closest("a"))setOpen(false)};
$("#side").addEventListener("click",e=>{if(e.target.closest(".cta"))setOpen(false)});
$("#col").onclick=()=>{body.classList.toggle("min");safe(()=>localStorage.setItem("rm-min",body.classList.contains("min")?"1":"0"))};
if(safe(()=>localStorage.getItem("rm-min"))=="1")body.classList.add("min");

/* hero background */
{const cv=$("#bg"),sec=$("#home"),cx=cv.getContext("2d"),dpr=Math.min(devicePixelRatio||1,2),reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
 let w=0,h=0,pts=[],raf=0;const m={x:-999,y:-999};
 const size=()=>{const r=sec.getBoundingClientRect();w=r.width;h=r.height;cv.width=w*dpr;cv.height=h*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
  pts=Array.from({length:Math.round(Math.min(90,w*h/16000))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))};
 const draw=()=>{cx.clearRect(0,0,w,h);cx.fillStyle="rgba(126,151,255,.7)";
  for(const p of pts){if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
   const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<110&&d>0){p.x+=dx/d*1.4;p.y+=dy/d*1.4}}}
  for(let i=0;i<pts.length;i++){const a=pts[i];cx.beginPath();cx.arc(a.x,a.y,1.6,0,6.283);cx.fill();
   for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<110){cx.strokeStyle=`rgba(126,151,255,${.25*(1-d/110)})`;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
   const dm=Math.hypot(a.x-m.x,a.y-m.y);if(dm<170){cx.strokeStyle=`rgba(232,89,12,${.6*(1-dm/170)})`;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(m.x,m.y);cx.stroke()}}
  if(!reduce)raf=requestAnimationFrame(draw)};
 size();draw();
 addEventListener("resize",()=>{size();if(reduce)draw()});
 sec.addEventListener("pointermove",e=>{const r=sec.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
 sec.addEventListener("pointerleave",()=>{m.x=m.y=-999});
 new IntersectionObserver(([en])=>{cancelAnimationFrame(raf);if(en.isIntersecting&&!reduce)draw()}).observe(sec)}

/* scroll spy, reveal, back to top */
const links=[...document.querySelectorAll("#nav a")];
const spy=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)links.forEach(a=>{const on=a.dataset.id==en.target.id;a.classList.toggle("on",on);on?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section").forEach(s=>spy.observe(s));
const rv=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("vis");rv.unobserve(en.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>rv.observe(el));
addEventListener("scroll",()=>$("#up").classList.toggle("show",scrollY>600),{passive:true});
$("#up").onclick=()=>scrollTo({top:0,behavior:"smooth"});