import React from 'react';
import { connect } from 'react-redux';
import Component from './entry-boxes-component';
import mapStateToProps from './entry-boxes-selectors';
import * as actions from 'actions/url-actions';

const EntryBoxesContainer = props => {
  const openSidebar = () => props.changeUI({ isSidebarOpen: true });
  const setActiveCategory = (activeCategory) => props.changeUI({ activeCategory: activeCategory });
  return (
    <Component
      openSidebar={openSidebar}
      setActiveCategory={setActiveCategory}
      {...props} 
    />
  ) 
}

export default connect(mapStateToProps, actions)(EntryBoxesContainer);
