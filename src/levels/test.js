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

export const TILE = { EMPTY: 0, BRICK: 1, STEEL: 2 };

const TILE_CODES = { '.': TILE.EMPTY, '1': TILE.BRICK, '2': TILE.STEEL, 'P': TILE.EMPTY };

function parseTiles(layout) {
  return layout.map((row, y) => [...row].map((ch, x) => {
    if (!(ch in TILE_CODES)) {
      throw new Error(`Level: unknown tile '${ch}' at row ${y}, col ${x}`);
    }
    return TILE_CODES[ch];
  }));
}

function findSpawn(layout) {
  const spawns = layout.flatMap((row, y) => [...row].flatMap((ch, x) => (ch === 'P' ? [{ col: x, row: y }] : [])));
  if (spawns.length !== 1) {
    throw new Error(`Level: expected exactly one player spawn 'P', found ${spawns.length}`);
  }
  return spawns[0];
}

export const level = {
  tiles: parseTiles(rows),
  playerSpawn: findSpawn(rows),
};
