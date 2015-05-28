app.router.route('appt/new', function () {

	app.show('new-appointment');

	$('.appointment-form').on('submit', function (e) {
	e.preventDefault();

	var addAppt = new app.Appt(
	  $('input[name=title-input]').val(),
	  $('input[name=date-input]').val(),
	  $('input[name=time-input]').val(),
	  $('input[name=address-input]').val()
	);
//	return addAppt;
	app.appts.add(addAppt);

//	document.location = 'appt/new';

	});

});
