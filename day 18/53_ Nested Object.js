"use strict";
let programmer = {
    name: "Hafsa",
    skills: {
        languages: ["JavaScript", "TypeScript", "Python"],
        tools: ["VS Code", "Git", "Vue"],
        frameworks: ["React", "Angular", "Django"]
    }
};
let { languages, tools, frameworks } = programmer.skills;
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
