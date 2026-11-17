(function () {
  const state = { lang: 'en', filter: 'All', products: [] };
  const copy = {
    en: {
      announcement: 'Direct supply from Guangdong, China  ·  Built for APAC buyers', navCollection: 'Collection', navQuality: 'Quality', navStories: 'Stories', navInquiry: 'Inquiry', talkToUs: 'Talk to us', heroEyebrow: 'FLOOR TILE / APAC SUPPLY', heroTitle: 'Grounded in material.<br /><em>Ready for your next space.</em>', heroLede: 'A focused collection of floor tiles for distributors, designers and project teams across Asia Pacific.', exploreCollection: 'Explore collection', requestQuote: 'Request a quote', collections: 'collections', shippingReady: 'shipping ready', humanContact: 'human contact', heroNote: 'Material-led surfaces<br />for everyday architecture', sectionIntro: 'A clear point of view', introTitle: 'Tiles that make<br /><em>space feel settled.</em>', introCopy: 'Tile Space brings together durable, adaptable floor tile collections for the people who source, specify and build with confidence.', seeHowWeWork: 'See how we work', sectionCollection: 'The collection', collectionTitle: 'Choose your surface.', collectionCopy: 'A concise catalogue of floor tiles with the details buyers actually need.', catalogueNote: 'Need a full catalogue or project quantity?', startInquiry: 'Start an inquiry', sectionQuality: 'The details matter', qualityTitle: 'Clear information.<br /><em>Fewer surprises.</em>', qualityCopy: 'From sample selection to final packing, we keep the handover clear for every order.', qualityOneTitle: 'Select', qualityOneCopy: 'Compare finish, thickness and format before you request a quote.', qualityTwoTitle: 'Confirm', qualityTwoCopy: 'We align quantity, destination and timeline with your project.', qualityThreeTitle: 'Deliver', qualityThreeCopy: 'A clear production and delivery plan keeps your team moving.', sectionStories: 'In use', storiesTitle: 'Made for the way<br /><em>spaces are used.</em>', storiesCopy: 'Reference the mood, then let the material do the work.', storyOneTag: 'RESIDENTIAL / CALM', storyOneTitle: 'A softer foundation for daily life.', storyTwoTag: 'HOSPITALITY / TEXTURE', storyTwoTitle: 'Texture that holds attention.', storyThreeTitle: 'Specify with confidence.', talkToTeam: 'Talk to our team', sectionInquiry: 'Start a conversation', inquiryTitle: 'Tell us what<br /><em>you are building.</em>', inquiryCopy: 'Share the product, quantity and destination. We will come back with a practical quote.', formName: 'Your name', formCompany: 'Company', formLocation: 'Country / city / destination port', formContact: 'Email or WhatsApp', formProducts: 'Products and quantity', formMessage: 'Anything else we should know?', sendInquiry: 'Send inquiry', formNote: 'Your message opens in WhatsApp. You can switch to email if you prefer.', footerLine: 'Floor tile sourcing from Guangdong, China.', footerInquiry: 'Inquiry', adminLink: 'Product admin', footerLocation: 'Guangdong, China', viewDetails: 'View details', addInquiry: 'Add to inquiry', quoteOnly: 'Quote by quantity + destination', close: 'Close', finish: 'Finish', size: 'Size', thickness: 'Thickness', askAbout: 'Ask about this tile', selected: 'Selected', inquiryAdded: 'Added to your inquiry', noProducts: 'No products in this collection yet.'
    },
    zh: {
      announcement: '中国广东直供  ·  面向亚太采购商', navCollection: '产品系列', navQuality: '质量与交付', navStories: '应用案例', navInquiry: '发起询盘', talkToUs: '联系团队', heroEyebrow: '地砖 / 亚太供应', heroTitle: '从材料出发。<br /><em>为下一个空间做好准备。</em>', heroLede: '为亚太地区的经销商、设计师和工程团队提供专注、可靠的地砖系列。', exploreCollection: '浏览产品系列', requestQuote: '获取报价', collections: '个系列', shippingReady: '支持亚太发货', humanContact: '人工对接', heroNote: '以材料为核心的表面<br />让日常空间更耐看', sectionIntro: '清晰的选择', introTitle: '让空间<br /><em>安定下来的地砖。</em>', introCopy: 'Tile Space 汇集耐用、好搭配的地砖系列，帮助采购、设计和工程团队更有把握地做决定。', seeHowWeWork: '了解我们的流程', sectionCollection: '产品系列', collectionTitle: '选择你的表面。', collectionCopy: '只展示采购商真正需要的产品信息。', catalogueNote: '需要完整目录或项目数量报价？', startInquiry: '开始询盘', sectionQuality: '细节决定结果', qualityTitle: '信息清楚。<br /><em>交付更少意外。</em>', qualityCopy: '从样品选择到最终装箱，我们让每一笔订单的交接都清楚可控。', qualityOneTitle: '选择', qualityOneCopy: '在询价前，先对比表面、厚度和规格。', qualityTwoTitle: '确认', qualityTwoCopy: '我们根据数量、目的地和时间安排订单。', qualityThreeTitle: '交付', qualityThreeCopy: '明确的生产和交付计划，让你的团队放心推进。', sectionStories: '应用场景', storiesTitle: '适合真实的<br /><em>使用方式。</em>', storiesCopy: '先确定空间气质，再让材料完成表达。', storyOneTag: '住宅 / 安静质感', storyOneTitle: '为日常生活提供更柔和的基础。', storyTwoTag: '商业空间 / 纹理', storyTwoTitle: '让纹理自然吸引目光。', storyThreeTitle: '更有把握地选材。', talkToTeam: '联系团队', sectionInquiry: '开始沟通', inquiryTitle: '告诉我们你在<br /><em>建设什么。</em>', inquiryCopy: '告诉我们产品、数量和目的地，我们会给你一份实际可执行的报价。', formName: '姓名', formCompany: '公司名称', formLocation: '国家 / 城市 / 目的港', formContact: '邮箱或 WhatsApp', formProducts: '需要的产品和数量', formMessage: '还有什么需要说明？', sendInquiry: '发送询盘', formNote: '提交后将打开 WhatsApp，也可以改用邮箱发送。', footerLine: '来自中国广东的地砖供应。', footerInquiry: '发起询盘', adminLink: '产品后台', footerLocation: '中国广东', viewDetails: '查看详情', addInquiry: '加入询盘', quoteOnly: '根据数量和目的地报价', close: '关闭', finish: '表面工艺', size: '尺寸', thickness: '厚度', askAbout: '咨询这个产品', selected: '已选择', inquiryAdded: '已加入询盘', noProducts: '这个系列暂时没有产品。'
    }
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const t = (key) => copy[state.lang][key] || key;
  const localized = (value) => typeof value === 'object' ? value[state.lang] : value;
  const refreshIcons = () => { if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.7 } }); };

  function loadProducts() {
    try { state.products = JSON.parse(localStorage.getItem('tileSpaceProducts')) || window.TILE_SPACE_DATA.products; }
    catch { state.products = window.TILE_SPACE_DATA.products; }
  }

  function renderText() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    $$('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    $('#announcement').textContent = t('announcement');
    $('#languageToggle').textContent = state.lang === 'en' ? '中' : 'EN';
  }

  function renderFilters() {
    $('#filterRow').innerHTML = window.TILE_SPACE_DATA.series.map((series) => `<button class="filter-chip ${state.filter === series ? 'active' : ''}" type="button" data-filter="${series}">${series === 'All' ? (state.lang === 'en' ? 'All' : '全部') : series}</button>`).join('');
    $$('.filter-chip').forEach((button) => button.addEventListener('click', () => { state.filter = button.dataset.filter; renderFilters(); renderProducts(); }));
  }

  function renderProducts() {
    const products = state.filter === 'All' ? state.products : state.products.filter((item) => item.series === state.filter);
    $('#productGrid').innerHTML = products.length ? products.map((product, index) => `
      <article class="product-card" style="--delay:${index * 70}ms">
        <button class="product-image" type="button" data-product="${product.id}" aria-label="${t('viewDetails')}: ${localized(product.name)}"><img src="${product.image}" alt="${localized(product.name)} tile" loading="lazy" /><span class="image-arrow"><i data-lucide="arrow-up-right" aria-hidden="true"></i></span></button>
        <div class="product-card-body"><div class="product-meta"><span>${product.series}</span><span>${product.size}</span></div><h3>${localized(product.name)}</h3><p>${localized(product.finish)}</p><div class="product-actions"><button class="small-link" data-product="${product.id}" type="button">${t('viewDetails')} <i data-lucide="arrow-up-right" aria-hidden="true"></i></button><button class="add-button" type="button" data-add="${product.id}" aria-label="${t('addInquiry')}"><i data-lucide="plus" aria-hidden="true"></i></button></div></div>
      </article>`).join('') : `<p class="empty-state">${t('noProducts')}</p>`;
    $$('[data-product]').forEach((button) => button.addEventListener('click', () => openModal(button.dataset.product)));
    $$('[data-add]').forEach((button) => button.addEventListener('click', () => { addInquiry(button.dataset.add); button.classList.add('added'); button.innerHTML = '<i data-lucide="check" aria-hidden="true"></i>'; refreshIcons(); }));
    refreshIcons();
  }

  function openModal(id) {
    const product = state.products.find((item) => item.id === id); if (!product) return;
    $('#modalContent').innerHTML = `<div class="modal-grid"><div class="modal-image"><img src="${product.image}" alt="${localized(product.name)} tile" /></div><div class="modal-details"><span class="eyebrow">${product.series}</span><h2>${localized(product.name)}</h2><p class="modal-note">${t('quoteOnly')}</p><dl><div><dt>${t('size')}</dt><dd>${product.size}</dd></div><div><dt>${t('thickness')}</dt><dd>${product.thickness}</dd></div><div><dt>${t('finish')}</dt><dd>${localized(product.finish)}</dd></div></dl><button class="button button-dark" type="button" data-modal-add="${product.id}"><span>${t('askAbout')}</span><i class="button-icon" data-lucide="arrow-up-right" aria-hidden="true"></i></button></div></div>`;
    refreshIcons();
    $('#productModal').showModal();
    $('[data-modal-add]').addEventListener('click', () => { addInquiry(id); $('#productModal').close(); });
  }

  function addInquiry(id) {
    const product = state.products.find((item) => item.id === id); if (!product) return;
    const formProducts = document.querySelector('[name="products"]');
    const value = localized(product.name) + ' / ' + product.size;
    formProducts.value = formProducts.value ? `${formProducts.value}\n${value} — ` : `${value} — `;
    $('#inquiry').scrollIntoView({ behavior: 'smooth' });
    $('#toast').textContent = `${localized(product.name)} · ${t('inquiryAdded')}`; $('#toast').classList.add('show');
    window.setTimeout(() => $('#toast').classList.remove('show'), 2600);
  }

  function bindInteractions() {
    $('#languageToggle').addEventListener('click', () => { state.lang = state.lang === 'en' ? 'zh' : 'en'; renderText(); renderFilters(); renderProducts(); });
    $('#modalClose').addEventListener('click', () => $('#productModal').close());
    $('#productModal').addEventListener('click', (event) => { if (event.target === $('#productModal')) $('#productModal').close(); });
    $('#menuToggle').addEventListener('click', () => { $('#mobileMenu').classList.add('open'); $('#mobileMenu').setAttribute('aria-hidden', 'false'); });
    $('#mobileClose').addEventListener('click', () => { $('#mobileMenu').classList.remove('open'); $('#mobileMenu').setAttribute('aria-hidden', 'true'); });
    $$('#mobileMenu a').forEach((link) => link.addEventListener('click', () => { $('#mobileMenu').classList.remove('open'); $('#mobileMenu').setAttribute('aria-hidden', 'true'); }));
    $('#inquiryForm').addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const message = [`Name: ${data.get('name')}`, `Company: ${data.get('company') || '-'}`, `Destination: ${data.get('location')}`, `Contact: ${data.get('contact')}`, `Products: ${data.get('products')}`, `Notes: ${data.get('message') || '-'}`].join('\n'); window.open(`https://wa.me/8613824369827?text=${encodeURIComponent(message)}`, '_blank', 'noopener'); });
  }

  document.body.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
  $$('main > section, .site-footer').forEach((section) => revealObserver.observe(section));
  loadProducts(); renderText(); renderFilters(); renderProducts(); bindInteractions(); refreshIcons();
})();
