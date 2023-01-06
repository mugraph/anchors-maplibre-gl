import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    layout: PropType<HeatmapLayout>;
    paint: PropType<HeatmapPaint>;
}, void, unknown, {}, {}, import("vue").DefineComponent<{
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
}>>, {}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    layout: PropType<HeatmapLayout>;
    paint: PropType<HeatmapPaint>;
}>>, {}>;
export default _default;
