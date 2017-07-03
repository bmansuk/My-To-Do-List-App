
  //Initiate and declare the App using angular.module directive
   var app = angular.module("myToDoList", []); 
  
  //Create and register the controller with the App.
  //The controller communicates with the View through the data-ng-controller directive
  //The scope is the binding part between the HTML (view) and the JavaScript (controller). 
   app.controller("myCtrl", function($scope){

   //Set an empty array for our data
    var products = [ ];

  //Add the empty array to the scope as an initialized list 
   $scope.products = [ ];

    //add items to the shopping list with error validation to check for items already included in the list
    $scope.addItem = function (){
      if (!$scope.addMe) {return;}
      if ($scope.products.indexOf($scope.addMe) == -1){
          $scope.products.push($scope.addMe);
      } 
      else{
          alert ("The item is already included in the list. You don't need to add it again!");       
      }
    }

    //delete items we don't need from the shopping list
    $scope.removeItem = function (x){
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
    
  });
