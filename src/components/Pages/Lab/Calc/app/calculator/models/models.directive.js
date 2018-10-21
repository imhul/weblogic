(function(angular) {

    angular.module('CalcApp').directive('models', function(Calculator, Displays, appConfig) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersModels',
            templateUrl: appConfig.basePath + '/app/calculator/models/models.template.html',
            controller: function() {
                // vm.byModel = function(event) {
                //     var val = vm.displays.name;
                //     vm.displays = vm.displaysAll.filter(function(item) {
                //         return item.name.toLowerCase() === val;
                //     });
                //     var t = event.target || event.srcElement;
                // }
                // return vm.displays.name;
                }
                //,
                // link: function($scope, element, attrs) {
                //     $scope.$watch("toggle", function(value) {
                //         element.toggleClass('active', value)
                //     })
                //
                //     element.click(function() {
                //         $scope.$apply(function() {
                //             $scope.toggle = !$scope.toggle
                //         })
                //     })
                // }
                //
                // function SomeController($scope) {
                //     $scope.preferences = {
                //         showDetails: false
                //     }
                // }
        }
    });

}(window.angular))
