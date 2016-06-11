let Vue = require('vue');
let ContactBar = require('./vue/ContactBar.vue');

document.addEventListener("DOMContentLoaded", function(event) {
    new Vue({  
      el: 'body',
      components: {
      	'contact-bar': ContactBar
      },
      data: {
      	scrollHeight: window.scrollY,
      	windowHeight: window.innerHeight
      },
      methods: {
      	updateScrollHeight: function(){
      		this.scrollHeight = window.scrollY;
      		console.log(this.scrollHeight);
      	}
      },
      ready: function(){
		let windowHeight = window.innerHeight;
		let _this = this;
		window.addEventListener('scroll', this.updateScrollHeight);
      }
    });
  });