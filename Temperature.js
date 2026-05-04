
/* This code disables all other fields once the user starts typing*/

/* This line means that the page loads before the code runs */
window.addEventListener('load', function () {
	var inp1 = document.getElementById("kelvinID");
	inp1.addEventListener("input", function() {
    document.getElementById("celsiusID").disabled = this.value != "";
	document.getElementById("fahrenheitID").disabled = this.value != "";
	document.getElementById("newtonID").disabled = this.value != "";
	});
	
	var inp2 = document.getElementById("celsiusID");
	inp2.addEventListener("input", function() {
    document.getElementById("kelvinID").disabled = this.value != "";
	document.getElementById("fahrenheitID").disabled = this.value != "";
	document.getElementById("newtonID").disabled = this.value != "";
	});
	
	var inp3 = document.getElementById("fahrenheitID");
	inp3.addEventListener("input", function() {
    document.getElementById("kelvinID").disabled = this.value != "";
	document.getElementById("celsiusID").disabled = this.value != "";
	document.getElementById("newtonID").disabled = this.value != "";
	});
	
	var inp4 = document.getElementById("newtonID");
	inp4.addEventListener("input", function() {
    document.getElementById("kelvinID").disabled = this.value != "";
	document.getElementById("fahrenheitID").disabled = this.value != "";
	document.getElementById("celsiusID").disabled = this.value != "";
	});
	
});



/* This code calculates the temperatures */

function calculateTemp() {

	
	let kelvinInput = document.getElementById("kelvinID");
	let kelvin = kelvinInput.value;
	
	let celsiusInput = document.getElementById("celsiusID");
	let celsius = celsiusInput.value;
	
	let fahrenheitInput = document.getElementById("fahrenheitID");
	let fahrenheit = fahrenheitInput.value;
	
	let newtonInput = document.getElementById("newtonID");
	let newton = newtonInput.value;
	
	if (kelvin!="") {	
		
		let celsius = kelvin - 273;
		let fahrenheit = celsius*(9/5)+32;
		fahrenheit = Math.floor(fahrenheit);
		let newton = celsius * (33/100);
		newton = Math.floor(newton);

		let result = ("Kelvin: " + `${kelvin}` + "<br>" + "Celsius: " + `${celsius}` + "<br>" + "Fahrenheit: " + `${fahrenheit}` + "<br>" + "Newton: " + `${newton}`);
		
		document.getElementById("myOutput").innerHTML = "Your conversion is: " + "<br>" + result;
	}
	
	else if (celsius!="") {
		let kelvin = parseInt(celsius) + 273;
		let fahrenheit = celsius*(9/5)+32;
		fahrenheit = Math.floor(fahrenheit);
		let newton = celsius * (33/100);
		newton = Math.floor(newton);

		let result = ("Kelvin: " + `${kelvin}` + "<br>" + "Celsius: " + `${celsius}` + "<br>" + "Fahrenheit: " + `${fahrenheit}` + "<br>" + "Newton: " + `${newton}`);
		
		document.getElementById("myOutput").innerHTML = "Your conversion is: " + "<br>" + result;
	}
	
	else if (fahrenheit!="") {
		let celsius = (fahrenheit-32)*(5/9);
		celsius = Math.floor(celsius);
		let kelvin = parseInt(celsius) + 273;
		let newton = celsius * (33/100);
		newton = Math.floor(newton);
		
		let result = ("Kelvin: " + `${kelvin}` + "<br>" + "Celsius: " + `${celsius}` + "<br>" + "Fahrenheit: " + `${fahrenheit}` + "<br>" + "Newton: " + `${newton}`);
		
		document.getElementById("myOutput").innerHTML = "Your conversion is: " + "<br>" + result;
	}
	
	else if (newton!="") {
		let celsius = newton * (100/33);
		celsius = Math.floor(celsius);
		let kelvin = parseInt(celsius) + 273;
		let fahrenheit = celsius*(9/5)+32;
		fahrenheit = Math.floor(fahrenheit);
		
		let result = ("Kelvin: " + `${kelvin}` + "<br>" + "Celsius: " + `${celsius}` + "<br>" + "Fahrenheit: " + `${fahrenheit}` + "<br>" + "Newton: " + `${newton}`);
		
		document.getElementById("myOutput").innerHTML = "Your conversion is: " + "<br>" + result;
	}
	
	else {
		document.getElementById("myOutput").innerHTML = "Please enter a number to convert.";
	}
	
	temperatureForm.reset();
	document.getElementById("kelvinID").disabled = false;
	document.getElementById("celsiusID").disabled = false;
	document.getElementById("fahrenheitID").disabled = false;
	document.getElementById("newtonID").disabled = false;
	
}





