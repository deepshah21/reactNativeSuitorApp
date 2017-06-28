import React from 'react';
import { View, Image, Text, Button,TouchableOpacity,AsyncStorage} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import FBSDK,{LoginManager} from 'react-native-fbsdk';
import {createStore} from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './css/Style';

class Splash extends React.Component {

	componentDidMount() {
    setTimeout(() => {
			const resetAction = NavigationActions.reset({
  			index: 0,
  			actions: [
    			NavigationActions.navigate({ routeName: 'Welcome'})
    		]
    	})
    	this.props.navigation.dispatch(resetAction);
    }, 2000);
  }

	render () {
		return (
				<View style={styles.splashView}>
				<Image style={styles.splashImg} source={require('./img/splash.png')}></Image>
				<Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
			</View>
		);
	}

}


class Welcome extends React.Component {

	constructor(props) {
					 super(props);
					  //autobind(this);
				//	this.handleChange = this.handleChange.bind(this);
					this._fbAuth = this._fbAuth.bind(this);
					this.state = {showText: 'false'};
		}

		//state = {showText: false}

		handleClick = () => {
			this.setState({showText: 'true'});
	}

	_fbAuth(){
		LoginManager.logInWithReadPermissions(['public_profile']).then(
		function(result) {
			if (result.isCancelled) {
				alert('Login was cancelled');
					//this.setState{showText : false};
			} else {
				alert('Login was successful with permissions: '
					+ result.grantedPermissions.toString());

				this.handleClick();
					//console.warn('function should call');
			}
		},
		function(error) {
			alert('Login failed with error: ' + error);
		}
	);
	}

	render () {
		let display = this.state.showText ? 'loggedin' :'nothing';
		return (
				<View>
					<Text>ok</Text>
					<Text>{this.state.showText}</Text>
					<TouchableOpacity onPress={this._fbAuth()}></TouchableOpacity>
					<Text >{display}</Text>
					<Text>{this.state.showText}</Text>
					</View>
			);
	}

}
const counter = (state= 0,action) => {
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state -1;
		default:
			return state;
	}
}

const store = createStore(counter);
console.warn(store.getState());


const App = StackNavigator({
	Splash: { screen: Splash },
  Welcome: { screen: Welcome },
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});

export default App;
