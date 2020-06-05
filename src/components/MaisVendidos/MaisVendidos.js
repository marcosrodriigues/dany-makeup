import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import Style from './Style';

export default class MaisVendidos extends Component {
    constructor(props) {
        super(props);
    }

    handleMaisVendidos(item) {
        
        return (
            <Card containerStyle={Style.card}>
                <Image source={require('../../assets/images/promocao/promocao.png')} style={Style.cardImage}></Image>
                <View style={Style.cardDescription}>
                    <Text style={Style.cardTitle}>{item.nome}</Text>
                    <Text style={Style.cardValue}>Por apenas {item.valor}</Text>
                </View>
            </Card>
        )
    }

    render() {

        const produtos = [
            {
                id: '1',
                image: '../../assets/images/promocao/promocao.png',
                nome: 'Produto 1',
                valor: 49.99 ,
            },
            {
                id: '2',
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                nome: 'Produto 2',
                valor: 35.00,
            },
            {
                id: '3',
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                nome: 'Produto 3',
                valor: 45.00,
            },
            {
                id: '4',
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                nome: 'Produto 4',
                valor: 50.00,
            },
        ]

        return(
            <>
                <Text style={Style.title}>Produtos mais vendidos</Text>
                <View style={Style.produtosMaisVendidos}>
                    <FlatList 
                        contentContainerStyle={Style.flatList}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={produtos}
                        renderItem={({item}) => this.handleMaisVendidos(item)}
                        keyExtractor={item => item.id}
                        >
                    </FlatList>
                </View>
            </>
        )
    }
}