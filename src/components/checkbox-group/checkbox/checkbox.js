import React from 'react';
import { connect } from 'react-redux';
import Component from './checkbox-component';
import metadataActions from 'redux_modules/metadata';
import { openLayerInfoModalAnalyticsEvent } from 'actions/google-analytics-actions';

const actions = { ...metadataActions, openLayerInfoModalAnalyticsEvent };

const CheckboxContainer = props => {

  const handleInfoClick = (option, map) => {
    const { setModalMetadata, openLayerInfoModalAnalyticsEvent } = props;
    setModalMetadata({
      map,
      slug: `${option.slug}`,
      title: `${option.name} metadata`,
      isOpen: true
    });
    openLayerInfoModalAnalyticsEvent({ slug: `${option.slug}` });
  };
 return (
  <Component
    handleInfoClick={handleInfoClick}
    {...props}
  />
 )
}

export default connect(null, actions)(CheckboxContainer);