import { Ref } from 'vue';
import { WatchSource } from '@vue/runtime-core';
import { IControl, Map } from 'maplibre-gl';
export declare enum Position {
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}
export declare type PositionValue = keyof Record<Position, any>;
export declare const PositionValues: Position[];
export declare function usePositionWatcher(source: WatchSource<Position | undefined>, map: Ref<Map>, control: IControl): void;
