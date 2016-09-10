(function() {
  function Elevator(id) {
    this.id = id;
    console.log('creating elevator:', this.id);
    
    this.currentFloor = 1;
    this.status = 'empty';
    
    this.setFloorCount = function(count) {
      this.floorCount = count;
    }
    
    // external request
    this.callRequest = function(floorNumber) {
      this.gotoFloor(floorNumber);
    }
    
    // internal request
    this.floorRequest = function(floorNumber) {
      this.status = 'occupied';
      this.gotoFloor(floorNumber);
    }
    
    this.gotoFloor = function(floorNumber) {
      if (floorNumber > this.floorCount) {
        // do nothing
        console.log('invalid floor request', floorNumber);
        return;
      }
      
      if (floorNumber < 1) {
        // do nothing
        console.log('invalid floor request', floorNumber);
        return;
      }
      
      if (floorNumber > this.currentFloor) {
        for (var j = this.currentFloor + 1; j <= floorNumber; j++) {
          console.log('Elevator ' + this.id + ' going to floor ' + j);
        }
      }
      else if (floorNumber < this.currentFloor) {
        for (var j = this.currentFloor - 1; j >= floorNumber; j--) {
          console.log('Elevator ' + this.id + ' going to floor ' + j);
        }
      }
      this.currentFloor = floorNumber;
      this.openDoors();
      this.status = 'empty';
    }
    
    this.openDoors = function() {
      console.log('Elevator ' + this.id + ' opening doors');
      this.closeDoors();
    }
    
    this.closeDoors = function() {
      console.log('Elevator ' + this.id + ' closing doors');
    }
  }

  module.exports = Elevator;
})();
