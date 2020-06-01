import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slideshow from 'react-native-slideshow'

import Style from './Style'

export default class BannerScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    url: 'https://st.depositphotos.com/1005147/4806/i/450/depositphotos_48060277-stock-photo-cosmetics-on-wooden-table.jpg'
                },
                {
                    url: 'https://static6.depositphotos.com/1177973/667/i/450/depositphotos_6674752-stock-photo-many-professional-cosmetics-for-make.jpg'
                },
                {
                    url: 'https://st3.depositphotos.com/11432552/14401/i/450/depositphotos_144013501-stock-photo-brushes-and-decorative-cosmetics.jpg'
                },
            ]
        }
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
              this.setState({
                position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
              });
            }, 5000)
          });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    showMessage(img, index) {
        alert("Pressionou a imagem " + index + ": " + img.title);
    }

    render() {
        return (
            <View style={Style.banner}>
                <Slideshow 
                    containerStyle={{borderRadius: 50}}
                    dataSource={this.state.dataSource}
                    arrowSize={0}
                    height={200}
                    overlay={false}
                    position={this.state.position}
                    indicatorSize={0}
                    indicatorSelectedColor={'#d2ae6c'}
                    indicatorColor={'#000000'}
                    onPositionChanged={position => this.setState({ position })}
                    onPress={({image, index}) => this.showMessage(image, index)}
                />
            </View>
        )
    }   
}