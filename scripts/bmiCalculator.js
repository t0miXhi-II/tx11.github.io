
document.addEventListener("DOMContentLoaded", function () {

    function setColor(element, newColor) {
        document.querySelector(element).style.color = newColor;
    }

    document.querySelector("#bmiButton").onclick = () => {

        let height_cm = document.querySelector("#bmiHeight").value;
        let height_m = height_cm / 100;
        let weight_kg = document.querySelector("#bmiWeight").value;

        if (document.querySelector("#bmiHeight").value.length === 0 || document.querySelector("#bmiWeight").value.length === 0) 
        {
            document.querySelector("#bmiResult").innerHTML = "Please fill out all fields";
            return;
        
        } else if (document.querySelector("#bmiHeight").value < 0 || document.querySelector("#bmiWeight").value < 0)  {
            document.querySelector("#bmiResult").innerHTML = "Please enter a valid number";
            document.querySelector("#resultDescription").innerHTML = "";

        } else { 
            let bmi_result = weight_kg / (height_m * height_m);
            
            if (isNaN(bmi_result)) {
                document.querySelector("#bmiResult").innerHTML = "Please enter a valid number";
                return;

            } else {
                document.querySelector("#bmiResult").innerHTML = `Your BMI is: ${bmi_result.toFixed(2)}`;
                   
                if (bmi_result < 18.5) {
                    setColor("#bmiResult", "red");
                    setColor("#resultDescription", "red");
                    document.querySelector("#resultDescription").innerHTML = "Your BMI falls within the Underweight range";
                } else if (bmi_result >= 18.5 && bmi_result < 25.0) {
                    setColor("#bmiResult", "green");
                    setColor("#resultDescription", "green");
                    document.querySelector("#resultDescription").innerHTML = "Your BMI falls within the Healthy Weight range";
                } else if (bmi_result >= 25.0 && bmi_result < 30.0) {
                    setColor("#bmiResult", "orange");
                    setColor("#resultDescription", "orange");
                    document.querySelector("#resultDescription").innerHTML = "Your BMI falls within the Overweight range";
                } else if (bmi_result >= 30) {
                    setColor("#bmiResult", "red");
                    setColor("#resultDescription", "red");
                    document.querySelector("#resultDescription").innerHTML = "Your BMI falls within the Obese range";
                }
            }
        }
    }

})
