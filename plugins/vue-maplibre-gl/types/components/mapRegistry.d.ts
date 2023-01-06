import { MglMap } from './index';
export interface MapInstance {
    component?: InstanceType<typeof MglMap>;
    map?: maplibregl.Map;
    isMounted: boolean;
    isLoaded: boolean;
}
export declare function useMap(key?: symbol | string): MapInstance;
export declare function registerMap(instance: InstanceType<typeof MglMap>, key?: symbol | string): MapInstance;
