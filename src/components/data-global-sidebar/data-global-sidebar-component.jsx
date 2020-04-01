import React from 'react';
import loadable from '@loadable/component'

import { biodiversityCategories } from 'constants/mol-layers-configs';

import EntryBoxes from 'components/entry-boxes';
import Sidebar from 'components/sidebar';
const BiodiversityLayers = loadable(() => import('components/biodiversity-layers'));
const HumanImpactLayers = loadable(() => import('components/human-impact-layers'));
const ProtectedAreasLayers = loadable(() => import('components/protected-areas-layers'));

const DataGlobeSidebarComponent = ({
  isSidebarOpen,
  isFullscreenActive,
  activeCategory,
  isLandscapeMode,
  activeLayers,
  map,
  view,
  handleGlobeUpdating,
  activeOption,
  isLandscapeSidebarCollapsed
}) => {
  const isBiodiversityActive = activeCategory === 'Biodiversity';
  const isHumanPressuresActive = activeCategory === 'Human pressures';
  const isProtectedAreasActive = activeCategory === 'Existing protection';
  return (
    <>
      <EntryBoxes isLandscapeSidebarCollapsed={isLandscapeSidebarCollapsed} activeOption={activeOption} isSidebarOpen={isSidebarOpen} isFullscreenActive={isFullscreenActive} activeCategory={activeCategory} isLandscapeMode={isLandscapeMode} activeLayers={activeLayers} />
      <Sidebar activeOption={activeOption} isLandscapeSidebarCollapsed={isLandscapeSidebarCollapsed} isSidebarOpen={isSidebarOpen} isFullscreenActive={isFullscreenActive} activeCategory={activeCategory} isLandscapeMode={isLandscapeMode} map={map} view={view}>
        {isBiodiversityActive && (
          biodiversityCategories.map(cat => (
            <BiodiversityLayers
              key={cat.name}
              isFullscreenActive={isFullscreenActive}
              title={cat.name}
              description={cat.description}
              subcategories={cat.subcategories}
              options={cat.taxa}
              activeLayers={activeLayers}
              map={map}
            />
          ))
        )}
        {isHumanPressuresActive && (
          <HumanImpactLayers
            activeLayers={activeLayers}
            handleGlobeUpdating={handleGlobeUpdating}
            map={map}
          />
        )}
        {isProtectedAreasActive && (
          <ProtectedAreasLayers
            handleGlobeUpdating={handleGlobeUpdating}
            activeLayers={activeLayers}
            activeCategory={activeCategory}
            map={map}
          />
        )}
      </Sidebar>
    </>
  )
}

export default DataGlobeSidebarComponent;