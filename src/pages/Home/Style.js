import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
      flex: 0,
      paddingTop: Constants.statusBarHeight + 0,
      backgroundColor: '#000000',
      alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 250, //169
    backgroundColor: "#ffffff",
    position: 'absolute',
    top: 0, right: 0, left: 0, bottom: 0,
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  content: {
    width: '100%',
    marginTop: 340
  },
  section: {
    width: '90%',
    left: '5%',
    marginTop: 35,
  }
})