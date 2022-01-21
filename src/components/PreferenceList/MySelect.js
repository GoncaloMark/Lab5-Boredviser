import React from "react";
import PropTypes from "prop-types";
import {components, default as ReactSelect} from "react-select";
import makeAnimated from "react-select/animated";

const Option = (props) => {
  return (
    <div style={{ background: "black" }}>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = (props) => {
  let labelToBeDisplayed = `${props.data.label}`;
  return (
    <components.MultiValue {...props}>
      <span>{labelToBeDisplayed}</span>
    </components.MultiValue>
  );
};

const colourStyles = {
  // option: (styles, { data, isDisabled, isFocused, isSelected  }) => {
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: "#fff",
      color: "black"
    };
  }
};

const ValueContainer = ({ children, ...props }) => {
  return (
    <components.ValueContainer {...props}>
      {children}
    </components.ValueContainer>
  );
};

const animatedComponents = makeAnimated();

const MySelect = (props) => {
  const handleChange = (selected, event) => {
    if (selected !== null && selected.length > 0) {
      let result = [];
      if (selected.length === props.options.length) {
        if (event.action === "select-option") {
          result = [...props.options];
        }
        return props.onChange(result);
      }
    }
    return props.onChange(selected);
  };

  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        isMulti
        hideSelectedOptions={false}
        options={[...props.options]}
        components={{ Option, MultiValue, animatedComponents, ValueContainer }}
        styles={colourStyles}
        onChange={handleChange}
        placeholder={'Select 5 Options!'}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
};


export default MySelect;
