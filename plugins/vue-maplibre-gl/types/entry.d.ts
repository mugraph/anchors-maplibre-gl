import type { App } from 'vue';
export declare function install(app: App): void;
export * from './components/index';
export * from './components/types';
export { useMap } from './components/mapRegistry';
export { defaults as MglDefaults } from './components/defaults';
export { usePositionWatcher, Position } from './components/controls/shared';
export default install;
