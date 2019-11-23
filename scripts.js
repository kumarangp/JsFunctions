function plus(a,b) {
    return(a + b)
}

console.log(plus(5,6));



//Anonymous function
var subtract = function(a, b) {
    return console.log(a - b);
}(5,2);

//console.log(subtract(50, 8))