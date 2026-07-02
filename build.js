const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const backendUrl = process.env.BACKEND_URL || 'https://api.16arena.com';
content = content.replace('__BACKEND_URL_PLACEHOLDER__', backendUrl);

fs.writeFileSync(indexPath, content);
console.log(`Successfully injected BACKEND_URL in-place into index.html: ${backendUrl}`);
