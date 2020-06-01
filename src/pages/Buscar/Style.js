import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#d2ae6c',
        alignItems: 'center'
    },

    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },
    logo: {
        width: '20%',
        height: 70
    },
    containerSearchBar: {
        width: '80%',
        backgroundColor: '#000000'
    },
    inputSearchBar: {
        fontSize: 14,
        color: '#d2ae6c',
    }

})