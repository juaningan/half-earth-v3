import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'he-components';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import facebookIcon from 'icons/facebook.png';
import twitterIcon from 'icons/twitter.png';
import cx from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './share-modal-styles.module';

const LINK = 'link';
const EMBED = 'embed';

const ShareModal = ({ handleClose, isOpen, route, currentLocation, shareSocialMedia, view }) => {
  const [activeTab, setActiveTab] = useState(LINK);
  const setTab = () => {
    setActiveTab(activeTab === LINK ? EMBED : LINK);
  }
  
  // const currentLocation = `${APP_URL}${route}${window.location.search}`;
  const embed = `<iframe id="map-iframe" src="${currentLocation}" />`;

  const urlCopy = activeTab === LINK ? currentLocation : embed;

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} theme={styles}>
      <div className={styles.title}>Share this page</div>
      <div className={styles.tabs}>
        <div className={cx(styles.tab, {[styles.activeTab]: activeTab === LINK})} onClick={setTab}>
          {LINK}
        </div>
        <div className={cx(styles.tab, {[styles.activeTab]: activeTab === EMBED})} onClick={setTab}>
          {EMBED}
        </div>
      </div>
      <div className={styles.copyContainer}>
        <input type="text" value={urlCopy} readOnly className={styles.inputButton} />
        <CopyToClipboard text={urlCopy}>
          <Button theme={{ button: cx(styles.button, styles.copyButton) }}>
            copy
          </Button>
        </CopyToClipboard>
      </div>
      <div className={styles.coordinates}>
        <p>coordinates: [{view.camera.position.x.toFixed(3)}, {view.camera.position.y.toFixed(3)}, {view.camera.position.z.toFixed(3)}]</p>
        <p>orientation: [{view.camera.heading.toFixed(3)}, {view.camera.tilt.toFixed(3)}]</p>
      </div>
      <div className={styles.socialMediaContainer}>
        {shareSocialMedia.map(socialMedia => (
          <Button
            onClick={() => window.open(socialMedia.link)}
            theme={{
              button: cx(styles.iconBackground, {
                [styles.facebookIcon]: socialMedia.className === 'facebookIcon'
              })
            }}
            key={socialMedia.className}
          >
          <img src={socialMedia.className === 'facebookIcon' ? facebookIcon : twitterIcon} />
          </Button>
        ))}
      </div>
    </Modal>
  );
}

const ShareModalComponent = ({ theme, route, currentLocation, shareSocialMedia, view }) => {
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  const handleOpenShareModal = () => setShareModalOpen(true);
  const handleCloseShareModal = () => setShareModalOpen(false);

  return (
    <>
      <button
        className={cx(theme.shareButton)}
        onClick={handleOpenShareModal}
      >
        <ShareIcon />
      </button>
      {isShareModalOpen && <ShareModal 
        isOpen={isShareModalOpen}
        handleClose={handleCloseShareModal}
        route={route}
        currentLocation={currentLocation}
        shareSocialMedia={shareSocialMedia}
        view={view}
      />}
    </>
  );
}

ShareModalComponent.propTypes = {

};

ShareModalComponent.defaultProps = {
 
};

export default ShareModalComponent;
