app.show = function (templateId, appt) {
  var templateHtml = $('#' + templateId).html();
  var templateFn = _.template(templateHtml, {variable: 'm'});
  var result = templateFn(appt);

  $('.main-container').html(result);
};
