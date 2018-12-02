import * as React from 'react';


interface Props {
    trendText: string;
    url: string;
};


const SearchTrendListItem = (props: Props) => {
    return (
        <li
            className={'search-trend-naver-list-item'}
            onClick={() => {console.log(props.url)}}
            >{props.trendText + ': ' + props.url}</li> 
    );
};


export default SearchTrendListItem;