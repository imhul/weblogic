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

    this.calculate = function() {
    
    }
});
