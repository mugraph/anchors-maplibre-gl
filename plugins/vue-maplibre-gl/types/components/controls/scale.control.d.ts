import { PropType } from 'vue';
import { Position } from './shared';
export declare enum ScaleControlUnit {
    IMPERIAL = "imperial",
    METRIC = "metric",
    NAUTICAL = "nautical"
}
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    maxWidth: {
        type: PropType<number>;
        default: number;
    };
    unit: {
        type: PropType<ScaleControlUnit>;
        default: ScaleControlUnit;
        validator: (v: ScaleControlUnit) => boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    maxWidth: {
        type: PropType<number>;
        default: number;
    };
    unit: {
        type: PropType<ScaleControlUnit>;
        default: ScaleControlUnit;
        validator: (v: ScaleControlUnit) => boolean;
    };
}>>, {
    maxWidth: number;
    unit: ScaleControlUnit;
}>;
export default _default;
