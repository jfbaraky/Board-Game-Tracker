import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class SessionsList extends Component {
    render() {
        return (
            <View>
                <Text>{'I\'m the session list view!'}</Text>
            </View>
        );
    }

    componentWillMount(){

    }

    static navigationOptions = {
        drawerLabel: 'Sessões',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../images/sessionIcon.png')}
                style={[{
                    width: 24,
                    height: 24,
                    tintColor: tintColor
                }]}
            />
        ),
    };
}

export default SessionsList;