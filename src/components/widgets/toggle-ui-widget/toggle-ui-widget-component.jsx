
import React from 'react';
import { ReactComponent as HideUiIcon } from 'icons/hideUI.svg';
import { ReactComponent as ShowUiIcon } from 'icons/showUI.svg';
import ReactTooltip from 'react-tooltip';
import styles from './toggle-ui-widget.module.scss';

const ToggleUiWidgetComponent = ({ toggleFullscreen, isFullscreenActive }) => {
  return (
    <>
      <button
        data-tip='Full screen'
        data-for='infoTooltip'
        className={styles.toggleButton}
        onClick={toggleFullscreen}
        data-effect='solid'
        data-delay-show={0}
        onMouseOver={() => ReactTooltip.rebuild()}
      >
        {isFullscreenActive ? <ShowUiIcon /> : <HideUiIcon />}
      </button>
    </>
  );
}

export default ToggleUiWidgetComponent;
