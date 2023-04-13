(function (angular) {

    angular.module('CalcApp').directive('result', function (Calculator, Displays, appConfig) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersResult',
            templateUrl: appConfig.basePath + '/app/calculator/result/result.template.html',
            controller: function() {
              // функция, передающая данные из json в result.template.html
              var vm = this;
              Displays.get().then(
                  function(_data) {
                      vm.displays = _data.data;
                      // console.log(vm.displays[0].horizontalResolution);
                  }
              );
            },
            link: function() {

            }
        }

    });

}(window.angular))
