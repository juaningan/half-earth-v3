import React from 'react';
import { loadModules } from '@esri/react-arcgis';
import { layersConfig } from 'constants/mol-layers-configs';
import { createLayer } from 'utils/layer-manager-utils';

import Component from './biodiversity-layers-component';

const BiodiversityLayerContainer = props => {

  const flyToLayerExtent = bbox => {
    const { view } = props;
    loadModules(["esri/geometry/Extent"]).then(([Extent]) => {
      const [xmin, ymin, xmax, ymax] = bbox;
      const target = new Extent({
        xmin, xmax, ymin, ymax
      })
      view.goTo({target});
    })
  }

  const handleSimpleLayerToggle = layerName => {
    const { handleLayerToggle } = props;
    const layer = layersConfig.find(l => l.slug === layerName);
    handleLayerToggle(layer.slug);
  }

  const handleExclusiveLayerToggle = (layerToAdd, layerToRemove) => {
    const { map, exclusiveLayerToggle } = props;
    const addLayer = layersConfig.find(l => l.slug === layerToAdd);
    const removeLayer = layersConfig.find(l => l.slug === layerToRemove);
    const layerExists = map.layers.items.some(l => l.id === addLayer.slug);
    const removeSlug = removeLayer && removeLayer.slug;
    if (layerExists) {
      exclusiveLayerToggle(addLayer.slug, removeSlug);
      addLayer.bbox && flyToLayerExtent(addLayer.bbox);
    } else {
      createLayer(addLayer, map);
      exclusiveLayerToggle(addLayer.slug, removeSlug);
      addLayer.bbox && flyToLayerExtent(addLayer.bbox);
    }
  }
  return (
    <Component
      handleExclusiveLayerToggle={handleExclusiveLayerToggle}
      handleSimpleLayerToggle={handleSimpleLayerToggle}
      {...props}
    />
  ) 
}

export default BiodiversityLayerContainer;
