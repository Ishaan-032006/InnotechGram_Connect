
/* GramConnect extra.js
   1. Language page (pickLang / handleLangChange)
   2. Login/Register as a page (openAuth / closeAuth)
   3. Page router (hash based)
   4. Haq Meter + Apply Kit
   5. Service worker registration
   Load order: lang.js -> i18n.js -> app.js -> extra.js  (app.js must load BEFORE this file,
   because the router wraps app.js's switchTab) */

/* ===== 1. LANGUAGE PAGE =====
   en/hi work now; mr/ta/bn show "coming soon" until DICT.mr/ta/bn are added */
(function () {
  let lastLang = (typeof currentLang !== 'undefined' && DICT[currentLang]) ? currentLang : 'en';

  function markLang(code) {
    document.querySelectorAll('.lang-card').forEach(c => c.classList.toggle('active', c.dataset.lang === code));
  }

  window.handleLangChange = function (sel) {
    const v = sel.value;
    if (DICT[v]) {
      lastLang = v;
      setLang(v); // lang.js: translates the whole site AND calls applyHaqLanguage()
      markLang(v);
      const real = document.getElementById('lang-select');
      if (real) real.value = v;
    } else {
      sel.value = lastLang; // revert
      const msg = (DICT[lastLang] && DICT[lastLang]['lang.soon']) || 'This language is coming soon.';
      if (typeof showQuickAlert === 'function') showQuickAlert(msg); else alert(msg);
    }
  };

  window.pickLang = function (code) { window.handleLangChange({ value: code }); };

  markLang(lastLang); // reload ke baad sahi language card highlight ho
})();

/* ===== 2. LOGIN / REGISTER IS A PAGE, NOT A POPUP =====
   These replace the modal versions in app.js. */
window.openAuth = function (mode) {
  if (typeof switchAuth === 'function') switchAuth(mode || 'login');
  switchTab('auth');
};
window.closeAuth = function () { switchTab('about'); }; // app.js calls this after a successful login/register

/* ===== 3. PAGE ROUTER =====
   Every section is its own page (#about, #services, #contact, #auth, #language ...).
   'home'  = landing page with the farm photo.
   'about' = Home page (About GramConnect, Mission, Modules). */
(function () {
  const pages = ['home', 'about', 'schemes', 'haq-meter', 'agriculture', 'health', 'jobs', 'notices',
                 'helpline', 'services', 'contact', 'auth', 'language', 'team'];
  const baseSwitch = window.switchTab; // original function from app.js

  function show(name) {
    if (!pages.includes(name)) name = 'home';
    try { baseSwitch(name); } catch (e) { /* app.js does not know the new pages, that's fine */ }
    const pillKey = (name === 'about') ? 'home' : name;
    pages.forEach(p => {
      const v = document.getElementById('view-' + p);
      if (v) v.classList.toggle('hidden', p !== name);
      const b = document.getElementById('tab-btn-' + p);
      if (b && b.classList.contains('tab-btn')) b.classList.toggle('active', p === pillKey);
    });
    document.body.classList.toggle('page-home', name === 'home');
    window.scrollTo(0, 0);
  }

  window.switchTab = function (name) {
    if (!pages.includes(name)) name = 'home';
    if (location.hash.slice(1) === name) show(name);
    else location.hash = name; // triggers hashchange -> show()
  };

  window.addEventListener('hashchange', () => show(location.hash.slice(1) || 'home'));
  show(location.hash.slice(1) || 'home');
})();

/* ===== 4. HAQ METER: bilingual English/Hindi demo rules + Apply Kit ===== */
const HAQ_COPY = {
  en: {
    eyebrow:'GRAMCONNECT • PERSONAL SCHEME FINDER', title:'Haq Meter',
    subtitle:'Answer a few simple questions to discover government schemes that may be relevant to you, along with benefits, documents, and next steps.',
    simple:'Simple questions', applyKit:'Apply Kit', printPdf:'Print / Save PDF', aboutYou:'About you',
    demoNote:'This is an indicative demo match. The official portal or department must confirm final eligibility.',
    nameLabel:'Name (optional)', namePlaceholder:'e.g., Ramesh', ageLabel:'Your age', genderLabel:'Gender',
    stateLabel:'State / Union Territory', chooseState:'Select your state', categoryLabel:'What best describes your need?',
    chooseCategory:'Select a category', farmer:'Farmer / agriculture', worker:'Employment / wage work',
    family:'Family / housing support', student:'Student / education', health:'Healthcare support',
    socialLabel:'Social category (optional)', preferNot:'Prefer not to say', other:'Other',
    incomeLabel:'Annual household income', income1:'Below ₹1 lakh', income2:'₹1–2 lakh', income3:'₹2–3 lakh',
    income4:'₹3–5 lakh', income5:'Above ₹5 lakh', landLabel:'Agricultural land (acres, if applicable)',
    noLand:'No land', land1:'Less than 1 acre', land2:'1–2 acres', land5:'More than 2 acres',
    rationText:'I have a ration card (may be relevant for some health or household schemes).',
    landDocText:'I have land ownership / land record documents.', findButton:'Find schemes for me', resetButton:'Reset',
    matchesTitle:'Your possible matches', matchesSub:'We do not add different scheme benefits into a misleading total.',
    emptyResults:'Complete the form to see relevant schemes and next steps here.', yourApplyKit:'YOUR APPLY KIT',
    checklistTitle:'Your application checklist', scanTitle:'Scan for more government schemes',
    scanText:'myScheme is the official scheme discovery portal. An internet connection is needed to open it.',
    openMyScheme:'Open myScheme', important:'Important:',
    disclaimer:'This checklist is general guidance, not an application or approval. Confirm current rules and required documents with the official portal, Common Service Centre (CSC), or Gram Panchayat.',
    printButton:'Print / Save as PDF', downloadButton:'Download checklist', privacyTitle:'Privacy:',
    privacyText:'Your answers are processed in this browser page and are not submitted to a server by this demo form. Matches are indicative and do not guarantee eligibility or benefits.',
    allSchemes:'View all schemes', selectAgeGenderState:'Please enter your age, select gender, state, and main category.',
    possible:'Possible match', official:'Official website', documents:'Documents to check',
    clearNo:'No clear match was found yet.',
    noDoesNotMean:'This does not mean you are ineligible. Check all schemes or ask a CSC / Gram Panchayat for help.',
    matchFound:'possible scheme match(es) found', verify:'Final eligibility must be verified.',
    adultWoman:'Ujjwala eligibility usually requires an eligible adult woman applicant.',
    kitIntro:'Applicant details and possible matches. Tick documents as you collect them.',
    reminder:'Reminder: Scheme eligibility and document requirements must be confirmed through the official portal or department.',
    below18:'Some schemes have minimum-age or adult-applicant requirements. Check the official rules carefully.'
  },
  hi: {
    eyebrow:'GRAMCONNECT • सरकारी योजनाएँ खोजें', title:'हक़ मीटर',
    subtitle:'कुछ आसान सवालों के जवाब दें और अपने लिए उपयोगी सरकारी योजनाएँ, लाभ, दस्तावेज़ और अगले कदम जानें।',
    simple:'आसान सवाल', applyKit:'आवेदन किट', printPdf:'प्रिंट / PDF सेव करें', aboutYou:'आपके बारे में',
    demoNote:'यह शुरुआती अनुमान है। अंतिम पात्रता की पुष्टि आधिकारिक पोर्टल या विभाग करेगा।',
    nameLabel:'नाम (ज़रूरी नहीं)', namePlaceholder:'जैसे, रमेश', ageLabel:'आपकी उम्र', genderLabel:'लिंग',
    stateLabel:'राज्य / केंद्र शासित प्रदेश', chooseState:'अपना राज्य चुनें', categoryLabel:'आपको किस तरह की मदद चाहिए?',
    chooseCategory:'श्रेणी चुनें', farmer:'किसान / खेती', worker:'रोज़गार / मज़दूरी',
    family:'परिवार / आवास सहायता', student:'विद्यार्थी / शिक्षा', health:'स्वास्थ्य सहायता',
    socialLabel:'सामाजिक श्रेणी (ज़रूरी नहीं)', preferNot:'बताना नहीं चाहते', other:'अन्य',
    incomeLabel:'परिवार की सालाना आय', income1:'₹1 लाख से कम', income2:'₹1–2 लाख', income3:'₹2–3 लाख',
    income4:'₹3–5 लाख', income5:'₹5 लाख से अधिक', landLabel:'खेती की ज़मीन (एकड़, यदि लागू हो)',
    noLand:'ज़मीन नहीं', land1:'1 एकड़ से कम', land2:'1–2 एकड़', land5:'2 एकड़ से अधिक',
    rationText:'मेरे पास राशन कार्ड है (कुछ स्वास्थ्य या परिवार योजनाओं में उपयोगी हो सकता है)।',
    landDocText:'मेरे पास ज़मीन / खसरा-खतौनी के दस्तावेज़ हैं।', findButton:'मेरे लिए योजनाएँ खोजें', resetButton:'रीसेट करें',
    matchesTitle:'आपके संभावित विकल्प', matchesSub:'अलग-अलग योजनाओं के लाभ जोड़कर भ्रामक कुल नहीं दिखाया जाता।',
    emptyResults:'संबंधित योजनाएँ और अगले कदम देखने के लिए फ़ॉर्म भरें।', yourApplyKit:'आपकी आवेदन किट',
    checklistTitle:'आपकी आवेदन चेकलिस्ट', scanTitle:'और सरकारी योजनाएँ खोजें',
    scanText:'myScheme सरकारी योजनाएँ खोजने का आधिकारिक पोर्टल है। इसे खोलने के लिए इंटरनेट चाहिए।',
    openMyScheme:'myScheme खोलें', important:'ज़रूरी सूचना:',
    disclaimer:'यह चेकलिस्ट सामान्य मार्गदर्शन है, आवेदन या मंज़ूरी नहीं। मौजूदा नियम और दस्तावेज़ आधिकारिक पोर्टल, CSC या ग्राम पंचायत से पक्का करें।',
    printButton:'प्रिंट / PDF सेव करें', downloadButton:'चेकलिस्ट डाउनलोड करें', privacyTitle:'गोपनीयता:',
    privacyText:'आपके जवाब इसी ब्राउज़र में प्रोसेस होते हैं और यह डेमो फ़ॉर्म उन्हें सर्वर पर नहीं भेजता। मिलान केवल अनुमान है; पात्रता या लाभ की गारंटी नहीं।',
    allSchemes:'सभी योजनाएँ देखें', selectAgeGenderState:'कृपया उम्र भरें और लिंग, राज्य व मुख्य श्रेणी चुनें।',
    possible:'संभावित विकल्प', official:'आधिकारिक वेबसाइट', documents:'जाँचने वाले दस्तावेज़',
    clearNo:'अभी कोई स्पष्ट मिलान नहीं मिला।',
    noDoesNotMean:'इसका मतलब यह नहीं कि आप अपात्र हैं। सभी योजनाएँ देखें या CSC / ग्राम पंचायत से मदद लें।',
    matchFound:'संभावित योजना विकल्प मिले', verify:'अंतिम पात्रता की पुष्टि ज़रूरी है।',
    adultWoman:'उज्ज्वला के लिए आम तौर पर पात्र वयस्क महिला आवेदक की ज़रूरत होती है।',
    kitIntro:'आवेदक की जानकारी और संभावित योजनाएँ। दस्तावेज़ जुटाने पर टिक करें।',
    reminder:'याद रखें: योजना की पात्रता और दस्तावेज़ आधिकारिक पोर्टल या विभाग से पक्के करें।',
    below18:'कुछ योजनाओं में न्यूनतम उम्र या वयस्क आवेदक की शर्त होती है। आधिकारिक नियम ध्यान से जाँचें।'
  }
};

let haqLang = 'en';

function htxt(key) {
  return (HAQ_COPY[haqLang] && HAQ_COPY[haqLang][key]) || HAQ_COPY.en[key] || key;
}

function applyHaqLanguage(code) {
  haqLang = code === 'hi' ? 'hi' : 'en';

  document.querySelectorAll('#view-haq-meter [data-hm]').forEach(el => {
    const key = el.getAttribute('data-hm');
    if (HAQ_COPY[haqLang][key]) el.textContent = HAQ_COPY[haqLang][key];
  });

  const ph = document.querySelector('#view-haq-meter [data-hm-placeholder]');
  if (ph) ph.placeholder = htxt(ph.dataset.hmPlaceholder);

  const setOptions = (id, vals) => {
    const sel = document.getElementById(id);
    if (sel) [...sel.options].forEach((o, i) => { o.textContent = vals[i] || o.textContent; });
  };

  setOptions('hm-gender', {
    en: ['Select gender', 'Female', 'Male', 'Other', 'Prefer not to say'],
    hi: ['लिंग चुनें', 'महिला', 'पुरुष', 'अन्य', 'बताना नहीं चाहते']
  }[haqLang]);

  const age = document.getElementById('hm-age');
  if (age) age.placeholder = haqLang === 'hi' ? 'उम्र दर्ज करें' : 'Enter age';

  setOptions('hm-state', {
    en: ['Select your state', 'Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Rajasthan', 'Haryana', 'Uttarakhand', 'Jharkhand', 'Chhattisgarh', 'Maharashtra', 'Other'],
    hi: ['अपना राज्य चुनें', 'उत्तर प्रदेश', 'बिहार', 'मध्य प्रदेश', 'राजस्थान', 'हरियाणा', 'उत्तराखंड', 'झारखंड', 'छत्तीसगढ़', 'महाराष्ट्र', 'अन्य']
  }[haqLang]);

  setOptions('hm-caste', {
    en: ['Prefer not to say', 'General', 'OBC', 'SC / ST', 'Other'],
    hi: ['बताना नहीं चाहते', 'सामान्य', 'अन्य पिछड़ा वर्ग (OBC)', 'अनुसूचित जाति / जनजाति (SC / ST)', 'अन्य']
  }[haqLang]);

  setOptions('hm-income', {
    en: ['Below ₹1 lakh', '₹1–2 lakh', '₹2–3 lakh', '₹3–5 lakh', 'Above ₹5 lakh'],
    hi: ['₹1 लाख से कम', '₹1–2 लाख', '₹2–3 लाख', '₹3–5 लाख', '₹5 लाख से अधिक']
  }[haqLang]);

  setOptions('hm-land', {
    en: ['No land', 'Less than 1 acre', '1–2 acres', 'More than 2 acres'],
    hi: ['ज़मीन नहीं', '1 एकड़ से कम', '1–2 एकड़', '2 एकड़ से अधिक']
  }[haqLang]);

  // Agar results pehle se bane hue hain to unhe naye language me dobara banao
  if (document.getElementById('haq-results')?.dataset.generated === 'yes') runHaqMeter(false);
}

const HAQ_SCHEMES = [
  {id:'pmkisan', name:'PM-Kisan Samman Nidhi', group:'farmer',
   benefit:'Eligible landholding farmer families may receive ₹6,000 per year in three instalments.',
   benefitHi:'पात्र ज़मीनधारक किसान परिवारों को सालाना ₹6,000 तीन किस्तों में मिल सकते हैं।',
   docs:['Aadhaar','Bank account / passbook','Land record','Aadhaar-linked mobile, if required'],
   url:'https://pmkisan.gov.in/', match:d=>d.category==='farmer' && d.land>0,
   note:'Land records, exclusions, and e-KYC conditions apply.',
   noteHi:'ज़मीन के रिकॉर्ड, अपवर्जन और e-KYC की शर्तें लागू होती हैं।'},
  {id:'pmfby', name:'Pradhan Mantri Fasal Bima Yojana', group:'farmer',
   benefit:'Crop-loss insurance may be available under notified crop, area, and policy conditions; payment is not guaranteed.',
   benefitHi:'अधिसूचित फसल, क्षेत्र और पॉलिसी की शर्तों के अनुसार फसल बीमा मिल सकता है; भुगतान की गारंटी नहीं है।',
   docs:['Aadhaar / ID','Bank details','Land or tenancy documents, if applicable','Sown crop details'],
   url:'https://pmfby.gov.in/', match:d=>d.category==='farmer' && d.land>0,
   note:'Check enrollment windows, notified crops/areas, and loss-reporting deadlines.',
   noteHi:'नामांकन की तारीखें, अधिसूचित फसल/क्षेत्र और नुकसान की सूचना देने की समय-सीमा जाँचें।'},
  {id:'ayushman', name:'Ayushman Bharat PM-JAY', group:'health',
   benefit:'Eligible families may receive cashless secondary and tertiary hospitalization cover up to ₹5 lakh per family per year at empanelled hospitals.',
   benefitHi:'पात्र परिवारों को सूचीबद्ध अस्पतालों में प्रति परिवार प्रति वर्ष ₹5 लाख तक कैशलेस अस्पताल उपचार कवर मिल सकता है।',
   docs:['Aadhaar or accepted ID','Ration / family record, if requested','Eligibility verification details'],
   url:'https://beneficiary.nha.gov.in/', match:d=>d.category==='health' || d.ration || d.income<=200000,
   note:'Only listed eligible beneficiaries qualify; income alone does not confirm eligibility.',
   noteHi:'केवल सूचीबद्ध पात्र लाभार्थी योग्य होते हैं; केवल आय से पात्रता तय नहीं होती।'},
  {id:'mgnrega', name:'MGNREGA rural employment', group:'worker',
   benefit:'Rural households can request unskilled manual work, with a statutory guarantee of up to 100 days per financial year for eligible households.',
   benefitHi:'ग्रामीण परिवार काम की माँग कर सकते हैं; पात्र परिवारों के लिए वित्तीय वर्ष में 100 दिन तक काम की वैधानिक गारंटी है।',
   docs:['Job card','Aadhaar / ID as locally required','Bank or post-office account details'],
   url:'https://nrega.nic.in/', match:d=>d.category==='worker' || d.category==='family',
   note:'A job card and local Gram Panchayat process are required.',
   noteHi:'जॉब कार्ड और स्थानीय ग्राम पंचायत की प्रक्रिया ज़रूरी है।'},
  {id:'ujjwala', name:'Pradhan Mantri Ujjwala Yojana', group:'family',
   benefit:'Eligible adult women may receive support for an LPG connection under current rules.',
   benefitHi:'मौजूदा नियमों के अनुसार पात्र वयस्क महिलाओं को LPG कनेक्शन के लिए सहायता मिल सकती है।',
   docs:['Applicant Aadhaar','Ration card / family composition proof','Bank account details','Other required declarations or forms'],
   url:'https://www.pmuy.gov.in/',
   match:d=>(d.category==='family'||d.category==='health') && d.income<=300000 && d.gender==='female' && d.age>=18,
   note:'Household eligibility, existing LPG connections, and current guidelines must be checked.',
   noteHi:'परिवार की पात्रता, मौजूदा LPG कनेक्शन और वर्तमान दिशा-निर्देश जाँचें।'},
  {id:'pmayg', name:'Pradhan Mantri Awaas Yojana–Gramin', group:'family',
   benefit:'Eligible rural households may receive assistance to build a pucca house under approved norms.',
   benefitHi:'पात्र ग्रामीण परिवारों को तय नियमों के अनुसार पक्का घर बनाने के लिए सहायता मिल सकती है।',
   docs:['Aadhaar / identity proof','Rural housing eligibility records','Bank account','Land or site details, if applicable'],
   url:'https://pmayg.nic.in/', match:d=>(d.category==='family'||d.category==='worker') && d.income<=200000,
   note:'Selection depends on official deprivation, waiting-list, and verification criteria.',
   noteHi:'चयन आधिकारिक वंचना, प्रतीक्षा-सूची और सत्यापन के मानदंडों पर निर्भर करता है।'},
  {id:'scholarship', name:'National Scholarship Portal', group:'student',
   benefit:'Eligible students may apply for scheme-specific scholarships; amounts depend on the course, category, and scheme.',
   benefitHi:'पात्र विद्यार्थी अलग-अलग छात्रवृत्ति योजनाओं के लिए आवेदन कर सकते हैं; राशि पाठ्यक्रम, श्रेणी और योजना पर निर्भर करती है।',
   docs:['Student ID / Aadhaar as required','Income certificate','Caste certificate, if applicable','Mark sheets','Bank details'],
   url:'https://scholarships.gov.in/', match:d=>d.category==='student',
   note:'Eligibility varies by class/course, marks, institution, and individual scheme.',
   noteHi:'पात्रता कक्षा/पाठ्यक्रम, अंक, संस्थान और संबंधित योजना के अनुसार बदलती है।'}
];

const HAQ_DOCS_HI = {
  'Aadhaar':'आधार कार्ड', 'Bank account / passbook':'बैंक खाता / पासबुक', 'Land record':'ज़मीन का रिकॉर्ड',
  'Aadhaar-linked mobile, if required':'आवश्यक होने पर आधार से जुड़ा मोबाइल नंबर',
  'Aadhaar / ID':'आधार कार्ड / पहचान पत्र', 'Bank details':'बैंक विवरण',
  'Land or tenancy documents, if applicable':'ज़रूरत होने पर ज़मीन या किरायेदारी के दस्तावेज़',
  'Sown crop details':'बोई गई फसल का विवरण',
  'Aadhaar or accepted ID':'आधार कार्ड या मान्य पहचान पत्र',
  'Ration / family record, if requested':'माँगे जाने पर राशन कार्ड / परिवार का रिकॉर्ड',
  'Eligibility verification details':'पात्रता सत्यापन का विवरण',
  'Job card':'जॉब कार्ड', 'Aadhaar / ID as locally required':'स्थानीय नियमों के अनुसार आधार / पहचान पत्र',
  'Bank or post-office account details':'बैंक या डाकघर खाते का विवरण',
  'Applicant Aadhaar':'आवेदक का आधार कार्ड',
  'Ration card / family composition proof':'राशन कार्ड / परिवार के सदस्यों का प्रमाण',
  'Other required declarations or forms':'अन्य आवश्यक घोषणाएँ या फ़ॉर्म',
  'Aadhaar / identity proof':'आधार कार्ड / पहचान प्रमाण',
  'Rural housing eligibility records':'ग्रामीण आवास पात्रता रिकॉर्ड', 'Bank account':'बैंक खाता',
  'Land or site details, if applicable':'ज़रूरत होने पर ज़मीन या जगह का विवरण',
  'Student ID / Aadhaar as required':'विद्यार्थी पहचान पत्र / आवश्यकतानुसार आधार',
  'Income certificate':'आय प्रमाण पत्र', 'Caste certificate, if applicable':'ज़रूरत होने पर जाति प्रमाण पत्र',
  'Mark sheets':'अंकसूचियाँ'
};

const HAQ_STATES_HI = {
  'Uttar Pradesh':'उत्तर प्रदेश', 'Bihar':'बिहार', 'Madhya Pradesh':'मध्य प्रदेश', 'Rajasthan':'राजस्थान',
  'Haryana':'हरियाणा', 'Uttarakhand':'उत्तराखंड', 'Jharkhand':'झारखंड', 'Chhattisgarh':'छत्तीसगढ़',
  'Maharashtra':'महाराष्ट्र', 'Other':'अन्य'
};

function haqDoc(doc) { return haqLang === 'hi' ? (HAQ_DOCS_HI[doc] || doc) : doc; }

function escapeHaq(v) {
  return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function runHaqMeter(updateOnly = true) {
  const d = {
    name: document.getElementById('hm-name').value.trim(),
    age: Number(document.getElementById('hm-age').value),
    gender: document.getElementById('hm-gender').value,
    state: document.getElementById('hm-state').value,
    category: document.getElementById('hm-category').value,
    caste: document.getElementById('hm-caste').value,
    income: Number(document.getElementById('hm-income').value),
    land: Number(document.getElementById('hm-land').value),
    ration: document.getElementById('hm-ration').checked,
    landDoc: document.getElementById('hm-land-doc').checked
  };

  if (!d.age || d.age < 1 || d.age > 120 || !d.gender || !d.state || !d.category) {
    if (updateOnly) alert(htxt('selectAgeGenderState'));
    return;
  }

  const found = HAQ_SCHEMES.filter(x => x.match(d));
  const results = document.getElementById('haq-results');
  results.dataset.generated = 'yes';

  if (!found.length) {
    results.innerHTML =
      `<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-amber-900"><strong>${htxt('clearNo')}</strong>` +
      `<p class="text-sm mt-1">${htxt('noDoesNotMean')}</p>` +
      `<a class="underline font-bold" href="https://www.myscheme.gov.in/" target="_blank" rel="noopener">myScheme official discovery portal</a>` +
      `${d.age < 18 ? `<p class="text-sm mt-2">${htxt('below18')}</p>` : ''}</div>`;
    document.getElementById('apply-kit').classList.add('hidden');
    return;
  }

  results.innerHTML =
    `<div class="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-100">` +
    `<div class="text-2xl font-extrabold text-emerald-800">${found.length}</div>` +
    `<div><strong>${found.length} ${htxt('matchFound')}${d.name ? ', ' + escapeHaq(d.name) : ''}!</strong>` +
    `<p class="text-xs text-slate-600">${escapeHaq(d.state)} • ${htxt('verify')}</p></div></div>` +
    found.map(x =>
      `<article class="haq-result"><div class="flex items-start justify-between gap-3">` +
      `<h4 class="font-extrabold text-lg text-slate-900">${x.name}</h4><span class="haq-chip">${htxt('possible')}</span></div>` +
      `<p class="text-sm text-slate-700 mt-2">${haqLang === 'hi' ? x.benefitHi : x.benefit}</p>` +
      `<p class="text-xs text-slate-500 mt-2"><i class="fa-solid fa-circle-info mr-1"></i>${haqLang === 'hi' ? x.noteHi : x.note}</p>` +
      `<a href="${x.url}" target="_blank" rel="noopener" class="inline-flex mt-3 text-sm font-bold text-emerald-800 underline">` +
      `${htxt('official')} <i class="fa-solid fa-arrow-up-right-from-square ml-2 mt-1"></i></a></article>`
    ).join('');

  const stateLabel = haqLang === 'hi' ? (HAQ_STATES_HI[d.state] || d.state) : d.state;
  document.getElementById('kit-intro').textContent =
    `${d.name || (haqLang === 'hi' ? 'आवेदक' : 'Applicant')} • ${haqLang === 'hi' ? 'उम्र' : 'Age'}: ${d.age} • ${stateLabel} • ${found.length} ${htxt('matchFound')}.`;

  document.getElementById('kit-schemes').innerHTML = found.map(x =>
    `<div class="border border-slate-200 rounded-xl p-4"><h4 class="font-extrabold text-slate-900 mb-2">${x.name}</h4>` +
    `<p class="text-sm text-slate-600 mb-3">${haqLang === 'hi' ? x.benefitHi : x.benefit}</p>` +
    `<p class="text-sm font-bold mb-2">${htxt('documents')}</p>` +
    `<div class="grid sm:grid-cols-2 gap-2">${x.docs.map(doc =>
      `<label class="flex items-start gap-2 text-sm text-slate-700"><input class="haq-check mt-1" type="checkbox"><span>${haqDoc(doc)}</span></label>`
    ).join('')}</div>` +
    `<p class="text-xs text-slate-500 mt-3">${htxt('official')}: <a class="underline text-emerald-800 break-all" href="${x.url}" target="_blank" rel="noopener">${x.url}</a></p></div>`
  ).join('');

  document.getElementById('apply-kit').classList.remove('hidden');
}

function resetHaqMeter() {
  document.getElementById('haq-form').reset();
  const r = document.getElementById('haq-results');
  r.dataset.generated = '';
  r.innerHTML =
    `<div class="text-center py-8 text-slate-500"><i class="fa-solid fa-clipboard-question text-4xl mb-3 text-emerald-600"></i>` +
    `<p>${htxt('emptyResults')}</p></div>`;
  document.getElementById('apply-kit').classList.add('hidden');
}

function downloadHaqKit() {
  const area = document.getElementById('haq-print-area');
  const plain = area.innerText + '\n\n' + htxt('reminder');
  const blob = new Blob([plain], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'GramConnect-Apply-Kit.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

// Inline HTML events (form onsubmit, Reset button) aur lang.js (applyLang) in functions ko window se call karte hain
window.runHaqMeter = runHaqMeter;
window.resetHaqMeter = resetHaqMeter;
window.applyHaqLanguage = applyHaqLanguage;

// Page load par saved language (en/hi) Haq Meter me lagao.
// Ye sab consts bane hone ke BAAD chalta hai, isliye safe hai.
applyHaqLanguage(typeof currentLang !== 'undefined' ? currentLang : 'en');

/* ===== 5. SERVICE WORKER =====
   Needs https or localhost (not file://). */
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}