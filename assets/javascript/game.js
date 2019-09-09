$(document).ready(function() {
    var maxGlobal = 120;
    var minGlobal = 19;
    var globalNumber = globalNumberFromRange(minGlobal, maxGlobal);
    function globalNumberFromRange(min,max) {
        return Math.floor(Math.random() * (max-min)+min);
    }
    $("#globalNumber").html(globalNumber);
    
})