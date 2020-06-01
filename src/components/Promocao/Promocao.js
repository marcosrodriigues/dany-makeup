import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import Style from './Style';

export default class Promocao extends Component {
    constructor(props) {
        super(props);
    }

    handleEachPromotion(item) {
        
        return (
            <Card containerStyle={Style.cardPromocao}>
                <Image source={require('../../assets/images/promocao/promocao.png')} style={Style.cardImage}></Image>
                <View style={Style.cardDescription}>
                    <Text style={Style.cardTitle}>{item.nome}</Text>
                    <Text style={Style.cardOriginalValue}>De: R$ {item.valorOriginal}</Text>
                    <View style={Style.inline}>
                        <Text style={Style.cardNewValue}>Por: R$ {item.valorPromocao}</Text>
                        <Text style={Style.cardDiscount}>({item.desconto} off)</Text>
                    </View>
                </View>
            </Card>
        )
    }

    render() {
        const promocoes = [
            {
                id: '1',
                image: '../../assets/images/promocao/promocao.png',
                nome: 'Produto 1',
                valorOriginal: 50.01,
                valorPromocao: 49.99 ,
                desconto: '10%'
            },
            {
                id: '2',
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                nome: 'Produto 2',
                valorOriginal: 48.00,
                valorPromocao: 35.00,
                desconto: '10%'
            },
            {
                id: '3',
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                nome: 'Produto 3',
                valorOriginal: 50.00,
                valorPromocao: 45.00,
                desconto: '10%'
            },
            {
                id: '4',
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                nome: 'Produto 4',
                valorOriginal: 50.00,
                valorPromocao: 45.00,
                desconto: '10%'
            },
        ];


        return(
            <>
                <Text style={Style.title}>Confira nossas promoções</Text>
                <View style={Style.promocao}>
                    <FlatList 
                        contentContainerStyle={Style.flatList}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={promocoes}
                        renderItem={({item}) => this.handleEachPromotion(item)}
                        keyExtractor={item => item.id}
                        >
                    </FlatList>
                </View>
            </>
        )
    }
}