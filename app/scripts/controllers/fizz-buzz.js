'use strict';

/**
 * @ngdoc function
 * @name fizzBuzzApp.controller:FizzBuzzCtrl
 * @description
 * # FizzBuzzCtrl
 * Controller of the fizzBuzzApp
 */
angular.module('fizzBuzzApp')
  .controller('FizzBuzzCtrl', [ 'fizzBuzzService', function (fizzBuzzService) {
    var that = this;
    that.count = 10;
    that.getFizzBuzz = function () {
      return fizzBuzzService.getFizzBuzz(that.count);
    };
  }]);
