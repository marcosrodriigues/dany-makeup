import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

import style from './Style'

export default class BuscarScreen extends Component {
    state = {
      search: ''
    }
    
    updateSearch = search => {
      this.setState({search})
    }
    
    render() {
      const { search } = this.state; 

      return (
        
        <View style={style.container}>
          <View style={style.header}>
            <Image source={require('../../assets/images/logo.png')} style={style.logo}></Image>
            <SearchBar
              placeholder="Produto ou categoria"
              containerStyle={style.containerSearchBar}
              inputStyle={style.inputSearchBar}
              onChangeText={this.updateSearch}
              value={search}
              />
          </View>
          <View style={style.content}>
            <FlatList style={style.list}>
              <View style={style.categoria}>

              </View>
            </FlatList>
          </View>
        </View>
      );
    }
}