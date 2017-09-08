'use strict';

/**
 * @ngdoc service
 * @name fizzBuzzApp.fizzBuzzService
 * @description
 * # fizzBuzzService
 * Service in the fizzBuzzApp.
 */
angular.module('fizzBuzzApp')
  .service('fizzBuzzService', function () {
    return {
      getFizzBuzz: function (count) {
        var output = '';
        for (var i = 1; i <= count; i++) {
          if (i % 3 && i % 5) {
            output += i + ' ';
          }
          if (i % 3 === 0) {
            output += 'Fizz ';
          }
          if (i % 5 === 0) {
            output += 'Buzz ';
          }
        }
        return output;
      }
    };
  });
