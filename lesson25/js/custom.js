

function myValidation(){
	var name = document.forms['contactForm']['name'].value;
	var email = document.forms['contactForm']['email'].value;
	var phone = document.forms['contactForm']['phone'].value;
	var message = document.forms['contactForm']['message'].value;
	var error =[];
	if(name =='' || name.length <3){
		error[0]="Name must be at least 3 leaters";
		document.getElementById('name-error').innerHTML = error[0];	
	}else{
		document.getElementById('name-error').innerHTML = '';
	}
	if(email =='' || email.length <10){
		error[1]="please insert a valid email";
		document.getElementById('email-error').innerHTML = error[1];	
	}else{
		document.getElementById('email-error').innerHTML = '';
	}
	if(phone =='' || phone.length <12){
		error[2]="please ensert your valid phone number";
		document.getElementById('phone-error').innerHTML = error[2];	
	}else{
		document.getElementById('phone-error').innerHTML = '';
	}
	if(message =='' || message.length <50){
		error[3]="please ensert your message";
		document.getElementById('message-error').innerHTML = error[3];	
	}else{
		document.getElementById('message-error').innerHTML = '';
	}
	if(error.length > 0){
		return false;
	}
}
function myFocus(x){
	x.style.background='#ffffff8c';
}

/*==========jquery start========*/

$(document).ready(function(){
	
	/*==========menubar active start========*/
	$('#main-nav').on('click', 'li', function(){
		$('#main-nav li.active').removeClass('active');
		$(this).addClass('active');
	});
	
	/*==========menubar start========*/
	$('#mobile-icon').click(function(){
		$('#main-nav ul').slideToggle(1000);
	});
	$(window).resize(function(){
		if($(window).width() >576){
			$('#main-nav ul').show();
		}else{
			$('#main-nav ul').hide();
		}
	});
	
	/*==========upper button scroll start========*/
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x > 1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
	$('html').animate({scrollTop: 0},2000);
	});	
});