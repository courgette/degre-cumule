angular.module('form', [])
  .controller('FormCtrl', ['$scope', function($scope){
    /* Pikaday => datepicker */
    new Pikaday({ field: document.getElementById('beginDate') });
    new Pikaday({ field: document.getElementById('endDate') });
    $scope.calculDegre = function(calcul) {
      
      if (calcul.$valid) {
        
        
      }
    };
  }]);