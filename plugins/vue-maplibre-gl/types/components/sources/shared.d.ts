import { Ref } from 'vue';
import { AnySourceImpl, Map as GlMap } from 'maplibre-gl';
import { MglEvents } from '../types';
import { Emitter } from 'mitt';
import { SourceLayerRegistry } from './sourceLayer.registry';
export declare function genSourceOpts<T extends object, O extends object>(type: string, props: object, sourceOpts: Array<keyof O>): T;
export declare function getSourceRef<T = AnySourceImpl>(mcid: number, source: any): Ref<T | undefined | null>;
export declare function bindSource<T extends object, O extends object>(map: Ref<GlMap>, source: Ref<AnySourceImpl | undefined | null>, isLoaded: Ref<boolean>, emitter: Emitter<MglEvents>, props: any, type: string, sourceOpts: Array<keyof O>, registry: SourceLayerRegistry): false | Function | undefined;
