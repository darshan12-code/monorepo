import React, { useEffect, useState } from 'react'
import * as Styles from "./style.js";

const Checkbox = (props) => {
    const defaultChecked = props?.checked ? props?.checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const [options, setOptions] = useState(props.options);

    const onChange = (e) => {
        setIsChecked(e.target.checked);
        props.onChange(e);
    }

    const handleChange = (checked, i) => {
        options[i].checked = !checked;
        setOptions([...options]);
        props.onChange(options[i]);
    };

    return (<>
        {!Array.isArray(props.options) ? (
            <Styles.CheckboxItem checkboxStyle={props.checkboxStyle}
                className={`container ${props.disabled ? 'disabled' : ''}`}>
                {props?.label}
                <Styles.Input type="checkbox" onChange={onChange} checked={isChecked} disabled={props.disabled} />
                <span className="checkmark"></span>
            </Styles.CheckboxItem>)
            :<Styles.CheckboxGroup className={`${props?.isGrid?'grid':''}`}>{options.map((ele, ind) => {
                return <Styles.CheckboxItem checkboxStyle={props.checkboxStyle}
                    className={`container ${ele?.disabled ? 'disabled' : ''}`}>
                    {ele?.label}
                    <Styles.Input type="checkbox" onChange={() => handleChange(ele?.checked, ind)} checked={ele?.checked} disabled={ele?.disabled} id={ind} />
                    <span className="checkmark"></span>
                </Styles.CheckboxItem>
            })}</Styles.CheckboxGroup>}

    </>
    )
}

export default Checkbox;

