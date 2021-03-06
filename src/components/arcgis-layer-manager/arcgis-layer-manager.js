import { useEffect } from 'react';
import { setLayerOrder, setOpacity } from 'utils/arcgis-layer-manager-utils';

const ArcgisLayerManager = ({ map, activeLayers, customFunctions }) => {
  // Map prop is inherited from Webscene component
  // reference: https://github.com/Esri/react-arcgis#advanced-usage
  
  const { layers } = map;
  const { items } = layers;
  
  useEffect(() => {
    setLayerOrder(activeLayers, map);
  }, [activeLayers])

  items.forEach(mapLayer => {
    const setActive = activeLayers && activeLayers.some(activeLayer => activeLayer.title === mapLayer.title);
    mapLayer.layers && mapLayer.layers.items && mapLayer.layers.items.forEach(layer => {
      const setActive = activeLayers && activeLayers.some(activeLayer => activeLayer.title === layer.title);
      setOpacity(layer, activeLayers);
      layer.visible = !!setActive;
      mapLayer.visible = !!setActive;
    })
    setOpacity(mapLayer, activeLayers);

    // Set group layers as visible to allow sublayers to be visible
    if (mapLayer.type === "group") {
      mapLayer.visible = true
    } else {
      mapLayer.visible = !!setActive;
    }

    customFunctions && customFunctions.forEach(fn => fn({ layer: mapLayer, setActive }))
  })
  return null
}

export default ArcgisLayerManager;