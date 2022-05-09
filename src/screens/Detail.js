import React from 'react'
import {View,Text, Image, StyleSheet,Alert, TouchableOpacity, ScrollView} from 'react-native'
import { Icon } from 'react-native-elements';
import {useCart} from '../context/cart'
import { Actions } from 'react-native-router-flux';
import Modal from "react-native-modal";
import store from 'react-native-simple-store';


export default class Detail extends React.Component{
    
    state={
        quantity:1,
        modalAdicionado: false,
        categorias: [
            {
                value: 1,
                label: 'Ferramenta',
            },
            {
                value: 2,
                label: 'Peças',
            },
            {
                value: 3,
                label: 'EPI',
            },
            {
                value: 4,
                label: 'Materiais de Limpeza',
            }
        ]
    }

    addQuantity = (quantity) => {
        this.setState({quantity: this.state.quantity + 1});
    }
    subtractQuantity = (quantity) => {
      if (this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});
      }
       
    }

    componentDidMount() {
        // console.log(this.props);
    }

    addToCart() {
        if(this.state.quantity !== 0) {
        store.push("CARRINHO", {
            nome: this.props.nome,
            quantidade: this.state.quantity,
            descricao: this.props.descricao,
            categoria: this.state.categorias.label,
            imagem: this.props.imagem,
            cod_sap: this.props.cod_sap,
        })
        this.setState({ modalAdicionado: true });
        } else {
            Alert.alert('Atenção', 'Você precisa escolher a quantidade.');
        }
    }
    

    render(){

        const {add} = useCart;
        
        return(

            <ScrollView style={{backgroundColor:"#FFF"}}>

            <Modal isVisible={this.state.modalAdicionado} style={styles.modalCard} onBackdropPress={() => { 
                    this.setState({ modalAdicionado: false });
            }}>
            <View style={{ width: 330, height: 340, backgroundColor: '#FFF', borderRadius: 10 }}>
              <Text style={styles.modelTitle}>Adicionado ao Carrinho!</Text>
                <View style={styles.modelImageContainer}>
                   <Image
                    style={styles.modelImage}
                    source={require('../images/cart.png')} />
                </View>

                <Text style={{ textAlign: 'center', marginTop: 10 }}>Seu item foi adicionado ao carrinho! Você deseja continuar ou ir para o carrinho?</Text>
                <TouchableOpacity onPress={() => {
                // this.setState({ modalAdicionado: true });
                // this.setState({  })
                this.setState({ modalAdicionado: false }, () => {
                    setTimeout(() => {
                        Actions.currentScene !== 'carrinho' ? Actions.carrinho() : {}
                    }, 200)
                })
            }} style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#33cc33', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                <Icon name="shopping-cart" color={'#000'} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>IR PARA O CARRINHO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                this.setState({ modalAdicionado: false });
            }} style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0099cc', marginLeft: 20, marginRight: 20, marginTop: 5 }}>
                <Icon name="store" color={'#fff'} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFF' }}>CONTINUAR ADICIONANDO</Text>
            </TouchableOpacity>
             
         </View>
        </Modal>
               <ScrollView>
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginTop:40,
                       marginHorizontal:20
                   }}>
                       <View style={{width:"10%"}}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <Image
                                    source={require('../images/2.png')}
                                />
                            </TouchableOpacity>
                       </View>
                       
                       <View style={{width:"10%"}}>

                       </View>
                   </View>
                   <Image
                        source={{ uri: this.props.imagem }}
                        style={{
                            height:300,
                            width:300,
                            alignSelf:"center"
                        }}
                   />
                   <View
                    style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        alignItems:"center",
                        backgroundColor:"#f6f3fb",
                        paddingHorizontal:20,
                        paddingVertical:8,
                        borderRadius:20
                    }}
                   >
                      <TouchableOpacity
                       onPress={this.addQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>+</Text>
                      </TouchableOpacity> 
                      
                      <Text style={{
                          fontSize:18,
                          fontWeight:"bold",
                          paddingHorizontal:20
                      }}>
                          {this.state.quantity}
                      </Text>

                      <TouchableOpacity
                       onPress={this.subtractQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>-</Text>
                      </TouchableOpacity> 
                   </View>

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginHorizontal:20,
                       marginTop:30
                   }}>
                       <View>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:25
                           }}>{this.props.nome} </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#a4a4a9",
                               marginTop:5
                           }}>
                               Código SAP: {this.props.cod_sap}
                           </Text>
                       </View>
                   </View>
                   
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:10,
                       marginHorizontal:20
                   }}>
                       Detalhes
                   </Text>
                   <Text style={{
                       color:"#a4a4a9",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:10,
                       marginHorizontal:20,
                       textAlign:"justify"
                   }}>
                    {this.props.descricao}
    
                   </Text>
               </ScrollView>

            <TouchableOpacity onPress={() => {
                // this.setState({ modalAdicionado: true });
                this.addToCart();
            }} style={{ flexDirection: 'row', paddingVertical: 15, marginBottom: 20, paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9dd7a', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                <Icon name="shopping-cart" color={'#000'} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>ADICIONAR AO CARRINHO</Text>
            </TouchableOpacity>

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    modelImage: {
        height: 60,
        width: 60
      },
      modelTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
      },
      modalCard: {
        alignItems: 'center',
        justifyContent: 'center' 
      },
      modelImageContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
})