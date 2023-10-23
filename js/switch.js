/*語言切換選單*/
$('.switch-list').hide()
$('.language-pack').click(function (e) {
	e.stopPropagation();
	$('.switch-list').toggle(300, 'linear')
})
$("body").click(function () {
	$('.switch-list').hide()
})
$('.switch-list').click(function (e) {
	e.stopPropagation();
});
/*語言圖示hover變色*/
$('.language-pack').hover(function () {
	$('.switch-icon').attr("src", "images/language/icon_language_hover.svg");
},
	function () {
		$('.switch-icon').attr("src", "images/language/icon_language.svg");

	});

/*滑動至最上方*/
$('.top_btn').hide();
$(window).scroll(function () {
	var sh = $(window).scrollTop();
	if (sh > 150) {
		$('.top_btn').show(500, 'swing');
	} else {
		$('.top_btn').hide(500, 'swing');
	}
});

$('.top_btn').click(function () {
	$('html,body').animate({
		scrollTop: 0 //到最上面  
	}, 500);
	return false;
});
const scaleItem = document.querySelector('.bnTitle');
// const sun = document.querySelector(".connect-part");


anime({
	targets: scaleItem,
	opacity: [0, 1],
	// rotate: [-80, 0],
	scale: [0.8, 1],
	duration: 500,
	delay: 500,
	easing: 'cubicBezier(.5, .05, .1, .3)',
	// complete: function () {
	// 	animationDone = true;
	// 	sunEffect();
	// }
});

// -----------------------------------
