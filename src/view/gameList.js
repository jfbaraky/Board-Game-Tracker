import React, {Component} from 'react';
import {View, Text, Image, ActivityIndicator, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import Http from '../utils/http';


class GameList extends Component {
    static navigationOptions = {
        drawerLabel: 'Jogos',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../images/gameIcon.png')}
                style={[{
                    width: 24,
                    height: 24,
                    tintColor: tintColor
                }]}
            />
        )
    };

    constructor() {
        super();
        this.state = {
            loading: false,
            games: []
        };
    }

    componentWillMount() {
        this.getGameList();
    }

    getGameList() {
        this.setState({loading: true});
        Http.get('/game').then(response => {
            this.setState({loading: false, games: response.data});
        }).catch(error => {
            console.log(error);
        });
    }

    gameItem({item}) {
        return (
            <Card title={item.name}>
                <Text> {'Jogado ' + item.numberOfSessions + ' vezes.'} </Text>
            </Card>
        );
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large'/>
                </View>
            );
        } else {
            return (
                <FlatList
                    data={this.state.games}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.gameItem}
                />
            );
        }
    }
}

export default GameList;