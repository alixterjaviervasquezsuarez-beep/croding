/**
 * SmartClothes Shopify Theme — cart.js
 * Shopify Ajax Cart API integration
 * Handles: add to cart, update quantity, remove item, cart drawer open/close, badge update
 */

(function() {
  'use strict';

  const CartDrawer = {
    overlay: document.getElementById('cart-drawer-overlay'),
    drawer: document.getElementById('cart-drawer'),
    itemsContainer: document.getElementById('cart-drawer-items'),
    countBadge: document.getElementById('cart-count'),
    drawerCount: document.getElementById('drawer-item-count'),
    subtotalEl: document.getElementById('drawer-subtotal'),

    open: function() {
      if (this.overlay) this.overlay.classList.add('active');
      if (this.drawer) this.drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    },

    close: function() {
      if (this.overlay) this.overlay.classList.remove('active');
      if (this.drawer) this.drawer.classList.remove('active');
      document.body.style.overflow = '';
    },

    updateBadge: function(count) {
      if (this.countBadge) this.countBadge.textContent = count;
      if (this.drawerCount) this.drawerCount.textContent = count;
    },

    updateSubtotal: function(totalPrice) {
      if (this.subtotalEl) this.subtotalEl.textContent = formatMoney(totalPrice);
      const pageTotal = document.getElementById('page-cart-total');
      if (pageTotal) pageTotal.textContent = formatMoney(totalPrice);
    },

    /**
     * Fetch the full cart and re-render the drawer items
     */
    refresh: function() {
      var self = this;
      fetch('/cart.js', { headers: { 'Accept': 'application/json' } })
        .then(function(r) { return r.json(); })
        .then(function(cart) {
          self.updateBadge(cart.item_count);
          self.updateSubtotal(cart.total_price);
          self.renderItems(cart);
        })
        .catch(function(err) { console.error('Cart refresh error:', err); });
    },

    renderItems: function(cart) {
      if (!this.itemsContainer) return;

      if (cart.item_count === 0) {
        this.itemsContainer.innerHTML =
          '<div class="cart-drawer-empty">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' +
            '<p>' + (window.__cartEmptyText || 'Tu carrito está vacío') + '</p>' +
          '</div>';
        return;
      }

      var html = '';
      cart.items.forEach(function(item, index) {
        html +=
          '<div class="cart-item" data-line-item data-line="' + (index + 1) + '" data-variant-id="' + item.variant_id + '">' +
            '<img class="cart-item-image" src="' + getSizedImageUrl(item.image, '200x') + '" alt="' + escapeHtml(item.title) + '" loading="lazy">' +
            '<div class="cart-item-info">' +
              '<div class="cart-item-title">' + escapeHtml(item.product_title) + '</div>' +
              '<div class="cart-item-variant">' + escapeHtml(item.variant_title || '') + '</div>' +
              '<div class="cart-item-price">' + formatMoney(item.final_line_price) + '</div>' +
              '<div class="cart-item-actions">' +
                '<div class="cart-item-qty">' +
                  '<button data-line-minus aria-label="Decrease"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg></button>' +
                  '<span data-line-qty>' + item.quantity + '</span>' +
                  '<button data-line-plus aria-label="Increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>' +
                '</div>' +
                '<button class="cart-item-remove" data-line-remove aria-label="Remove"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button>' +
              '</div>' +
            '</div>' +
          '</div>';
      });

      this.itemsContainer.innerHTML = html;
      bindCartItemEvents();
    }
  };

  /* =============================================
     FORMAT MONEY
     ============================================= */
  function formatMoney(cents) {
    return 'S/ ' + (cents / 100).toFixed(2);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function getSizedImageUrl(src, size) {
    if (!src) return '';
    if (src.indexOf('_' + size) > -1) return src;
    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif|webp)(\?.*)?$/i);
    if (match) {
      var prefix = src.split(match[0]);
      return prefix[0] + '_' + size + '.' + match[1] + (match[2] || '');
    }
    return src;
  }

  /* =============================================
     ADD TO CART
     ============================================= */
  function addToCart(variantId, quantity) {
    quantity = quantity || 1;
    return fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ id: parseInt(variantId), quantity: parseInt(quantity) })
    })
    .then(function(response) { return response.json(); })
    .then(function(data) {
      CartDrawer.refresh();
      CartDrawer.open();
      return data;
    })
    .catch(function(err) { console.error('Add to cart error:', err); });
  }

  /* =============================================
     UPDATE CART LINE
     ============================================= */
  function updateCartLine(line, quantity) {
    return fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ line: parseInt(line), quantity: parseInt(quantity) })
    })
    .then(function(response) { return response.json(); })
    .then(function(cart) {
      CartDrawer.updateBadge(cart.item_count);
      CartDrawer.updateSubtotal(cart.total_price);
      CartDrawer.renderItems(cart);
      return cart;
    })
    .catch(function(err) { console.error('Update cart error:', err); });
  }

  /* =============================================
     EVENT BINDINGS
     ============================================= */

  // Cart toggle button
  var cartToggle = document.getElementById('cart-toggle');
  if (cartToggle) {
    cartToggle.addEventListener('click', function(e) {
      e.preventDefault();
      CartDrawer.open();
    });
  }

  // Close drawer
  var cartClose = document.getElementById('cart-drawer-close');
  if (cartClose) {
    cartClose.addEventListener('click', function() { CartDrawer.close(); });
  }
  if (CartDrawer.overlay) {
    CartDrawer.overlay.addEventListener('click', function() { CartDrawer.close(); });
  }

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') CartDrawer.close();
  });

  // Add to cart buttons
  document.querySelectorAll('[data-add-to-cart]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      // If it's inside a form, prevent default submission
      var form = btn.closest('form');
      if (form) e.preventDefault();

      var variantId = this.getAttribute('data-variant-id');
      var qty = parseInt(this.getAttribute('data-quantity')) || 1;
      if (variantId) {
        addToCart(variantId, qty);
      }
    });
  });

  // Cart item events (quantity +/-, remove)
  function bindCartItemEvents() {
    document.querySelectorAll('[data-line-item]').forEach(function(item) {
      var line = parseInt(item.getAttribute('data-line'));
      var qtyEl = item.querySelector('[data-line-qty]');
      var minusBtn = item.querySelector('[data-line-minus]');
      var plusBtn = item.querySelector('[data-line-plus]');
      var removeBtn = item.querySelector('[data-line-remove]');

      if (minusBtn) {
        minusBtn.addEventListener('click', function() {
          var currentQty = parseInt(qtyEl.textContent) || 1;
          if (currentQty > 1) {
            updateCartLine(line, currentQty - 1);
          } else {
            updateCartLine(line, 0);
          }
        });
      }

      if (plusBtn) {
        plusBtn.addEventListener('click', function() {
          var currentQty = parseInt(qtyEl.textContent) || 1;
          updateCartLine(line, currentQty + 1);
        });
      }

      if (removeBtn) {
        removeBtn.addEventListener('click', function() {
          updateCartLine(line, 0);
        });
      }
    });
  }

  // Initial binding
  bindCartItemEvents();

})();
