(() => {
  'use strict';
  const C = window.DEMO_CONFIG || {};
  const app = document.getElementById('app');

  // ---------- Icons (simple stroke SVGs) ----------
  const s = (d, size = 24, color = 'currentColor', sw = 1.8) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const I = {
    back: (c) => s('<path d="M20 12H4M10 6l-6 6 6 6"/>', 26, c),
    chevronDown: (c) => s('<path d="M6 9l6 6 6-6"/>', 22, c, 1.5),
    star: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="#ffde00" d="M12 2.5l2.8 6.6 7.2.6-5.5 4.7 1.7 7-6.2-3.8-6.2 3.8 1.7-7L2 9.7l7.2-.6z"/></svg>',
    lock: (c) => s('<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/><circle cx="12" cy="15" r="1.4"/><path d="M12 16.4v1.6"/>', 24, c, 1.5),
    eyeOff: (c) => s('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 21L21 3"/>', 24, c, 1.8),
    eye: (c) => s('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', 24, c, 1.8),
    refresh: (c) => s('<path d="M20 12a8 8 0 11-2.3-5.7M20 4v5h-5"/>', 20, c, 2),
    face: (c) => s('<path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"/><path d="M9 9.5v1M15 9.5v1M12 9.5v3h-1M9 16c1.8 1.3 4.2 1.3 6 0"/>', 34, c, 1.8),
    book: (c) => s('<path d="M3 5.5C5.5 4.5 8.5 4.5 11 6v14c-2.5-1.5-5.5-1.5-8-.5z"/><path d="M21 5.5c-2.5-1-5.5-1-8 .5v14c2.5-1.5 5.5-1.5 8-.5z"/><path d="M17 9v4" stroke="#d71920"/><circle cx="17" cy="7.3" r=".4" fill="#d71920" stroke="#d71920"/>', 44, c, 1.3),
    faq: (c) => s('<path d="M4 5h16v11H10l-4 4v-4H4z"/><path d="M10 9a2 2 0 113 1.7c-.6.4-1 .8-1 1.5" stroke="#d71920"/><circle cx="12" cy="14" r=".3" fill="#d71920" stroke="#d71920"/>', 44, c, 1.3),
    phone: (c) => s('<path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/><path d="M15 3a6 6 0 016 6M15 6.5A2.5 2.5 0 0117.5 9" stroke="#d71920"/>', 44, c, 1.3),
    search: (c) => s('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>', 22, c, 2),
    bank: s('<path d="M3 9l9-5 9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18"/>', 28, '#fff', 1.7),
    social: s('<circle cx="12" cy="6" r="2.5"/><path d="M6 12c2 0 3.5 1.2 6 4 2.5-2.8 4-4 6-4M12 16v4M7 19c1.5-.6 3-.6 5 1 2-1.6 3.5-1.6 5-1"/><path d="M4 9c1-2 3-3 5-2.5M20 9c-1-2-3-3-5-2.5"/>', 28, '#fff', 1.6),
    health: s('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><circle cx="12" cy="12" r="2"/><path d="M12 7.5v2M12 14.5v2M7.5 12h2M14.5 12h2M9 9l1 1M14 14l1 1M15 9l-1 1M10 14l-1 1"/>', 28, '#fff', 1.6),
    other: s('<path d="M12 4l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L6.2 8.3l4-.6z"/><path d="M5 18h14v3H5z"/>', 28, '#fff', 1.6),
    family: s('<circle cx="8" cy="8" r="2.5"/><circle cx="16" cy="8" r="2.5"/><path d="M3.5 19c0-3 2-5 4.5-5s4.5 2 4.5 5M11.5 19c0-3 2-5 4.5-5s4.5 2 4.5 5"/>', 28, '#fff', 1.6),
    building: s('<rect x="4" y="3" width="11" height="18" rx="1"/><path d="M7 7h1M11 7h1M7 11h1M11 11h1M7 15h1M11 15h1"/><path d="M15 12l4 1.5v3c0 2-1.7 3.5-4 4.5" stroke="#d71920"/><path d="M15.8 16.3l1 1 1.8-2" stroke="#d71920"/>', 34, '#e2a33a', 1.6),
    swap: s('<path d="M8 4v16M4 8l4-4 4 4M16 20V4M12 16l4 4 4-4"/>', 22, '#d71920', 2.2),
    home: (c, filled) => filled
      ? `<svg width="26" height="26" viewBox="0 0 24 24"><path fill="${c}" d="M12 3.2l9 7.3V20a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 20v-9.5z"/><rect x="10.8" y="14" width="2.4" height="3.6" rx="1.2" fill="#fff"/></svg>`
      : s('<path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20z"/>', 26, c),
    wallet: (c) => s('<rect x="3" y="6" width="17" height="14" rx="3"/><path d="M6 6l9-3 1.5 3"/><path d="M20 11h-4a2 2 0 000 4h4z"/>', 26, c, 1.5),
    bell: (c) => s('<path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 004 0"/>', 26, c, 1.5),
    gear: (c) => s('<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><circle cx="12" cy="12" r="3"/>', 26, c, 1.5),
    scan: s('<path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"/><path d="M3 12h18"/>', 30, '#fff', 2),
    pen: (c) => s('<path d="M15 4l5 5L9 20H4v-5z"/><path d="M3 22h18"/>', 22, c, 1.6),
    cursor: (c) => s('<path d="M5 3l14 7-6 2-2 6z"/>', 22, c, 1.6),
    chevronRight: (c) => s('<path d="M9 6l6 6-6 6"/>', 20, c, 1.8),
    user: s('<circle cx="12" cy="9" r="4"/><path d="M4 21c1-4.5 4.5-6.5 8-6.5s7 2 8 6.5"/>', 40, '#b08560', 1.6),
  };

  // Neutral app mark used in place of any official emblem.
  const appMark = (size = 56) => `
    <svg width="${size}" height="${size}" viewBox="0 0 64 64" aria-label="Biểu tượng demo">
      <circle cx="32" cy="32" r="30" fill="#c62828" stroke="#f2c94c" stroke-width="3"/>
      <path d="M32 13l5 11 12 1-9 8 3 12-11-6.5L21 45l3-12-9-8 12-1z" fill="#f2c94c"/>
    </svg>`;

  // Favourite-utility illustrations (original, simplified)
  const fav = {
    feedback: `<svg width="40" height="44" viewBox="0 0 40 44"><rect x="6" y="2" width="28" height="40" rx="4" fill="#f4a63a"/><rect x="9" y="7" width="22" height="26" rx="2" fill="#fff"/><path d="M12 16l8-5 8 5v11H12z" fill="#d71920"/><path d="M16 19l3 3 5-5" stroke="#fff" stroke-width="2" fill="none"/><circle cx="20" cy="37" r="2" fill="#fff"/></svg>`,
    insurance: `<svg width="44" height="46" viewBox="0 0 44 46"><path d="M22 2l18 6v13c0 11-8 19-18 23C12 40 4 32 4 21V8z" fill="#f2b94b"/><path d="M22 7l13 4.5V21c0 8.5-6 14.5-13 17.5C15 35.5 9 29.5 9 21v-9.5z" fill="#fff"/><path d="M19 14h6v6h6v6h-6v6h-6v-6h-6v-6h6z" fill="#d71920"/></svg>`,
    idcard: `<svg width="48" height="40" viewBox="0 0 48 40"><rect x="4" y="4" width="40" height="30" rx="3" fill="#f4a63a"/><rect x="7" y="7" width="34" height="24" rx="2" fill="#fff"/><circle cx="16" cy="15" r="4" fill="#3b3b3b"/><path d="M9 28c1-5 4-7 7-7s6 2 7 7z" fill="#d71920"/><rect x="26" y="13" width="12" height="2.5" fill="#f4a63a"/><rect x="26" y="19" width="9" height="2.5" fill="#f4a63a"/></svg>`,
    residence: `<svg width="48" height="40" viewBox="0 0 48 40"><path d="M4 18L24 4l20 14" stroke="#f4a63a" stroke-width="4" fill="none" stroke-linejoin="round"/><rect x="9" y="17" width="30" height="20" fill="#fff" stroke="#f4a63a" stroke-width="2"/><circle cx="18" cy="24" r="3" fill="#d71920"/><circle cx="30" cy="24" r="3" fill="#d71920"/><circle cx="24" cy="22" r="3.3" fill="#d71920"/><path d="M13 34c0-4 2-6 5-6s5 2 5 6zM25 34c0-4 2-6 5-6s5 2 5 6zM19 33c0-4 2-6 5-6s5 2 5 6z" fill="#d71920"/></svg>`,
    license: `<svg width="50" height="44" viewBox="0 0 50 44"><rect x="17" y="2" width="16" height="20" rx="2" fill="#fff" stroke="#d71920" stroke-width="2"/><path d="M21 12l3 3 6-7" stroke="#d71920" stroke-width="3" fill="none"/><path d="M8 28l5-8h24l5 8v8H8z" fill="#f4a63a"/><rect x="14" y="22" width="22" height="6" fill="#fff"/><circle cx="15" cy="36" r="4" fill="#d71920"/><circle cx="35" cy="36" r="4" fill="#d71920"/></svg>`,
    plate: `<svg width="50" height="34" viewBox="0 0 50 34"><rect x="3" y="3" width="44" height="28" rx="3" fill="#fff" stroke="#f4a63a" stroke-width="3"/><rect x="3" y="3" width="44" height="6" fill="#f4a63a"/><text x="25" y="26" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#d71920">XX-00</text></svg>`,
  };

  // ---------- Helpers ----------
  const toastEl = document.getElementById('toast');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }
  const demoOnly = (name) => () => toast(`“${name}” chỉ là mô phỏng trong bản demo`);

  const isLoggedIn = () => { try { return sessionStorage.getItem('demo_logged_in') === '1'; } catch { return false; } };
  const setLoggedIn = (v) => { try { v ? sessionStorage.setItem('demo_logged_in', '1') : sessionStorage.removeItem('demo_logged_in'); } catch {} };

  function go(route) { location.hash = route; }

  // ---------- Screens ----------
  function renderLogin() {
    app.innerHTML = `
      <section class="login">
        <div class="login__pattern"></div>
        <div class="login__top">
          <button class="icon-btn" data-act="back" aria-label="Quay lại">${I.back('#333')}</button>
          <button class="lang" data-act="lang" aria-label="Ngôn ngữ">
            <span class="flag">${I.star}</span>${I.chevronDown('#888')}
          </button>
        </div>
        <h1>Vui lòng nhập thông tin đăng nhập để tiếp tục</h1>

        <div class="account-card">
          <div>
            <div class="name">${C.fullName}</div>
            <div class="phone">${C.maskedPhone}</div>
          </div>
          ${appMark(64)}
        </div>

        <div class="label">Mật khẩu</div>
        <form id="loginForm" autocomplete="off">
          <label class="field">
            ${I.lock('#777')}
            <input id="pw" type="password" placeholder="Nhập mật khẩu" autocomplete="off" enterkeyhint="go">
            <button type="button" id="togglePw" aria-label="Hiện mật khẩu">${I.eyeOff('#555')}</button>
          </label>
          <button class="btn-primary" type="submit">Đăng nhập</button>
        </form>

        <div class="login__links">
          <button class="link-red" data-act="forgot">Quên mật khẩu</button>
          <button class="link-dark" data-act="switch">Đổi tài khoản ${I.refresh('#d71920')}</button>
        </div>

        <button class="faceid" data-act="faceid">
          <span class="faceid__ring">${I.face('#d71920')}</span>
          Đăng nhập bằng Face ID
        </button>

        <div class="login__spacer"></div>

        <div class="support">
          <button data-act="guide">${I.book('#444')}<span>Hướng dẫn<br>sử dụng</span></button>
          <button data-act="faq">${I.faq('#444')}<span>Câu hỏi<br>thường gặp</span></button>
          <button data-act="hotline">${I.phone('#444')}<span>Hotline<br>hỗ trợ</span></button>
        </div>
        <button class="privacy" data-act="privacy">Chính sách quyền riêng tư</button>
        <div class="version">Phiên bản ${C.version}</div>
        <div class="disclaimer">Bản demo giao diện · không phải ứng dụng chính thức · không có giá trị pháp lý</div>
      </section>`;

    const pw = app.querySelector('#pw');
    app.querySelector('#togglePw').addEventListener('click', (e) => {
      const show = pw.type === 'password';
      pw.type = show ? 'text' : 'password';
      e.currentTarget.innerHTML = show ? I.eye('#555') : I.eyeOff('#555');
    });
    // Demo login: the password is never stored or sent anywhere.
    app.querySelector('#loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      if (!pw.value) { toast('Vui lòng nhập mật khẩu'); pw.focus(); return; }
      pw.value = '';
      setLoggedIn(true);
      go('#/home');
    });
    const acts = {
      faceid: () => { toast('Đang xác thực (mô phỏng)…'); setTimeout(() => { setLoggedIn(true); go('#/home'); }, 700); },
      back: demoOnly('Quay lại'), lang: demoOnly('Đổi ngôn ngữ'), forgot: demoOnly('Quên mật khẩu'),
      switch: demoOnly('Đổi tài khoản'), guide: demoOnly('Hướng dẫn sử dụng'), faq: demoOnly('Câu hỏi thường gặp'),
      hotline: demoOnly('Hotline hỗ trợ'), privacy: demoOnly('Chính sách quyền riêng tư'),
    };
    bindActs(acts);
  }

  function tabbar(active) {
    const t = (key, label, icon) => {
      const on = active === key;
      const c = on ? '#d71920' : '#9a9a9a';
      return `<button class="tab ${on ? 'is-active' : ''}" data-tab="${key}">${icon(c, on)}<span>${label}</span></button>`;
    };
    return `
      <nav class="tabbar">
        ${t('home', 'Trang chủ', I.home)}
        ${t('wallet', 'Ví giấy tờ', I.wallet)}
        <button class="tab tab--scan" data-tab="scan" aria-label="Quét mã"><span>${I.scan}</span></button>
        ${t('notify', 'Thông báo', I.bell)}
        ${t('settings', 'Cài đặt', I.gear)}
      </nav>`;
  }

  function hero() {
    return `
      <header class="hero">
        <div class="hero__row">
          <div class="avatar">${I.user}</div>
          <div class="hero__center">
            <span class="level-pill">${C.level} <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5.5-3.4 9.3-8 11-4.6-1.7-8-5.5-8-11V5z" fill="#d71920"/><path d="M12 7l1.5 3.2 3.5.3-2.7 2.3.8 3.4-3.1-1.9-3.1 1.9.8-3.4L7 10.5l3.5-.3z" fill="#ffde00"/></svg></span>
            <div class="hero__name">${C.fullName}</div>
          </div>
          <button class="search-btn" data-act="search" aria-label="Tìm kiếm">${I.search('#333')}</button>
        </div>
        <div class="qr-row">
          <button class="qr-card" data-act="qr1">
            <span class="qr-card__thumb" style="background:#fff">${fav.idcard.replace('width="48" height="40"', 'width="36" height="30"')}</span>
            <span>Mã QR<br>Thẻ CCCD</span>
          </button>
          <button class="qr-card" data-act="qr2">
            <span class="qr-card__thumb" style="background:#1f6b2e">${appMark(36)}</span>
            <span>Mã QR<br>Định danh điện tử</span>
          </button>
        </div>
      </header>`;
  }

  function renderHome() {
    const services = [
      ['Thủ tục hành chính', I.bank, true],
      ['An sinh xã hội', I.social, true],
      ['Hồ sơ sức khỏe', I.health, true],
      ['Dịch vụ khác', I.other, true],
      ['Định danh người dưới 14', I.family, false],
    ];
    const favs = [
      ['Tiếp nhận góp ý, phản ánh & vướng mắc', fav.feedback],
      ['Thẻ BHYT', fav.insurance],
      ['Thẻ Căn cước/ CCCD', fav.idcard],
      ['Thông tin cư trú', fav.residence],
      ['Giấy phép lái xe', fav.license],
      ['Đăng ký xe', fav.plate],
    ];
    const news = [
      ['Hướng dẫn cài đặt bản demo lên màn hình chính iPhone', 'linear-gradient(135deg,#ffb199,#d71920)'],
      ['Nội dung tin tức minh hoạ – thay bằng nội dung của bạn', 'linear-gradient(135deg,#9bd3ff,#2a6fb0)'],
      ['Thêm các mục tin tức khác trong tệp app.js', 'linear-gradient(135deg,#c7f0b5,#3d8b3d)'],
    ];

    app.innerHTML = `
      <section class="home">
        ${hero()}

        <div class="section"><div class="section__head"><h2 class="section__title">Nhóm dịch vụ</h2></div></div>
        <div class="services">
          ${services.map(([label, icon, isNew]) => `
            <button class="service" data-demo="${label}">
              <span class="service__icon">${icon}${isNew ? '<span class="badge-new">Mới</span>' : ''}</span>
              <span class="service__label">${label}</span>
            </button>`).join('')}
        </div>

        <button class="org-card" data-demo="Định danh tổ chức">
          <span class="org-card__logo">${I.building}</span>
          <span>
            <div class="org-card__title">Định danh tổ chức</div>
            <div class="org-card__sub">(Nhấn để đổi vai trò sang tổ chức)</div>
          </span>
          <span class="org-card__switch">${I.swap}</span>
        </button>

        <button class="banner" data-demo="Khám phá ngay" style="width:calc(100% - 36px);text-align:left">
          <svg class="banner__rays" viewBox="0 0 400 180" preserveAspectRatio="none">
            ${Array.from({ length: 14 }, (_, i) => `<path d="M90 120 L${i * 32} -10 L${i * 32 + 12} -10 Z" fill="#ffcf6b"/>`).join('')}
          </svg>
          <span class="banner__emblem">${appMark(96)}</span>
          <span class="banner__text">
            <div class="banner__title">NGÀY CÔNG DÂN SỐ</div>
            <div class="banner__year">2026</div>
            <span class="banner__cta">KHÁM PHÁ NGAY</span>
          </span>
        </button>

        <div class="section">
          <div class="section__head">
            <h2 class="section__title">Tiện ích yêu thích</h2>
            <button class="section__action" data-demo="Chỉnh sửa">Chỉnh sửa ${I.pen('#d71920')}</button>
          </div>
        </div>
        <div class="favs">
          ${favs.map(([label, art]) => `
            <button class="fav" data-demo="${label}">
              <span class="fav__icon">${art}</span>
              <span>${label}</span>
            </button>`).join('')}
        </div>

        <div class="section">
          <div class="section__head">
            <h2 class="section__title">Tin tức</h2>
            <button class="section__action" data-demo="Xem thêm">Xem thêm ${I.cursor('#d71920')}</button>
          </div>
        </div>
        <div class="news">
          ${news.map(([title, bg]) => `
            <button class="news-card" data-demo="Tin tức">
              <div class="news-card__img" style="background:${bg}"></div>
              <div class="news-card__body">${title}<div class="news-card__meta">Bản demo</div></div>
            </button>`).join('')}
        </div>

        <div class="footer-note">Bản demo giao diện · không phải ứng dụng chính thức · không có giá trị pháp lý</div>
        ${tabbar('home')}
      </section>`;

    bindActs({
      search: demoOnly('Tìm kiếm'),
      qr1: demoOnly('Mã QR Thẻ CCCD'),
      qr2: demoOnly('Mã QR Định danh điện tử'),
    });
    bindCommon();
  }

  function renderSimple(tab, title, body) {
    app.innerHTML = `
      <section class="page">
        <header class="page__head">${title}</header>
        ${body}
        ${tabbar(tab)}
      </section>`;
    bindCommon();
  }

  const renderWallet = () => renderSimple('wallet', 'Ví giấy tờ',
    `<div class="empty">Bản demo không hiển thị giấy tờ tùy thân.<br>Đây chỉ là giao diện mô phỏng.</div>`);
  const renderNotify = () => renderSimple('notify', 'Thông báo',
    `<div class="empty">Chưa có thông báo nào.</div>`);
  const renderSettings = () => renderSimple('settings', 'Cài đặt', `
    <div class="list">
      ${['Thông tin tài khoản', 'Đổi mật khẩu', 'Cài đặt Face ID', 'Ngôn ngữ', 'Giới thiệu bản demo']
        .map(x => `<button data-demo="${x}">${x}${I.chevronRight('#bbb')}</button>`).join('')}
      <button data-act="logout" style="color:#d71920;font-weight:700">Đăng xuất</button>
    </div>`);

  // ---------- Binding ----------
  function bindActs(map) {
    app.querySelectorAll('[data-act]').forEach(el => {
      const fn = map[el.dataset.act];
      if (fn) el.addEventListener('click', fn);
    });
  }
  function bindCommon() {
    app.querySelectorAll('[data-demo]').forEach(el => el.addEventListener('click', demoOnly(el.dataset.demo)));
    app.querySelectorAll('[data-tab]').forEach(el => el.addEventListener('click', () => {
      const t = el.dataset.tab;
      if (t === 'scan') return toast('Quét mã chỉ là mô phỏng trong bản demo');
      go('#/' + t);
    }));
    const logout = app.querySelector('[data-act="logout"]');
    if (logout) logout.addEventListener('click', () => { setLoggedIn(false); go('#/login'); });
  }

  // ---------- Router ----------
  const routes = { login: renderLogin, home: renderHome, wallet: renderWallet, notify: renderNotify, settings: renderSettings };
  function route() {
    const name = (location.hash.replace(/^#\//, '') || 'login');
    if (name !== 'login' && !isLoggedIn()) return go('#/login');
    if (name === 'login' && isLoggedIn()) return go('#/home');
    (routes[name] || renderLogin)();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
