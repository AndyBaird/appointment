app.router.route('appt/edit', goEdit);
	function goEdit () {
	app.show('edit-appointment');
	};

//The BELOW router is redundant, already on new-controller
// app.router.route('home', goHome);
// 	function goHome () {
// 	app.show('home');
// 	};

	//$('.btn-save').click(function(){

				// 	var editAppt = new app.Appt(
				// 	  $('input[name=title-input]').val(),
				// 	  $('input[name=date-input]').val(),
				// 	  $('input[name=time-input]').val(),
				// 	  $('input[name=address-input]').val()
				// 	);
				// 	return addAppt;
				// 	app.appts.add(addAppt);
//	});