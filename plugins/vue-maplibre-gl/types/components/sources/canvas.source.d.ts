import { PropType } from 'vue';
import { CanvasSource } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    coordinates: PropType<number[][]>;
    animate: PropType<boolean>;
    canvas: PropType<string | HTMLCanvasElement>;
}, {
    source: import("vue").Ref<CanvasSource | null | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    coordinates: PropType<number[][]>;
    animate: PropType<boolean>;
    canvas: PropType<string | HTMLCanvasElement>;
}>>, {}>;
export default _default;
