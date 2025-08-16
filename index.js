// index.js
// Use CommonJS throughout so Node can parse it without ESM flags

// require Express from node_modules
const express = require('express');           // import the express module
const app = express();                        // create an Express app instance
const port = 3000;                            // define the port to listen on

// define a GET route for the root path
app.get('/', (req, res) => {                  // handle GET /
  res.send('Hello, World! My DevOps app is Live!'); // send text response
});

// start the server
app.listen(port, () => {                      // bind to the port
  console.log(`App running on http://localhost:${port}`); // log URL
});
