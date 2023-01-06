import { PropType, Ref, VNode } from 'vue';
import { Layer, Map } from 'maplibre-gl';
import { ComponentInternalInstance } from '@vue/runtime-core';
import { SourceLayerRegistry } from '../sources/sourceLayer.registry';
export declare const Shared: import("vue").DefineComponent<{
    layerId: {
        type: PropType<string>;
        required: true;
    };
    source: PropType<any>;
    metadata: PropType<any>;
    ref: PropType<string>;
    sourceLayer: PropType<string>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    interactive: PropType<boolean>;
    filter: PropType<any[]>;
    before: PropType<string>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    layerId: {
        type: PropType<string>;
        required: true;
    };
    source: PropType<any>;
    metadata: PropType<any>;
    ref: PropType<string>;
    sourceLayer: PropType<string>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    interactive: PropType<boolean>;
    filter: PropType<any[]>;
    before: PropType<string>;
}>>, {}>;
export declare function genLayerOpts<T extends Layer>(id: string, type: string, props: any, source: any): T;
export declare function registerLayerEvents(map: Map, layerId: string, vn: VNode): void;
export declare function unregisterLayerEvents(map: Map, layerId: string, vn: VNode): void;
export declare function handleDispose(isLoaded: Ref<boolean>, map: Ref<Map>, ci: ComponentInternalInstance, props: {
    layerId: string;
}, registry: SourceLayerRegistry): void;
