


window.addEventListener('load', function () {
	var inp1 = document.getElementById("myNumID");
	inp1.addEventListener("input", function() {
    document.getElementById("myNameID").disabled = this.value != "";
	});
});
