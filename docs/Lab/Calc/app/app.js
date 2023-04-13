(function(angular){

    angular
        .module('CalcApp', ['rzModule', 'AngularPrint'])
        .constant('appConfig', {
            'basePath': 'http://weblogic.com.ua/Lab/Calc'
        })
        .run(function($location) {
            console.log('location: ', $location);
            console.log('@ calculator is running!');
        });

}(window.angular))
