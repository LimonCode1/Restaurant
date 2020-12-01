$(document).ready(() => {
	$(window).scroll(function () {
		var windowWidth = $(window).width();

		if (windowWidth > 800) {
			// el scroll top es para saber que distancia se ha movido el scroll de la pagina
			var scroll = $(window).scrollTop();

			$('header .container .texts').css({
				transform: 'translate(0px,' + scroll / 2 + '%)',
			});
			$('#about .container article').css({
				transform: 'translate(0px, -' + scroll / 4 + '%',
			});
		}
	});
	$(window).resize(() => {
		var windowWidth = $(window).width();
		if (windowWidth < 800) {
			$('.about').css({
				transform: 'translate(0px, 0px)',
			});
		}
	});
});
