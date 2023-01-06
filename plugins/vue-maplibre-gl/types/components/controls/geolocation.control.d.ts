import { PropType } from 'vue';
import { Position } from './shared';
import { FitBoundsOptions } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<Position>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    positionOptions: {
        type: PropType<PositionOptions>;
        default: PositionOptions;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: FitBoundsOptions;
    };
    trackUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
    showAccuracyCircle: {
        type: PropType<boolean>;
        default: boolean;
    };
    showUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<Position>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    positionOptions: {
        type: PropType<PositionOptions>;
        default: PositionOptions;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: FitBoundsOptions;
    };
    trackUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
    showAccuracyCircle: {
        type: PropType<boolean>;
        default: boolean;
    };
    showUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    fitBoundsOptions: FitBoundsOptions;
    position: Position;
    positionOptions: PositionOptions;
    trackUserLocation: boolean;
    showAccuracyCircle: boolean;
    showUserLocation: boolean;
}>;
export default _default;
