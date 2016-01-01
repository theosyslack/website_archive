var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  var data = {
    title: 'Theo Syslack',
    subtitle: 'Web Developer & World Famous Detective',
    projects: [
      {
        title: 'RatingsMax',
        subtitle: 'RatingsMax',
        description: 'Over the course of 7 months, our development team'+
         ' of three built an entire web app to help small businesses'+
         ' manage their online reputation.',
        images: [
          {
            src: '/img/project-images/ratingsmax/reviews.png',
            alt: 'Image',
            classes: '-left -full'
          },
          {
            src: '/img/project-images/ratingsmax/settings.png',
            alt: 'Image2',
            classes: '-right -half'
          },
          {
            src: '/img/project-images/ratingsmax/sharing.png',
            alt: 'Image3',
            classes: '-right -half'
          }
        ]
      }
    ]
  };
  res.render('index', data);
});

module.exports = router;
