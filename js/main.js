(function(){
  "use strict";

  /* ---- language toggle ---- */
  var btnAm = document.getElementById('btnAm');
  var btnEn = document.getElementById('btnEn');
  var htmlEl = document.documentElement;

  function setLang(showEnglish){
    if(showEnglish){
      htmlEl.classList.add('show-en');
      btnEn.classList.add('active');
      btnAm.classList.remove('active');
    } else {
      htmlEl.classList.remove('show-en');
      btnAm.classList.add('active');
      btnEn.classList.remove('active');
    }
    try{ localStorage.setItem('abc_lang', showEnglish ? 'en' : 'am'); }catch(e){}
  }
  btnAm.addEventListener('click', function(){ setLang(false); });
  btnEn.addEventListener('click', function(){ setLang(true); });
  try{
    var saved = localStorage.getItem('abc_lang');
    if(saved === 'en'){ setLang(true); }
  }catch(e){}

  /* ---- mobile menu ---- */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', function(){
    var open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
    });
  });

  /* ---- scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  /* ---- topbar shadow on scroll ---- */
  var topbar = document.querySelector('.topbar');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 10){ topbar.classList.add('scrolled'); }
    else{ topbar.classList.remove('scrolled'); }
  });

})();
