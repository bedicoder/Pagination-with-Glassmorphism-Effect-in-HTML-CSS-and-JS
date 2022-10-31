/** @format */

const pagination = document.querySelectorAll(".pagination li");

pagination.forEach(link => {
	link.addEventListener("click", () => {
		link.classList.add("active");
		link.previousElementSibling.classList.remove("active");
		link.nextElementSibling.classList.remove("active");
	});
});
