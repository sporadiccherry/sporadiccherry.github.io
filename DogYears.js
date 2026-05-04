
function calculateDogYears() {

	let myAgeInput = document.getElementById("myAge");
	let myAge = myAgeInput.value;
	
	let earlyYears = 2;
	earlyYears = earlyYears*10.5;
	// earlyYears = 21
	
	let laterYears = myAge-2;
	
	let dogYears = laterYears * 4;
	
	let myAgeInDogYears = earlyYears + laterYears;
	
	let myNameInput = document.getElementById("myName");
	let myName = myNameInput.value;
	
	document.getElementById("myOutput").innerHTML = myName + ", your age in dog years is: " + myAgeInDogYears;
	DogForm.reset();
}

