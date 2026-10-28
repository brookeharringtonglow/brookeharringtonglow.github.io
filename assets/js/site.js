// Tiny helpers only. No analytics, no cookies, no third-party calls.
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Mark the current nav link for screen readers and styling.
  var path = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.nav a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/index\.html$/, '');
    var abs = new URL(href, location.href).pathname.replace(/index\.html$/, '');
    if (abs === path) a.setAttribute('aria-current', 'page');
  });
})();
