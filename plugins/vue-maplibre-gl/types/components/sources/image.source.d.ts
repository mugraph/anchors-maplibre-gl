import { PropType } from 'vue';
import { ImageSource } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    coordinates: PropType<number[][]>;
}, {
    source: import("vue").Ref<ImageSource | null | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    coordinates: PropType<number[][]>;
}>>, {}>;
export default _default;
