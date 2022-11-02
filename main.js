/** @format */
const indicator = document.querySelectorAll(".pagination li");

indicator.forEach(link => {
	link.addEventListener("click", () => {
		if ((link.contains = "active")) {
			link.classList.remove("active");
		} else {
			link.classList.add("active");
		}
		link.previousElementSibling.classList.remove("active");
	});
});
