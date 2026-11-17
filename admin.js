(function () {
  const storageKey = 'tileSpaceProducts';
  const fallback = window.TILE_SPACE_DATA.products;
  let products = [];
  const $ = (selector) => document.querySelector(selector);
  function load() { try { products = JSON.parse(localStorage.getItem(storageKey)) || structuredClone(fallback); } catch { products = structuredClone(fallback); } render(); }
  function value(value) { return value || ''; }
  function render() {
    $('#productCount').textContent = `${products.length} products · changes save to this browser`;
    $('#adminList').innerHTML = products.map((product, index) => `<article class="admin-product" data-index="${index}"><div class="admin-product-head"><div><span class="admin-index">${String(index + 1).padStart(2, '0')}</span><strong>${value(product.name.en) || 'Untitled product'}</strong></div><button class="delete-product" type="button" data-delete="${index}">Remove</button></div><div class="admin-fields"><label>English name<input data-field="name.en" value="${value(product.name.en)}" placeholder="Ash Veil" /></label><label>Chinese name<input data-field="name.zh" value="${value(product.name.zh)}" placeholder="灰雾" /></label><label>Series<select data-field="series"><option ${product.series === 'Mineral' ? 'selected' : ''}>Mineral</option><option ${product.series === 'Stone' ? 'selected' : ''}>Stone</option><option ${product.series === 'Terra' ? 'selected' : ''}>Terra</option><option ${product.series === 'Outdoor' ? 'selected' : ''}>Outdoor</option></select></label><label>Size<input data-field="size" value="${value(product.size)}" placeholder="600 × 600 mm" /></label><label>Thickness<input data-field="thickness" value="${value(product.thickness)}" placeholder="9.5 mm" /></label><label>Finish (EN)<input data-field="finish.en" value="${value(product.finish.en)}" placeholder="Matt / soft stone" /></label><label>Finish (中文)<input data-field="finish.zh" value="${value(product.finish.zh)}" placeholder="哑光 / 柔和石纹" /></label><label class="field-wide">Image URL<input data-field="image" value="${value(product.image)}" placeholder="https://..." /></label></div></article>`).join('');
    document.querySelectorAll('.admin-product input, .admin-product select').forEach((input) => input.addEventListener('input', (event) => updateField(event.target)));
    document.querySelectorAll('[data-delete]').forEach((button) => button.addEventListener('click', () => { products.splice(Number(button.dataset.delete), 1); render(); }));
  }
  function updateField(input) { const product = products[Number(input.closest('.admin-product').dataset.index)]; const parts = input.dataset.field.split('.'); if (parts.length === 2) product[parts[0]][parts[1]] = input.value; else product[parts[0]] = input.value; }
  $('#saveProducts').addEventListener('click', () => { localStorage.setItem(storageKey, JSON.stringify(products)); $('#saveProducts').textContent = 'Saved ✓'; setTimeout(() => $('#saveProducts').textContent = 'Save changes', 1800); });
  $('#resetProducts').addEventListener('click', () => { products = structuredClone(fallback); localStorage.removeItem(storageKey); render(); });
  $('#addProduct').addEventListener('click', () => { products.push({ id: `product-${Date.now()}`, series: 'Mineral', name: { en: 'New product', zh: '新产品' }, size: '600 × 600 mm', thickness: '9.5 mm', finish: { en: 'Matt / soft stone', zh: '哑光 / 柔和石纹' }, tone: 'sand', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85' }); render(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });
  load();
  if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.7 } });
})();
