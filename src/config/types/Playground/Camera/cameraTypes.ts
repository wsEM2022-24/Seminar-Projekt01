export enum CAMERA_ACTIONS {
    SET_CONTROLTYPE,
    SET_FOV,
}

export type Action = {
    type: CAMERA_ACTIONS;
    payload?: string | number | undefined;
};

export type CameraSettings = {
    controlType: string;
    fov: number;
};
