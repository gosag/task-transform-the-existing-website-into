/* Site behavior deliberately stays framework-free for easy client handoff. */
(() => {
  const config = window.SALON_CONFIG;
  const { brand, contact, content } = config;
  const el = (selector) => document.querySelector(selector);
  const setText = (selector, value) => document.querySelectorAll(selector).forEach(node => { node.textContent = value; });
  const whatsappUrl = /^\d{7,15}$/.test(contact.whatsappNumber)
    ? `https://wa.me/${contact.whatsappNumber}`
    : 'https://www.whatsapp.com/';

  document.title = `${brand.name} | Salon Website Demo`;
  document.querySelector('meta[name="description"]').setAttribute('content', brand.description);
  setText('[data-brand-name]', brand.name);
  setText('[data-brand-primary]', brand.primary);
  setText('[data-brand-secondary]', brand.secondary);
  setText('[data-brand-mark]', brand.mark);
  setText('[data-location]', contact.location);
  document.querySelectorAll('[data-brand-home]').forEach(node => node.setAttribute('aria-label', `${brand.name} home`));
  el('[data-hero-title]').innerHTML = content.heroTitle;
  el('[data-hero-copy]').textContent = content.heroCopy;
  el('[data-intro-copy]').textContent = content.introCopy;
  el('[data-about-eyebrow]').textContent = content.aboutEyebrow;
  el('[data-about-copy-one]').textContent = `${brand.name} ${content.aboutCopyOne}`;
  el('[data-about-copy-two]').textContent = content.aboutCopyTwo;

  el('#service-groups').innerHTML = config.services.map(group => `
    <section class="service-group"><h3>${group.category}</h3><p>${group.description}</p><div class="service-list">
      ${group.items.map(([name, description, price]) => `<article class="service-item"><div><h4>${name}</h4><p>${description}</p></div><strong class="service-price">${price}</strong></article>`).join('')}
    </div></section>`).join('');
  el('#gallery-grid').innerHTML = config.gallery.map(([src, alt, title]) => `<figure class="gallery-item"><img src="${src}" alt="${alt}" loading="lazy"><figcaption class="gallery-label">${title}</figcaption></figure>`).join('');
  el('#opening-hours').innerHTML = contact.openingHours.map(([day, hours]) => `<div><dt>${day}</dt><dd>${hours}</dd></div>`).join('');
  el('#contact-location').textContent = contact.location;
  el('#contact-phone').textContent = contact.phoneDisplay;
  el('#map-frame').src = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
  el('#directions-link').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapQuery)}`;
  el('#year').textContent = new Date().getFullYear();
  document.querySelectorAll('.js-whatsapp-link').forEach(link => link.href = whatsappUrl);

  const toggle = el('.menu-toggle');
  const nav = el('.primary-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();
