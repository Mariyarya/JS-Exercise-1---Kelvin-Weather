const kelvin = 293;//variable named kelvin and  it's equal to 293.

let celsius = kelvin - 273; //Temperature in Celsius (conversion from Kelvin) = 20 

//Temperature in Farenheit (convert from Celsius)
//used Math.floor() method to round number to whole number
let Fahrenheit = Math.floor(celsius * (9 / 5) + 32); // obtinem Fahrenheit 68



console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);