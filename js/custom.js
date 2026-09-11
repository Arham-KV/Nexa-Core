/**
 * NexaCore Solutions — Vanilla JavaScript Enhancements
 * Version: 1.0.0
 * Lightweight, accessible script for WordPress & Elementor integration
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initMobileNav();
    initStatsCounter();
    initSmoothScroll();
    initFormValidation();
  });

  /**
   * 1. Sticky Header Scroll Shadow
   */
  function initStickyHeader() {
    var header = document.querySelector('.nc-sticky-header');
    if (!header) return;

    var handleScroll = function () {
      if (window.scrollY > 24) {
        header.classList.add('nc-scrolled');
      } else {
        header.classList.remove('nc-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * 2. Mobile Navigation Toggle & Accessibility
   */
  function initMobileNav() {
    var toggleBtn = document.querySelector('.nc-menu-toggle');
    var mobileMenu = document.querySelector('.nc-mobile-drawer');
    var overlay = document.querySelector('.nc-menu-overlay');

    if (!toggleBtn || !mobileMenu) return;

    function openMenu() {
      toggleBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('is-active');
      if (overlay) overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggleBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-active');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', function () {
      var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    var menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
        closeMenu();
      }
    });
  }

  /**
   * 3. Animated Number Counters on Scroll
   */
  function initStatsCounter() {
    var counters = document.querySelectorAll('.nc-stat-counter');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var targetEl = entry.target;
          var targetVal = parseFloat(targetEl.getAttribute('data-target') || targetEl.innerText);
          var duration = 1800;
          var start = 0;
          var startTime = null;
          var suffix = targetEl.getAttribute('data-suffix') || '';
          var decimals = targetEl.getAttribute('data-decimals') ? parseInt(targetEl.getAttribute('data-decimals')) : 0;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            var easeVal = 1 - (1 - progress) * (1 - progress);
            var current = start + (targetVal - start) * easeVal;
            targetEl.innerText = (decimals > 0 ? current.toFixed(decimals) : Math.floor(current)) + suffix;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              targetEl.innerText = (decimals > 0 ? targetVal.toFixed(decimals) : targetVal) + suffix;
            }
          }

          window.requestAnimationFrame(step);
          obs.unobserve(targetEl);
        }
      });
    }, { threshold: 0.25 });

    counters.forEach(function (c) {
      observer.observe(c);
    });
  }

  /**
   * 4. Smooth Anchor Scroll with Fixed Header Offset
   */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var headerOffset = 84;
          var elementPosition = target.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * 5. Interactive Form Feedback
   */
  function initFormValidation() {
    var forms = document.querySelectorAll('.nc-ajax-form');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        // Elementor Pro handles AJAX submissions natively,
        // this hook provides immediate accessible status feedback
        var submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
        if (submitBtn) {
          submitBtn.dataset.originalText = submitBtn.innerText || submitBtn.value;
        }
      });
    });
  }
})();
