type Shape = {
    kind: "Circle" | "Rectangle" | "Triangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles and triangles
    base?: number; // Only for triangles
};


let Circle: Shape = {
    kind: "Circle",
    radius: 5
};

let Rectangle: Shape = {
    kind: "Rectangle",
    width: 10,
    height: 20
};

let Triangle: Shape = {
    kind: "Triangle",
    base: 10,
    height: 15
};

console.log(Circle);
console.log(Rectangle);
console.log(Triangle);
