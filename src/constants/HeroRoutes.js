export const STATES = {
      IDLE: 'IDLE',
      LAPTOP: 'LAPTOP',
      MONITOR: 'MONITOR',
  };

export const hashToState = {
  "#idle": STATES.IDLE,
  "#laptop": STATES.LAPTOP,
  "#monitor": STATES.MONITOR,
};

export const stateToHash = {
  [STATES.IDLE]: "#idle",
  [STATES.LAPTOP]: "#laptop",
  [STATES.MONITOR]: "#monitor",
};

export const DEFAULT_HASH = "#idle";
