var puddingApp = angular.module('puddingApp',[]);

var inventory = [
  {
    'name': 'Strawberry',
    'price': 5
  },
  {
    'name': 'Mint',
    'price': 3.5,
  },
  {
    'name': 'Hazelnut',
    'price': 5
  },
  {
    'name': 'Orange',
    'price': 5
  },
  {
    'name': 'Berry',
    'price': 5
  },
  {
    'name': 'Banana',
    'price': 5
  }
];

puddingApp.controller('FlavorCtrl', function($scope) {
  $scope.cart = [];
  $scope.cart.add = function(flavor) {
    alert(flavor);
    // console.log(inventory[0]);
    for (var i = 0; i < 2; i++) {
      if(inventory[i].name == flavor) {
        console.log(inventory[i]);
        $scope.cart.push(inventory[i]);
        return 0;
      }
      else {
        alert("There was an error.");
      }
    }

  }
});