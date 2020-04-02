import { createAction, createThunkAction } from 'redux-tools';
import { findLayerInMap } from 'utils/layer-manager-utils';
import CONTENTFUL from 'services/contentful';

export const setModalMetadataParams = createAction('setModalMetadataParams');

// Requires payload params:
// slug: slug to fetch
export const setModalMetadata = createThunkAction('setModalMetadata', payload => (dispatch, state) => {
  console.log(payload)
  const { slug, map } = payload;
  const { metadata: { data }} = state();
  console.log(payload.slug, !data[payload.slug])
  dispatch(setModalMetadataParams(payload));
  if (payload.slug && !data[payload.slug]) {
    dispatch(fetchModalMetaData({slug, map}));
  }
});

export const fetchModalMetaDataFail = createAction('fetchModalMetaDataFail');
export const fetchModalMetaDataReady = createAction('fetchModalMetaDataReady');
export const fetchModalMetaData = createThunkAction('fetchModalMetaData', ({slug, map}) => async dispatch => {
  try {
    const layer = findLayerInMap(slug, map);
    console.log(layer.sourceJSON)
    console.log(layer.sourceJSON.description)
    console.log(layer.sourceJSON.documentInfo)
    const data = await CONTENTFUL.getMetadata(slug);
    dispatch(fetchModalMetaDataReady({ slug, data }));
  } catch (e) {
    console.warn(e);
    dispatch(fetchModalMetaDataFail(e));
  }
});
