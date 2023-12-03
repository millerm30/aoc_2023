// Day 1 - Trebuchet?! //
// Part 1 //

import { readFileSync } from 'fs';

const input: string = readFileSync('./day1/input.txt', 'utf8');
const lines: string[] = input.split('\n');

let total: number = 0;

for (const line of lines) {
  const digits: RegExpMatchArray | null = line.match(/\d+/g);
  if (digits) {
    const firstDigit: string = digits[0][0];
    console.log(`First Digit: ${firstDigit}`);
    const lastDigit: string = digits[digits.length - 1][digits[digits.length - 1].length - 1];
    console.log(`Last Digit: ${lastDigit}`);
    const combinedNumber: number = parseInt(firstDigit + lastDigit);
    console.log(`Combined Number: ${combinedNumber}`);
    total += combinedNumber;
  } else {
    console.log(`No digits found in line: ${line}`);
  
  }
}

console.log(`Calibration Value is ${total}`);

// Part 2 //
