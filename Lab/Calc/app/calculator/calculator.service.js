angular.module('CalcApp').service('Calculator', function() {

    this.data = {
        is_outdoor: false,
        is_imperial: false,
        is_rental: false,
        slider_vertical: 6,
        slider_horizontal: 10,
        viewing_distance: 20,
        vertical_dimension: Number(2.32),
        horizontal_dimension: Number(3.86)
    };

    this._selectedModel = null; // Начальное состояние, модель не выбрана

    this.setModel = function(modelData) {
        this._selectedModel = angular.copy(modelData);
    }

    // Object.defineProperty(this, 'diagonal', {
    //     get: function() {
    //         return Math.sqrt((Math.pow((this.data.slider_horizontal * 0.387), 2)) + (Math.pow((this.data.slider_vertical * 0.387), 2)));
    //     }
    // })

    // Object.defineProperty(this, 'humanHeight', {
    //   get: function() {
    //     return (this.data.slider_vertical * 4) * 4.7;
    //   }
    // })

    this.calculate = function() {
    
        //
        //     console.log('current model is: ', this._selectedModel);
        //
        //     this.moduleSide = 0.387; // m
        //     this.moduleSquare = 0.15; // m*m
        //
        //     this.moduleAmt = this.data.slider_horizontal * this.data.slider_vertical;
        //
        //     // TODO Применить imperialFactorFt и imperialFactorLb к результатам
        //
        //     // Функция пересчета результата в империческую систему (футы)
        //     this.imperialFactorFt = function(resultFt) {
        //         if (Calculator.data.is_imperial === true) {
        //             return resultFt * 3.28084;
        //         }
        //     };
        //     // Функция пересчета результата в империческую систему ()
        //     this.imperialFactorLb = function(resultLb) {
        //         if (Calculator.data.is_imperial === true) {
        //             return resultLb * 2.2;
        //         }
        //     };
    }
});
