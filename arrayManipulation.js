"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  let myArray = new Array(n).fill(0);

  for (let a = 0; a < queries.length; a++) {
    myArray[queries[a][0] - 1] += queries[a][2];
    myArray[queries[a][1]] -= queries[a][2];
  }

  let prev = 0;
  let max = 0;
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] += prev;
    prev = myArray[i];
    if (myArray[i] > max) max = myArray[i];
  }
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);
  
  if (n < 3 || n > 10e7) throw new Error("my n is: " + n + ", but n constraints is 3 <= n <= 10^7");

  const m = parseInt(firstMultipleInput[1], 10);
  
  if (m < 1 || m > 2*10e5) throw new Error("my m is: " + m + ", but m constraints is 1 <= m <= 2*10^5");
  
  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const result = arrayManipulation(n, queries);

  ws.write(result + "\n");

  ws.end();
}
