import { PropType } from 'vue';
import { Position } from './shared';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<Position>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    container: {
        type: PropType<HTMLElement>;
        default: null;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<Position>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    container: {
        type: PropType<HTMLElement>;
        default: null;
    };
}>>, {
    container: HTMLElement;
    position: Position;
}>;
export default _default;
