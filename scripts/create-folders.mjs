import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const folders = [
  'app/public',
  'app/dashboard',
  'app/org',
  'app/referee',
  'app/admin',
  'components/header',
  'components/footer',
  'components/navigation',
  'components/cards',
  'components/forms',
  'components/layouts',
  'lib/utils',
  'lib/hooks',
  'lib/api',
  'lib/types',
  'styles',
  'public/images',
  'public/icons',
  'public/fonts',
];

folders.forEach((folder) => {
  const folderPath = path.join(projectRoot, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created: ${folder}`);
  }
});

console.log('Folder structure created successfully!');
