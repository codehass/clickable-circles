const container = document.querySelector(".container");

const colors = ["red", "green", "black", "blue", "gray", "brown"];

const shapes = [
	{ class: "shape-1", id: "shape-1", color: "green", borderRadius: "50%" },
	{ class: "shape-2", id: "shape-2", color: "blue", borderRadius: "0" },
	{ class: "shape-3", id: "shape-3", color: "yellow", borderRadius: "0" },
	{ class: "shape-4", id: "shape-4", color: "orange", borderRadius: "50%" },
];

const shapesHTML = shapes
	.map((shape) => {
		return `
      <div class="shape ${shape.class}" id="${shape.id}" style="background-color: ${shape.color}; border-radius: ${shape.borderRadius};"></div>
    `;
	})
	.join("");

container.innerHTML = shapesHTML;

const shapesElements = document.querySelectorAll(".shape");

shapesElements.forEach((shape) => {
	shape.addEventListener("click", () => {
		const colorIndex = Math.floor(Math.random() * colors.length);
		shape.style.background = colors[colorIndex];
	});
});
