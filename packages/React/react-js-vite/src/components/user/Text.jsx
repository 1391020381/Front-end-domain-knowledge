// import React from "react";
import PropTypes from 'prop-types'
export const Text = ({ text, fontSize }) => {
  return (
    <div>
      <p style={{ fontSize:fontSize }}>{text}</p>
    </div>
  );
};

Text.propTypes = {
    fontSize:PropTypes.Text,
    text:PropTypes.string
}