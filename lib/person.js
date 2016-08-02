'use strict';

const Person = function (h) {
  Object.keys(h).forEach(k => this[k] = h[k]);
};

Person.prototype.age = function () {
  var today = new Date();
  var dob = new Date(`${this.dob}T${today.toISOString().split('T')[1]}`);
  var thisYear = today.getFullYear();
  if (dob.getMonth() > today.getMonth() ||
      dob.getMonth() === today.getMonth() &&
      dob.getDate() >= today.getDate()) {
    thisYear -= 1;
  }

  return thisYear - dob.getFullYear();
};

module.exports = Person;
