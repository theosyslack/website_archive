let Vue = require('vue');
let ContactBar = require('./vue/ContactBar.vue');

document.addEventListener("DOMContentLoaded", function(event) {
    new Vue({
      el: 'body',
      components: {
      	'contact-bar': ContactBar
      },
      data: {
        message: 'Hello Vue.js!'
      }
    });
  });