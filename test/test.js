"use strict";

function hello() {
    console.log("Hello world");
}

hello();

function hi() {
    console.log("Say hi");
}

hi();

const arr = [1, 4, 76, 32], 
      sorted = arr.sort(CompareNum);


function CompareNum(a, b) {
    return a-b;
}