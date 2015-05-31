app.ObjectStore = function () {
  this.all = {};
};

app.ObjectStore.prototype = {
  add: function (obj) {
    this.all[obj.id] = obj;
  },

  getById: function (id) {
    return this.all[id];
  },

  remove: function (id) {
    delete this.all[id];
  },

};
app.store = new app.ObjectStore();
