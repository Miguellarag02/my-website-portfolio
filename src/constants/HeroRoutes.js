export const STATES = {
      HOME: 'HOME',
      WORK: 'WORK',
      ABOUT: 'ABOUT',
      PROJECTS: 'PROJECTS',
  };

export const hashToState = {
  "#home": STATES.HOME,
  "#work": STATES.WORK,
  "#about": STATES.ABOUT,
  "#projects": STATES.PROJECTS
};

export const stateToHash = {
  [STATES.HOME]: "#home",
  [STATES.WORK]: "#work",
  [STATES.ABOUT]: "#about",
  [STATES.PROJECTS]: "#projects"
};

export const DEFAULT_HASH = "#home";
