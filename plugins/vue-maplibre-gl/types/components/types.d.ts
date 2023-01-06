import { InjectionKey, Ref } from 'vue';
import { Map, Style } from 'maplibre-gl';
import { MglMap } from './index';
import { Emitter } from 'mitt';
import { SourceLayerRegistry } from './sources/sourceLayer.registry';
export declare const mapSymbol: InjectionKey<Ref<Map>>, isLoadedSymbol: InjectionKey<Ref<boolean>>, componentIdSymbol: InjectionKey<number>, sourceIdSymbol: InjectionKey<string>, sourceLayerRegistry: InjectionKey<SourceLayerRegistry>, emitterSymbol: InjectionKey<Emitter<MglEvents>>;
export interface MglEvent<T = any> {
    type: string;
    component: InstanceType<typeof MglMap>;
    map: Map;
    event: T;
}
export declare type MglEvents = {
    styleSwitched: StyleSwitchItem;
};
export interface StyleSwitchItem {
    name: string;
    label: string;
    icon?: {
        path: string;
    };
    style: Style | string;
}
