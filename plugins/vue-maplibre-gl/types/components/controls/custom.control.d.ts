import { PropType, Ref } from 'vue';
import { Position } from './shared';
import { IControl } from 'maplibre-gl';
export declare class CustomControl implements IControl {
    private isAdded;
    static readonly CONTROL_CLASS = "maplibregl-ctrl";
    static readonly CONTROL_GROUP_CLASS = "maplibregl-ctrl-group";
    readonly container: HTMLDivElement;
    constructor(isAdded: Ref<boolean>, noClasses: boolean);
    getDefaultPosition(): string;
    onAdd(): HTMLElement;
    onRemove(): void;
    setClasses(noClasses: boolean): void;
}
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    noClasses: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    isAdded: Ref<boolean>;
    container: HTMLDivElement;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    noClasses: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    noClasses: boolean;
}>;
export default _default;
