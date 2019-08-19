export const setSelectedFeaturedPlace = (event, featuredPlacesLayer, view, changeUI) => {
  // set the attributes available on the layer
  featuredPlacesLayer.outFields = ['nam_slg'];
  view.hitTest(event).then(function(response) {
    const featuredPoint = response.results.filter((result) => result.graphic.layer === featuredPlacesLayer);
    const selectedFeaturedPlace = featuredPoint.length ? featuredPoint[0].graphic.attributes.nam_slg : null;
    if (selectedFeaturedPlace) changeUI({ selectedFeaturedPlace });
  });
}