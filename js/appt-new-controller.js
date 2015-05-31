$(function () {
  'use strict';

	app.router.route('appt/new', function () {

		app.show('new-appointment');

		$('.btn-save-new').on('click', function () {

			  var title = $('input[name=title-input]').val();
				var date = $('input[name=date-input]').val();
				var time = $('input[name=time-input]').val();
				var address = $('input[name=address-input]').val();

			app.store.add(new app.Appointment(title, date, time, address));

			app.show(app.store.all);

			$('input').val('');
		});
	});

});
app.router.route('home', goHome);
	function goHome () {
		app.show('home');
	};
