const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
app.listen(port);
console.log('Servidor para RESTful API Luthier iniciada en puerto: ' + port);
