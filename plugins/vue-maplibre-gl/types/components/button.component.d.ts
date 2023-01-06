import { PropType } from 'vue';
export declare enum ButtonType {
    DEFAULT = "default",
    TEXT = "text",
    MDI = "mdi",
    SIMPLE_ICON = "simple-icons"
}
export declare type ButtonTypeValue = keyof Record<ButtonType, any>;
export declare const ButtonTypeValues: ButtonType[];
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<ButtonType>;
        default: ButtonType;
        validator: (v: ButtonType) => boolean;
    };
    path: {
        type: PropType<string>;
    };
    size: PropType<number>;
    viewbox: PropType<string>;
}, {
    defaults: import("vue").Ref<{
        size: number;
        viewbox: string;
    } | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<ButtonType>;
        default: ButtonType;
        validator: (v: ButtonType) => boolean;
    };
    path: {
        type: PropType<string>;
    };
    size: PropType<number>;
    viewbox: PropType<string>;
}>>, {
    type: ButtonType;
}>;
export default _default;
