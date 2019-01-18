import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
console.log(props.selectTabHandler)
  let tabClassName = "";

  if (props.selectedTab === props.tab) {
    tabClassName = 'tab active-tab';
  } else {
    tabClassName = 'tab';
  }

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`${tabClassName}`}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string
}
// Make sure you include PropTypes on your props.

export default Tab;
