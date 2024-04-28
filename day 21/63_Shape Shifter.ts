type Shape = {
    kind: "circle" | "rectangle" | "triangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles and triangles
    base?: number; // Only for triangles
};

let circle: Shape = {
    kind: "circle",
    radius: 5
};

let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

let triangle: Shape = {
    kind: "triangle",
    base: 10,
    height: 15
};

console.log(circle);
console.log(rectangle);
console.log(triangle);
