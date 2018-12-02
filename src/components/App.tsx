import * as React from "react";

import NavBar from './NavBar';
import SearchTrend from './SearchTrend';


interface Props {

};


interface State {
    searchTrendType: string;
    date: string;
};


class App extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            searchTrendType: '실시간',
            date: '',
        };

        this.setSearchTrendType = this.setSearchTrendType.bind(this);
    };


    setSearchTrendType(type: string) {
        console.log(type);
        this.setState({searchTrendType: type});
    };


    render() {
        return (
            <React.Fragment>
                <NavBar onSetSearchTrendType={this.setSearchTrendType} />
                <SearchTrend />
            </React.Fragment>
        );
    };
};


export default App;