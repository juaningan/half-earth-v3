import React from 'react';
import PropTypes from 'prop-types';
import Legend, {
  LegendItemToolbar,
  LegendItemButtonOpacity,
  LegendItemButtonInfo,
  LegendItemTypes,
  LegendListItem,
  LegendItemButtonRemove
} from 'vizzuality-components/dist/legend';
import LegendTitle from './legend-title';
import ReactTooltip from 'react-tooltip';

import styles from './legend-styles.module.scss';

const HELegend = ({ datasets, handlers, isFullscreenActive, handleInfoClick, handleRemoveLayer, handleChangeOpacity, handleChangeOrder }) => {
  const { 
    handleLayerChange,
    handleChangeVisibility
  } = handlers;

  const handleStyle = {
    border: '1px solid #0E2B3B',
    backgroundColor: '#FFFFFF',
    height: '10px',
    width: '10px',
    boxShadow: '0 2px 4px 0 #0E2B3B',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(-5px,-10px)',
    cursor: 'pointer',
    outline: 'none'
  };

  const trackStyle = { 
    backgroundColor: '#1bcec7',
    height: '4px',
    borderRadius: '4px',
    transform: 'translate(0, -3px)'
  };

  const railStyle = {
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: '2px',
    borderRadius: '2px'
  };

  const marks = { 
    100: { style: { marginLeft: '0px', width: 'auto' }, label: '100%'}
  };

  const enabledStyle = {
    display: 'block',
    backgroundPosition: 'right'
  };
  
  const toolbar = (
    <LegendItemToolbar
      onChangeInfo={handleInfoClick}
      onChangeLayer={handleLayerChange}
      onRemoveLayer={handleRemoveLayer}
      onChangeVisibility={handleChangeVisibility}
      onChangeOpacity={handleChangeOpacity}
      enabledStyle={enabledStyle}
    >
      <LegendItemButtonInfo
        tooltipText={<span className='tooltip-info-text'>Click to read the info of this layer</span>}
      />
      <LegendItemButtonOpacity
        className={styles.legendItemButtonOpacity}
        handleStyle={handleStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
        marks={marks}
        tooltipText={<span className='tooltip-opacity-text'>Change the opacity</span>}
      />
      <LegendItemButtonRemove 
        tooltipText={<span className='tooltip-remove-text'>Close this layer</span>}
      />
    </LegendItemToolbar>
  );


  return (
    <div className={styles.legend}>
      {!isFullscreenActive && <Legend sortable={datasets && datasets.length > 1} onChangeOrder={handleChangeOrder}>
        {datasets && datasets.map((dataset, i) => (
          <LegendListItem index={i} key={dataset.name} layerGroup={dataset} toolbar={toolbar} title={<LegendTitle name={dataset.title} layer={dataset} />}>
            <LegendItemTypes />
          </LegendListItem>
        ))}
      </Legend>}
    </div>
  );
}

HELegend.propTypes = {
  datasets: PropTypes.array,
  handlers: PropTypes.shape({ 
    handleInfoClick: PropTypes.func.isRequired,
    handleRemoveLayer: PropTypes.func.isRequired,
    handleChangeOrder: PropTypes.func,
    handleLayerChange: PropTypes.func,
    handleChangeVisibility: PropTypes.func,
    handleChangeOpacity: PropTypes.func
  })
}

HELegend.defaultProps = {
  handlers: {
    handleInfoClick: PropTypes.func.isRequired,
    handleRemoveLayer: PropTypes.func.isRequired
  },
  datasets: []
};

export default HELegend;