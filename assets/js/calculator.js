/* Performs BMI calculator functionality
   (C) Noah Owens 2022                  */

$(function () {
    $("#btnCalc").on("click", function () {
        var $h = $("#height");
        var $w = $("#weight");
        var $measurement = $("#measurement option:selected");
        var bmiText;

        if ((!Number($h.val())) || (!Number($w.val()))) {
            alert("Height and weight must be numbers. Do not specify units.");
        } else {
            if ($measurement.val() == "metric") {
                bmiText = calculateMetric($h.val(), $w.val());
            } else {
                bmiText = calculateImperial($h.val(), $w.val());
            }

            $("#bmi").text(" is " + bmiText.toFixed(2));
        }
    });
});

function calculateMetric (height, weight) {
    console.log("Height: " + height + " Weight: " + weight);
    
    let h = height / 100;
    console.log(h);
    let h2 = h**2;
    console.log(h2);
    let w = weight;
    console.log(w);

    let bmi = w/h2;
    console.log(bmi);

    return bmi;
}

function calculateImperial (height, weight) {
    let h = height*2.54;
    let w = weight*0.45359237;

    return calculateMetric(h, w);
}