import * as React from 'react';

import SearchTrendList from './SearchTrendList';


// Mock Data
const MockData = [
    {
        trendText: 'apple',
        url: 'a'
    },
    {
        trendText: 'blue',
        url: 'b'
    },
    {
        trendText: 'can',
        url: 'c'
    },
    {
        trendText: 'dog',
        url: 'd'
    },
    {
        trendText: 'egg',
        url: 'e'
    },
    {
        trendText: 'frog',
        url: 'f'
    },
    {
        trendText: 'grand',
        url: 'g'
    },
    {
        trendText: 'house',
        url: 'h'
    },
    {
        trendText: 'iteration',
        url: 'i'
    },
    {
        trendText: 'junmp',
        url: 'j'
    },
    {
        trendText: 'key',
        url: 'k'
    },
];


const SearchTrend = () => {
    return (
        <div id='search-trend-container'>
            <SearchTrendList domain={'Naver'} trendListData={MockData} />
            <SearchTrendList domain={'Daum'} trendListData={MockData} />
            <SearchTrendList domain={'Google'} trendListData={MockData} />
        </div>
    );
};


export default SearchTrend;