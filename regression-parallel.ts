const fs2 = require('fs');
const path2 = require('path');

const NODE_INDEX2 = Number(process.argv[2] || 1);
const NODE_TOTAL2 = Number(process.argv[3] || 1);

const TEST_FOLDER2 = './cypress/tests/Regression';

console.log(getDirectories2().join(','));

function getDirectories2() {
  const allDirectories = traverse2(TEST_FOLDER2);
  const node_index = NODE_INDEX2 +1;
  return allDirectories.sort()
    .filter((_, index) => (index % NODE_TOTAL2) === (node_index - 1));
}

function traverse2(dir) {
  let directories = fs2.readdirSync(dir);
  directories = directories.map(file => {
    const filepath2 = path2.join(dir, file);
    const stats = fs2.statSync(filepath2);
    if (stats.isDirectory()) {
      return [filepath2, ...traverse2(filepath2)];
    }
  });

  return directories
    .reduce((all, folderContents) => all.concat(folderContents), [])
    .filter(Boolean);
}
