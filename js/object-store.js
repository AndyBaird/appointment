app.ObjectStore = function () {
  this.all = {};
};

app.ObjectStore.prototype = {
  add: function (appointment) {
    this.all[appointment.title] = appointment;
  }
  // getById: function (id) {
  //   return this.all[id];
  // },

  // remove: function (id) {
  //   delete this.all[id];
  // },
};
app.appts = new app.ObjectStore();
