import {
  LABELS_LAYER_GROUP,
  PLEDGES_LAYER,
  SIGNED_PLEDGE_GRAPHIC_LAYER,
  BIODIVERSITY_FACETS_LAYER,
  FIREFLY_BASEMAP_LAYER,
  GRID_LAYER,
  VIBRANT_BASEMAP_LAYER,
  FEATURED_PLACES_LAYER,
  COMMUNITY_AREAS_VECTOR_TILE_LAYER,
  PROTECTED_AREAS_VECTOR_TILE_LAYER,
  LANDSCAPE_FEATURES_LABELS_LAYER,
  CITIES_LABELS_LAYER,
  PRIORITY_POLYGONS_GRAPHIC_LAYER,
  LAND_HUMAN_PRESSURES_IMAGE_LAYER,
  RAISIG_AREAS_VECTOR_TILE_LAYER
} from 'constants/layers-slugs';

export const LEGEND_FREE_LAYERS = [
  LABELS_LAYER_GROUP,
  BIODIVERSITY_FACETS_LAYER,
  FIREFLY_BASEMAP_LAYER,
  GRID_LAYER,
  LANDSCAPE_FEATURES_LABELS_LAYER,
  CITIES_LABELS_LAYER,
  VIBRANT_BASEMAP_LAYER,
  FEATURED_PLACES_LAYER,
  PRIORITY_POLYGONS_GRAPHIC_LAYER,
  RAISIG_AREAS_VECTOR_TILE_LAYER,
  PLEDGES_LAYER,
  SIGNED_PLEDGE_GRAPHIC_LAYER
];

export const PROTECTED_AREAS_LAYERS = [
  PROTECTED_AREAS_VECTOR_TILE_LAYER,
  COMMUNITY_AREAS_VECTOR_TILE_LAYER,
  RAISIG_AREAS_VECTOR_TILE_LAYER
]

export const COMMUNITY_PROTECTED_AREAS_LAYER_GROUP = [
  COMMUNITY_AREAS_VECTOR_TILE_LAYER,
  RAISIG_AREAS_VECTOR_TILE_LAYER
]

export const LABELS_LAYERS = [
  LANDSCAPE_FEATURES_LABELS_LAYER,
  CITIES_LABELS_LAYER
];

export const FEATURED_GLOBE_LANDSCAPE_ONLY_LAYERS = [
  LAND_HUMAN_PRESSURES_IMAGE_LAYER,
  COMMUNITY_AREAS_VECTOR_TILE_LAYER,
  PROTECTED_AREAS_VECTOR_TILE_LAYER,
  RAISIG_AREAS_VECTOR_TILE_LAYER
]
