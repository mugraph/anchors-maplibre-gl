import { PropType } from 'vue';
import { Position } from './shared';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<Position>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    showCompass: {
        type: PropType<boolean>;
        default: boolean;
    };
    showZoom: {
        type: PropType<boolean>;
        default: boolean;
    };
    visualizePitch: PropType<boolean>;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<Position>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    showCompass: {
        type: PropType<boolean>;
        default: boolean;
    };
    showZoom: {
        type: PropType<boolean>;
        default: boolean;
    };
    visualizePitch: PropType<boolean>;
}>>, {
    position: Position;
    showCompass: boolean;
    showZoom: boolean;
}>;
export default _default;
