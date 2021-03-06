import React, { useState } from 'react';
import { Modal } from 'he-components';
import styles from './user-data-modal-styles.module.scss';
import { ReactComponent as ScreenIcon } from 'icons/screen.svg';

import { PROFESSIONS, STEP_1 } from 'constants/user-modal-constants';

const RadioButton = ({ text, value, checked, name, onChange }) => {
  return (
    <div className={styles.radioButton}>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
        readOnly
      />
      <label htmlFor={value} className={styles.radioInput}>
        {text}
      </label>
    </div>
  )
}

const UserDataModalComponent = ({ isModalOpen, handleModalClose, storeFirstStepData, storeSecondStepData, requiredFieldsWarning }) => {

  const [activeStep, setActiveStep] = useState(STEP_1);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    job_role: '',
    job_role_other: '',
    email: '',
    map_usage: ''
  });
  
  const userDataUpdate = (key, value) => {
    setUserData({...userData, [key]:value})
  }

  const step1 = () => {
    return (
    <section className={styles.stepContainer}>
      <p className={styles.title}>WELCOME TO THE NEW HALF-EARTH MAP:</p>
      <p className={styles.bodyText}>We are trying to improve your experience on the map. Can you tell us a bit about yourself?</p>
      <p className={styles.question}>Which is your profession? *
      {!userData.job_role && requiredFieldsWarning && <span className={styles.requiredWarning}>Required fields are empty!</span>}
      </p>
      <div className={styles.radioGroupContainer}>
        {PROFESSIONS.map(profession => (
          <RadioButton
            name={'professions'}
            key={profession}
            id={profession}
            value={profession}
            text={profession}
            onChange={(e) => userDataUpdate('job_role', e.target.value)}
          />
        ))}
      </div>
      <input
        value={userData.job_role_other}
        type='text'
        className={styles.textInput}
        placeholder={'Write your profession here'}
        onChange={(event) => userDataUpdate('job_role_other', event.target.value)}
        disabled={userData.job_role !== 'Other' }
      />
      <p className={styles.question}>Please tell us what you use the map for:*
        {!userData.map_usage && requiredFieldsWarning && <span className={styles.requiredWarning}>Required fields are empty!</span>}
      </p>
      <input
        value={userData.map_usage}
        type='text'
        className={styles.textInput}
        placeholder={'What do you use the map for?'}
        onChange={(event) => userDataUpdate('map_usage', event.target.value)}
      />
      <button className={styles.button} onClick={() => storeFirstStepData(userData, setUserId, setActiveStep)}>SEND</button>
      </section>
    )
  }

  const step2 = () => {
    return (
      <section className={styles.stepContainer}>
        <ScreenIcon className={styles.screenIcon}/>
        <p className={styles.title}>THANK YOU! JUST ONE MORE THING…</p>
        <p className={styles.question}>Would you like to help us improve the map?</p>
        <p className={styles.bodyText}>If you share your email with us, we will contact you and invite you to share with us your experience with the map, so we can improve it.</p>
        <input
          type='text'
          value={userData.email}
          className={styles.textInput}
          placeholder={'Write your email here'}
          onChange={(event) => userDataUpdate('email', event.target.value)}
        />
        <button className={styles.button} onClick={() => storeSecondStepData(userId, userData)}>done</button>
      </section>
    )
  }
  
  return (
    <Modal
      onRequestClose={handleModalClose}
      isOpen={isModalOpen}
      theme={styles}
    >
      {activeStep === STEP_1 ? step1() : step2() }
    </Modal>
  )
}

export default UserDataModalComponent;