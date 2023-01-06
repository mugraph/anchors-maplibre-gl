import { PropType } from 'vue';
import { IControl, Map as MMap } from 'maplibre-gl';
import { Position } from './shared';
export declare class FrameRateControl implements IControl {
    private background;
    private barWidth;
    private color;
    private font;
    private graphHeight;
    private graphWidth;
    private graphTop;
    private graphRight;
    private width;
    private frames;
    private totalTime;
    private totalFrames;
    private time;
    private map?;
    private container?;
    private readOutput?;
    private canvas?;
    private eventHandlers;
    constructor(background?: string, barWidth?: number, color?: string, font?: string, graphHeight?: number, graphWidth?: number, graphTop?: number, graphRight?: number, width?: number);
    getDefaultPosition(): Position;
    onAdd(map: MMap): HTMLElement;
    onRemove(): void;
    onMoveStart(): void;
    onMoveEnd(): void;
    onRender(): void;
    getFPS(now: number): number;
    updateGraph(fpsNow: number): void;
}
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    background: {
        type: PropType<string>;
        default: string;
    };
    barWidth: {
        type: PropType<number>;
        default: number;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    font: {
        type: PropType<string>;
        default: string;
    };
    graphHeight: {
        type: PropType<number>;
        default: number;
    };
    graphWidth: {
        type: PropType<number>;
        default: number;
    };
    graphTop: {
        type: PropType<number>;
        default: number;
    };
    graphRight: {
        type: PropType<number>;
        default: number;
    };
    width: {
        type: PropType<number>;
        default: number;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<Position>;
        validator: (v: Position) => boolean;
    };
    background: {
        type: PropType<string>;
        default: string;
    };
    barWidth: {
        type: PropType<number>;
        default: number;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    font: {
        type: PropType<string>;
        default: string;
    };
    graphHeight: {
        type: PropType<number>;
        default: number;
    };
    graphWidth: {
        type: PropType<number>;
        default: number;
    };
    graphTop: {
        type: PropType<number>;
        default: number;
    };
    graphRight: {
        type: PropType<number>;
        default: number;
    };
    width: {
        type: PropType<number>;
        default: number;
    };
}>>, {
    width: number;
    background: string;
    barWidth: number;
    color: string;
    font: string;
    graphHeight: number;
    graphWidth: number;
    graphTop: number;
    graphRight: number;
}>;
export default _default;
