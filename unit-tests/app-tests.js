/**
 * Created by Knaufux on 4/11/2016.
 */

function Poulet(_x){
    this.x = _x;
    this.displayX = function(){
        return this.x;
    };
    this.sayToX = function(message){
        return (message + ' ' + this.x);
    };
}

var testObject;

describe('ControlsController', function(){


    beforeEach(angular.mock.module('myApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    var controller;

    beforeEach(function(){
        controller = $controller('ControlsController', {});
    });

    describe('Test object properties', function(){
        describe('Controller own properties initialization', function(){
            it('should have argList to empty object', function(){
                expect(controller.argList).toEqual({});
            });
            it('should have methods array empty', function(){
                expect(controller.methods).toEqual([]);
            });
        });

        describe('Controller own properties setup', function(){
            beforeAll(function(){
                testObject = new Poulet(2);
            });

            it('should have an array of methods', function(){
                expect(controller.methods).toEqual(['displayX', 'sayToX']);
            });

            it('should a non empty testObject', function(){
                expect(controller.argList).toEqual({
                    displayX: [],
                    sayToX: ['message']
                });
            });
        });

        describe('Controller object access with object properties name', function(){
            beforeAll(function(){
                testObject = new Poulet(2);
            });

            it('should call the right method', function(){
                expect(testObject[controller.methods[0]]()).toEqual(2);
            });
        });
    });

});