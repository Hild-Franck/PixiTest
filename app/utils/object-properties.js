/**
 * Created by Knarfux on 11/04/2016.
 */

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

function getObjectMethods(obj){
    var methods = Object.getOwnPropertyNames(obj).filter(function(property){
        return typeof obj[property] === 'function';
    });

    return methods;
}

function getParamNames(func){

    var fnStr = func.toString().replace(STRIP_COMMENTS, '');
    var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if(result === null)
        result = [];
    return result;
}