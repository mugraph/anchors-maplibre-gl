import { PropType } from 'vue';
import { VideoSource } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    urls: PropType<string[]>;
    coordinates: PropType<number[][]>;
}, {
    source: import("vue").Ref<VideoSource | null | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    urls: PropType<string[]>;
    coordinates: PropType<number[][]>;
}>>, {}>;
export default _default;
