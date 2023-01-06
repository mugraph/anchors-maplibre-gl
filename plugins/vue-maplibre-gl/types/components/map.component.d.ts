import { PropType } from 'vue';
import { FitBoundsOptions, LngLatBoundsLike, LngLatLike, Map as MaplibreMap, Style } from 'maplibre-gl';
import { Position } from './controls/shared';
declare const _default: import("vue").DefineComponent<{
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    antialias: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    attributionControl: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    bearing: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    bearingSnap: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    bounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => MapboxOptions;
    };
    boxZoom: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    center: {
        type: PropType<LngLatLike>;
        default: () => MapboxOptions;
    };
    clickTolerance: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    collectResourceTiming: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    crossSourceCollisions: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    customAttribution: {
        type: PropType<string | string[]>;
        default: () => MapboxOptions;
    };
    dragPan: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    dragRotate: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    doubleClickZoom: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    hash: {
        type: PropType<string | boolean>;
        default: () => MapboxOptions;
    };
    fadeDuration: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    failIfMajorPerformanceCaveat: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: () => MapboxOptions;
    };
    interactive: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    keyboard: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    locale: {
        type: PropType<Record<string, string>>;
        default: () => MapboxOptions;
    };
    localIdeographFontFamily: {
        type: PropType<string>;
        default: () => MapboxOptions;
    };
    logoPosition: {
        type: PropType<Position>;
        validate: (val: any) => boolean;
        default: () => MapboxOptions;
    };
    maxBounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => MapboxOptions;
    };
    maxPitch: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    maxZoom: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    minPitch: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    minZoom: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    preserveDrawingBuffer: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    pitch: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    pitchWithRotate: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    refreshExpiredTiles: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    renderWorldCopies: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    scrollZoom: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    mapStyle: {
        type: PropType<string | Style>;
        default: () => MapboxOptions;
    };
    trackResize: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    transformRequest: {
        type: PropType<TransformRequestFunction>;
        default: MapboxOptions;
    };
    touchZoomRotate: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    touchPitch: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    zoom: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    maxTileCacheSize: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    accessToken: {
        type: PropType<string>;
        default: () => MapboxOptions;
    };
    mapKey: {
        type: PropType<string | symbol>;
    };
}, {
    map: import("vue").ShallowRef<MaplibreMap | null>;
    componentContainer: import("vue").ShallowRef<HTMLDivElement | null>;
    container: import("vue").ShallowRef<HTMLDivElement | null>;
    isLoaded: import("vue").Ref<boolean>;
    isInitialized: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("map:error" | "map:load" | "map:idle" | "map:remove" | "map:render" | "map:resize" | "map:webglcontextlost" | "map:webglcontextrestored" | "map:dataloading" | "map:data" | "map:tiledataloading" | "map:sourcedataloading" | "map:styledataloading" | "map:sourcedata" | "map:styledata" | "map:boxzoomcancel" | "map:boxzoomstart" | "map:boxzoomend" | "map:touchcancel" | "map:touchmove" | "map:touchend" | "map:touchstart" | "map:click" | "map:contextmenu" | "map:dblclick" | "map:mousemove" | "map:mouseup" | "map:mousedown" | "map:mouseout" | "map:mouseover" | "map:movestart" | "map:move" | "map:moveend" | "map:zoomstart" | "map:zoom" | "map:zoomend" | "map:rotatestart" | "map:rotate" | "map:rotateend" | "map:dragstart" | "map:drag" | "map:dragend" | "map:pitchstart" | "map:pitch" | "map:pitchend" | "map:wheel")[], "map:error" | "map:load" | "map:idle" | "map:remove" | "map:render" | "map:resize" | "map:webglcontextlost" | "map:webglcontextrestored" | "map:dataloading" | "map:data" | "map:tiledataloading" | "map:sourcedataloading" | "map:styledataloading" | "map:sourcedata" | "map:styledata" | "map:boxzoomcancel" | "map:boxzoomstart" | "map:boxzoomend" | "map:touchcancel" | "map:touchmove" | "map:touchend" | "map:touchstart" | "map:click" | "map:contextmenu" | "map:dblclick" | "map:mousemove" | "map:mouseup" | "map:mousedown" | "map:mouseout" | "map:mouseover" | "map:movestart" | "map:move" | "map:moveend" | "map:zoomstart" | "map:zoom" | "map:zoomend" | "map:rotatestart" | "map:rotate" | "map:rotateend" | "map:dragstart" | "map:drag" | "map:dragend" | "map:pitchstart" | "map:pitch" | "map:pitchend" | "map:wheel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    antialias: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    attributionControl: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    bearing: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    bearingSnap: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    bounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => MapboxOptions;
    };
    boxZoom: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    center: {
        type: PropType<LngLatLike>;
        default: () => MapboxOptions;
    };
    clickTolerance: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    collectResourceTiming: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    crossSourceCollisions: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    customAttribution: {
        type: PropType<string | string[]>;
        default: () => MapboxOptions;
    };
    dragPan: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    dragRotate: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    doubleClickZoom: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    hash: {
        type: PropType<string | boolean>;
        default: () => MapboxOptions;
    };
    fadeDuration: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    failIfMajorPerformanceCaveat: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: () => MapboxOptions;
    };
    interactive: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    keyboard: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    locale: {
        type: PropType<Record<string, string>>;
        default: () => MapboxOptions;
    };
    localIdeographFontFamily: {
        type: PropType<string>;
        default: () => MapboxOptions;
    };
    logoPosition: {
        type: PropType<Position>;
        validate: (val: any) => boolean;
        default: () => MapboxOptions;
    };
    maxBounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => MapboxOptions;
    };
    maxPitch: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    maxZoom: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    minPitch: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    minZoom: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    preserveDrawingBuffer: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    pitch: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    pitchWithRotate: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    refreshExpiredTiles: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    renderWorldCopies: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    scrollZoom: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    mapStyle: {
        type: PropType<string | Style>;
        default: () => MapboxOptions;
    };
    trackResize: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    transformRequest: {
        type: PropType<TransformRequestFunction>;
        default: MapboxOptions;
    };
    touchZoomRotate: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    touchPitch: {
        type: PropType<boolean>;
        default: () => MapboxOptions;
    };
    zoom: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    maxTileCacheSize: {
        type: PropType<number>;
        default: () => MapboxOptions;
    };
    accessToken: {
        type: PropType<string>;
        default: () => MapboxOptions;
    };
    mapKey: {
        type: PropType<string | symbol>;
    };
}>> & {
    "onMap:error"?: ((...args: any[]) => any) | undefined;
    "onMap:load"?: ((...args: any[]) => any) | undefined;
    "onMap:idle"?: ((...args: any[]) => any) | undefined;
    "onMap:remove"?: ((...args: any[]) => any) | undefined;
    "onMap:render"?: ((...args: any[]) => any) | undefined;
    "onMap:resize"?: ((...args: any[]) => any) | undefined;
    "onMap:webglcontextlost"?: ((...args: any[]) => any) | undefined;
    "onMap:webglcontextrestored"?: ((...args: any[]) => any) | undefined;
    "onMap:dataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:data"?: ((...args: any[]) => any) | undefined;
    "onMap:tiledataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:sourcedataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:styledataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:sourcedata"?: ((...args: any[]) => any) | undefined;
    "onMap:styledata"?: ((...args: any[]) => any) | undefined;
    "onMap:boxzoomcancel"?: ((...args: any[]) => any) | undefined;
    "onMap:boxzoomstart"?: ((...args: any[]) => any) | undefined;
    "onMap:boxzoomend"?: ((...args: any[]) => any) | undefined;
    "onMap:touchcancel"?: ((...args: any[]) => any) | undefined;
    "onMap:touchmove"?: ((...args: any[]) => any) | undefined;
    "onMap:touchend"?: ((...args: any[]) => any) | undefined;
    "onMap:touchstart"?: ((...args: any[]) => any) | undefined;
    "onMap:click"?: ((...args: any[]) => any) | undefined;
    "onMap:contextmenu"?: ((...args: any[]) => any) | undefined;
    "onMap:dblclick"?: ((...args: any[]) => any) | undefined;
    "onMap:mousemove"?: ((...args: any[]) => any) | undefined;
    "onMap:mouseup"?: ((...args: any[]) => any) | undefined;
    "onMap:mousedown"?: ((...args: any[]) => any) | undefined;
    "onMap:mouseout"?: ((...args: any[]) => any) | undefined;
    "onMap:mouseover"?: ((...args: any[]) => any) | undefined;
    "onMap:movestart"?: ((...args: any[]) => any) | undefined;
    "onMap:move"?: ((...args: any[]) => any) | undefined;
    "onMap:moveend"?: ((...args: any[]) => any) | undefined;
    "onMap:zoomstart"?: ((...args: any[]) => any) | undefined;
    "onMap:zoom"?: ((...args: any[]) => any) | undefined;
    "onMap:zoomend"?: ((...args: any[]) => any) | undefined;
    "onMap:rotatestart"?: ((...args: any[]) => any) | undefined;
    "onMap:rotate"?: ((...args: any[]) => any) | undefined;
    "onMap:rotateend"?: ((...args: any[]) => any) | undefined;
    "onMap:dragstart"?: ((...args: any[]) => any) | undefined;
    "onMap:drag"?: ((...args: any[]) => any) | undefined;
    "onMap:dragend"?: ((...args: any[]) => any) | undefined;
    "onMap:pitchstart"?: ((...args: any[]) => any) | undefined;
    "onMap:pitch"?: ((...args: any[]) => any) | undefined;
    "onMap:pitchend"?: ((...args: any[]) => any) | undefined;
    "onMap:wheel"?: ((...args: any[]) => any) | undefined;
}, {
    zoom: number;
    trackResize: boolean;
    center: LngLatLike;
    transformRequest: TransformRequestFunction;
    width: string | number;
    height: string | number;
    antialias: boolean;
    attributionControl: boolean;
    bearing: number;
    bearingSnap: number;
    bounds: LngLatBoundsLike;
    boxZoom: boolean;
    clickTolerance: number;
    collectResourceTiming: boolean;
    crossSourceCollisions: boolean;
    customAttribution: string | string[];
    dragPan: boolean;
    dragRotate: boolean;
    doubleClickZoom: boolean;
    hash: string | boolean;
    fadeDuration: number;
    failIfMajorPerformanceCaveat: boolean;
    fitBoundsOptions: FitBoundsOptions;
    interactive: boolean;
    keyboard: boolean;
    locale: Record<string, string>;
    localIdeographFontFamily: string;
    logoPosition: Position;
    maxBounds: LngLatBoundsLike;
    maxPitch: number;
    maxZoom: number;
    minPitch: number;
    minZoom: number;
    preserveDrawingBuffer: boolean;
    pitch: number;
    pitchWithRotate: boolean;
    refreshExpiredTiles: boolean;
    renderWorldCopies: boolean;
    scrollZoom: boolean;
    mapStyle: string | Style;
    touchZoomRotate: boolean;
    touchPitch: boolean;
    maxTileCacheSize: number;
    accessToken: string;
}>;
export default _default;
