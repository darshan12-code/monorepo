import React from "react";
import {  Checkbox } from "antd";
import "./index.css";
import Search from "antd/es/input/Search";


const CheckboxComp = (props) => (

  <Search placeholder="input search text" onSearch={props.onSearch} enterButton allowClear/>
 
);

export default CheckboxComp;