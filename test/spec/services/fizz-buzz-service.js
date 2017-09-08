'use strict';

describe('Service: fizzBuzzService', function () {

  // load the service's module
  beforeEach(module('fizzBuzzApp'));

  // instantiate service
  var fizzBuzzService;
  beforeEach(inject(function (_fizzBuzzService_) {
    fizzBuzzService = _fizzBuzzService_;
  }));

  it('should return \'1 2 Fizz \'.', function () {
    expect(fizzBuzzService.getFizzBuzz(3)).toEqual('1 2 Fizz ');
  });

});
