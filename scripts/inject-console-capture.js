const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Read the console capture script
const scriptPath = path.join(__dirname, '..', 'public', 'dashboard-console-capture.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Create inline script tag
const scriptTag = `<script>${scriptContent}</script>`;

// Find all HTML files in the build output
const buildDir = path.join(__dirname, '..', '.next');
const pattern = path.join(buildDir, '**/*.html');

glob(pattern, { ignore: '**/node_modules/**' }, (err, files) => {
  if (err) {
    console.error('Error finding HTML files:', err);
    return;
  }

  console.log(`Found ${files.length} HTML files to process`);

  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Check if script is already injected
      if (content.includes('console-capture-ready')) {
        console.log(`Skipping ${file} - script already present`);
        return;
      }

      // Inject script into head section
      if (content.includes('</head>')) {
        content = content.replace('</head>', `${scriptTag}</head>`);
        fs.writeFileSync(file, content);
        console.log(`Injected console capture script into ${file}`);
      } else {
        console.log(`No </head> tag found in ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log('Console capture script injection complete');
});