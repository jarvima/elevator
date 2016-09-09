(function() {
  function Elevator(id) {
    this.id = id;
    console.log('creating elevator:', this.id);
  }

  module.exports = Elevator;
})();
