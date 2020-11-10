const selectElement = (s) => document.querySelector(s);

/* Open Menu */
selectElement(".open").addEventListener("click", function () {
	selectElement(".nav-list").classList.add("active");
});

selectElement(".close").addEventListener("click", function () {
	selectElement(".nav-list").classList.remove("active");
});
