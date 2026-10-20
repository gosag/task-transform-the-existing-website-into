/* Site behavior deliberately stays framework-free for easy client handoff. */
(() => {
  const config = window.SALON_CONFIG;
  const el = (selector) => document.querySelector(selector);
  const allServices = config.services.flatMap(group => group.items.map(item => item[0]));

  document.title = `${config.brandName} | Demo Salon Website`;
  document.querySelectorAll('[data-brand-name]').forEach(node => { node.textContent = config.brandName; });
  document.querySelectorAll('[data-brand-primary]').forEach(node => { node.textContent = config.brandPrimary; });
  document.querySelectorAll('[data-brand-secondary]').forEach(node => { node.textContent = config.brandSecondary; });

  el('#service-groups').innerHTML = config.services.map(group => `
    <section class="service-group"><h3>${group.category}</h3><p>${group.description}</p><div class="service-list">
      ${group.items.map(([name, description, price]) => `<article class="service-item"><div><h4>${name}</h4><p>${description}</p></div><strong class="service-price">${price}</strong></article>`).join('')}
    </div></section>`).join('');
  el('#gallery-grid').innerHTML = config.gallery.map(([src, alt, title]) => `<figure class="gallery-item"><img src="${src}" alt="${alt}" loading="lazy"><figcaption class="gallery-label">${title}</figcaption></figure>`).join('');
  el('#guest-service').innerHTML = `<option value="">Choose a service</option>${allServices.map(name => `<option>${name}</option>`).join('')}`;
  el('#opening-hours').innerHTML = config.openingHours.map(([day, hours]) => `<div><dt>${day}</dt><dd>${hours}</dd></div>`).join('');
  el('#contact-location').textContent = config.location + ' — general area only';
  el('#contact-phone').textContent = config.phoneDisplay;
  el('#map-frame').src = `https://www.google.com/maps?q=${encodeURIComponent(config.mapQuery)}&output=embed`;
  el('#directions-link').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(config.mapQuery)}`;
  el('#year').textContent = new Date().getFullYear();

  const toggle = el('.menu-toggle'); const nav = el('.primary-nav');
  toggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', open); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }));

  const dialog = el('#booking-dialog'); const status = el('#booking-status');
  const openBooking = (service = '') => { status.textContent = ''; el('#booking-form').reset(); if (service) el('#guest-service').value = service; dialog.showModal(); el('#guest-name').focus(); };
  document.querySelectorAll('.js-open-booking').forEach(button => button.addEventListener('click', () => openBooking()));
  el('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  el('#booking-form').addEventListener('submit', event => {
    event.preventDefault(); status.classList.remove('error');
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (!config.whatsappNumber || !/^\d{7,15}$/.test(config.whatsappNumber)) {
      status.classList.add('error');
      status.textContent = 'This is a demo: add a real WhatsApp number in config.js before this request can be sent.';
      return;
    }
    const data = new FormData(form);
    const message = `Hello ${config.brandName}! My name is ${data.get('name')}. I’d like to request ${data.get('service')} on ${data.get('date')} around ${data.get('time')}.${data.get('note') ? ` Notes: ${data.get('note')}` : ''} Please let me know if a time is available.`;
    status.textContent = 'Opening WhatsApp to send your appointment request…';
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
})();
