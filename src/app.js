import React, {Component} from 'react';
import Navigation from './navigation';
import Http from './utils/http';

class App extends Component {
    componentWillMount() {
        Http.config(__DEV__);
    }

    render() {
        return (
            <Navigation/>
        );
    }
}

export default App;
