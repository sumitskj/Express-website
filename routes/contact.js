var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contacts' });
});

router.post('/send', (req,res,next) => {
  var transport = nodemailer.createTransport({
    service : 'Gmail',
    auth : {
      user : 'bhushansainidss.1@gmail.com',
      pass : 'sumitkumar'
    }
  });

  var mailOption = {
    from: 'Sumit Jangir <sumitjangirdss.1@gmail.com>',
    to: 'bhushansainidss.1@gmail.com',
    subject: 'Fuck You',
    text: 'Fuck yourself'+req.body.name+ 'email '+ req.body.email,
    html: '<p>Hey you fucker</p>'
  }

  transport.sendMail(mailOption, (error, info) => {
    if(error){
      console.log(error);
      res.redirect('/');
    }else{
      console.log('Success '+info.response);
      res.redirect('/');
    }
  })
})

module.exports = router;
