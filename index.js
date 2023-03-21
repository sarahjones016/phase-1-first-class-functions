function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction () {
    return namedFunction;
}

function namedFunction () {
    return "This function is named";
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("This is anonymous");
    }
}