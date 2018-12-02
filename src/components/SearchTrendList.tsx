import * as React from 'react';
import SearchTrendListItem from './SearchTrendListItem';


interface TrendListData {
    trendText: string;
    url: string;
};


interface Props {
    domain: string;
    trendListData: TrendListData[]; 
};


const SearchTrendList = (props: Props) => {
    return (
        <ul id='search-trend-naver-list'>
            <h1>{props.domain}</h1>
            {props.trendListData.map((item, index) => {
                return <SearchTrendListItem key={index} trendText={item.trendText} url={item.url} />
            })}
        </ul>
    );
};

export default SearchTrendList;