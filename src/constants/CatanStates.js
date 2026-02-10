export const CAMERA_STATES = {
    NORMAL: 'NORMAL',
    FRONT: 'FRONT',
    MOVED_FRONT: 'MOVED_FRONT',
    MOVED: 'MOVED',
};

export const calculateCatanSizes = (isSmall, isMobile, isTablet, isUltraWide) => {
    return {
        mapScale:               isSmall ? 0.80                    : isMobile ? 0.80                     : isUltraWide ? 1.4 : 1.1,
        mapPos:                 [0.0, 0, 0.0],
        mapRot:                 [0, -0.97, 0.0],
        frontCameraPos:         [0, 19, 0],
        frontCameraRot:         [-Math.PI/2, 0, 0.6],
        movedCameraPos:         [5, 12, 16],
        movedCameraRot:         [-Math.PI/2, 0, 0.6],
        movedFrontCameraPos:    [0, 21, 0],
        movedFrontCameraRot:    [-Math.PI/2, 0, 0.6],
        cameraTarget:           [-0.31, -0.8, -0.45]
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
    {id: 1, pos: [5.321, -0.273, 3.026],    rot: [0, 1.048, 0],               tex: 'Material.024'},
    {id: 2, pos: [0.024, -0.273, 6.116],    rot: [0, 0.003, 0],               tex: 'Material.028'},
    {id: 3, pos: [-5.307, -0.273, 3.07],    rot: [0, -1.042, 0],              tex: 'Material.032'},
    {id: 4, pos: [-5.324, -0.273, -3.071],  rot: [Math.PI, -1.052, Math.PI],  tex: 'Material.036'},
    {id: 5, pos: [5.292, -0.273, -3.111],   rot: [-Math.PI, 1.046, -Math.PI], tex: 'Material.040'},
    {id: 6, pos: [-0.017, -0.273, -6.167],  rot: [Math.PI, -0.004, Math.PI],  tex: 'Material.044'}
]

export const HEXAGON_TEXTURES_MODELS = {
    1: 'Terreno.001',
    2: 'Terreno.013',
    3: 'Terreno.001',
    4: 'Terreno.003',
    5: 'Terreno.002',
    6: 'Terreno',
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