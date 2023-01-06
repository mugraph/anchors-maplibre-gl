import { PropType } from 'vue';
import { GeoJSONSource, PromoteIdSpecification } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    data: PropType<string | import("geojson").Feature<import("geojson").Geometry, import("geojson").GeoJsonProperties> | import("geojson").FeatureCollection<import("geojson").Geometry, import("geojson").GeoJsonProperties>>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    buffer: PropType<number>;
    tolerance: PropType<number>;
    cluster: PropType<number | boolean>;
    clusterRadius: PropType<number>;
    clusterMaxZoom: PropType<number>;
    clusterMinPoints: PropType<number>;
    clusterProperties: PropType<object>;
    lineMetrics: PropType<boolean>;
    generateId: PropType<boolean>;
    promoteId: PropType<PromoteIdSpecification>;
    filter: PropType<any>;
}, {
    source: import("vue").Ref<GeoJSONSource | null | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    data: PropType<string | import("geojson").Feature<import("geojson").Geometry, import("geojson").GeoJsonProperties> | import("geojson").FeatureCollection<import("geojson").Geometry, import("geojson").GeoJsonProperties>>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    buffer: PropType<number>;
    tolerance: PropType<number>;
    cluster: PropType<number | boolean>;
    clusterRadius: PropType<number>;
    clusterMaxZoom: PropType<number>;
    clusterMinPoints: PropType<number>;
    clusterProperties: PropType<object>;
    lineMetrics: PropType<boolean>;
    generateId: PropType<boolean>;
    promoteId: PropType<PromoteIdSpecification>;
    filter: PropType<any>;
}>>, {}>;
export default _default;
