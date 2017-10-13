const pwacompat = require('pwacompat');
const html = pwacompat(require('../static/manifest.json'));
console.log(html);
