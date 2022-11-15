const { readFile, writeFile } = require('fs');

readFile('./content/content.txt', 'utf8', (err, result) => {

  if (err) {
    console.error(err);
    return;
  }

  console.log(result);

  writeFile('./content/result-sync.txt', `Here is the result file: ${result}`, (err, result) => {
    if (err) {
      return;
    }
    console.log(result);
  });
});