import { PropType } from 'vue';
import { PromoteIdSpecification } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    tiles: PropType<string[]>;
    bounds: PropType<number[]>;
    scheme: PropType<"xyz" | "tms">;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    promoteId: PropType<PromoteIdSpecification>;
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
    scheme: PropType<"xyz" | "tms">;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    promoteId: PropType<PromoteIdSpecification>;
}>>, {}>;
export default _default;
