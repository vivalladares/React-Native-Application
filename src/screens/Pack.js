import React from 'react'
import {View,Image, Text,ScrollView, FlatList, TouchableOpacity } from 'react-native'
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Product from '../components/Product'
import store from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native';

export default class Pack extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            todos_os_itens: [],
            copy_itens: [],
            copy_itens_1: [],
            copy_itens_2: [],
            copy_itens_3: [],
            copy_itens_4: [],
            copy_itens_5: [],
            categoria_selecionada: 1,
            area_selected:1,
            carregando: true,
            categorias: [
                {
                    value: 1,
                    label: 'Ferramenta',
                    imagem: require('../images/chave1.png')
                },
                {
                    value: 2,
                    label: 'Peças',
                    imagem: require('../images/peca.png')
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
                },
                {
                    value: 5,
                    label: 'Produtos Quimicos',
                    imagem: require('../images/quimico.png')
                }
            ]
        }
    }

    componentDidMount() {
        store.get('FERRAMENTAS')
        .then((res) => {
            if(res !== null) {
                console.log(res);
                this.setState({ carregando: false, todos_os_itens: res, copy_itens: res, copy_itens_1: res.filter(i => i.categoria == 1 && i.areas==1 ) });
                this.setState({ carregando: false, todos_os_itens: res, copy_itens: res, copy_itens_2: res.filter(i => i.categoria == 2  && i.areas==1) });
                this.setState({ carregando: false, todos_os_itens: res, copy_itens: res, copy_itens_3: res.filter(i => i.categoria == 3  && i.areas==1 ) });
                this.setState({ carregando: false, todos_os_itens: res, copy_itens: res, copy_itens_4: res.filter(i => i.categoria == 4  && i.areas==1 ) });
                this.setState({ carregando: false, todos_os_itens: res, copy_itens: res, copy_itens_5: res.filter(i => i.categoria == 5  && i.areas==1 ) });
            }
        })
    }

    render(){

        return(
           <ScrollView style={{ flex: 1, backgroundColor:"#FFF"}}>
            
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

                   <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            // backgroundColor:"#f9dd7a",
                            backgroundColor:  '#f9dd7a',
                            marginHorizontal:15,
                            borderRadius:25,
                            paddingVertical:5,
                            paddingHorizontal:15
                        }}>
                            <Image
                             source={require('../images/chave1.png')}
                             style={{height:40,width:40}}
                            />
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18,
                                paddingLeft:10
                            }}>
                                Ferramentas
                            </Text>
                        </View>

                   <View style={{ alignItems: 'center' }}>
                    {this.state.copy_itens_1.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 30, marginLeft: 20, marginRight: 20 }}>Não encontrei itens cadastrados nessa categoria.</Text>
                    </View>}

                    

                    {!this.state.carregando && <FlatList horizontal showsHorizontalScrollIndicator={false} data={this.state.copy_itens_1} renderItem={({ item, index }) => {
                       
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
                       
                   }} keyExtractor={(item) => item.categoria.areas}/>} 
                   
                   </View>

                   <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            // backgroundColor:"#f9dd7a",
                            backgroundColor:  '#f9dd7a',
                            marginHorizontal:15,
                            borderRadius:25,
                            paddingVertical:5,
                            paddingHorizontal:15
                        }}>
                            <Image
                             source={require('../images/peca.png')}
                             style={{height:40,width:40}}
                            />
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18,
                                paddingLeft:10
                            }}>
                                Peças
                            </Text>
                        </View>

                   <View style={{ alignItems: 'center' }}>
                    {this.state.copy_itens_2.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 25, marginLeft: 20, marginRight: 20,  marginVertical:15,}}>Não foi encontrado itens cadastrados nessa categoria.</Text>
                    </View>}

                    

                    {!this.state.carregando && <FlatList horizontal showsHorizontalScrollIndicator={false} data={this.state.copy_itens_2} renderItem={({ item, index }) => {
                       
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

                   <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            // backgroundColor:"#f9dd7a",
                            backgroundColor:  '#f9dd7a',
                            marginHorizontal:15,
                            borderRadius:25,
                            paddingVertical:5,
                            paddingHorizontal:15
                        }}>
                            <Image
                             source={require('../images/epi1.png')}
                             style={{height:40,width:40}}
                            />
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18,
                                paddingLeft:10
                            }}>
                                EPI
                            </Text>
                        </View>

                   <View style={{ alignItems: 'center' }}>
                    {this.state.copy_itens_3.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 25, marginLeft: 20, marginRight: 20,  marginVertical:15,}}>Não foi encontrado itens cadastrados nessa categoria.</Text>
                    </View>}

                    

                    {!this.state.carregando && <FlatList horizontal showsHorizontalScrollIndicator={false} data={this.state.copy_itens_3} renderItem={({ item, index }) => {
                       
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

                   <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            // backgroundColor:"#f9dd7a",
                            backgroundColor:  '#f9dd7a',
                            marginHorizontal:15,
                            borderRadius:25,
                            paddingVertical:5,
                            paddingHorizontal:15
                        }}>
                            <Image
                             source={require('../images/limpeza.png')}
                             style={{height:40,width:40}}
                            />
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18,
                                paddingLeft:10
                            }}>
                                Materiais de Limpeza
                            </Text>
                        </View>

                   <View style={{ alignItems: 'center' }}>
                    {this.state.copy_itens_4.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 25, marginLeft: 20, marginRight: 20,  marginVertical:15,}}>Não foi encontrado itens cadastrados nessa categoria.</Text>
                       
                    </View>}

                    

                    {!this.state.carregando && <FlatList horizontal showsHorizontalScrollIndicator={false} data={this.state.copy_itens_4} renderItem={({ item, index }) => {
                       
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

                   <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            // backgroundColor:"#f9dd7a",
                            backgroundColor:  '#f9dd7a',
                            marginHorizontal:15,
                            borderRadius:25,
                            paddingVertical:5,
                            paddingHorizontal:15
                        }}>
                            <Image
                             source={require('../images/quimico.png')}
                             style={{height:40,width:40}}
                            />
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18,
                                paddingLeft:10
                            }}>
                                Produtos Quimicos
                            </Text>
                        </View>

                   <View style={{ alignItems: 'center' }}>
                    {this.state.copy_itens_5.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 25, marginLeft: 20, marginRight: 20,  marginVertical:15,}}>Não foi encontrado itens cadastrados nessa categoria.</Text>
                       
                    </View>}

                    

                    {!this.state.carregando && <FlatList horizontal showsHorizontalScrollIndicator={false} data={this.state.copy_itens_5} renderItem={({ item, index }) => {
                       
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