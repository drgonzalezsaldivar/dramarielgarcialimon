/* ── CUSTOM CURSOR ────────────────────────────────────────────── */
(function(){
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let rx = 0, ry = 0, mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  (function animRing() {
    rx += (mx - rx) * .14; ry += (my - ry) * .14;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
})();

/* ── HOVER SCALE (cursor grows on interactive elements) ─────── */
document.querySelectorAll(
  'a,button,.espec-card,.dif-card,.proceso-step,.trat-card,.sint-item'
).forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

/* ── NAV SCROLL ───────────────────────────────────────────────── */
const _nav = document.getElementById('nav');
if (_nav) window.addEventListener('scroll', () =>
  _nav.classList.toggle('scrolled', scrollY > 50), { passive: true });

/* ── MOBILE MENU ──────────────────────────────────────────────── */
const _hamburger = document.getElementById('hamburger');
const _mobMenu   = document.getElementById('mobMenu');
const _mobClose  = document.getElementById('mobClose');
if (_hamburger) _hamburger.addEventListener('click', () => _mobMenu.classList.add('open'));
if (_mobClose)  _mobClose.addEventListener('click',  () => _mobMenu.classList.remove('open'));
function closeMob() { if (_mobMenu) _mobMenu.classList.remove('open'); }

/* ── FAQ ACCORDION ────────────────────────────────────────────── */
function toggleFaq(btn) {
  const ans    = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) { btn.classList.add('open'); ans.classList.add('open'); }
}

/* ── INTERSECTION OBSERVER (scroll reveal) ───────────────────── */
const _io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); _io.unobserve(e.target); } });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => _io.observe(el));

/* ── COUNTER ANIMATION ────────────────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.dataset.target);
  const duration = 1800;
  const start    = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target);
    if (p < 1) requestAnimationFrame(step); else el.textContent = target;
  })(performance.now());
}
const _cio = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); _cio.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => _cio.observe(el));

/* ── TYPEWRITER (index only) ──────────────────────────────────── */
(function(){
  const tw = document.getElementById('typewriter');
  if (!tw) return;
  const phrases = ['Dra. Ana Mariel García Limón', 'Cirugía Articular', 'Pie y Tobillo · Monterrey'];
  let pi = 0, ci = 0, deleting = false;
  function typeStep() {
    const phrase = phrases[pi];
    if (!deleting) {
      tw.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(typeStep, 2200); return; }
      setTimeout(typeStep, 75);
    } else {
      tw.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeStep, 400); return; }
      setTimeout(typeStep, 38);
    }
  }
  setTimeout(typeStep, 1600);
})();

/* ── PARTICLES (index only) ───────────────────────────────────── */
(function(){
  const container = document.getElementById('particles');
  if (!container) return;
  const defs = [
    {x:'12%',y:'30%',sz:'4px',c:'rgba(90,172,191,0.55)',d:'9s',delay:'0s'},
    {x:'22%',y:'65%',sz:'3px',c:'rgba(196,168,130,0.5)',d:'7s',delay:'1.2s'},
    {x:'35%',y:'15%',sz:'5px',c:'rgba(90,172,191,0.35)',d:'11s',delay:'0.5s'},
    {x:'48%',y:'80%',sz:'2px',c:'rgba(255,255,255,0.3)',d:'8s',delay:'2s'},
    {x:'60%',y:'25%',sz:'3px',c:'rgba(90,172,191,0.45)',d:'10s',delay:'0.8s'},
    {x:'72%',y:'55%',sz:'4px',c:'rgba(196,168,130,0.4)',d:'6s',delay:'1.8s'},
    {x:'83%',y:'40%',sz:'2px',c:'rgba(255,255,255,0.25)',d:'12s',delay:'3s'},
    {x:'90%',y:'70%',sz:'3px',c:'rgba(90,172,191,0.3)',d:'8s',delay:'0.3s'},
    {x:'5%', y:'85%',sz:'4px',c:'rgba(196,168,130,0.35)',d:'9s',delay:'1.5s'},
    {x:'55%',y:'45%',sz:'2px',c:'rgba(255,255,255,0.2)',d:'7s',delay:'2.5s'},
  ];
  defs.forEach(p => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `left:${p.x};top:${p.y};--sz:${p.sz};--c:${p.c};--d:${p.d};--delay:${p.delay}`;
    container.appendChild(el);
  });
})();

/* ── PARALLAX (index only) ────────────────────────────────────── */
(function(){
  const heroImg = document.querySelector('.hero-image-col img');
  if (!heroImg) return;
  window.addEventListener('scroll', () => {
    heroImg.style.transform = `scale(1) translateY(${scrollY * .15}px)`;
  }, { passive: true });
})();
