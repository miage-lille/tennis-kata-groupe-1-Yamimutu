import { Player } from './types/player';
import { PointsData, Score } from './types/score';
import { advantage, Point } from './types/point';
// import { none, Option, some, match as matchOpt } from 'fp-ts/Option';
// import { pipe } from 'fp-ts/lib/function';

// -------- Tooling functions --------- //

export const playerToString = (player: Player) => {
  switch (player) {
    case 'PLAYER_ONE':
      return 'Player 1';
    case 'PLAYER_TWO':
      return 'Player 2';
  }
};
export const otherPlayer = (player: Player) => {
  switch (player) {
    case 'PLAYER_ONE':
      return 'PLAYER_TWO';
    case 'PLAYER_TWO':
      return 'PLAYER_ONE';
  }
};

// Exercice 1 :
export const pointToString = (point: Point): string => {
  switch (point.kind) {
    case 'LOVE': return '0';
    case 'FIFTEEN': return '15';
    case 'THIRTY': return '30';
  }
};

export const scoreToString = (score: Score): string => {
  switch (score.kind) {
    case 'POINTS': return `Player One : ${pointToString(score.pointsData.PLAYER_ONE)} - Player Two : ${pointToString(score.pointsData.PLAYER_TWO)}`;
    case 'FORTY': return `${score.fortyData.player} : 40 - Other Player :  ${pointToString(score.fortyData.otherPoint)}`;
    case 'DEUCE': return `Deuce`;
    case 'ADVANTAGE': return `Advantage : ${score.player}`;
    case 'GAME': return `Game : ${score.player}`;
  }
}

export const scoreWhenDeuce = (winner: Player): Score => advantage(winner);

export const scoreWhenAdvantage = (
  advantagedPlayed: Player,
  winner: Player
): Score => {
  throw new Error('not implemented');
};

export const scoreWhenForty = (
  currentForty: unknown, // TO UPDATE WHEN WE KNOW HOW TO REPRESENT FORTY
  winner: Player
): Score => {
  throw new Error('not implemented');
};

export const scoreWhenGame = (winner: Player): Score => {
  throw new Error('not implemented');
};

// Exercice 2
// Tip: You can use pipe function from fp-ts to improve readability.
// See scoreWhenForty function above.
export const scoreWhenPoint = (current: PointsData, winner: Player): Score => {
  throw new Error('not implemented');
};

export const score = (currentScore: Score, winner: Player): Score => {
  throw new Error('not implemented');
};
