/*
 * SALON DEMO CONFIGURATION
 *
 * This is the one file to edit when presenting the site to another salon.
 * Change the values in `brand`, `contact`, and `content`; the logo, page title,
 * headings, contact card, map, and WhatsApp links update automatically.
 */
window.SALON_CONFIG = {
  brand: {
    name: 'Adama Beauty Studio',
    primary: 'Adama',
    secondary: 'Beauty Studio',
    // Use one to three initials, a symbol, or a short word. This replaces the old hard-coded “L” logo.
    mark: 'AB',
    description: 'A configurable women’s beauty salon website demo for Adama, Ethiopia.'
  },
  contact: {
    location: 'Adama, Oromia, Ethiopia',
    mapQuery: 'Adama, Oromia, Ethiopia',
    phoneDisplay: 'Demo placeholder — add salon phone number',
    // For a live site, add digits only, including Ethiopia’s country code, e.g. 2519XXXXXXXX.
    // Leave blank while demonstrating: buttons will open WhatsApp without starting a chat.
    whatsappNumber: '',
    openingHours: [
      ['Monday–Friday', '9:00 AM – 7:00 PM'],
      ['Saturday', '9:00 AM – 6:00 PM'],
      ['Sunday', '10:00 AM – 4:00 PM']
    ]
  },
  content: {
    heroTitle: 'Beauty that feels<br><i>like you.</i>',
    heroCopy: 'Hair, braids, nails, makeup and skincare in a welcoming women’s beauty space in Adama.',
    introCopy: 'From fresh braids and soft glam to nail care and a restorative facial, this is a flexible website concept for women’s beauty salons across Adama.',
    aboutEyebrow: 'The Adama beauty experience',
    aboutCopyOne: 'is a fictional brand created to show how a polished, local salon website could look. The studio can welcome women for hair, beauty, nails, skincare and special-occasion preparation.',
    aboutCopyTwo: 'Every detail on this demo — from the service menu to the contact information — is easy to replace for a real salon.'
  },
  services: [
    {
      category: 'Hair & braids',
      description: 'Everyday hair care, protective styles and celebration-ready looks.',
      items: [
        ['Women’s Haircut & Styling', 'A shape and finish tailored to your look.', '350 Br'],
        ['Wash & Blow-Dry', 'A fresh cleanse with a smooth, bouncy finish.', '250 Br'],
        ['Natural Hair Treatment', 'Moisture-rich care for softness and shine.', '500 Br'],
        ['Braids & Cornrows', 'Protective, expressive braiding styles.', 'From 800 Br'],
        ['Silk Press / Relaxing', 'A smooth, manageable finish for your hair.', 'From 700 Br']
      ]
    },
    {
      category: 'Nails, skin & makeup',
      description: 'Small rituals and finishing touches for your everyday or special day.',
      items: [
        ['Manicure', 'Neat shaping, cuticle care and polish.', '250 Br'],
        ['Pedicure', 'A restorative refresh for feet and toes.', '350 Br'],
        ['Gel Nails', 'Long-wear color with a clean, glossy finish.', '600 Br'],
        ['Facial Treatment', 'A calming reset for a healthy-looking glow.', '500 Br'],
        ['Soft Glam Makeup', 'Makeup designed around your natural features.', 'From 800 Br']
      ]
    }
  ],
  // Each gallery image is unique. Swap paths and captions to show a real salon’s own work before launch.
  gallery: [
    ['images/service-img1.jpg', 'Beauty professional applying eye makeup', 'Makeup artistry'],
    ['images/service-img3.jpg', 'Detailed manicure being applied', 'Nail artistry'],
    ['images/service-img6.jpg', 'Hair being washed during a salon treatment', 'Hair care'],
    ['images/service-img5.jpg', 'Relaxing facial treatment in progress', 'Skincare ritual'],
    ['images/service-img8.jpg', 'Close detail of a clean neutral manicure', 'Manicure detail']
  ]
};
