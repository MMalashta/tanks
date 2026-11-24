import { TILE, type GridPosition, type Level, type TileType } from '../types';

// Temporary test layout (15x15 tiles of 32px). Replaced by real levels in a later step.
// . = empty, 1 = brick, 2 = steel, P = player spawn (exactly one)
const rows = [
  '...............',
  '.11..11...11.1.',
  '.11..11...11.1.',
  '.........2.....',
  '..222......111.',
  '...........111.',
  '.1...11111.....',
  '.1.....2.....2.',
  '.1...11111.....',
  '...........11..',
  '..111..2...11..',
  '..1...........1',
  '..1..11...11..1',
  '.....1.....1...',
  '.......P.......',
];

const TILE_CODES: Record<string, TileType> = {
  '.': TILE.EMPTY,
  '1': TILE.BRICK,
  '2': TILE.STEEL,
  'P': TILE.EMPTY,
};

function parseTiles(layout: string[]): TileType[][] {
  return layout.map((row, y) => [...row].map((ch, x) => {
    const tile = TILE_CODES[ch];
    if (tile === undefined) {
      throw new Error(`Level: unknown tile '${ch}' at row ${y}, col ${x}`);
    }
    return tile;
  }));
}

function findSpawn(layout: string[]): GridPosition {
  const spawns = layout.flatMap((row, y) => [...row].flatMap((ch, x) => (ch === 'P' ? [{ col: x, row: y }] : [])));
  const [spawn] = spawns;
  if (spawns.length !== 1 || !spawn) {
    throw new Error(`Level: expected exactly one player spawn 'P', found ${spawns.length}`);
  }
  return spawn;
}

export const level: Level = {
  tiles: parseTiles(rows),
  playerSpawn: findSpawn(rows),
};
