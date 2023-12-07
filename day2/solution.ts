// Day 2 - Cube Conundrum //
// Part 1 //
import { readFileSync } from 'fs';

const input: string = readFileSync('./day2/input.txt', 'utf8');
const games: string[] = input.split('\n');

const targetCubes: { [key: string]: number } = {
  red: 12,
  green: 13,
  blue: 14,
};

let possibleGames: number[] = [];

for (let game of games) {
  const [gameIdStr, subsetsStr] = game.split(':');
  const gameId = parseInt(gameIdStr.replace('Game ', ''));
  const subsets = subsetsStr.split(';');

  let isValidGame = true;

  for (const subset of subsets) {
    const subsetParts = subset.trim().split(', ');
    
    for (const part of subsetParts) {
      const [countStr, color] = part.split(' ');
      const count = parseInt(countStr);

      const targetCount = targetCubes[color as keyof typeof targetCubes];

      console.log(`Game ${gameId}, Subset: ${part}, CubeCount: ${count}, TargetCount: ${targetCount}`);

      if (isNaN(count) || count > targetCount) {
        isValidGame = false;
        break;
      }
    }

    if (!isValidGame) {
      break;
    }
  }

  if (isValidGame) {
    possibleGames.push(gameId);
  }
}

const sumOfPossibleGames = possibleGames.reduce((sum, gameId) => sum + gameId, 0);
console.log(`The sum of the IDs of possible games is: ${sumOfPossibleGames}`);

// Part 2 //
let totalPower = 0;

for (let game of games) {
  const [gameIdStr, subsetsStr] = game.split(':');
  const subsets = subsetsStr.split(';');

  let maxCubes: { [key: string]: number } = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (const subset of subsets) {
    const subsetParts = subset.trim().split(', ');
    
    for (const part of subsetParts) {
      const [countStr, color] = part.split(' ');
      const count = parseInt(countStr);

      maxCubes[color as keyof typeof maxCubes] = Math.max(maxCubes[color as keyof typeof maxCubes], count);
    }
  }

  const power = maxCubes.red * maxCubes.green * maxCubes.blue;
  totalPower += power;
}

console.log(`The sum of the power of the minimum sets of cubes is: ${totalPower}`);