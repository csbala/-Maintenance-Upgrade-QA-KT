/// LINK: https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=false

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
/// LINK: https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=false
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  let differentCharsMissing = 0;
  let lower = password.match(/[a-z]/);
  let upper = password.match(/[A-Z]/);
  let digit = password.match(/[\d]/);
  let special = password.match(/[\W]/);

  if (lower == null) differentCharsMissing++;
  if (upper == null) differentCharsMissing++;
  if (digit == null) differentCharsMissing++;
  if (special == null) differentCharsMissing++;

  let sizeMissing = 6 - n;

  if (sizeMissing > differentCharsMissing) return sizeMissing;
  return differentCharsMissing;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const password = readLine();

  const answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
