import {StyleSheet, Dimensions} from 'react-native';
 
module.exports = StyleSheet.create({
	splashView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	splashImg: { position: 'absolute', left: 0, top: 0, width: Dimensions.get('window').width, height: Dimensions.get('window').height },
});