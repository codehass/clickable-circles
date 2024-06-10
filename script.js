const colors = ["red", "green", "black", "blue", "gray", "brown"];

const shapes = document.querySelectorAll(".shape");

shapes.forEach((shape) => {
	shape.addEventListener("click", () => {
		const colorIndex = Math.floor(Math.random() * colors.length);
		shape.style.background = colors[colorIndex];
	});
});
