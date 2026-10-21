/* ===== SCHEMES DATA (from rural_govt_schemes_india.csv) ===== */
const SCHEMES = [
["Health","Ayushman Bharat PM-JAY","Free hospital cover up to Rs 5 lakh per family","pmjay.gov.in"],
["Health","Ayushman Vay Vandana","Health cover for senior citizens aged 70+","pmjay.gov.in"],
["Health","National Health Mission (NHM)","Umbrella for rural health staff facilities and programmes","nhm.gov.in"],
["Health","Ayushman Arogya Mandir (Health & Wellness Centres)","Primary care and screening close to the village","nhm.gov.in"],
["Health","PM-ABHIM","Funding for health infrastructure and labs","nhm.gov.in"],
["Health","Ayushman Bharat Digital Mission","ABHA health ID and digital health records","abdm.gov.in"],
["Health","Janani Suraksha Yojana","Cash support for institutional delivery","nhm.gov.in"],
["Health","PM Surakshit Matritva Abhiyan","Free antenatal check-ups for pregnant women","pmsma.mohfw.gov.in"],
["Health","PM Matru Vandana Yojana","Cash benefit for the first child","pmmvy.wcd.gov.in"],
["Health","Poshan 2.0 / Saksham Anganwadi","Nutrition for children pregnant women and nursing mothers","poshantracker.in"],
["Health","PM Bhartiya Jan Aushadhi","Low-cost generic medicines","janaushadhi.gov.in"],
["Jobs & Livelihood","VB-G RAM G (replaced MGNREGA from 1 Jul 2026)","125 days of guaranteed wage work per rural household","rural.gov.in"],
["Jobs & Livelihood","DAY-NRLM (Lakhpati Didi)","Self-help groups credit and livelihood for rural women","aajeevika.gov.in"],
["Jobs & Livelihood","DDU-GKY","Free job-linked skill training for rural youth","ddugky.gov.in"],
["Jobs & Livelihood","PMEGP","Subsidised loans to start micro-enterprises","kviconline.gov.in/pmegpeportal"],
["Jobs & Livelihood","PM Vishwakarma","Toolkit training and credit for artisans","pmvishwakarma.gov.in"],
["Jobs & Livelihood","PMKVY / Skill India","Short-term skill courses with certification","skillindiadigital.gov.in"],
["Jobs & Livelihood","e-Shram","National database and benefits for unorganised workers","eshram.gov.in"],
["Jobs & Livelihood","PM Shram Yogi Maandhan","Pension for unorganised workers","maandhan.in"],
["Jobs & Livelihood","PM Mudra Yojana","Collateral-free small business loans","mudra.org.in"],
["Jobs & Livelihood","NSAP","Old-age widow and disability pensions","nsap.nic.in"],
["Jobs & Livelihood","Atal Pension Yojana","Guaranteed pension after 60","jansuraksha.gov.in"],
["Jobs & Livelihood","PMJJBY and PMSBY","Low-premium life and accident insurance","jansuraksha.gov.in"],
["Basic Facilities","PMAY-Gramin","Pucca house for rural homeless and kutcha-house families","pmayg.nic.in"],
["Basic Facilities","PMGSY","All-weather roads connecting villages","pmgsy.nic.in"],
["Basic Facilities","Jal Jeevan Mission","Tap water connection to every rural home","jaljeevanmission.gov.in"],
["Basic Facilities","Swachh Bharat Mission (Gramin)","Toilets and village sanitation","swachhbharatmission.gov.in"],
["Basic Facilities","PM Ujjwala Yojana","LPG connection for poor households","pmuy.gov.in"],
["Basic Facilities","PM Surya Ghar Muft Bijli","Rooftop solar with subsidy","pmsuryaghar.gov.in"],
["Basic Facilities","PM-JANMAN","Housing roads and health for vulnerable tribal groups","tribal.nic.in"],
["Basic Facilities","NFSA / PM Garib Kalyan Anna Yojana","Subsidised or free ration","nfsa.gov.in"],
["Basic Facilities","PM POSHAN","Mid-day meals in schools","pmposhan.education.gov.in"],
["Basic Facilities","BharatNet","Broadband for gram panchayats","bbnl.nic.in"],
["Basic Facilities","SVAMITVA","Property cards for rural homeowners","svamitva.nic.in"],
["Basic Facilities","PM Jan Dhan Yojana","Zero-balance bank account with insurance","pmjdy.gov.in"],
["Basic Facilities","National Scholarship Portal","Central scholarships for students","scholarships.gov.in"],
["Agriculture","PM-KISAN","Rs 6000 a year direct income support","pmkisan.gov.in"],
["Agriculture","PM Fasal Bima Yojana","Crop insurance against weather and pest loss","pmfby.gov.in"],
["Agriculture","Kisan Credit Card","Cheap short-term farm credit","pmkisan.gov.in (KCC section) or any bank"],
["Agriculture","Soil Health Card","Soil test report with fertiliser advice","soilhealth.dac.gov.in"],
["Agriculture","e-NAM","Online mandi trading","enam.gov.in"],
["Agriculture","PM Krishi Sinchayee Yojana","Irrigation and per drop more crop","pmksy.gov.in"],
["Agriculture","PM-KUSUM","Solar pumps and solar power for farmers","pmkusum.mnre.gov.in"],
["Agriculture","Paramparagat Krishi Vikas Yojana","Support for organic farming","pgsindia-ncof.gov.in"],
["Agriculture","PM Kisan Maandhan Yojana","Pension for small farmers","maandhan.in"],
["Agriculture","Agriculture Infrastructure Fund","Loans for cold storage and warehouses","agriinfra.dac.gov.in"],
["Agriculture","FPO Scheme","Setting up farmer producer organisations","sfacindia.com"],
["Agriculture","PM Matsya Sampada Yojana","Fisheries support","pmmsy.dof.gov.in"],
["Agriculture","Rashtriya Gokul Mission","Cattle and dairy development","dahd.gov.in"],
["Agriculture","PM Formalisation of Micro Food Processing Enterprises","Subsidy for small food-processing units","pmfme.mofpi.gov.in"]
];
const CAT_STYLE = {
  "Health": {badge:"bg-red-100 text-red-800", icon:"fa-heart-pulse"},
  "Jobs & Livelihood": {badge:"bg-amber-100 text-amber-800", icon:"fa-briefcase"},
  "Basic Facilities": {badge:"bg-blue-100 text-blue-800", icon:"fa-house-chimney"},
  "Agriculture": {badge:"bg-emerald-100 text-emerald-800", icon:"fa-wheat-awn"}
};

function renderSchemes(){
  const q = document.getElementById('scheme-search').value.toLowerCase().trim();
  const cat = document.getElementById('scheme-category').value;
  const grid = document.getElementById('schemes-grid');
  grid.innerHTML = '';
  let shown = 0;
  SCHEMES.forEach((s, i) => {
    const [c, name, benefit] = s;
    if (cat !== 'all' && c !== cat) return;
    if (q && !(name + ' ' + benefit + ' ' + c).toLowerCase().includes(q)) return;
    shown++;
    const st = CAT_STYLE[c];
    const card = document.createElement('div');
    card.className = 'card-element bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-emerald-400 flex flex-col';
    card.innerHTML =
      '<div class="flex justify-between items-start mb-2">' +
        '<span class="' + st.badge + ' text-xs px-2.5 py-1 rounded-full font-bold"><i class="fa-solid ' + st.icon + ' mr-1"></i>' + c + '</span>' +
        '<button class="text-slate-400 hover:text-emerald-600" onclick="speakScheme(' + i + ')"><i class="fa-solid fa-volume-high"></i></button>' +
      '</div>' +
      '<h3 class="font-bold text-slate-900 text-base leading-snug"></h3>' +
      '<p class="text-xs text-slate-600 mt-1 mb-4 flex-grow"></p>' +
      '<button onclick="showScheme(' + i + ')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-xl text-xs">Details & Apply</button>';
    card.querySelector('h3').textContent = name;
    card.querySelector('p').textContent = benefit;
    grid.appendChild(card);
  });
  document.getElementById('no-scheme').classList.toggle('hidden', shown > 0);
  document.getElementById('scheme-count').textContent = 'Showing ' + shown + ' of ' + SCHEMES.length + ' schemes';
}
function speakScheme(i){ speakText(SCHEMES[i][1] + '. ' + SCHEMES[i][2]); }
function showScheme(i){
  const [c, name, benefit, site] = SCHEMES[i];
  const url = 'https://' + site.split(/[\s(]/)[0];
  openModal(name, 'Benefit: ' + benefit + '\n\nApply / details ke liye official website visit karein. Eligibility aur documents wahan dekh lein.', c, url, site);
}

/* ===== UI HELPERS ===== */
let voiceOn = false;
function setFontSize(s){const b=document.getElementById('app-body');b.classList.remove('text-size-sm','text-size-base','text-size-lg');b.classList.add('text-size-'+s);}
function toggleMobileNav(){document.getElementById('mobile-nav').classList.toggle('hidden');}
function switchTab(name){
  document.querySelectorAll('.view-content').forEach(v=>v.classList.add('hidden'));
  document.getElementById('view-'+name).classList.remove('hidden');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('tab-btn-'+name); if(btn) btn.classList.add('active');
  if(name==='admin') renderAdminUsers();
  window.scrollTo({top:0,behavior:'smooth'});
}
function toggleLowBandwidth(){
  const on=document.body.classList.toggle('low-bandwidth');
  document.getElementById('bw-txt').textContent=on?'Low-BW: ON':'Low-BW Mode';
}
function toggleVoiceAssistant(){
  voiceOn=!voiceOn;
  document.getElementById('voice-txt').textContent=voiceOn?'Voice: ON':'Voice: OFF';
  const bn=document.getElementById('voice-banner');
  bn.classList.toggle('hidden',!voiceOn); bn.classList.toggle('flex',voiceOn);
  if(!voiceOn) stopVoiceAudio();
}
function stopVoiceAudio(){ if('speechSynthesis' in window) speechSynthesis.cancel(); }
function speakText(t){
  if(!voiceOn||!('speechSynthesis' in window)) return;
  stopVoiceAudio();
  const u=new SpeechSynthesisUtterance(t);
  u.lang=document.getElementById('lang-select').value==='en'?'en-IN':'hi-IN';
  speechSynthesis.speak(u);
}
function changeLanguage(l){ showQuickAlert(l==='en'?'Language: English':'Language set (demo: full translation baaki hai)'); }
function showQuickAlert(msg){
  const t=document.getElementById('toast'); t.textContent=msg; t.classList.remove('hidden');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.add('hidden'),2500);
}
function openModal(title, body, category, url, siteText){
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = body;
  const badge = document.getElementById('modal-badge');
  const st = CAT_STYLE[category];
  badge.className = 'inline-block text-xs px-2.5 py-1 rounded-full font-bold mb-2 ' + (st ? st.badge : 'hidden');
  badge.textContent = category || '';
  const extra = document.getElementById('modal-extra');
  extra.innerHTML = '';
  if (url) {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.className = 'inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-xl';
    a.textContent = 'Visit: ' + siteText;
    extra.appendChild(a);
  }
  document.getElementById('info-modal').classList.remove('hidden');
}
function closeModal(){document.getElementById('info-modal').classList.add('hidden');}

/* ===== AUTH (frontend demo, localStorage) ===== */
const USERS_KEY='gc_users', SESSION_KEY='gc_session';
function getUsers(){try{return JSON.parse(localStorage.getItem(USERS_KEY))||{};}catch{return {};}}
async function hashPwd(p){
  if(!(window.crypto&&crypto.subtle)) return btoa(unescape(encodeURIComponent(p)));
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(p));
  return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
function showAuthError(m){const e=document.getElementById('auth-error');e.textContent=m;e.classList.toggle('hidden',!m);}
function openAuth(mode='login'){document.getElementById('auth-modal').classList.remove('hidden');switchAuth(mode);}
function closeAuth(){document.getElementById('auth-modal').classList.add('hidden');showAuthError('');}
function switchAuth(mode){
  showAuthError('');
  document.getElementById('auth-login').classList.toggle('hidden',mode!=='login');
  document.getElementById('auth-register').classList.toggle('hidden',mode!=='register');
  const a='text-emerald-600 border-b-2 border-emerald-600', i='text-slate-500';
  document.getElementById('auth-tab-login').className='flex-1 py-2 text-sm font-semibold '+(mode==='login'?a:i);
  document.getElementById('auth-tab-register').className='flex-1 py-2 text-sm font-semibold '+(mode==='register'?a:i);
}
async function handleRegister(){
  const name=document.getElementById('reg-name').value.trim();
  const mobile=document.getElementById('reg-mobile').value.trim();
  const village=document.getElementById('reg-village').value.trim();
  const pwd=document.getElementById('reg-password').value;
  const confirm=document.getElementById('reg-confirm').value;
  if(!name||!mobile||!village||!pwd) return showAuthError('Saari fields bharna zaruri hai.');
  if(!/^[6-9]\d{9}$/.test(mobile)) return showAuthError('Sahi 10-digit mobile number daalein.');
  if(pwd.length<6) return showAuthError('Password kam se kam 6 characters ka ho.');
  if(pwd!==confirm) return showAuthError('Dono passwords match nahi kar rahe.');
  const users=getUsers();
  if(users[mobile]) return showAuthError('Is mobile number se account pehle se hai.');
  users[mobile]={name,mobile,village,pwdHash:await hashPwd(pwd)};
  localStorage.setItem(USERS_KEY,JSON.stringify(users));
  localStorage.setItem(SESSION_KEY,mobile);
  closeAuth(); updateAuthUI(); showQuickAlert('Account ban gaya, swagat hai '+name+'!');
}
async function handleLogin(){
  const mobile=document.getElementById('login-mobile').value.trim();
  const pwd=document.getElementById('login-password').value;
  const user=getUsers()[mobile];
  if(!user||user.pwdHash!==await hashPwd(pwd)) return showAuthError('Mobile number ya password galat hai.');
  localStorage.setItem(SESSION_KEY,mobile);
  closeAuth(); updateAuthUI(); showQuickAlert('Login ho gaya!');
}
function logout(){localStorage.removeItem(SESSION_KEY);updateAuthUI();showQuickAlert('Logout ho gaya.');}
function updateAuthUI(){
  const mobile=localStorage.getItem(SESSION_KEY);
  const user=mobile?getUsers()[mobile]:null;
  document.getElementById('auth-login-btn').classList.toggle('hidden',!!user);
  const chip=document.getElementById('user-chip');
  chip.classList.toggle('hidden',!user); chip.classList.toggle('flex',!!user);
  if(user) document.getElementById('user-name').textContent=user.name;
}
function renderAdminUsers(){
  const tb=document.getElementById('admin-users'); tb.innerHTML='';
  const list=Object.values(getUsers());
  if(!list.length){tb.innerHTML='<tr><td class="p-3 text-slate-500" colspan="3">Abhi koi user register nahi hua.</td></tr>';return;}
  list.forEach(u=>{
    const tr=document.createElement('tr'); tr.className='border-b';
    [u.name,u.mobile,u.village].forEach(v=>{const td=document.createElement('td');td.className='p-3';td.textContent=v;tr.appendChild(td);});
    tb.appendChild(tr);
  });
}
document.addEventListener('DOMContentLoaded',()=>{ renderSchemes(); updateAuthUI(); });