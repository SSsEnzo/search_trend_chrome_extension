import * as React from 'react';


interface NavBarProps {
    onSetSearchTrendType: Function;
};


const NavBar = (props: NavBarProps) => {
    return (
        <div id={'nav-bar-container'}>
            <select onChange={(event) => props.onSetSearchTrendType(event.currentTarget.value)}>
                <option value="실시간">실시간</option>
                <option value="날짜">날짜</option>
            </select>
        </div>
    );
};


export default NavBar;