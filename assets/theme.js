/**
 * SmartClothes Shopify Theme — theme.js
 * General interactions: mobile menu, smooth scroll, thumbnails, quantity selectors, variant selection
 */

(function() {
  'use strict';

  /* =============================================
     MOBILE MENU
     ============================================= */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(255,255,255,0.97)';
      navLinks.style.backdropFilter = 'blur(24px)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.gap = '1.25rem';
      navLinks.style.borderBottom = '1px solid #e5e7eb';
      navLinks.style.zIndex = '40';
      navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';

      if (isOpen) {
        navLinks.removeAttribute('style');
      }
    });
  }

  /* =============================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================= */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* =============================================
     PRODUCT THUMBNAIL GALLERY (PDP)
     ============================================= */
  const thumbs = document.querySelectorAll('[data-thumb]');
  const mainImg = document.getElementById('pdp-main-img');

  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      const src = this.getAttribute('data-image-src');
      if (src && mainImg) {
        mainImg.src = src;
        thumbs.forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
      }
    });
  });

  /* =============================================
     QUANTITY SELECTORS (Homepage shop section)
     ============================================= */
  document.querySelectorAll('[data-quantity-selector]').forEach(function(selector) {
    const minusBtn = selector.querySelector('[data-quantity-minus]');
    const plusBtn = selector.querySelector('[data-quantity-plus]');
    const valueEl = selector.querySelector('[data-quantity-value]');

    if (!minusBtn || !plusBtn || !valueEl) return;

    let qty = parseInt(valueEl.textContent) || 1;

    minusBtn.addEventListener('click', function() {
      if (qty > 1) {
        qty--;
        valueEl.textContent = qty;
        updatePriceDisplay(selector, qty);
      }
    });

    plusBtn.addEventListener('click', function() {
      qty++;
      valueEl.textContent = qty;
      updatePriceDisplay(selector, qty);
    });
  });

  function updatePriceDisplay(selector, qty) {
    // Update price in the add-to-cart button if present
    const section = selector.closest('.shop-details-column') || selector.closest('.shop-card');
    if (!section) return;
    const priceSpan = section.querySelector('.shop-add-btn-price');
    const addBtn = section.querySelector('[data-add-to-cart]');
    if (priceSpan && addBtn) {
      const variantId = addBtn.getAttribute('data-variant-id');
      // We'll update the quantity when adding to cart
      addBtn.setAttribute('data-quantity', qty);
    }
  }

  /* =============================================
     VARIANT SELECTION (PDP)
     ============================================= */
  const variantOptions = document.querySelectorAll('[data-variant-option]');
  const productJson = document.getElementById('product-json');

  if (variantOptions.length > 0 && productJson) {
    let productData;
    try {
      productData = JSON.parse(productJson.textContent);
    } catch(e) {
      productData = null;
    }

    if (productData) {
      const selectedOptions = [];
      productData.options.forEach(function(opt, i) {
        selectedOptions[i] = productData.variants[0].options[i];
      });

      variantOptions.forEach(function(card) {
        card.addEventListener('click', function() {
          const optionIndex = parseInt(this.getAttribute('data-option-index'));
          const value = this.getAttribute('data-value');
          selectedOptions[optionIndex] = value;

          // Update active state
          this.closest('.pdp-option-radios, .pdp-option-cards').querySelectorAll('[data-variant-option]').forEach(function(c) {
            c.classList.remove('active');
          });
          this.classList.add('active');

          // Find matching variant
          const matchingVariant = productData.variants.find(function(v) {
            return v.options.every(function(opt, i) {
              return opt === selectedOptions[i];
            });
          });

          if (matchingVariant) {
            // Update hidden input
            const idInput = document.getElementById('variant-id-input');
            if (idInput) idInput.value = matchingVariant.id;

            // Update add-to-cart buttons
            document.querySelectorAll('[data-add-to-cart]').forEach(function(btn) {
              btn.setAttribute('data-variant-id', matchingVariant.id);
            });

            // Update price display
            const priceMain = document.querySelector('.pdp-price-main');
            if (priceMain) {
              priceMain.textContent = formatMoney(matchingVariant.price);
            }

            // Update featured image if variant has one
            if (matchingVariant.featured_image && mainImg) {
              mainImg.src = matchingVariant.featured_image.src;
            }
          }
        });
      });
    }
  }

  function formatMoney(cents) {
    return 'S/ ' + (cents / 100).toFixed(2);
  }

  /* =============================================
     STICKY HEADER SCROLL EFFECT
     ============================================= */
  const header = document.getElementById('site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

})();
