var appt = app.appts.getById(id);

app.show('new-appointment', appt);

$('.appointment-form').on('submit', function (e){
e.preventDefault();

var addAppt = new app.Appt(
  $('input[name=title-input]').val(),
  $('input[name=date-input]').val(),
  $('input[name=time-input]').val(),
  $('input[name=address-input]').val()
);
});
