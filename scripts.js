const selectElement = (s) => document.querySelector(s);

/* Open Menu */
selectElement(".open").addEventListener("click", () => {
	selectElement(".nav-list").classList.add("active");
});

selectElement(".close").addEventListener("click", () => {
	selectElement(".nav-list").classList.remove("active");
});
