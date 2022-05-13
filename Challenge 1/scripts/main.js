
    // Arrays with data, that will be used to displayed to the html
    var parametersPercentage = ["10%","30%", "50%", "41%", "19%",  "29%",  "65%", "70%", "80%", "98%"];
    var enviroment =["80%", "60%", "50%", "90%", "At full Capacity", "0%" ];
    var metrics = ["7247445", "42069","69420", "1000", "600.000.000", "142015" ];
    var fuel = ["100% Fuel","70% Fuel","60% Fuel","40% Fuel!","20%! Fuel","10%! Fuel"];
    var throttle = ["40% Throttle","60% Throttle","80% Throttle","100% Throttle"];
    var kmph = ["4486 kmph","5210 kmph","5555 kmph","6001 kmph"];
    var outcome = ["Sucess!", "Chance to fail mission 70%", "Emergency stop", "Asteroid Incoming", "Death"];
    var temperatures = ["-270C","-350C","-180C","-220C","450C"];


    function paraFunction (){
    //making a function    

        var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
        //making a var that will randomly select an element from the first array 
        //using the Math.random to select an arbitrary number from 0-1 and then Math.floor to round the number, then multiple it by the lenth of the array
        document.getElementById("damage").innerHTML = parametersResult
        //chaning the html element with "parameters" id, to the variable 

        var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
        document.getElementById("oxygen-cap").innerHTML = parametersResult };
        //Throttle 

        var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
        document.getElementById("speed").innerHTML = parametersResult 
        //Speed

        var temperaturesView = temperatures[Math.floor(Math.random()*temperatures.length)];
        document.getElementById("temperature").innerHTML = temperaturesView
        //Acceleration

        var hudView = fuel[Math.floor(Math.random()*fuel.length)];
        document.getElementById("fuel").innerHTML = hudView
         // HUD array, circles for fuel

        var hudView = throttle[Math.floor(Math.random()*throttle.length)];
        document.getElementById("rpm").innerHTML = hudView
         // HUD array, circles for throttle

        var hudView = kmph[Math.floor(Math.random()*kmph.length)];
        document.getElementById("km/h").innerHTML = hudView
             // HUD array, circles for speed


        var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
        document.getElementById("power").innerHTML = parametersResult
        //power usage, 

        var enviromentResult = enviroment[Math.floor(Math.random()*enviroment.length)];
        //Making another variable for the next array
        document.getElementById("gravity").innerHTML = enviromentResult 
        //Gravity

        var enviromentResult = enviroment[Math.floor(Math.random()*enviroment.length)];
        document.getElementById("food").innerHTML = enviromentResult 
        //Food

        var enviromentResult = enviroment[Math.floor(Math.random()*enviroment.length)];
        document.getElementById("water").innerHTML = enviromentResult 
        //Water

        var metricsResult = metrics[Math.floor(Math.random()*metrics.length)];
        document.getElementById("mars").innerHTML = metricsResult 
        //Mars-Distance

        var outcomeView = outcome[Math.floor(Math.random()*outcome.length)];
        document.getElementById("outcome").innerHTML = outcomeView


    paraFunction();
    //calling the function








