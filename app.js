/* ===== EXTRA TRANSLATION KEYS (used by app.js; lang.js must load first) ===== */
Object.assign(DICT.en, {
  "sch.details": "Details & Apply",
  "sch.showing": "Showing {shown} of {total} schemes",
  "modal.benefit": "Benefit:",
  "modal.note": "Visit the official website to apply or get details. Check eligibility and required documents there.",
  "modal.visit": "Visit:",
  "bw.on": "Low-BW: ON",
  "bw.off": "Low-BW Mode",
  "voice.on": "Voice: ON",
  "voice.off": "Voice: OFF",
  "ad.empty": "No users registered yet.",
  "err.required": "All fields are required.",
  "err.mobile": "Enter a valid 10-digit mobile number.",
  "err.password": "Password must be at least 6 characters.",
  "err.mismatch": "Passwords do not match.",
  "err.exists": "An account with this mobile number already exists.",
  "err.invalid": "Invalid mobile number or password.",
  "msg.registered": "Account created, welcome {name}!",
  "msg.loggedIn": "Logged in successfully!",
  "msg.loggedOut": "Logged out."
});
Object.assign(DICT.hi, {
  "sch.details": "विवरण और आवेदन",
  "sch.showing": "{total} में से {shown} योजनाएँ दिखाई जा रही हैं",
  "modal.benefit": "लाभ:",
  "modal.note": "आवेदन या जानकारी के लिए आधिकारिक वेबसाइट पर जाएँ। पात्रता और ज़रूरी दस्तावेज़ वहीं देखें।",
  "modal.visit": "वेबसाइट देखें:",
  "bw.on": "लो-बैंडविड्थ: चालू",
  "bw.off": "लो-बैंडविड्थ मोड",
  "voice.on": "आवाज़: चालू",
  "voice.off": "आवाज़: बंद",
  "ad.empty": "अभी कोई उपयोगकर्ता पंजीकृत नहीं है।",
  "err.required": "सभी फ़ील्ड भरना ज़रूरी है।",
  "err.mobile": "कृपया सही 10 अंकों का मोबाइल नंबर डालें।",
  "err.password": "पासवर्ड कम से कम 6 अक्षर का होना चाहिए।",
  "err.mismatch": "दोनों पासवर्ड मेल नहीं खाते।",
  "err.exists": "इस मोबाइल नंबर से खाता पहले से मौजूद है।",
  "err.invalid": "मोबाइल नंबर या पासवर्ड गलत है।",
  "msg.registered": "खाता बन गया, स्वागत है {name}!",
  "msg.loggedIn": "लॉगिन सफल रहा!",
  "msg.loggedOut": "लॉगआउट हो गया।"
});

/* ===== SCHEMES DATA =====
   Row format: [category, name, benefit, website, name_hi, benefit_hi] */
const SCHEMES = [
["Health","Ayushman Bharat PM-JAY","Free hospital cover up to Rs 5 lakh per family","pmjay.gov.in","आयुष्मान भारत पीएम-जय","प्रति परिवार ₹5 लाख तक का मुफ़्त अस्पताल कवर"],
["Health","Ayushman Vay Vandana","Health cover for senior citizens aged 70+","pmjay.gov.in","आयुष्मान वय वंदना","70+ आयु के वरिष्ठ नागरिकों के लिए स्वास्थ्य कवर"],
["Health","National Health Mission (NHM)","Umbrella for rural health staff facilities and programmes","nhm.gov.in","राष्ट्रीय स्वास्थ्य मिशन (NHM)","ग्रामीण स्वास्थ्य कर्मियों, सुविधाओं और कार्यक्रमों की समग्र योजना"],
["Health","Ayushman Arogya Mandir (Health & Wellness Centres)","Primary care and screening close to the village","nhm.gov.in","आयुष्मान आरोग्य मंदिर (स्वास्थ्य एवं कल्याण केंद्र)","गाँव के पास प्राथमिक उपचार और जाँच सुविधा"],
["Health","PM-ABHIM","Funding for health infrastructure and labs","nhm.gov.in","पीएम-अभिम (PM-ABHIM)","स्वास्थ्य अवसंरचना और प्रयोगशालाओं के लिए वित्तीय सहायता"],
["Health","Ayushman Bharat Digital Mission","ABHA health ID and digital health records","abdm.gov.in","आयुष्मान भारत डिजिटल मिशन","ABHA हेल्थ आईडी और डिजिटल स्वास्थ्य रिकॉर्ड"],
["Health","Janani Suraksha Yojana","Cash support for institutional delivery","nhm.gov.in","जननी सुरक्षा योजना","अस्पताल में प्रसव के लिए नकद सहायता"],
["Health","PM Surakshit Matritva Abhiyan","Free antenatal check-ups for pregnant women","pmsma.mohfw.gov.in","प्रधानमंत्री सुरक्षित मातृत्व अभियान","गर्भवती महिलाओं के लिए निःशुल्क प्रसवपूर्व जाँच"],
["Health","PM Matru Vandana Yojana","Cash benefit for the first child","pmmvy.wcd.gov.in","प्रधानमंत्री मातृ वंदना योजना","पहले बच्चे के लिए नकद लाभ"],
["Health","Poshan 2.0 / Saksham Anganwadi","Nutrition for children pregnant women and nursing mothers","poshantracker.in","पोषण 2.0 / सक्षम आंगनवाड़ी","बच्चों, गर्भवती और धात्री महिलाओं के लिए पोषण"],
["Health","PM Bhartiya Jan Aushadhi","Low-cost generic medicines","janaushadhi.gov.in","प्रधानमंत्री भारतीय जन औषधि","कम कीमत की जेनेरिक दवाएँ"],
["Jobs & Livelihood","VB-G RAM G (replaced MGNREGA from 1 Jul 2026)","125 days of guaranteed wage work per rural household","rural.gov.in","VB-G RAM G (1 जुलाई 2026 से मनरेगा की जगह)","प्रति ग्रामीण परिवार 125 दिन का गारंटीकृत मज़दूरी कार्य"],
["Jobs & Livelihood","DAY-NRLM (Lakhpati Didi)","Self-help groups credit and livelihood for rural women","aajeevika.gov.in","DAY-NRLM (लखपति दीदी)","ग्रामीण महिलाओं के लिए स्वयं सहायता समूह, ऋण और आजीविका"],
["Jobs & Livelihood","DDU-GKY","Free job-linked skill training for rural youth","ddugky.gov.in","दीन दयाल उपाध्याय ग्रामीण कौशल्य योजना (DDU-GKY)","ग्रामीण युवाओं के लिए निःशुल्क रोज़गार-आधारित कौशल प्रशिक्षण"],
["Jobs & Livelihood","PMEGP","Subsidised loans to start micro-enterprises","kviconline.gov.in/pmegpeportal","पीएमईजीपी (PMEGP)","सूक्ष्म उद्यम शुरू करने के लिए अनुदान सहित ऋण"],
["Jobs & Livelihood","PM Vishwakarma","Toolkit training and credit for artisans","pmvishwakarma.gov.in","पीएम विश्वकर्मा","कारीगरों के लिए टूलकिट, प्रशिक्षण और ऋण"],
["Jobs & Livelihood","PMKVY / Skill India","Short-term skill courses with certification","skillindiadigital.gov.in","पीएमकेवीवाई / स्किल इंडिया","प्रमाणपत्र सहित अल्पकालिक कौशल पाठ्यक्रम"],
["Jobs & Livelihood","e-Shram","National database and benefits for unorganised workers","eshram.gov.in","ई-श्रम","असंगठित श्रमिकों के लिए राष्ट्रीय डेटाबेस और लाभ"],
["Jobs & Livelihood","PM Shram Yogi Maandhan","Pension for unorganised workers","maandhan.in","प्रधानमंत्री श्रम योगी मानधन","असंगठित श्रमिकों के लिए पेंशन"],
["Jobs & Livelihood","PM Mudra Yojana","Collateral-free small business loans","mudra.org.in","प्रधानमंत्री मुद्रा योजना","बिना गारंटी छोटे कारोबार के लिए ऋण"],
["Jobs & Livelihood","NSAP","Old-age widow and disability pensions","nsap.nic.in","राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)","वृद्धावस्था, विधवा और दिव्यांग पेंशन"],
["Jobs & Livelihood","Atal Pension Yojana","Guaranteed pension after 60","jansuraksha.gov.in","अटल पेंशन योजना","60 वर्ष के बाद गारंटीकृत पेंशन"],
["Jobs & Livelihood","PMJJBY and PMSBY","Low-premium life and accident insurance","jansuraksha.gov.in","पीएमजेजेबीवाई और पीएमएसबीवाई","कम प्रीमियम पर जीवन और दुर्घटना बीमा"],
["Basic Facilities","PMAY-Gramin","Pucca house for rural homeless and kutcha-house families","pmayg.nic.in","प्रधानमंत्री आवास योजना-ग्रामीण","बेघर और कच्चे मकान वाले ग्रामीण परिवारों के लिए पक्का घर"],
["Basic Facilities","PMGSY","All-weather roads connecting villages","pmgsy.nic.in","प्रधानमंत्री ग्राम सड़क योजना","गाँवों को जोड़ने वाली सभी मौसम में चलने योग्य सड़कें"],
["Basic Facilities","Jal Jeevan Mission","Tap water connection to every rural home","jaljeevanmission.gov.in","जल जीवन मिशन","हर ग्रामीण घर में नल से जल कनेक्शन"],
["Basic Facilities","Swachh Bharat Mission (Gramin)","Toilets and village sanitation","swachhbharatmission.gov.in","स्वच्छ भारत मिशन (ग्रामीण)","शौचालय और गाँव की स्वच्छता"],
["Basic Facilities","PM Ujjwala Yojana","LPG connection for poor households","pmuy.gov.in","प्रधानमंत्री उज्ज्वला योजना","गरीब परिवारों को एलपीजी कनेक्शन"],
["Basic Facilities","PM Surya Ghar Muft Bijli","Rooftop solar with subsidy","pmsuryaghar.gov.in","पीएम सूर्य घर मुफ़्त बिजली योजना","सब्सिडी के साथ छत पर सोलर"],
["Basic Facilities","PM-JANMAN","Housing roads and health for vulnerable tribal groups","tribal.nic.in","पीएम-जनमन","अति संवेदनशील जनजातीय समूहों के लिए आवास, सड़क और स्वास्थ्य"],
["Basic Facilities","NFSA / PM Garib Kalyan Anna Yojana","Subsidised or free ration","nfsa.gov.in","NFSA / प्रधानमंत्री गरीब कल्याण अन्न योजना","रियायती या मुफ़्त राशन"],
["Basic Facilities","PM POSHAN","Mid-day meals in schools","pmposhan.education.gov.in","पीएम पोषण","स्कूलों में मध्याह्न भोजन"],
["Basic Facilities","BharatNet","Broadband for gram panchayats","bbnl.nic.in","भारतनेट","ग्राम पंचायतों के लिए ब्रॉडबैंड"],
["Basic Facilities","SVAMITVA","Property cards for rural homeowners","svamitva.nic.in","स्वामित्व योजना","ग्रामीण घर मालिकों के लिए प्रॉपर्टी कार्ड"],
["Basic Facilities","PM Jan Dhan Yojana","Zero-balance bank account with insurance","pmjdy.gov.in","प्रधानमंत्री जन धन योजना","बीमा सहित ज़ीरो-बैलेंस बैंक खाता"],
["Basic Facilities","National Scholarship Portal","Central scholarships for students","scholarships.gov.in","राष्ट्रीय छात्रवृत्ति पोर्टल","विद्यार्थियों के लिए केंद्रीय छात्रवृत्तियाँ"],
["Agriculture","PM-KISAN","Rs 6000 a year direct income support","pmkisan.gov.in","पीएम-किसान","सालाना ₹6,000 की सीधी आय सहायता"],
["Agriculture","PM Fasal Bima Yojana","Crop insurance against weather and pest loss","pmfby.gov.in","प्रधानमंत्री फसल बीमा योजना","मौसम और कीट से फसल नुकसान पर बीमा"],
["Agriculture","Kisan Credit Card","Cheap short-term farm credit","pmkisan.gov.in (KCC section) or any bank","किसान क्रेडिट कार्ड","सस्ता अल्पकालिक कृषि ऋण"],
["Agriculture","Soil Health Card","Soil test report with fertiliser advice","soilhealth.dac.gov.in","मृदा स्वास्थ्य कार्ड","उर्वरक सलाह के साथ मिट्टी जाँच रिपोर्ट"],
["Agriculture","e-NAM","Online mandi trading","enam.gov.in","ई-नाम (e-NAM)","ऑनलाइन मंडी व्यापार"],
["Agriculture","PM Krishi Sinchayee Yojana","Irrigation and per drop more crop","pmksy.gov.in","प्रधानमंत्री कृषि सिंचाई योजना","सिंचाई और 'प्रति बूँद अधिक फसल'"],
["Agriculture","PM-KUSUM","Solar pumps and solar power for farmers","pmkusum.mnre.gov.in","पीएम-कुसुम","किसानों के लिए सोलर पंप और सौर ऊर्जा"],
["Agriculture","Paramparagat Krishi Vikas Yojana","Support for organic farming","pgsindia-ncof.gov.in","परंपरागत कृषि विकास योजना","जैविक खेती के लिए सहायता"],
["Agriculture","PM Kisan Maandhan Yojana","Pension for small farmers","maandhan.in","प्रधानमंत्री किसान मानधन योजना","छोटे किसानों के लिए पेंशन"],
["Agriculture","Agriculture Infrastructure Fund","Loans for cold storage and warehouses","agriinfra.dac.gov.in","कृषि अवसंरचना कोष","कोल्ड स्टोरेज और गोदामों के लिए ऋण"],
["Agriculture","FPO Scheme","Setting up farmer producer organisations","sfacindia.com","एफपीओ योजना","किसान उत्पादक संगठन बनाने में सहायता"],
["Agriculture","PM Matsya Sampada Yojana","Fisheries support","pmmsy.dof.gov.in","प्रधानमंत्री मत्स्य संपदा योजना","मत्स्य पालन सहायता"],
["Agriculture","Rashtriya Gokul Mission","Cattle and dairy development","dahd.gov.in","राष्ट्रीय गोकुल मिशन","गोवंश और डेयरी विकास"],
["Agriculture","PM Formalisation of Micro Food Processing Enterprises","Subsidy for small food-processing units","pmfme.mofpi.gov.in","पीएम सूक्ष्म खाद्य प्रसंस्करण उद्यम औपचारिकीकरण योजना","छोटी खाद्य प्रसंस्करण इकाइयों के लिए सब्सिडी"]
];

const CAT_STYLE = {
  "Health": {badge:"bg-red-100 text-red-800", icon:"fa-heart-pulse"},
  "Jobs & Livelihood": {badge:"bg-amber-100 text-amber-800", icon:"fa-briefcase"},
  "Basic Facilities": {badge:"bg-blue-100 text-blue-800", icon:"fa-house-chimney"},
  "Agriculture": {badge:"bg-emerald-100 text-emerald-800", icon:"fa-wheat-awn"}
};
const CAT_KEY = {
  "Health": "cat.health",
  "Jobs & Livelihood": "cat.jobs",
  "Basic Facilities": "cat.basic",
  "Agriculture": "cat.agri"
};

/* Helpers: pick name/benefit/category in the current language */
function schemeName(s){ return currentLang === 'hi' && s[4] ? s[4] : s[1]; }
function schemeBenefit(s){ return currentLang === 'hi' && s[5] ? s[5] : s[2]; }
function catLabel(c){ return CAT_KEY[c] ? t(CAT_KEY[c]) : c; }

function renderSchemes(){
  const q = document.getElementById('scheme-search').value.toLowerCase().trim();
  const cat = document.getElementById('scheme-category').value;
  const grid = document.getElementById('schemes-grid');
  grid.innerHTML = '';
  let shown = 0;
  SCHEMES.forEach((s, i) => {
    const c = s[0];
    if (cat !== 'all' && c !== cat) return;
    // search in both English and Hindi text
    const hay = (s[1] + ' ' + s[2] + ' ' + c + ' ' + (s[4] || '') + ' ' + (s[5] || '')).toLowerCase();
    if (q && !hay.includes(q)) return;
    shown++;
    const st = CAT_STYLE[c];
    const card = document.createElement('div');
    card.className = 'card-element bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-emerald-400 flex flex-col';
    card.innerHTML =
      '<div class="flex justify-between items-start mb-2">' +
        '<span class="' + st.badge + ' text-xs px-2.5 py-1 rounded-full font-bold"><i class="fa-solid ' + st.icon + ' mr-1"></i><span class="cat-label"></span></span>' +
        '<button class="text-slate-400 hover:text-emerald-600" onclick="speakScheme(' + i + ')"><i class="fa-solid fa-volume-high"></i></button>' +
      '</div>' +
      '<h3 class="font-bold text-slate-900 text-base leading-snug"></h3>' +
      '<p class="text-xs text-slate-600 mt-1 mb-4 flex-grow"></p>' +
      '<button onclick="showScheme(' + i + ')" class="details-btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-xl text-xs"></button>';
    card.querySelector('.cat-label').textContent = catLabel(c);
    card.querySelector('h3').textContent = schemeName(s);
    card.querySelector('p').textContent = schemeBenefit(s);
    card.querySelector('.details-btn').textContent = t('sch.details');
    grid.appendChild(card);
  });
  document.getElementById('no-scheme').classList.toggle('hidden', shown > 0);
  document.getElementById('scheme-count').textContent =
    t('sch.showing').replace('{shown}', shown).replace('{total}', SCHEMES.length);
}
function speakScheme(i){ speakText(schemeName(SCHEMES[i]) + '. ' + schemeBenefit(SCHEMES[i])); }
function showScheme(i){
  const s = SCHEMES[i];
  const c = s[0], site = s[3];
  const url = 'https://' + site.split(/[\s(]/)[0];
  openModal(schemeName(s), t('modal.benefit') + ' ' + schemeBenefit(s) + '\n\n' + t('modal.note'), c, url, site);
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
function updateToggleLabels(){
  const bw=document.getElementById('bw-txt');
  if(bw) bw.textContent=t(document.body.classList.contains('low-bandwidth')?'bw.on':'bw.off');
  const vt=document.getElementById('voice-txt');
  if(vt) vt.textContent=t(voiceOn?'voice.on':'voice.off');
}
function toggleLowBandwidth(){
  document.body.classList.toggle('low-bandwidth');
  updateToggleLabels();
}
function toggleVoiceAssistant(){
  voiceOn=!voiceOn;
  updateToggleLabels();
  const bn=document.getElementById('voice-banner');
  bn.classList.toggle('hidden',!voiceOn); bn.classList.toggle('flex',voiceOn);
  if(!voiceOn) stopVoiceAudio();
}
function stopVoiceAudio(){ if('speechSynthesis' in window) speechSynthesis.cancel(); }
function speakText(text){
  if(!voiceOn||!('speechSynthesis' in window)) return;
  stopVoiceAudio();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=getSpeechLang();
  speechSynthesis.speak(u);
}
/* kept for compatibility: anything that calls changeLanguage() now uses setLang() */
function changeLanguage(l){ setLang(l); }

function showQuickAlert(msg){
  const el=document.getElementById('toast'); el.textContent=msg; el.classList.remove('hidden');
  clearTimeout(el._t); el._t=setTimeout(()=>el.classList.add('hidden'),2500);
}
function openModal(title, body, category, url, siteText){
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = body;
  const badge = document.getElementById('modal-badge');
  const st = CAT_STYLE[category];
  badge.className = 'inline-block text-xs px-2.5 py-1 rounded-full font-bold mb-2 ' + (st ? st.badge : 'hidden');
  badge.textContent = category ? catLabel(category) : '';
  const extra = document.getElementById('modal-extra');
  extra.innerHTML = '';
  if (url) {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.className = 'inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-xl';
    a.textContent = t('modal.visit') + ' ' + siteText;
    extra.appendChild(a);
  }
  document.getElementById('info-modal').classList.remove('hidden');
}
function closeModal(){document.getElementById('info-modal').classList.add('hidden');}

const USERS_KEY = 'gc_users', SESSION_KEY = 'gc_session';

const STATES = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"];
const CROPS = ["Wheat","Rice (Paddy)","Mustard","Maize","Sugarcane","Potato","Onion","Tomato","Pulses","Cotton","Other"];

/* ---------- storage helpers ---------- */
function getUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; } catch { return {}; } }
function saveUsers(u) { try { localStorage.setItem(USERS_KEY, JSON.stringify(u)); } catch {} }
function currentUser() { const m = localStorage.getItem(SESSION_KEY); return m ? getUsers()[m] || null : null; }

async function hashPwd(p) {
  if (!(window.crypto && crypto.subtle)) return btoa(unescape(encodeURIComponent(p)));
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(p));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ---------- page control ---------- */
function showAuthError(m) { const e = document.getElementById('auth-error'); e.textContent = m; e.classList.toggle('hidden', !m); }
function openAuth(mode = 'login') { switchAuth(mode); }
function closeAuth() { showAuthError(''); }

function switchAuth(mode) {            // 'login' | 'register' | 'profile'
  showAuthError('');
  ['login', 'register', 'profile'].forEach(m =>
    document.getElementById('auth-' + m).classList.toggle('hidden', m !== mode));
  document.getElementById('auth-tabs').classList.toggle('hidden', mode === 'profile');
  const on = 'text-emerald-600 border-b-2 border-emerald-600', off = 'text-slate-500';
  document.getElementById('auth-tab-login').className = 'flex-1 py-2 text-sm font-semibold ' + (mode === 'login' ? on : off);
  document.getElementById('auth-tab-register').className = 'flex-1 py-2 text-sm font-semibold ' + (mode === 'register' ? on : off);
}

/* ---------- STAGE 1: create account ---------- */
async function handleRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const mobile = document.getElementById('reg-mobile').value.trim();
  const language = document.getElementById('reg-language').value;
  const pwd = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  const consent = document.getElementById('reg-consent').checked;

  if (!name || !mobile || !pwd) return showAuthError(t('err.required'));
  if (!/^[6-9]\d{9}$/.test(mobile)) return showAuthError(t('err.mobile'));
  if (pwd.length < 6) return showAuthError(t('err.password'));
  if (pwd !== confirm) return showAuthError(t('err.mismatch'));
  if (!consent) return showAuthError('Please tick the consent box. / कृपया सहमति बॉक्स टिक करें।');

  const users = getUsers();
  if (users[mobile]) return showAuthError(t('err.exists'));

  users[mobile] = {
    name, mobile, language,
    role: 'citizen',
    pwdHash: await hashPwd(pwd),
    consent: true,
    createdAt: new Date().toISOString(),
    profileDone: false,
    profile: {}
  };
  saveUsers(users);
  localStorage.setItem(SESSION_KEY, mobile);
  updateAuthUI();
  prefillProfile();
  switchAuth('profile');               // go straight to stage 2
  showQuickAlert('Account created! Now fill your profile. / खाता बन गया! अब प्रोफ़ाइल भरें।');
}

/* ---------- STAGE 2: profile ---------- */
function initProfileForm() {
  const st = document.getElementById('pf-state');
  st.innerHTML = '<option value="">State</option>' + STATES.map(s => `<option>${s}</option>`).join('');
  const box = document.getElementById('pf-crops');
  box.innerHTML = '';
  CROPS.forEach(c => {
    const l = document.createElement('label');
    l.className = 'inline-flex items-center gap-1 bg-white border border-slate-300 rounded-full px-2.5 py-1';
    const i = document.createElement('input');
    i.type = 'checkbox'; i.value = c; i.className = 'pf-crop';
    l.appendChild(i); l.appendChild(document.createTextNode(' ' + c));
    box.appendChild(l);
  });
}

function toggleFarmFields() {
  document.getElementById('pf-farm').classList.toggle('hidden',
    document.getElementById('pf-occupation').value !== 'farmer');
}

function prefillProfile() {
  const p = (currentUser() || {}).profile || {};
  const set = (id, v) => { document.getElementById(id).value = v ?? ''; };
  set('pf-state', p.state); set('pf-district', p.district); set('pf-village', p.village);
  set('pf-occupation', p.occupation); set('pf-land', p.landAcres);
  set('pf-gender', p.gender); set('pf-age', p.ageGroup); set('pf-category', p.category);
  set('pf-income', p.income); set('pf-family', p.familySize);
  document.getElementById('pf-ration').checked = !!p.hasRationCard;
  document.getElementById('pf-bank').checked = !!p.hasBankAccount;
  document.querySelectorAll('.pf-crop').forEach(c => { c.checked = (p.crops || []).includes(c.value); });
  toggleFarmFields();
}

function openProfile() {
  if (!currentUser()) return openAuth('login');
  prefillProfile();
  switchAuth('profile');
  switchTab('auth');
}

function saveProfile() {
  const users = getUsers(), mobile = localStorage.getItem(SESSION_KEY);
  if (!mobile || !users[mobile]) return showAuthError('Please login first. / पहले लॉगिन करें।');
  const v = id => document.getElementById(id).value.trim();
  const isFarmer = v('pf-occupation') === 'farmer';

  if (!v('pf-state') || !v('pf-district')) return showAuthError('State and district are required to show your local mandi and hospitals. / राज्य और ज़िला ज़रूरी हैं।');

  users[mobile].profile = {
    state: v('pf-state'), district: v('pf-district'), village: v('pf-village'),
    occupation: v('pf-occupation'),
    landAcres: isFarmer && v('pf-land') ? Number(v('pf-land')) : null,
    crops: isFarmer ? [...document.querySelectorAll('.pf-crop:checked')].map(c => c.value) : [],
    gender: v('pf-gender'), ageGroup: v('pf-age'), category: v('pf-category'),
    income: v('pf-income'), familySize: v('pf-family') ? Number(v('pf-family')) : null,
    hasRationCard: document.getElementById('pf-ration').checked,
    hasBankAccount: document.getElementById('pf-bank').checked
  };
  users[mobile].profileDone = true;
  saveUsers(users);
  closeAuth(); updateAuthUI();
  showQuickAlert('Profile saved. / प्रोफ़ाइल सेव हो गई।');
}

function skipProfile() { closeAuth(); updateAuthUI(); showQuickAlert('You can complete it later from the Profile button. / बाद में Profile बटन से भर सकते हैं।'); }

/* ---------- login / logout ---------- */
async function handleLogin() {
  const mobile = document.getElementById('login-mobile').value.trim();
  const pwd = document.getElementById('login-password').value;
  const user = getUsers()[mobile];
  if (!user || user.pwdHash !== await hashPwd(pwd)) return showAuthError(t('err.invalid'));
  localStorage.setItem(SESSION_KEY, mobile);
  closeAuth(); updateAuthUI(); showQuickAlert(t('msg.loggedIn'));
}

function logout() { localStorage.removeItem(SESSION_KEY); updateAuthUI(); showQuickAlert(t('msg.loggedOut')); }

function updateAuthUI() {
  const user = currentUser();
  document.getElementById('auth-login-btn').classList.toggle('hidden', !!user);
  const chip = document.getElementById('user-chip');
  chip.classList.toggle('hidden', !user); chip.classList.toggle('flex', !!user);
  if (user) {
    document.getElementById('user-name').textContent = user.name;
    const pb = document.getElementById('profile-btn');
    if (pb) pb.textContent = user.profileDone ? 'Profile' : 'Complete profile';
  }
}

/* ---------- admin table (shows profile fields now) ---------- */
function renderAdminUsers() {
  const tb = document.getElementById('admin-users'); tb.innerHTML = '';
  const list = Object.values(getUsers());
  if (!list.length) { const tr0 = document.createElement('tr'), td0 = document.createElement('td'); td0.className = 'p-3 text-slate-500'; td0.colSpan = 3; td0.textContent = t('ad.empty'); tr0.appendChild(td0); tb.appendChild(tr0); return; }
  list.forEach(u => {
    const tr = document.createElement('tr'); tr.className = 'border-b';
    const where = [(u.profile && u.profile.village) || u.village, u.profile && u.profile.district].filter(Boolean).join(', ') || '-';
    [u.name, u.mobile, where].forEach(v => {
      const td = document.createElement('td'); td.className = 'p-3'; td.textContent = v; tr.appendChild(td);
    });
    tb.appendChild(tr);
  });
}

/* Called by lang.js whenever the language changes */
function onLangChange(){
  renderSchemes();
  updateToggleLabels();
  const adminView=document.getElementById('view-admin');
  if(adminView && !adminView.classList.contains('hidden')) renderAdminUsers();
}
window.onLangChange = onLangChange;

document.addEventListener('DOMContentLoaded',()=>{ renderSchemes(); updateAuthUI(); initProfileForm(); });
