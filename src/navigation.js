import {DrawerNavigator} from 'react-navigation';
import GameList from './view/gameList';
import SessionsList from './view/sessionList';

const Navigation = DrawerNavigator({
    gameList: {
        screen: GameList
    },
    SessionsList: {
        screen: SessionsList
    }
});

export default Navigation;