const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  
  module.exports = app;