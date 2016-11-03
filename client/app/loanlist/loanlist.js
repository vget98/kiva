// Controller to handle search, filter data and allow client to use get request
angular.module('loanlist', [])
  // inject $scope and api to make get request
  .controller('loanlistController', ['$scope', 'api', function($scope, api) {
      // data binding varible to display data
      $scope.list;
      // Client function to call HTTP Request to Kiva API
      $scope.get = function() {
        api.getNewLoans()
          .then(function(response) {
            $scope.list = response.loans;
          })
          .catch(function(err) {
            console.log(err);
          });
    };
  }])
