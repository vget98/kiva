// Create factory to handle API requests to Kiva
angular.module('app.services', [])
  .factory('api', ['$http', function($http) {

    // Get request for data on newest loans
    var getNewLoans = function() {
      return $http({
        method: 'GET',
        url: 'https://api.kivaws.org/v1/loans/newest.json'
      })
      .then(function(response) {
        return response.data;
      })
    };

    return {
      getNewLoans: getNewLoans
    };
  }])
