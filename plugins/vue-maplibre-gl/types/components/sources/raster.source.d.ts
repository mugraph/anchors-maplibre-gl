import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    tiles: PropType<string[]>;
    bounds: PropType<number[]>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    tileSize: PropType<number>;
    scheme: PropType<"xyz" | "tms">;
    attribution: PropType<string>;
}, {
    source: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    tiles: PropType<string[]>;
    bounds: PropType<number[]>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    tileSize: PropType<number>;
    scheme: PropType<"xyz" | "tms">;
    attribution: PropType<string>;
}>>, {}>;
export default _default;
