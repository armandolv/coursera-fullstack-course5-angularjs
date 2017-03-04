(function () {
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.itemList = '';
    $scope.msg = '';
    $scope.msgType = '';

    $scope.checkItems = function () {
      var items = $scope.itemList.split(',');

      if ($scope.itemList.length == 0) {
        $scope.msg = 'Please enter data first';
        $scope.msgType = 'bad';
        $scope.border = 'bad-text';
      } else if (items.length <= 3) {
        $scope.msg = 'Enjoy!';
        $scope.msgType = 'good';
        $scope.border = 'good-text';
      } else {
        $scope.msg = 'Too much!';
        $scope.msgType = 'good';
        $scope.border = 'good-text';
      }
    }
  }

})();