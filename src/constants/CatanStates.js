import * as THREE from "three"

export const CAMERA_STATES = {
    NORMAL: 'NORMAL',
    FRONT: 'FRONT',
    MOVED_FRONT: 'MOVED_FRONT',
    MOVED: 'MOVED',
};

export const calculateCatanSizes = (isSmall, isMobile, isTablet, isUltraWide) => {
    return {
        mapScale:               isSmall ? 0.80                    : isMobile ? 0.80                     : isUltraWide ? 1.1 : 1.1,
        mapPos:                 [0.0, 0, 0.0],
        mapRot:                 [0, -0.97, 0.0],
        frontCameraPos:         [0, 19, 0],
        frontCameraRot:         [-Math.PI/2, 0, 0.6],
        movedCameraPos:         [5, 12, 16],
        movedCameraRot:         [-Math.PI/2, 0, 0.6],
        movedFrontCameraPos:    [0, 21, 0],
        movedFrontCameraRot:    [-Math.PI/2, 0, 0.6],
        cameraTarget:           [-0.31, -0.9, -0.45]
    };
};

export const calculateCatanCameraPositions = (stateState, isSmall, isMobile, isTablet, isUltraWide) => {
    const sizes = calculateCatanSizes(isSmall, isMobile, isTablet, isUltraWide)
    return {
        pos: stateState == CAMERA_STATES.FRONT ? sizes.frontCameraPos
            : stateState == CAMERA_STATES.MOVED_FRONT ? sizes.movedFrontCameraPos
            : stateState == CAMERA_STATES.MOVED ? sizes.movedCameraPos
            : [7, 12, 12]
    };
};

export const TRADE_PORTS_MODELS = [
    {id: 1, pos: [5.321, -0.273, 3.026],    rot: [0, 1.048, 0],               tex: 'wheat_port'},
    {id: 2, pos: [0.024, -0.273, 6.116],    rot: [0, 0.003, 0],               tex: 'normal_port'},
    {id: 3, pos: [-5.307, -0.273, 3.07],    rot: [0, -1.042, 0],              tex: 'sheep_port'},
    {id: 4, pos: [-5.324, -0.273, -3.071],  rot: [Math.PI, -1.052, Math.PI],  tex: 'wood_port'},
    {id: 5, pos: [5.292, -0.273, -3.111],   rot: [-Math.PI, 1.046, -Math.PI], tex: 'rock_port'},
    {id: 6, pos: [-0.017, -0.273, -6.167],  rot: [Math.PI, -0.004, Math.PI],  tex: 'clay_port'}
]

export const toVeryLightColor = (color) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, 0.4)`;
};

export const parseResources = (rawResources) => {
  try {
    return JSON.parse(rawResources);
  } catch (error) {
    console.error("Failed to parse player resources:", error);
    return [];
  }
};

export const HEXAGON_TEXTURES_MODELS = {
    1: 'wood_hex',
    2: 'sheep_hex',
    3: 'rock_hex',
    4: 'wheat_hex',
    5: 'clay_hex',
    6: 'dessert_hex',
}

export const HEXAGON_TEXTURES_GRAYSCALE_MODELS = {
    1: 'wood_hex_grayscale',
    2: 'sheep_hex_grayscale',
    3: 'rock_hex_grayscale',
    4: 'wheat_hex_grayscale',
    5: 'clay_hex_grayscale',
    6: 'dessert_hex',
}

export const PLAYER_COLORS = {
    red: "#BC0D16",
    orange: "#E75C2E",
    purple: "#AB0AEE",
    pink: "#EEA3E1",
    white: "#DCDCDC",
    blue: "#16D6EE",
    green: "#16BC28",
    black: "#30302F",
    yellow: "#DEE742"
}

export const PLAYER_COLOR_OPTIONS = Object.entries(PLAYER_COLORS).map(([name, color]) => ({
    name,
    color
}))

export const RESOURCE_ICONS = {
    1: '/assets/catan/resources/madera_icon.png',
    2: '/assets/catan/resources/oveja_icon.png',
    3: '/assets/catan/resources/piedra_icon.png',
    4: '/assets/catan/resources/trigo_icon.png',
    5: '/assets/catan/resources/arcilla_icon.png',
}

export const RESOURCE_CARDS = {
    1: '/assets/catan/cards/madera_card.png',
    2: '/assets/catan/cards/oveja_card.png',
    3: '/assets/catan/cards/piedra_card.png',
    4: '/assets/catan/cards/trigo_card.png',
    5: '/assets/catan/cards/arcilla_card.png',
}

export const RANDOM_CARDS = {
    1: '/assets/catan/cards/point_card.png',
    2: '/assets/catan/cards/knight_card.png',
    3: '/assets/catan/cards/monopoly_card.png',
    4: '/assets/catan/cards/path_card.png',
    5: '/assets/catan/cards/invention_card.png',
}

export const BUILD_COSTS = [
    {id: 1, name:"Carretera",   resources: [{id:5, qty:1}, {id:1, qty:1}]},
    {id: 2, name:"Poblado",     resources: [{id:5, qty:1}, {id:1, qty:1}, {id:2, qty:1}, {id:4, qty:1}]},
    {id: 3, name:"Ciudad",      resources: [{id:4, qty:2}, {id:3, qty:3}]},
    {id: 4, name:"Gamblear",    resources: [{id:2, qty:1}, {id:4, qty:1}, {id:3, qty:1}]}
]

export const DICE_FACES = [
  { normal: new THREE.Vector3(0, 1, 0), value: 1 },
  { normal: new THREE.Vector3(0, -1, 0), value: 6 },
  { normal: new THREE.Vector3(0, 0, 1), value: 2 },
  { normal: new THREE.Vector3(0, 0, -1), value: 4 },
  { normal: new THREE.Vector3(1, 0, 0), value: 3 },
  { normal: new THREE.Vector3(-1, 0, 0), value: 5 },
]
