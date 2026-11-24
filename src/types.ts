export type Direction = 'up' | 'down' | 'left' | 'right';

export const TILE = { EMPTY: 0, BRICK: 1, STEEL: 2 } as const;
export type TileType = (typeof TILE)[keyof typeof TILE];

export interface GridPosition {
  col: number;
  row: number;
}

export interface Level {
  /** tiles[row][col] */
  tiles: TileType[][];
  playerSpawn: GridPosition;
}
