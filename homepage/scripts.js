document.addEventListener('DOMContentLoaded', function(){
			function blink(){
			let body = document.querySelector('#hello');
			if (body.style.visibility == 'hidden'){
				body.style.visibility = 'visible';
			}else{
				body.style.visibility = 'hidden';
			}
		}
		window.setInterval(blink, 500);
});