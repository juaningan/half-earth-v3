import React from 'react';
import cx from 'classnames';

import GeoDescriptionWidget from './geo-description-widget';
import HumanPressureWidget from './human-pressure-widget';
import SpeciesWidget from './species-widget';
import ConservationEffortsWidget from './conservation-efforts-widget';
import MOLUploader from './mol-uploader';
import uiStyles from 'styles/ui.module';
import animationStyles from 'styles/common-animations.module.scss';
import styles from './landscape-sidebar-styles.module.scss';

const LandscapeSidebarComponent = ({ 
  map,
  view,
  isLandscapeMode,
  isFullscreenActive,
  activeLayers,
  rasters,
  setLayerVisibility,
  setRasters,
  handleGlobeUpdating,
  selectedSpecies,
  handleLayerToggle
}) => {

  const isLandscapeSidebarVisible = isLandscapeMode && !isFullscreenActive;

  return (
    <div className={cx(uiStyles.uiTopLeft, styles.sidebar, { [animationStyles.leftHidden]: !isLandscapeSidebarVisible })}>
      <div className={styles.wrapper}>
        <GeoDescriptionWidget view={view} />
        <HumanPressureWidget
          map={map}
          view={view}
          activeLayers={activeLayers}
          rasters={rasters}
          setLayerVisibility={setLayerVisibility}
          setRasters={setRasters}
          handleGlobeUpdating={handleGlobeUpdating}
        />
        <SpeciesWidget selectedSpecies={selectedSpecies}/>
        <ConservationEffortsWidget
          map={map}
          view={view}
          activeLayers={activeLayers}
          handleGlobeUpdating={handleGlobeUpdating}
          handleLayerToggle={handleLayerToggle}
        />
        <MOLUploader />
      </div>
    </div>
  )
}


export default LandscapeSidebarComponent;
