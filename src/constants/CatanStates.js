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
