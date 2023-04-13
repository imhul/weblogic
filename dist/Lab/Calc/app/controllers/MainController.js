(function(angular) {

    angular.module('CalcApp').controller('MainController', function($scope, $timeout, Displays, Calculator, $rootScope) {

        var vm = this;

        Displays.get().then(
            function(_data) {
                vm.displaysAll = angular.copy(_data.data);
                vm.displays = _data.data;
            }
        );

        vm.calc_data = Calculator.data;

        // vm.moduleSide = 0.387;
        // vm.moduleSquare = 0.15;
        // vm.humanHeight = Calculator.humanHeight;
        // vm.moduleAmt = vm.calc_data.slider_horizontal * vm.calc_data.slider_vertical;
        // vm.surface = vm.moduleAmt * vm.moduleSquare;

        // TODO Применить imperialFactorFt и imperialFactorLb к результатам

        // Функция пересчета результата в империческую систему (футы)
        vm.imperialFactorFt = function(resultFt) {
            if (vm.calc_data.is_imperial) {
                return resultFt * 3.28084;
            }
        };
        // Функция пересчета результата в империческую систему ()
        vm.imperialFactorLb = function(resultLb) {
            if (vm.calc_data.is_imperial) {
                return resultLb * 2.2;
            }
        };

        $rootScope.$on('slider:move', function() {
            vm.getDimensions();
        });

        vm.getDimensions = function() {
            vm.calc_data.vertical_dimension = (vm.calc_data.slider_vertical * 0.3864).toFixed(2);
            vm.calc_data.horizontal_dimension = (vm.calc_data.slider_horizontal * 0.3864).toFixed(2);
        }

        vm.getSliderSize = function() {
          // if(vm.calc_data.vertical_dimension > 23.18 || vm.calc_data.horizontal_dimension > 23.18) {
          //   return Materialize.toast('You enter a value greater than allowable!', 4000);
          // } 
          vm.calc_data.slider_vertical = Math.floor(vm.calc_data.vertical_dimension / 0.3864);
          vm.calc_data.slider_horizontal = Math.floor(vm.calc_data.horizontal_dimension / 0.3864);
        }

        // /^[0-9]+(\.[0-9]{1,2})?$/

        // vm.filterInput = function($event) {
        //     var k = $event.charCode || $event.keyCode;
        //     //console.log(k);
        //     if (k === 44) {
        //       $event.preventDefault();
        //       $event.stopPropagation();
        //       return;
        //     }
        //   }

        vm.getDiagonal = function() {
            return vm.diagonal = Math.sqrt(
                (Math.pow(
                    (vm.calc_data.slider_horizontal * 0.387), 2)) +
                (Math.pow(
                    (vm.calc_data.slider_vertical * 0.387), 2))
            );
        };

        // Aspect ratio filter

        function gcd(a, b) {
            if (b) {
                return gcd(b, a % b);
            } else {
                return Math.abs(a);
            }
        };

        vm.getRatio = function() {
            return vm.ratio =
                Math.round(vm.calc_data.slider_horizontal / gcd(vm.calc_data.slider_horizontal, vm.calc_data.slider_vertical)) +
                ":" +
                Math.round(vm.calc_data.slider_vertical / gcd(vm.calc_data.slider_horizontal, vm.calc_data.slider_vertical));
            // console.log('Recursive: ' + gcd_rec(59, 78));

            // function gcd(a, b) {
            //     if (a < 0) a = -a;
            //     if (b < 0) b = -b;
            //     if (b > a) {
            //         var temp = a;
            //         a = b;
            //         b = temp;
            //     }
            //     while (true) {
            //         if (b == 0) return a;
            //         a %= b;
            //         if (a == 0) return b;
            //         b %= a;
            //     }
            // }
            // console.log('Iterative: ' + gcd(19, 37));
        };

        // Функция, задающая количество строк и столбцов таблицы, беря значения слайдеров.
        vm.tableConstructor = function(amt) {
            return new Array(amt);
        }

        vm.refreshSlider = $timeout(function() {
            $scope.$broadcast('rzSliderForceRender')
        });

        // функция, передающая данные выделенной модели
        vm.byModel = function($index) {
            vm.selectedIndex = $index;
            Calculator.setModel(vm.displays[vm.selectedIndex]);
            // Calculator.calculate();
        }

        // функция сортировки по location
        vm.byLocation = function() {
            var val = vm.calc_data.is_outdoor ? 'outdoor' : 'indoor';
            vm.displays = vm.displaysAll.filter(function(item) {
                return item.location.toLowerCase() === val;
            });
        }

        // функция сортировки по applications
        vm.byApplication = function() {
            var val = vm.calc_data.is_rental ? 'rental' : 'fixed';
            vm.displays = vm.displaysAll.filter(function(item) {
                return item.applications.toLowerCase() === val;
            });
        }
    });
}(window.angular))
