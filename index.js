const celciusE1=document.getElementById("Celcius");
const farenheitE1=document.getElementById("Farenheit");
const kelvinE1=document.getElementById("Kelvin");

function computeTemp(){
    const currentValue=+event.target.value;

    switch(event.target.name){
        case "Celcius":
            kelvinE1.value=currentValue+273.15;
            farenheitE1.value=(currentValue*1.8)+32;
            break;
        case "Farenheit":
            celciusE1.value=(currentValue-32)*5/9;
            kelvinE1.value=(currentValue-32)*5/9+273.15;  
            break;
        case "Kelvin":
            celciusE1.value=currentValue-273.15;
            farenheitE1.value=(currentValue-273.15)*1.8+32; 
            break;
        default:
            break;

    }
}