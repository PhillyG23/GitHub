const Tesseract = require('tesseract.js');
const path = require('path');

const image = path.resolve(__dirname, 'schedule.png');

Tesseract.recognize(image)
  .progress(message => {
    console.log(message)
  })
  .catch(err => console.error(err))
  .then(result => {
    console.log(result.text)
    process.exit(0)
  })
  .finally(() => Tesseract.terminate())