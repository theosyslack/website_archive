<template>
	<div :class="classStyle">
		{{message}}
	</div>
</template>
<script>
	export default {
		data: function(){
			return {
				message: 'What',
				visible: false,
			}
		},
		computed: {
			classStyle: function(){
				return {
					'contact-bar': true,
					'visible': this.visible
				}
			}
		},
		ready: function(){
			let windowHeight = window.innerHeight;

			window.addEventListener('scroll', function(e){
				let scrollPosition = window.scrollY;
				let triggerPosition = windowHeight/5;	
				console.log(scrollPosition >= triggerPosition);
				if (scrollPosition >= triggerPosition){
					this.visible = true;
				} else {
					this.visible = false;
				}
			})
		}
	}
</script>
<style> 
	
</style>