/**
 * Created by Knaufux on 4/11/2016.
 */

/**
 * Created by Knarfux on 11/04/2016.
 */

function Chuck(_x){
    this.x = _x;
    this.displayX = function(){
        console.log(this.x);
    };
    this.sayToX = function(message){
        console.log(message + ', ' + x);
    };
}

describe('Get Names', function(){
    describe('New functions', function(){
        it('should return the list of functions', function(){
            var jesus = new Chuck('Albert');

            expect(getObjectMethods(jesus)[0]).toEqual('displayX');
        });

        it('should return the function argument', function(){
            var jesus = new Chuck('Albert');

            expect(getParamNames(jesus.sayToX)[0]).toEqual('message');
        });

        it('should return the right function argument from list of functions', function(){
            var jesus = new Chuck('Albert');

            expect(getParamNames(jesus[getObjectMethods(jesus)[1]])[0]).toEqual('message');
        });
    });
});