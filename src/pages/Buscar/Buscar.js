import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'

import style from './Style'
import CategoriaImg from '../../assets/images/categorias/categoria.jpg';

const BuscarScreen = () => {
  const [search, setSearch] = useState('');

  function handleSearchButton () {
    console.log(search);
  }
  
  return (
    
    <View style={style.container}>
      <View style={style.header}>
        <Image source={require('../../assets/images/logo.png')} style={style.logo}></Image>
        <SearchBar
          placeholder="Produto ou categoria"
          containerStyle={style.containerSearchBar}
          inputStyle={style.inputSearchBar}
          onChangeText={setSearch}
          value={search}
          />
        <TouchableOpacity style={style.searchButton} onPress={handleSearchButton}  >
          <FontAwesome name="search" style={style.fa} ></FontAwesome>
        </TouchableOpacity>
      </View>

      <ScrollView style={style.scrollView}>
        <Text style={style.allCategory}>Todas as categorias</Text>
        <View style={style.content}>
          <ImageBackground style={style.categoria} source={CategoriaImg}>
            <Text style={style.titleCategoria}>Titulo</Text>
          </ImageBackground>
        </View>
        <View style={style.content}>
          <ImageBackground style={style.categoria} source={CategoriaImg}>
            <Text style={style.titleCategoria}>Batom</Text>
          </ImageBackground>
        </View>
        <View style={style.content}>
          <ImageBackground style={style.categoria} source={CategoriaImg}>
            <Text style={style.titleCategoria}>Shampoo</Text>
          </ImageBackground>
        </View>
        <View style={style.content}>
          <ImageBackground style={style.categoria} source={CategoriaImg}>
            <Text style={style.titleCategoria}>Perfumaria</Text>
          </ImageBackground>
        </View>
        <View style={style.content}>
          <ImageBackground style={style.categoria} source={CategoriaImg}>
            <Text style={style.titleCategoria}>Outros</Text>
          </ImageBackground>
        </View>
      </ScrollView>
      
    </View>
  );
  }


export default BuscarScreen;