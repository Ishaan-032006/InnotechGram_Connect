/* GramConnect language support: English, Hindi, Bhojpuri. Loaded after app.js. */
(function () {
  const D = {
    en: {
      nav_home: 'Home', nav_schemes: 'Schemes', nav_krishi: 'Krishi', nav_health: 'Healthcare', nav_jobs: 'Jobs & Skills', nav_edu: 'Shiksha', nav_off: 'Offline',
      hero_title: 'GramConnect: Empowering Rural Citizens with Digital Access',
      hero_desc: 'Government schemes, crop prices, healthcare and local jobs on one simple, low-bandwidth platform.',
      modules: 'GramConnect Core Modules', mod_schemes: 'Sarkari Yojana', mod_krishi: 'Krishi & Mandi Rates', mod_health: 'Swasthya Seva', mod_jobs: 'Rojgar & Skill Hub',
      sch_title: 'Government Schemes', krishi_title: 'Krishi & Mandi Rates', health_title: 'Swasthya Seva', jobs_title: 'Rojgar & Skill Hub', admin_title: 'Admin / Volunteer Portal',
      notice: 'Gram Panchayat Notice Board', helpl: 'Emergency Helplines', search_ph: 'Search scheme...',
      edu_title: 'Shiksha: Education & Learning', edu_sub: 'Free learning, scholarships and skills for rural students',
      edu_diksha: 'Free lessons and e-books for school students', edu_swayam: 'Free online courses from top institutes',
      edu_nsp: 'Apply for central scholarships', edu_skill: 'Free skill courses with certificates',
      edu_btn: 'See scholarship schemes', visit: 'Open site',
      off_title: 'Offline Mode', off_sub: 'After your first visit, GramConnect keeps working without internet',
      off_on: 'Online', off_off: 'Offline', off_ready: 'Ready for offline use', off_wait: 'Not ready yet. Open once with internet, then reload.',
      off_works: 'Works offline: all 50 schemes, helplines, notice board, sample mandi data. Needs internet: official websites, live data.',
      off_btn: 'Browse schemes offline', lang_set: 'Language: English'
    },
    hi: {
      nav_home: 'होम', nav_schemes: 'योजनाएँ', nav_krishi: 'कृषि', nav_health: 'स्वास्थ्य', nav_jobs: 'रोज़गार व कौशल', nav_edu: 'शिक्षा', nav_off: 'ऑफ़लाइन',
      hero_title: 'ग्रामकनेक्ट: डिजिटल पहुँच से ग्रामीण नागरिकों का सशक्तिकरण',
      hero_desc: 'सरकारी योजनाएँ, फसल के भाव, स्वास्थ्य सेवाएँ और स्थानीय रोज़गार, एक आसान और कम इंटरनेट वाले प्लेटफ़ॉर्म पर।',
      modules: 'ग्रामकनेक्ट के मुख्य भाग', mod_schemes: 'सरकारी योजना', mod_krishi: 'कृषि और मंडी भाव', mod_health: 'स्वास्थ्य सेवा', mod_jobs: 'रोज़गार और कौशल केंद्र',
      sch_title: 'सरकारी योजनाएँ', krishi_title: 'कृषि और मंडी भाव', health_title: 'स्वास्थ्य सेवा', jobs_title: 'रोज़गार और कौशल केंद्र', admin_title: 'एडमिन / स्वयंसेवक पोर्टल',
      notice: 'ग्राम पंचायत सूचना पट्ट', helpl: 'आपातकालीन हेल्पलाइन', search_ph: 'योजना खोजें...',
      edu_title: 'शिक्षा और सीखना', edu_sub: 'ग्रामीण विद्यार्थियों के लिए मुफ़्त पढ़ाई, छात्रवृत्ति और कौशल',
      edu_diksha: 'स्कूली छात्रों के लिए मुफ़्त पाठ और ई-पुस्तकें', edu_swayam: 'बड़े संस्थानों के मुफ़्त ऑनलाइन कोर्स',
      edu_nsp: 'केंद्रीय छात्रवृत्ति के लिए आवेदन करें', edu_skill: 'प्रमाणपत्र के साथ मुफ़्त कौशल कोर्स',
      edu_btn: 'छात्रवृत्ति योजनाएँ देखें', visit: 'साइट खोलें',
      off_title: 'ऑफ़लाइन मोड', off_sub: 'पहली बार खोलने के बाद ग्रामकनेक्ट बिना इंटरनेट भी चलता है',
      off_on: 'ऑनलाइन', off_off: 'ऑफ़लाइन', off_ready: 'ऑफ़लाइन उपयोग के लिए तैयार', off_wait: 'अभी तैयार नहीं। एक बार इंटरनेट से खोलकर पेज फिर से लोड करें।',
      off_works: 'ऑफ़लाइन चलता है: सभी 50 योजनाएँ, हेल्पलाइन, सूचना पट्ट, मंडी का नमूना डेटा। इंटरनेट चाहिए: आधिकारिक वेबसाइट, लाइव डेटा।',
      off_btn: 'योजनाएँ ऑफ़लाइन देखें', lang_set: 'भाषा: हिन्दी'
    },
    reg: {
      nav_home: 'घर', nav_schemes: 'योजना', nav_krishi: 'खेती', nav_health: 'सेहत', nav_jobs: 'रोजगार आ हुनर', nav_edu: 'पढ़ाई', nav_off: 'ऑफलाइन',
      hero_title: 'ग्रामकनेक्ट: डिजिटल सुविधा से गाँव के लोग के ताकत',
      hero_desc: 'सरकारी योजना, फसल के दाम, दवाई-इलाज आ गाँव के रोजगार, एके आसान जगह पर, कम इंटरनेट में भी।',
      modules: 'ग्रामकनेक्ट के मुख्य हिस्सा', mod_schemes: 'सरकारी योजना', mod_krishi: 'खेती आ मंडी के भाव', mod_health: 'सेहत सेवा', mod_jobs: 'रोजगार आ हुनर केंद्र',
      sch_title: 'सरकारी योजना', krishi_title: 'खेती आ मंडी के भाव', health_title: 'सेहत सेवा', jobs_title: 'रोजगार आ हुनर केंद्र', admin_title: 'एडमिन / स्वयंसेवक पोर्टल',
      notice: 'ग्राम पंचायत के सूचना पट्ट', helpl: 'आपात हेल्पलाइन', search_ph: 'योजना खोजीं...',
      edu_title: 'पढ़ाई-लिखाई', edu_sub: 'गाँव के लइकन खातिर मुफ्त पढ़ाई, वजीफा आ हुनर',
      edu_diksha: 'स्कूल के लइकन खातिर मुफ्त पाठ आ ई-किताब', edu_swayam: 'बड़ संस्थान के मुफ्त ऑनलाइन कोर्स',
      edu_nsp: 'केंद्र सरकार के वजीफा खातिर अर्जी दीं', edu_skill: 'प्रमाणपत्र के साथे मुफ्त हुनर कोर्स',
      edu_btn: 'वजीफा वाली योजना देखीं', visit: 'साइट खोलीं',
      off_title: 'ऑफलाइन मोड', off_sub: 'पहिला बेर खोलला के बाद ग्रामकनेक्ट बिना इंटरनेट के भी चली',
      off_on: 'ऑनलाइन', off_off: 'ऑफलाइन', off_ready: 'ऑफलाइन चलावे खातिर तैयार', off_wait: 'अबहीं तैयार नइखे। एक बेर इंटरनेट से खोलीं, फेर पेज दोबारा लोड करीं।',
      off_works: 'ऑफलाइन चली: सब 50 योजना, हेल्पलाइन, सूचना पट्ट, मंडी के नमूना डेटा। इंटरनेट चाहीं: सरकारी वेबसाइट, लाइव डेटा।',
      off_btn: 'योजना ऑफलाइन देखीं', lang_set: 'भाषा: भोजपुरी'
    }
  };

  // Existing elements in index.html, found by selector so index.html needs no edits.
  const MAP = [
    ['#tab-btn-home', 'nav_home'], ['#tab-btn-schemes', 'nav_schemes'], ['#tab-btn-agriculture', 'nav_krishi'],
    ['#tab-btn-health', 'nav_health'], ['#tab-btn-jobs', 'nav_jobs'],
    ['#view-home h1', 'hero_title'], ['#view-home h1 + p', 'hero_desc'], ['#view-home h2', 'modules'],
    ["div[onclick=\"switchTab('schemes')\"] h3", 'mod_schemes'], ["div[onclick=\"switchTab('agriculture')\"] h3", 'mod_krishi'],
    ["div[onclick=\"switchTab('health')\"] h3", 'mod_health'], ["div[onclick=\"switchTab('jobs')\"] h3", 'mod_jobs'],
    ['#view-schemes h2', 'sch_title'], ['#view-agriculture h2', 'krishi_title'], ['#view-health h2', 'health_title'],
    ['#view-jobs h2', 'jobs_title'], ['#view-admin h2', 'admin_title'],
    ['#view-home h3.pb-3', 'notice'], ['#view-home .from-slate-900 h3', 'helpl'], ['#scheme-search', 'search_ph', 'placeholder']
  ];

  function setText(el, txt) {
    const sp = [...el.children].reverse().find(c => c.tagName === 'SPAN' && !c.children.length);
    if (sp) { sp.textContent = txt; return; }
    const nodes = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
    const n = nodes[nodes.length - 1];
    if (n) n.textContent = ' ' + txt; else el.textContent = txt;
  }

  const cur = () => localStorage.getItem('gc_lang') || 'en';
  const t = k => (D[cur()] || D.en)[k] || D.en[k];

  function apply() {
    const l = cur(), d = D[l] || D.en;
    document.documentElement.lang = l === 'reg' ? 'bho' : l;
    MAP.forEach(([sel, key, attr]) => {
      const e = document.querySelector(sel);
      if (e) attr ? e.setAttribute(attr, d[key]) : setText(e, d[key]);
    });
    document.querySelectorAll('[data-i18n]').forEach(e => setText(e, d[e.dataset.i18n] || D.en[e.dataset.i18n]));
    const sel = document.getElementById('lang-select');
    if (sel) sel.value = l;
    if (window.GC.onLang) window.GC.onLang();
  }

  window.GC = { t, apply };
  // Replaces the stub in app.js (inline onchange resolves this at call time).
  window.changeLanguage = function (l) {
    localStorage.setItem('gc_lang', D[l] ? l : 'en');
    apply();
    showQuickAlert(t('lang_set'));
  };
})();