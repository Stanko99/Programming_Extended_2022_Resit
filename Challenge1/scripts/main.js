
    // Arrays with data, that will be used to displayed to the html
    var parametersPercentage = ["100%","70% ","60% ","40% ","20% ","10% "] // Array with random % for spaceholders
    var fuel = ["100% Fuel","70% Fuel","60% Fuel","40% Fuel!","20%! Fuel","10%! Fuel"];
    var throttle = ["40% Throttle","60% Throttle","80% Throttle","100% Throttle"];
    var kmph = ["4486 kmph","5210 kmph","5555 kmph","6001 kmph"];
    var outcome = ["Sucess!", "Chance to fail mission 70%", "Emergency stop", "Asteroid Incoming", "Death"];
    var temperatures = ["-270C","-350C","-180C","-220C","450C"];
    var damage =["15% Damaged","30% Damaged","60% Danger!","80%!! Danger","Evacuate!!!"]
    var gravity =["620.389 * sg2","648.670 * sg2", "(80% AA): 5.35%","SG -775.6821" ] 
    var distance =["232.96M","160.21M","60.12M","120.28M","90.52M","220.78M","50.11M"]


    function paraFunction (){
    //making a function    

        var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
        //making a var that will randomly select an element from the first array 
        //using the Math.random to select an arbitrary number from 0-1 and then Math.floor to round the number, then multiple it by the lenth of the array
        document.getElementById("").innerHTML = parametersResult }
        //chaning the html element with "parameters" id, to the variable
        //I am not using anywhere the above function 


        var hudView = fuel[Math.floor(Math.random()*fuel.length)];
        document.getElementById("fuel").innerHTML = hudView 
        // HUD array, circles for fuel

        var hudView = throttle[Math.floor(Math.random()*throttle.length)];
        document.getElementById("rpm").innerHTML = hudView
         // HUD array, circles for throttle

         var hudView = kmph[Math.floor(Math.random()*kmph.length)];
        document.getElementById("km/h").innerHTML = hudView
        // HUD array, circles for speed

        var damageView = damage[Math.floor(Math.random()*damage.length)];
        document.getElementById("taken-dmg").innerHTML = damageView
         // HUD array, circles for fuel

        var gravityView = gravity[Math.floor(Math.random()*gravity.length)];
        //Making another variable for the next array
        document.getElementById("gravity-cap").innerHTML = gravityView 

        var temperaturesView = temperatures[Math.floor(Math.random()*temperatures.length)];
        document.getElementById("temperature").innerHTML = temperaturesView
        //Gravity

        var enviromentResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
        document.getElementById("food").innerHTML = enviromentResult 
        //Food

        var enviromentResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
        document.getElementById("water").innerHTML = enviromentResult
        //Water

        var  viewDistance = distance[Math.floor(Math.random()*distance.length)];
        document.getElementById("distance-mars").innerHTML = viewDistance
        //Mars-Distance

        var outcomeView = outcome[Math.floor(Math.random()*outcome.length)];
        document.getElementById("outcome").innerHTML = outcomeView





        //Acceleration


    paraFunction();
    //calling the function








