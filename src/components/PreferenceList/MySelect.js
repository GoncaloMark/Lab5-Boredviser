import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";
import makeAnimated from "react-select/animated";

import { components } from "react-select";

const selectAllOption = {
  label: "Select all",
  value: "*"
};
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
  if (props.data.value === selectAllOption.value) {
    labelToBeDisplayed = "All selected";
  }
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
  let toBeRendered = children;
  return (
    <components.ValueContainer {...props}>
      {toBeRendered}
    </components.ValueContainer>
  );
};

const animatedComponents = makeAnimated();

const MySelect = (props) => {
  const handleChange = (selected, event) => {
    if (selected !== null && selected.length > 0) {
      if (selected[selected.length - 1].value === props.selectAllOption.value) {
        return props.onChange([props.selectAllOption, ...props.options]);
      }
      let result = [];
      if (selected.length === props.options.length) {
        if (selected.some((e) => e.value === props.selectAllOption.value)) {
          result = selected.filter(
            (option) => option.value !== props.selectAllOption.value
          );
        } else if (event.action === "select-option") {
          result = [props.selectAllOption, ...props.options];
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
        options={[props.selectAllOption, ...props.options]}
        components={{ Option, MultiValue, animatedComponents, ValueContainer }}
        styles={colourStyles}
        onChange={handleChange}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  selectAllOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

MySelect.defaultProps = {
  selectAllOption: {
    label: "Select all",
    value: "*"
  }
};

export default MySelect;
