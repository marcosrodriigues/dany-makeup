import React from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';

import Style from './Style'
import Banner from '../../components/Banner/Banner'

import Promocao from '../../components/Promocao/Promocao'
import MaisVendidos from '../../components/MaisVendidos/MaisVendidos'

export default function HomeScreen() {
    return (
      <ScrollView contentContainerStyle={Style.container}>
          <ImageBackground style={Style.imageBackground} source={require('../../../src/assets/images/dany-makeup-169h.png')} >
            <Banner />
          </ImageBackground>
          <View style={Style.content}>
            <View style={Style.section}>
              <Promocao></Promocao>
            </View>
            <View style={Style.section}>
              <MaisVendidos></MaisVendidos>
            </View>
          </View>
      </ScrollView>
      
      
    )
}