$(document).ready(function() {
	$('.footer_right-arrow').on('click', function() {
		$('body, html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
 
	$('.smart-nav').on('click', function(){
		$('.navigation').toggle();
		$(this).toggleClass('smart-nav-active');
	});

	$('.header-left_phone, .btn-header, .price-btn-active').on('click', function(){
		$('.popup-phone_header').text($(this).attr('data-title'));
		$('#status_form').val($(this).attr('data-title'));
		$('.popup-phone').animate({
			opacity: 1,
			top: "25%"
		}, 400);
		$('.popup-phone').show();
	});
	$('.popup-phone_close').on('click', function() {
		$('.popup-phone').hide();
		$('.popup-phone').animate({
			opacity: 0,
			top: "0"
		}, 250);
	});

	$('.reviews_wrap').owlCarousel({
		items: 1,
		dotsEach: 1
	});


	function createCookie(name, value, days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		}
		else var expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	function eraseCookie(name) {
		createCookie(name, "", -1);
	}

	$('div.tabs-ul').each(function (i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('.tabs-ul-item').removeClass('tabs-ul-active').eq(cookie).addClass('tabs-ul-active')
				.closest('div.tabs').find('div.tabs-content').removeClass('tabs-ul-active').eq(cookie).addClass('tabs-ul-active');
		}
	});

	$('div.tabs-ul').on('click', '.tabs-ul-item:not(.tabs-ul-active)', function () {
		$(this)
			.addClass('tabs-ul-active').siblings().removeClass('tabs-ul-active')
			.closest('div.tabs').find('div.tabs-content').removeClass('tabs-ul-active').eq($(this).index()).addClass('tabs-ul-active');
		var ulIndex = $('div.tabs-ul').index($(this).parents('div.tabs-ul'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
	});

})