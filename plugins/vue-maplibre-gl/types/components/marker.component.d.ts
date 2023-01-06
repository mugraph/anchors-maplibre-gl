import { PropType } from 'vue';
import { Anchor, LngLatLike, Marker, PointLike } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    coordinates: {
        type: PropType<LngLatLike>;
        required: true;
    };
    offset: PropType<PointLike>;
    anchor: PropType<Anchor>;
    color: PropType<string>;
    clickTolerance: PropType<number>;
    rotation: PropType<number>;
    rotationAlignment: PropType<Alignment>;
    pitchAlignment: PropType<Alignment>;
    scale: PropType<number>;
}, {
    marker: Marker;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    coordinates: {
        type: PropType<LngLatLike>;
        required: true;
    };
    offset: PropType<PointLike>;
    anchor: PropType<Anchor>;
    color: PropType<string>;
    clickTolerance: PropType<number>;
    rotation: PropType<number>;
    rotationAlignment: PropType<Alignment>;
    pitchAlignment: PropType<Alignment>;
    scale: PropType<number>;
}>>, {}>;
export default _default;
