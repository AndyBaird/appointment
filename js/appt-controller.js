(function () {
	app.router.route('appts', apptListController);

	app.router.route('', apptListController);

	function apptListController () {
		app.show('home', { appts: app.appts });
	}
});
