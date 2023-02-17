import React from "react";
import {  Checkbox } from "antd";
import "./index.css";
import Search from "antd/es/input/Search";

/**
 * @name: PrimaryButton
 * @param  label
 * @return onChange
 */
const onSearch = (value) => console.log(value);
const CheckboxComp = ({ props, label, onChange }) => (
  // <Checkbox   {...props}   className="custom-checkbox" onChange={onChange}>{label}</Checkbox>
  <Search placeholder="input search text" onSearch={onSearch} enterButton allowClear/>
 
);

export default CheckboxComp;
