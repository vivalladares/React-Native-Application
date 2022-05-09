import React, { Component } from 'react';
import {View,Image, Text,ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

export default class Inicio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itens: [
                {
                    id: 1,
                    nome: 'Cadastramento',
                    image: require('../images/note.png'),
                    onPress: () => {
                        // this.props.navigation.navigate('Cadastro');
                        Actions.currentScene !== 'cadastro' ? Actions.cadastro() : {}
                    }
                },
                {
                    id: 2,
                    nome: 'Solicitação',
                    image: require('../images/video.png'),
                    onPress: () => {
                        // this.props.navigation.navigate('Home')
                        Actions.currentScene !== 'home' ? Actions.home() : {}
                    }
                }
            ]
        }

        
    }

    componentDidMount() {
        // store.delete('FERRAMENTAS');
    }

    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#FFF', }}>
                 <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:40,
                   marginHorizontal:20
               }}>

                   <View style={{
                       width:"100%",
                       alignItems:"center",
                       backgroundColor: '#f6f3fb',
                       height: 30, 
                   }}>
                       <Text style={{
                       fontSize:20,
                       fontWeight:"bold"}}> SMART WORKSTATION </Text>
                   </View>

               </View>
            <View style={{ marginTop: Dimensions.get('screen').height/4, alignItems: 'center', justifyContent: 'center' }}>
               
                <View style={{ flexDirection: 'row' }}>
                {this.state.itens.map((item, index) => {
                    return(
                        <TouchableOpacity onPress={item.onPress} key={index} style={{ /* elevation: 2, borderWidth: 1, borderColor: '#ccc', shadowOpacity: 0.1, margin: 5, shadowOffset: { x: 0, y: 0 }, shadowRadius: 8 */ margin: 10, borderRadius: 10, backgroundColor: '#f6f3fb', height: 150, width: 150, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={item.image} style={{ height: 80, width: 80 }} />
                            <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', marginTop: 5 }}>{item.nome}</Text>
                        </TouchableOpacity>
                    )
                })}
                </View>
            </View>
           
            </View>
        )
    }
}