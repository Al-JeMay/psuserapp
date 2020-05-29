/*
===========================================================
 Title:  PolicyStreet User App Demo
 Author: Al JeMay
 Date:   29 May 2020
===========================================================
*/

const express = require ('express');
const app = express ();

// Was using fetch API to call the API. Initially,
// it was throwing "cors" error.
// Then added this below code in my Backend API code,
// allowing origin and header from anywhere.
let allowCrossDomain = function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Headers', '*');
  next ();
};
app.use (allowCrossDomain);

// serve up production assets
app.use (express.static ('client/build'));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require ('path');
app.get ('*', (req, res) => {
  res.sendFile (path.resolve (__dirname, 'client', 'build', 'index.html'));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log ('server started on port:', PORT);
app.listen (PORT);
