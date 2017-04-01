// require("!style-loader!css-loader!./style.css");
// => simple:
//terminal: webpack entry.js bundle.js --modlue-bind 'css=style-loader!css-loader'
// or webopack.config.js
require("./style.css"); 
document.write("it works.");
document.write(require('./module.js'));