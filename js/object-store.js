app.ObjectStore = function () {
  this.all = {};
};

app.ObjectStore.prototype = {
  add: function (appointment) {
    this.all[appointment.title] = appointment;
    this.save();
  },
  load: function () {
    this.all = JSON.parse(localStorage.getItem('ObjectStore')) || {};
  },
  save: function () {
    localStorage.setItem('ObjectStore', JSON.stringify(this.all));
  }

  // remove: function (id) {
  //   delete this.all[id];
  // },
};
app.appts = new app.ObjectStore();
