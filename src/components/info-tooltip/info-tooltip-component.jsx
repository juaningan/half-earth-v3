import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

const InfoTooltipComponent = ({ activeLayers, rasters }) => {
  useEffect(() => {
    ReactTooltip.rebuild()
    console.log('INFO TOOLTIP: ReactTooltip.rebuild()')
  }, [activeLayers, rasters])
  return (
    <ReactTooltip
      id='infoTooltip'
      className='infoTooltipStyle'
    />
  )
}

export default InfoTooltipComponent;