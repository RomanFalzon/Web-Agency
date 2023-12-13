const chokidar = require('chokidar');
const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

const mainFilePath = 'src/MAIN.scss';
const outputFilePath = 'static/styles.css';

const compileSass = () => {
  console.log('Compiling Sass...');
  sass.render(
    {
      file: mainFilePath,
      outFile: outputFilePath,
      sourceMap: true,
      outputStyle: 'compressed',
    },
    (error, result) => {
      if (!error) {
        fs.writeFileSync(outputFilePath, result.css);
        console.log('Sass compiled successfully!');
      } else {
        console.error('Sass compilation error:', error);
      }
    }
  );
};

// Watch for changes in the main SCSS file and its imports
const watcher = chokidar.watch([mainFilePath, 'src/styles/**/*.scss'], {
  persistent: true,
  ignoreInitial: true,
});

watcher
  .on('add', (path) => {
    console.log(`File ${path} has been added`);
    compileSass();
  })
  .on('change', (path) => {
    console.log(`File ${path} has been changed`);
    compileSass();
  })
  .on('unlink', (path) => {
    console.log(`File ${path} has been removed`);
    compileSass();
  });

console.log(`Watching for changes in ${mainFilePath} and its imports...`);
