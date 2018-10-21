(function() {

    angular.module('CalcApp').directive('smartFloat', function() {

        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$formatters.push(
                    function (modelValue) {
                        return parseFloat(modelValue, 2);
                    }
                );
            }
        }

    });

}());