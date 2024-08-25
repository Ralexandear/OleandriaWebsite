const path = require('path');
const fs = require('fs');
const pug = require('pug');

const srcDir = path.join(__dirname, 'src', 'views');
const destDir = path.join(__dirname, 'dist');

const options = {
  basedir: srcDir,
  pretty: true, // Pretty-printed HTML output
};

// Function to compile Pug files
function compilePugFiles(srcDir, destDir) {
  // Read all files in the srcDir
  fs.readdirSync(srcDir).forEach(file => {
    const filePath = path.join(srcDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively compile files in subdirectories
      const newDestDir = path.join(destDir, file);
      fs.mkdirSync(newDestDir, { recursive: true });
      compilePugFiles(filePath, newDestDir);
    } else if (path.extname(file) === '.pug') {
      // Compile Pug files
      const compiledFunction = pug.compileFile(filePath, options);
      const html = compiledFunction();

      const destFilePath = path.join(destDir, file.replace('.pug', '.html'));
      fs.writeFileSync(destFilePath, html, 'utf8');
      console.log(`Compiled: ${filePath} -> ${destFilePath}`);
    }
  });
}

// Ensure the destination directory exists
fs.mkdirSync(destDir, { recursive: true });

// Compile all Pug files
compilePugFiles(srcDir, destDir);