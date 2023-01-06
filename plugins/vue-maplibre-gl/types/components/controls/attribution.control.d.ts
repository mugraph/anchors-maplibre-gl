import { PropType } from 'vue';
import { Position } from './shared';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    compact: PropType<boolean>;
    customAttribution: PropType<string | string[]>;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    compact: PropType<boolean>;
    customAttribution: PropType<string | string[]>;
}>>, {}>;
export default _default;
