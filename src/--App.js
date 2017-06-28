import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './css/Style';

class Welcome extends React.Component {

	constructor(props) {
    super();
    this.state = { isVisible: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 2000);
  }

	render () {
		const { navigate } = this.props.navigation;
		if (this.state.isVisible) {
			return (
				<View style={styles.splashView}>
					<Image style={styles.splashImg} source={require('./img/splash.png')}></Image>
					<Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
				</View>
			);
		}
		else {
			return (
				<View>
					<Text>Manoj</Text>
				</View>
			);
		}
	}

}

const App = DrawerNavigator({
  Welcome: { screen: Welcome },
}, {
  initialRouteName: 'Welcome',
});

export default App;