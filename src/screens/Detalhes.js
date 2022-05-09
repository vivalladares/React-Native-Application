import React from 'react'
import {View,Image, Text,ScrollView, FlatList, TouchableOpacity } from 'react-native'
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Product from '../components/Product'
import store from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native';

export default class Detalhes extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            todos_os_itens: [],
            copy_itens: [],
            copy_itens_1: [],
            categoria_selecionada: 2,
            carregando: true,
            categorias: [
                {
                    value: 1,
                    label: 'Ferramenta',
                    imagem: require('../images/chave1.png'),
                    onPress: () => {
                        // this.props.navigation.navigate('Cadastro');
                        Actions.currentScene !== 'home' ? Actions.home() : {}
                    }
                    
                },
                {
                    value: 2,
                    label: 'Peças',
                    imagem: require('../images/peca.png'),
                    onPress: () => {
                        // this.props.navigation.navigate('Cadastro');
                        Actions.currentScene !== 'detalhes' ? Actions.detalhes() : {}
                    }
                },
                {
                    value: 3,
                    label: 'EPI',
                    imagem: require('../images/epi1.png')
                },
                {
                    value: 4,
                    label: 'Materiais de Limpeza',
                    imagem: require('../images/limpeza.png')
                }
            ]
        }
    }

    componentDidMount() {
        store.get('FERRAMENTAS')
        .then((res) => {
            if(res !== null) {
                console.log(res);
                this.setState({ carregando: false, todos_os_itens: res, copy_itens: res, copy_itens_1: res.filter(i => i.categoria == 2) });
            }
        })
    }


    render(){

        return(
           <ScrollView style={{ flex: 1, backgroundColor:"#FFF"}}>
               
               <View style={{
                   paddingHorizontal:20,
                   marginTop:20
               }}>
                   <Text style={{
                       fontSize:30,
                       fontWeight:"bold"
                   }}>WS</Text>
               </View>
               {!this.state.carregando && <FlatList horizontal showsHorizontalScrollIndicator={false} data={this.state.categorias} keyExtractor={(item) => item.value} 
               
               renderItem={({ item, index }) => {
                   return(

                        <TouchableOpacity onPress={item.onPress} key={index}>
    
                        <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            // backgroundColor:"#f9dd7a",
                            backgroundColor: this.state.categoria_selecionada == item.value ? '#f9dd7a' : '#e5e4eb',
                            marginHorizontal:15,
                            borderRadius:25,
                            paddingVertical:5,
                            paddingHorizontal:15
                        }}>
                            <Image
                             source={item.imagem}
                             style={{height:40,width:40}}
                            />
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18,
                                paddingLeft:10
                            }}>
                                {item.label}
                            </Text>
                        </View>
                        </TouchableOpacity>
                   )
               }}/>}
               
                   <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:30
                   }}>
                       <View style={{
                           width:"50%"
                       }}>
                           <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                           }}>Itens</Text>
                       </View>
                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>

                       </View>
                   </View>

                   <View style={{ alignItems: 'center' }}>
                    {this.state.copy_itens_1.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 30, marginLeft: 20, marginRight: 20 }}>Não encontrei itens cadastrados nessa categoria.</Text>
                    </View>}
                    {!this.state.carregando && <FlatList style={{ }} data={this.state.copy_itens_1} numColumns={2} renderItem={({ item, index }) => {
                       
                       return(

                        <View key={index} style={{
                            flexDirection:"row",
                            marginHorizontal:5,
                            marginTop:15,
                        }}>
                            <Product
                                 image={{ uri: item.imagem }}
                                 title={item.nome}
                                 onPress={() => {
                                    Actions.currentScene !== 'detail' ? Actions.detail({ 
                                        nome: item.nome,
                                        descricao: item.descricao,
                                        cod_sap: item.cod_sap,
                                        categoria: item.categoria,
                                        imagem: item.imagem,
                                    }) : {}
                                 }}
                 
                            />
                            
                        </View>
                        
                       )
                   }} keyExtractor={(item) => item.categoria}/>}
                   </View>
                   
           </ScrollView>
        )
    }
}