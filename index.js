console.log(`Tools active:`);
var underscore = require('underscore');
var fs = require('fs');
var build = function(str) {
  var template = underscore.template(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Toole ex.</title>
    </head>
      <body>
        <%=text%>
      </body>
    </html>`);
  var comp = template({
    text: str,
  });
  return fs.writeFile('./index.html', comp);
};

var head = function(str) {
  var template = underscore.template('<h1><%=text%></h1>');
  var comp = template({
    text: str,
  });
  return comp;

};

var ul = function(textarray) {
  var compiled = underscore.template(`<ul>
    <% for(var i = 0; i< array.length; i++) { %>
        <li><%=array[i]%></li>
       <% } %>
    </ul>`);
  return compiled({
    array: textarray,
  });
};

module.exports = (function() {
  return {
    build: build,
    head: head,
    ul: ul,
  };
})();

// var tools = require('./index.js');
// var h1 = tools.head('hello world');
// var newUl = tools.ul(['1', '2']);
// tools.build(h1 + newUl);
// console.log(h1);
