import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './DropDown.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CONTAINER_CLASSNAME_DEFAULT = 'dropdown container ';

function DropDown(props) {
    const title = props.title;
    const text = props.text;
    const className = props.className;
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className={'dropdown container ' + className + (isOpen ? ' open' : '')}>
            <div className='dropdown title-container' onClick={() => setIsOpen(!isOpen)}>
                <p className='dropdown title'>{title}</p>
                <FontAwesomeIcon icon={faChevronDown} className='dropdown chevron'/>
            </div>
            {isOpen &&
                <div className='dropdown text-container'>
                    <p className='dropdown text main-color'>{text}</p>
                </div>
            }
        </div>
    )
}

export default DropDown;