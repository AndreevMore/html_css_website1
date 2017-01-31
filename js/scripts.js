$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
	if ($('.sign-form').exists()) {
		customForm.customForms.replaceAll();
	}
	if ($('.tabset').exists()) {
		$(".tabset").sticky({
			topSpacing: 89,
			center: true,
			className: "hey"
		});
	}	
	if ($('.get').exists()) {
		$(".get").sticky({
			topSpacing: 89,
			center: true,
			className: "hey"
		});
	}	
	if ($('.carousel').exists()) {
		$('.carousel').carousel({
			interval: 3000
		})
	}
});
