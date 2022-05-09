import React, { Component } from 'react';
import {View,Image, Text,ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            areas: [
                {
                    value: 1,
                    label: 'Packaging',
                    image: require('../images/pack.png'),
                    onPress: () => {
                        // this.props.navigation.navigate('Cadastro');
                        Actions.currentScene !== 'pack' ? Actions.pack() : {}
                    }
                },
                {
                    value: 2,
                    label: 'Energia e Fluidos',
                    image: require('../images/eng.png'),
                    onPress: () => {
                        // this.props.navigation.navigate('Cadastro');
                        Actions.currentScene !== 'energia' ? Actions.energia() : {}
                    }
                },
                {
                    value: 3,
                    label: 'Processo De Cerveja',
                    image: require('../images/processo.png'),
                    onPress: () => {
                        // this.props.navigation.navigate('Cadastro');
                        Actions.currentScene !== 'processo' ? Actions.processo() : {}
                    }
                }
            ],
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
                       fontWeight:"bold"}}> ÁREAS </Text>
                   </View>

               </View>
            <View style={{ marginTop: Dimensions.get('screen').height/6, alignItems: 'center', justifyContent: 'center' }}>
               
                <View style={{ flexDirection: 'row' }}>
                {this.state.areas.map((item, index) => {
                    return(
                        <TouchableOpacity onPress={item.onPress} key={index} style={{ /* elevation: 2, borderWidth: 1, borderColor: '#ccc', shadowOpacity: 0.1, margin: 5, shadowOffset: { x: 0, y: 0 }, shadowRadius: 8 */ margin: 10, borderRadius: 10, backgroundColor: '#f6f3fb', height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={item.image} style={{ height: 50, width: 50, alignItems: 'center' }} />
                            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>{item.label}</Text>
                        </TouchableOpacity>
                    )
                })}
                </View>
            </View>

            </View>
        )
    }
}