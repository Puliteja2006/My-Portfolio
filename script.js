(function () {
  var root = document.documentElement;

  /* ---------- Theme toggle (remembered in the browser) ---------- */
  try {
    var saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
  });

  /* ---------- Highlight the nav link for the section in view ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('active'); });
          var a = map[en.target.id];
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  /* ---------- Resume download ----------
     On a normal site, the links with data-resume-download download resume.pdf by themselves.
     Inside the Claude preview page, downloads go through a built-in save prompt instead. */
  var saver = null;
  if (window.claude && window.claude.use) {
    window.claude.use('downloads').then(function (d) { saver = d; }, function () {});
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-resume-download]'), function (a) {
    a.addEventListener('click', function (e) {
      if (!saver) return;
      e.preventDefault();
      fetch(a.getAttribute('href'))
        .then(function (r) { return r.blob(); })
        .then(function (blob) {
          return saver.save({ filename: 'Puli-Sai-Srinivasa-Teja-Resume.pdf', data: blob });
        })
        .catch(function () {});
    });
  });

  /* ---------- Copy buttons (email, phone) ---------- */
  function copyText(text, done, fail) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fail);
    } else { fail(); }
  }
  Array.prototype.forEach.call(document.querySelectorAll('.copy'), function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('data-target'));
      function flash(msg) {
        btn.textContent = msg;
        setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
      }
      copyText(target.textContent, function () { flash('Copied'); }, function () {
        var range = document.createRange();
        range.selectNodeContents(target);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        flash('Selected');
      });
    });
  });
})();