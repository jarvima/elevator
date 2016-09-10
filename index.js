var ElevatorController = require('./elevator-controller.js');

var controller = new ElevatorController();
controller.setFloorCount(10);
controller.setElevatorCount(4);

controller.start();