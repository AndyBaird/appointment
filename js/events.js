$('.btn-add-appointment').click(function(){
	$('.active-appointments').hide();
	$('.search-form').toggle();
	$('.btn-add-appointment').toggle();
	$('.btn-delete-appointment').toggle();
});

$('.main').click(function(){
	$('.menu').toggle();
});
