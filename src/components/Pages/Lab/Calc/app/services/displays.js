angular.module('CalcApp').service('Displays', ['$http', '$q', 'appConfig', function($http, $q, appConfig) {
    return {
        get: function () {

           return $http.get(appConfig.basePath + '/data/getModels.json')
                .then(function(data) {
                  return data;
                })
        }
    }
}]);
