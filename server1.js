const express = require('express');  // call express
const mailer = require('express-mailer'); // call express
const office = require('nodejs-nodemailer-outlook')
const app = express(); // create a server
 
const port = process.env.PORT || 8000;  // set our port
 
// set the view folder to views
app.set('views', __dirname + '/views');
// set the view engine to pug
app.set('view engine', 'pug');
 
// Configure express-mail and setup default mail data.
<<<<<<< HEAD:server1.js
mailer.extend(app, {
  from: 'cumar27@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
  user: 'cumar27@gmail.com', // gmail id
  pass: 'yourpassword' // gmail password
  }
});
=======
// mailer.extend(app, {
//   from: 'martin@shapeconsulting.net',
//   host: 'smtp.office365.com', // hostname
//   secureConnection: true, // use SSL
//   port: 587, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//   user: 'martin@shapeconsulting.net', // gmail id
//   pass: 'Wh!teti9' // gmail password
//   }
// });

// mailer.extend(app, {
//   from: 'mporter@bowman-painting.net',
//   host: 'smtp.office365.com', // hostname
//   secureConnection: true, // use SSL
//   port: 587, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//   user: 'mporter@bowman-painting.net', // gmail id
//   pass: 'Wh!teti9' // gmail password
//   }
// });
>>>>>>> 12d480462ed8ba1c63a78e97ac08e11d3213041a:server.js
 
 
// test route to trigger emails
app.get('/', function (req, res) {
  // Setup email data.


  // var mailOptions = {
  //   to: 'cumar27@gmail.com',
  //   subject: 'Email from SMTP sever',
  //   user: {  // data to view template, you can access as - user.name
  //     name: 'Kumar Ramanathan',
  //     message: 'Welcome to google.com'
  //   }
  // }

  //TODO: set up the sendEmail function below to accept the mailOptions
  // option format :

//   auth: {
//     user: someuser@somewhere.com",
//     pass: "somepassword"
// }, from: 'mporter@bowman-painting.net',
// to: 'martin@shapeconsulting.net',
// subject: 'Hey you, awesome!',
// html: '<b>This is bold text</b>',
// text: 'This is text version!'
// });


  // Send email.
  // app.mailer.send('email', mailOptions, function (err, message) {
  //   if (err) {
  //     console.log(err);
  //     res.send('There was an error sending the email');
  //     return;
  //   }
  //   return res.send('Email has been sent!');
  // });
 
});
 
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});