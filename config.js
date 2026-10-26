/*
 * DEMO CONFIGURATION
 * Replace these values when adapting this demo for a real salon. Service prices
 * are used directly by the website, so update them here rather than in the HTML.
 */
window.SALON_CONFIG = {
  brandName: 'Beauty Studio',
  brandPrimary: 'Demo',
  brandSecondary: 'Beauty Studio',
  location: 'Adama, Oromia, Ethiopia',
  mapQuery: 'Adama, Oromia, Ethiopia',
  // Add digits only (country code first) for a real WhatsApp number. Leave blank for this honest demo state.
  whatsappNumber: '',
  phoneDisplay: 'Demo placeholder — add salon phone number',
  openingHours: [['Monday–Friday', '9:00 AM – 7:00 PM'], ['Saturday', '9:00 AM – 6:00 PM'], ['Sunday', '10:00 AM – 4:00 PM']],
  services: [
    { category: 'Hair care', description: 'Polished everyday care and occasion-ready styling.', items: [
      ['Women’s Haircut & Styling', 'A shape and finish tailored to your look.', '350 Br'], ['Wash & Blow-Dry', 'A fresh cleanse with a smooth, bouncy finish.', '250 Br'], ['Hair Treatment', 'Nourishing care for softness and shine.', '500 Br'], ['Braiding', 'Protective and expressive braiding styles.', 'From 800 Br'], ['Relaxing Hair Treatment', 'A smoothing service for more manageable hair.', 'From 700 Br']
    ]},
    { category: 'Nails & skin', description: 'Small rituals that leave a lasting impression.', items: [
      ['Manicure', 'Neat shaping, cuticle care and polish.', '250 Br'], ['Pedicure', 'A restorative refresh for feet and toes.', '350 Br'], ['Gel Nails', 'Long-wear color with a clean, glossy finish.', '600 Br'], ['Facial Treatment', 'A calming reset for a healthy-looking glow.', '500 Br'], ['Makeup', 'Soft glam or occasion makeup designed around you.', 'From 800 Br']
    ]}
  ],
  gallery: [
    ['images/about-img.jpg', 'Soft makeup and polished beauty look', 'Makeup artistry'], ['images/service-img6.jpg', 'Hair being washed during a salon treatment', 'Hair care'], ['images/service-img8.jpg', 'Detailed manicure and nail work', 'Nail artistry'], ['images/service-img5.jpg', 'Relaxing facial treatment in progress', 'Skincare ritual'], ['images/service-img2.jpg', 'Close detail of a clean neutral manicure', 'Manicure detail'], ['images/service-img4.jpg', 'Pedicure treatment with flowers', 'Pedicure care']
  ]
};
