// Day 3 -- Gear Ratios //
// Part 1 //
import { readFileSync } from 'fs';

const input: string = readFileSync('./day3/input.txt', 'utf8');
const lines: string[] = input.split('\n');

let totalSum1 = 0;
let currentNumber = 0;
let parts: Map<string, number[]> = new Map();

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    const cell = lines[i][j];
    const adjacentCoords: [number, number][] = [
      [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
      [i, j - 1], [i, j + 1],
      [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]
    ];

    if ('0' <= cell && cell <= '9') {
      currentNumber = currentNumber * 10 + parseInt(cell, 10);

      for (const [a, b] of adjacentCoords) {
        if (a >= 0 && a < lines.length && b >= 0 && b < lines[a].length && !'0123456789.'.includes(lines[a][b])) {
          parts.set(`${a}-${b}`, parts.get(`${a}-${b}`) || []);
        }
      }
    } else {
      totalSum1 += currentNumber * (parts.size > 0 ? 1 : 0);
      for (const [a, b] of parts.keys()) {
        (parts.get(`${a}-${b}`) ?? []).push(currentNumber);
      }
      currentNumber = 0;
      parts.clear();
    }
  }
}

console.log(`The sum of all part numbers in the engine schematic (Total1) is: ${totalSum1}`);

// Part 2 //
