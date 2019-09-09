$(document).ready(function() {
    // global number
    var maxGlobal = 120;
    var minGlobal = 19;
    var globalNumber = globalNumberFromRange(minGlobal, maxGlobal);
    function globalNumberFromRange(min,max) {
        return Math.floor(Math.random() * (max-min)+min);
    }
    $("#globalNumber").html(globalNumber);
    // crystal numbers
    var crystalMax = 12;
    var crystalMin = 1;

    // red crystal
    var redCrystal = redCrystalFromRange(crystalMin, crystalMax);
    function redCrystalFromRange(min,max) {
        return Math.floor(Math.random() *(max-min)+min);
    }
    // blue crystal
    var blueCrystal = blueCrystalFromRange(crystalMin, crystalMax);
    function blueCrystalFromRange(min,max) {
        return Math.floor(Math.random() * (max-min)+min);
    }
    // yellow crystal
    var yellowCrystal = yellowCrystalFromRange(crystalMin, crystalMax);
    function yellowCrystalFromRange(min,max) {
        return Math.floor(Math.random() * (max-min)+min);
    }
    // green crystal
    var greenCrystal = greenCrystalFromRange(crystalMin, crystalMax);
    function greenCrystalFromRange(min,max) {
        return Math.floor(Math.random() * (max-min)+min);
    }

      console.log(redCrystal, blueCrystal, yellowCrystal, greenCrystal);

    // button clicks
    $("#redCrystal").click(function() {
        $("#totalScore").html(redCrystal);
    });
    $("#blueCrystal").click(function() {
        $("#totalScore").html(blueCrystal);
    });
    $("#yellowCrystal").click(function() {
        $("#totalScore").html(yellowCrystal);
    });
    $("#greenCrystal").click(function() {
        $("#totalScore").html(greenCrystal);
    });
    var totalScore = []
    });
    