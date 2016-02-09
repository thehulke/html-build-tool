# Web Build Tool

**Download** `npm install https://github.com/thehulke/html-build-tool`.

Run node on folder
## Functions
`head(string)` - creates an `h1` DOM element with a string passed to the function.

`ul(string)` - creates an `ul` DOM element with an `li` array of strings passed to the function.

`build([h1]/[ul])` - builds an HTML template and creates a new html file.


## Code Example
```js
  // node
  var tools = require('./index.js');
  var h1 = tools.head('hello world');
  var newUl = tools.ul(['list item 1', 'list item 2']);
  tools.build(h1 + newUl);
  ```
