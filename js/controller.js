var puddingApp = angular.module('puddingApp',[]);

var inventory = [
  {
    'name': 'Strawberry',
    'price': 4.5,
    'quantity': 0,
  },
  {
    'name': 'Mint',
    'price': 3.5,
    'quantity': 0,
  },
  {
    'name': 'Hazelnut',
    'price': 4,
    'quantity': 0,
  },
  {
    'name': 'Orange',
    'price': 3.5,
    'quantity': 0,
  },
  {
    'name': 'Berry',
    'price': 3.5,
    'quantity': 0,
  },
  {
    'name': 'Banana',
    'price': 4,
    'quantity': 0,
  }
];

puddingApp.controller('FlavorCtrl', function($scope,$http) {
  $scope.cart = [];

  $scope.cart.addRemove = function(flavor) {
    for (var i = 0; i < $scope.cart.length; i++) {
      if($scope.cart[i].name == flavor) {
        $scope.cart[i].quantity = 0;
        $scope.cart.splice(i,1);
        return;
      }
    }
    for (var i = 0; i < inventory.length; i++) {
      if(inventory[i].name == flavor) {
        // console.log(inventory[i]);
        $scope.cart.push(inventory[i]);
        var cartIndex = $scope.cart.length - 1;
        $scope.cart[cartIndex].quantity = $scope.cart[cartIndex].quantity + 1;
        return;
      }
      // else {
      //   alert("There was an error.");
      // }
    }

  }

  // when user types in new quantity, update quantity in the cart for the flavor
  $scope.cart.updateQuantity = function(flavor) {
    for (var i = 0; i < $scope.cart.length; i++) {
      if($scope.cart[i].name == flavor) {
        $scope.cart[i]
      }
    }
  }
  // $scope.cart.remove = function(flavor) {
  //   for (var i = 0; i < $scope.cart.length; i++) {
  //     if($scope.cart[i].name == flavor) {
  //       $scope.cart.splice(i,1);
  //     }
  //   }
  // }


  $scope.total = function() {
    var total = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      var add = $scope.cart[i].price * $scope.cart[i].quantity;
      total = total + add;
    }
    return total;
  }

  // $scope.$watchCollection("cart", function() {
  //   $scope.total = total();
  // });

  $scope.checkout = function() {
    alert('Thanks for your pudding order. We love you.');
  }


});

puddingApp.controller('FormController', function($scope, $compile) {
  'use strict';
  $scope.data = { name: "", email: "", comment:""};
  

  $scope.reset = function() {
      $scope.data.name = "";
      $scope.data.email = "";
      $scope.data.comment = "";
      $scope.form.$setPristine();
  };

  $scope.send = function() {
    alert("We will get back to you shortly.")
  };

  // $scope.reset();
});


// puddingApp.controller('FormCtrl', function($scope, $http) {

//   var contantForm = {
//     name: "default",
//     email: "default",
//     comment: "default"
//   };

//   $scope.save = function() {
//     contactForm = $scope.form;
//   }

//   $scope.submitForm = function() {
    
//   }



// });