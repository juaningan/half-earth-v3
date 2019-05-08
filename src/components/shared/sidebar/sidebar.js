import React from 'react';
import { connect } from 'react-redux';
import Component from './sidebar-component';

import mapStateToProps from './sidebar-selectors';
import * as actions from './sidebar-actions';

const SideBarContainer = props => {
  const handleSidebarToggle = () => props.setScenePadding({ isPaddingActive: !props.isPaddingActive });
  return <Component handleSidebarToggle={handleSidebarToggle} {...props} />; 
}

export default connect(mapStateToProps, actions)(SideBarContainer);
