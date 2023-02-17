import React from 'react';
import { render } from "react-dom";
import CheckboxComp from './lib/checkbox';

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <CheckboxComp label={'item'} ></CheckboxComp>
  </div>
);

// render(<App />, document.getElementById("root"));
export default App;
