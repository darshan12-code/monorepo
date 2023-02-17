import styled from "styled-components";

export const CheckboxItem = styled.label`
  display: flex;
  position: relative;
  align-items:center ;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform:capitalize;

  &.disabled{
    cursor:not-allowed;
    opacity:0.5;
  }

&:hover input ~ .checkmark {
   border: 2px solid ${(props) => (props?.checkboxStyle?.focusBorderColor ? props.checkboxStyle.focusBorderColor : "#000")};
}

/* When the checkbox is checked, add style */
 input:checked ~ .checkmark {
  background-color: ${(props) => (props?.checkboxStyle?.backgroundColor ? props.checkboxStyle.backgroundColor : "#fff")};
  border: 2px solid ${(props) => (props?.checkboxStyle?.borderColor ? props.checkboxStyle.borderColor : "#000")};
}

/* When the checkbox is checked */
input:checked ~ .checkmark:after {
  display: block;
}

/* indicator */
 .checkmark:after {
  left: 8px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid ${(props) => (props?.checkboxStyle?.iconColor ? props.checkboxStyle.iconColor : "#000")};
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkmark {
  position: absolute;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 2px solid ${(props) => (props?.checkboxStyle?.borderColor ? props.checkboxStyle.borderColor : "#000")};
}

/* when not checked */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

input[disabled] ~ .checkmark {
    border:2px solid grey; 
  background-color: #fff;
  pointer-events: none;
  &:after{
  border: solid grey;
  border-width: 0 3px 3px 0;
  }
}
`;

export const Input = styled.input`
 position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;


export const CheckboxGroup = styled.div`
&.grid{
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto auto;
}
`;