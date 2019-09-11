$(document).ready(function() {
    var wins = 0;
    var losses = 0;
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

      $("#totalScore").attr("data-sum", 0);
      

    // button clicks
    $("#redCrystal").click(function() {
        // $("#totalScore").html(redCrystal);

        var newSum = $("#totalScore").data("sum");
        newSum += redCrystal;
        $("#totalScore").data("sum", newSum);
        $("#totalScore").html(newSum);

        console.log("red crystal: ", redCrystal);
        console.log("total score: ", newSum);
    });
    $("#blueCrystal").click(function() {
        // $("#totalScore").html(blueCrystal);
        var newSum = $("#totalScore").data("sum");
        newSum += blueCrystal;
        $("#totalScore").data("sum", newSum);
        $("#totalScore").html(newSum);

        console.log("blue crystal: ", blueCrystal);
        console.log("total score: ", newSum);
    });
    $("#yellowCrystal").click(function() {
        // $("#totalScore").html(yellowCrystal);
        var newSum = $("#totalScore").data("sum");
        newSum += yellowCrystal;
        $("#totalScore").data("sum", newSum);
        $("#totalScore").html(newSum);

        console.log("yellow crystal: ", yellowCrystal);
        console.log("total score: ", newSum);
    });
    $("#greenCrystal").click(function() {
        // $("#totalScore").html(greenCrystal);
        var newSum = $("#totalScore").data("sum");
        newSum += greenCrystal;
        $("#totalScore").data("sum", newSum);
        $("#totalScore").html(newSum);

        console.log("greenCrystal: ", greenCrystal);
        console.log("total score: ", newSum);
    });
    
    if(newSum === globalNumber) {
        wins++
        console.log(wins)
    }

    });
    