# Luma Beauty Studio — Demo Site

A static, responsive beauty-salon concept for Adama, Ethiopia. It needs no build step or package installation.

## Run locally

Open `index.html` directly in a browser, or serve the folder with:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## Rebrand before client delivery

Edit `config.js` to change the salon name, WhatsApp number, phone label, location/map query, opening hours, services/prices, and gallery. Theme colors are the CSS variables at the top of `style.css`.

`whatsappNumber` is deliberately blank in this demo. Add the real number as international digits only (for example, `251...`) before booking requests can open WhatsApp.

The map intentionally points only to general Adama; replace it with the salon's verified address or map query. The demo gallery uses reference imagery and must not be presented as a real salon's portfolio.
