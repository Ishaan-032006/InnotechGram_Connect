/* GramConnect extras: Shiksha (education) tab, Offline tab, service worker. Loaded after i18n.js. */
(function () {
  const main = document.querySelector('main');
  const TABS = [['education', 'fa-book-open-reader', 'nav_edu', 'Shiksha'], ['offline', 'fa-wifi', 'nav_off', 'Offline']];
  const CARD = 'card-element bg-white p-6 rounded-2xl border border-slate-200';
  const BTN = 'mt-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-4 py-2 rounded-xl';

  // Nav buttons (desktop + mobile), placed before the Team tab.
  const team = document.getElementById('tab-btn-team');
  const mobile = document.getElementById('mobile-nav');
  TABS.forEach(([id, icon, key, label]) => {
    const b = document.createElement('button');
    b.id = 'tab-btn-' + id;
    b.className = 'tab-btn px-3 py-2 rounded-lg text-slate-700 hover:text-emerald-600';
    b.onclick = () => switchTab(id);
    b.innerHTML = '<i class="fa-solid ' + icon + '"></i> <span data-i18n="' + key + '">' + label + '</span>';
    team.before(b);
    const m = document.createElement('button');
    m.className = 'w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50';
    m.setAttribute('data-i18n', key);
    m.textContent = label;
    m.onclick = () => { switchTab(id); toggleMobileNav(); };
    mobile.appendChild(m);
  });

  function section(id, html) {
    const s = document.createElement('section');
    s.id = 'view-' + id;
    s.className = 'view-content space-y-6 hidden';
    s.innerHTML = html;
    main.appendChild(s);
  }

  // Shiksha: official learning links, plus a shortcut into the existing Schemes search.
  const LINKS = [['DIKSHA', 'diksha.gov.in', 'edu_diksha'], ['SWAYAM', 'swayam.gov.in', 'edu_swayam'],
    ['National Scholarship Portal', 'scholarships.gov.in', 'edu_nsp'], ['Skill India Digital', 'skillindiadigital.gov.in', 'edu_skill']];
  section('education',
    '<div class="' + CARD + '"><h2 class="text-2xl font-bold text-slate-900" data-i18n="edu_title"></h2>' +
    '<p class="text-sm text-slate-500 mb-4" data-i18n="edu_sub"></p><div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
    LINKS.map(([n, u, k]) =>
      '<div class="bg-blue-50 border border-blue-100 p-4 rounded-xl"><h3 class="font-bold text-sm">' + n + '</h3>' +
      '<p class="text-xs text-slate-600 mt-1 mb-2" data-i18n="' + k + '"></p>' +
      '<a href="https://' + u + '" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-blue-700" data-i18n="visit"></a></div>').join('') +
    '</div><button id="edu-go" class="' + BTN + '" data-i18n="edu_btn"></button></div>');
  document.getElementById('edu-go').onclick = () => {
    document.getElementById('scheme-search').value = 'scholar';
    document.getElementById('scheme-category').value = 'all';
    switchTab('schemes'); renderSchemes();
  };

  // Offline tab: live connection status and whether the service worker is controlling the page.
  section('offline',
    '<div class="' + CARD + '"><h2 class="text-2xl font-bold text-slate-900" data-i18n="off_title"></h2>' +
    '<p class="text-sm text-slate-500 mb-4" data-i18n="off_sub"></p>' +
    '<div class="flex flex-wrap gap-2 mb-4"><span id="off-net"></span><span id="off-sw"></span></div>' +
    '<p class="text-sm text-slate-700" data-i18n="off_works"></p>' +
    '<button id="off-go" class="' + BTN + '" data-i18n="off_btn"></button></div>');
  document.getElementById('off-go').onclick = () => switchTab('schemes');

  const PILL = 'text-xs font-bold px-3 py-1 rounded-full ';
  function status() {
    const on = navigator.onLine, T = GC.t;
    const ready = !!(navigator.serviceWorker && navigator.serviceWorker.controller);
    const n = document.getElementById('off-net'), s = document.getElementById('off-sw');
    n.textContent = on ? T('off_on') : T('off_off');
    n.className = PILL + (on ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800');
    s.textContent = ready ? T('off_ready') : T('off_wait');
    s.className = PILL + (ready ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800');
  }
  GC.onLang = status;
  window.addEventListener('online', status);
  window.addEventListener('offline', () => { status(); showQuickAlert(GC.t('off_off')); });

  // Service worker needs https or localhost (not file://).
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.addEventListener('controllerchange', status);
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  GC.apply();
})();