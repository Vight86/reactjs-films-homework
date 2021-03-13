const express = require('express');
const open = require('open');

const app = express();

const PORT = process.env.PORT ?? 3000;

// Serve the files on port.
app.listen(PORT, function () {
  console.log(`Serve is started at port ${PORT}...\n`);
  open(`http://localhost:${PORT}/`);
});