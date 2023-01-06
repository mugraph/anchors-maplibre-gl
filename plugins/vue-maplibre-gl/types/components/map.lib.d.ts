import { Map, MapboxOptions, MarkerOptions } from 'maplibre-gl';
import { MglMap } from './index';
export declare type MapEventHandler = (e: any) => void;
export declare class MapLib {
    static readonly MAP_OPTION_KEYS: Array<keyof MapboxOptions | 'mapStyle'>;
    static readonly MARKER_OPTION_KEYS: Array<keyof MarkerOptions>;
    static readonly MAP_EVENT_TYPES: string[];
    static createEventHandler(component: InstanceType<typeof MglMap>, map: Map, ctx: {
        emit: (t: string, payload: any) => void;
    }, eventName: string): MapEventHandler;
}
