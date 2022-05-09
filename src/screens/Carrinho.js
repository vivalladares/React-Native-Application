import React from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, ScrollView } from 'react-native';
import store from 'react-native-simple-store';
import { Icon } from 'react-native-elements';




// import { Container } from './styles';
export default class Carrinho extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carrinho: [],
        }
    }

    componentDidMount() {
        
        store.get('CARRINHO')
        .then((res) => {
            if ( res !== null ) {
                // console.log(res);
                this.setState({ carrinho: res });
            }
        })
    }
    
    
    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginTop:40,
                       justifyContent: 'space-between',
                       marginHorizontal:20
                   }}>
                       <View>
                            <TouchableOpacity
                                onPress={()=>Actions.pop()}
                            >
                                <Image
                                    source={require('../images/2.png')}
                                />
                            </TouchableOpacity>
                       </View>
                       
                       <View>
                           <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Meu Carrinho</Text>
                       </View>

                       <View>
                           <TouchableOpacity onPress={() => {
                                store.delete('CARRINHO');
                                this.setState({ carrinho: [] })
 
                           }}>
                                <Icon name="delete" color={'#000'} />
                            </TouchableOpacity>
                       </View>
                   </View>
            <ScrollView>
                {this.state.carrinho.map((item, index) => {
                    console.log(item);
                    return(
                        <View key={item.id} style={{
                            marginTop: 10, marginLeft: 15, borderRadius: 8, borderWidth: 1, borderColor: '#C1C1C1',
                            backgroundColor: '#FFF', marginRight: 15, padding: 10,
                          }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>
                                
                                <Text style={{ fontSize: 13, marginTop: 10 }}><Text style={{ fontWeight: 'bold' }}>Quantidade: </Text>{item.quantidade}</Text>

                                <Text style={{ fontSize: 13, color: '#666', marginTop: 10 }}>{item.descricao}</Text>
                              </View>
                            
                              <View style={{ marginLeft: 'auto' }}>
                                  <Image source={{ uri: item.imagem }} style={{ height: 80, width: 80 }} />
                              </View>
                              </View>
                        </View>
                    )
                })}
                
            </ScrollView>
            <View style={{ flex: 1, position: 'absolute', marginBottom: 20, bottom: 0, left: 0, right: 0 }}>
                <TouchableOpacity onPress={() => {
                                    // this.setState({ modalAdicionado: true });
                                    Actions.currentScene !== 'whats' ? Actions.whats({ carrinho: this.state.carrinho }) : {}
                                }} style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9dd7a', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                                    {/* <Icon name="shopping-cart" color={'#000'} /> */}
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>ENVIAR SOLICITAÇÃO</Text>
                                </TouchableOpacity>
                </View>
            </View>
        )
    }
}