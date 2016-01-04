var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  var data = {
    title: 'Theo Syslack',
    subtitle: 'Web Developer & World Famous Detective',
    employeementStatus: {
        status: 'Employed',
        location: 'Ice Frog Technologies'
    },
    projects: [
      {
        title: 'RatingsMax',
        subtitle: 'Online review management for small businesses.',
        description: 'Over the course of 7 months, our development team'+
         ' of three built an entire web app to help small businesses'+
         ' manage their online reputation. Using <a href="https://laravel.com/">Laravel</a>,'+
         ' we built a fast and functional app using'+
         ' the latest standards in the PHP community.',
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
        ],
        skillSets: [
          {
            title: 'Font End',
            skills: ['Sass', 'Gulp', 'Flexbox']
          },
          {
            title: 'Middle End',
            skills: ['PHP', 'Controllers', 'Repositories', 'Services', 'Blade']
          }
        ]
      }
    ]
  };
  res.render('index', data);
});

module.exports = router;
