(function(angular) {

    angular.module('CalcApp').directive('controls', function(Calculator, appConfig, $rootScope) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parameters',
            templateUrl: appConfig.basePath + '/app/calculator/controls/controls.template.html',
            controller: function() {
                this.sliderOptions = {
                    horizontal: {
                        value: 6,
                        options: {
                            floor: 1,
                            ceil: 60,
                            showSelectionBar: true,
                            translate: function(value) {
                                return 'Tiles horizontal: ' + value;
                            },
                            onEnd: function() {
                                Calculator.data.slider_horizontal = arguments[1];
                                $rootScope.$broadcast('slider:move');
                            }
                        }
                    },
                    vertical: {
                        value: 10,
                        options: {
                            floor: 1,
                            ceil: 60,
                            showSelectionBar: true,
                            translate: function(value) {
                                return 'Tiles vertical: ' + value;
                            },
                            onEnd: function() {
                                Calculator.data.slider_vertical = arguments[1];
                                $rootScope.$broadcast('slider:move');
                            }
                        }
                    },
                    distance: {
                        value: 20,
                        options: {
                            floor: 1,
                            ceil: 100,
                            showSelectionBar: true,
                            translate: function(value) {
                                return 'Viewing distance: ' + value;
                            },
                            onEnd: function() {
                                Calculator.data.viewing_distance = arguments[1]
                            }
                        }
                    }
                };

            },
            link: function($scope, el, attrs, vm) {
                var checkForm = function() {
                    return vm.form_of_stuff.$pristine;
                }
                $scope.$watch(checkForm, function(isPristine) {

                    if (!isPristine) {
                        // Calculator.calculate();
                        vm.form_of_stuff.$setPristine();
                    }
                });
            },
        }

    });

}(window.angular))
