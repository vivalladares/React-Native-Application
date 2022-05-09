import React, { Component } from 'react';
import { Alert } from 'react-native';
import { View, TextInput, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import * as ImagePicker from 'react-native-image-picker';


export default class Cadastro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            cod_sap: null,
            descricao: '',
            imagem: null,
            area_selected: null,
            areas: [
                {
                    value: 1,
                    label: 'Packaging',
                    categorias: [1, 2, 3, 4, 5]
                },
                {
                    value: 2,
                    label: 'Energia e Fluidos',
                    categorias: [1, 2, 3, 4, 5]
                },
                {
                    value: 3,
                    label: 'Processo De Cerveja',
                    categorias: [1, 2, 3, 4, 5]
                },  
                {
                    value: 0,
                    label: 'Outros',
                    categorias: [1, 2, 3, 4, 5]
                }
            ],
            mostra_categorias: false,
            categoria_escolhida: null,
            categorias_escolhidas: [],
            categorias: [
                {
                    value: 1,
                    label: 'Ferramentas',
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
                },
                {
                    value: 5,
                    label: 'Produtos Quimicos',
                }
            ]
        }
    }

    getCategorias(value) {
        // console.log(this.state.areas[value].categorias);
        // this.setState({ mostra_categorias: true });
        var id = [];
        for(var i in this.state.areas[value].categorias) {
            // console.log(this.state.areas[value].categorias[i].label);
            id.push({
                value: this.state.categorias[i].value,
                label: this.state.categorias[i].label
            })
        }

        this.setState({ categorias_escolhidas: id });
    }


    cadastrarProduto() {
        if(this.state.area_selected !== null) {
            if(this.state.categoria_escolhida !== null) {
                if(this.state.nome !== '') {
                    if(this.state.cod_sap !== '' && this.state.cod_sap !== null) {
                            store.push("FERRAMENTAS", {
                                areas: this.state.area_selected,
                                nome: this.state.nome,
                                descricao: this.state.descricao,
                                cod_sap: this.state.cod_sap,
                                categoria: this.state.categoria_escolhida,
                                imagem: this.state.imagem,
                            })
                            // Alert.alert('Atenção', 'O produto ' + this.state.nome + ' foi cadastrado com sucesso!');
                            Alert.alert(
                                'Atenção',
                                'O produto ' + this.state.nome +  ' foi cadastrado com sucesso! Clique para continuar.',
                                [
                                {
                                    text: 'Continuar',
                                    onPress: () => {
                                        Actions.currentScene !== 'inicio' ? Actions.inicio() : {}
                                    }
                                },
                                ],
                                { cancelable: false }
                          );
                    } else {
                        Alert.alert('Atenção', 'Código SAP não pode estar em branco.');
                    }
                } else {
                    Alert.alert('Atenção', 'Nome não pode estar em branco.');
                }
            } else {
                Alert.alert('Atenção', 'Escolha a categoria');
            }
        } else {
            Alert.alert('Atenção', 'Escolha a área');
        }
    }

    render() {
        return(
            <ScrollView style={{ flex: 1 }}>
           


            <RNPickerSelect
                placeholder={{
                label: 'Escolha a área',
                value: null,
                color: '#000',
                fontSize: 12,
                }}
                items={this.state.areas}
                onValueChange={value => {

                this.setState({
                    area_selected: value,
                });

                this.getCategorias(value);
                
                }}
                // loading={this.state.loading}
                style={pickerSelectStyles}
                value={this.state.area_selected}
            />

            <RNPickerSelect
                placeholder={{
                label: 'Escolha a categoria',
                value: null,
                color: '#000',
                fontSize: 12,
                }}
                items={this.state.categorias_escolhidas}
                onValueChange={value => {
                    if(this.state.area_selected !== null) {
                        this.setState({ categoria_escolhida: value });
                    } else {
                        Alert.alert('Atenção', 'Escolha a área');
                    }
                }}
                // loading={this.state.loading}
                style={pickerSelectStyles}
                value={this.state.categoria_escolhida}
            />
            <TextInput
                numberOfLines={1}
                onChangeText={(nome) => this.setState({ nome })}
                value={this.state.nome}
                placeholder={'Nome do Produto'}
                placeholderTextColor={'#ccc'}
                style={{ color: '#000', backgroundColor: '#FFF', borderWidth: .5, borderColor: this.state.corMail, paddingVertical: 15, borderRadius: 5, paddingHorizontal: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}
		    />
            <TextInput
                numberOfLines={1}
                onChangeText={(cod_sap) => this.setState({ cod_sap })}
                value={this.state.cod_sap}
                placeholder={'Código SAP'}
                keyboardType="number-pad"
                placeholderTextColor={'#ccc'}
                style={{ color: '#000', backgroundColor: '#FFF', borderWidth: .5, borderColor: this.state.corMail, paddingVertical: 15, borderRadius: 5, paddingHorizontal: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}
		    />
            <TextInput
                numberOfLines={1}
                onChangeText={(descricao) => this.setState({ descricao })}
                value={this.state.descricao}
                placeholder={'Descrição do Produto'}
                placeholderTextColor={'#ccc'}
                style={{ color: '#000', backgroundColor: '#FFF', borderWidth: .5, borderColor: this.state.corMail, paddingVertical: 15, borderRadius: 5, paddingHorizontal: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}
		    />
            <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Escolha uma foto</Text>
            {this.state.imagem == null && <TouchableOpacity onPress={() => {
                ImagePicker.launchImageLibrary(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 200,
                      maxWidth: 200,
                    },
                    (response) => {
                        console.log(response);
                      this.setState({ imagem: response.uri })
                    },
                  )
            }} style={{ marginLeft: 20, marginTop: 10, height: 100, width: 100, borderRadius: 50, backgroundColor: '#E1E1E1', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 32 }}>+</Text>
            </TouchableOpacity>}

            {this.state.imagem !==  null &&
            <TouchableOpacity onPress={() => {
                ImagePicker.launchImageLibrary(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 200,
                      maxWidth: 200,
                    },
                    (response) => {
                      this.setState({ imagem: response.uri })
                    },
                  )
            }}>

                <Image style={{ marginLeft: 20, marginTop: 10, height: 100, width: 100, borderRadius: 50 }} source={{ uri: this.state.imagem }} />
            </TouchableOpacity>}

            <TouchableOpacity onPress={() => {
                this.cadastrarProduto();
            }} style={{ paddingVertical: 15, paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9dd7a', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>CADASTRAR</Text>
            </TouchableOpacity>
            </ScrollView>
        )
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOSContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: .5,
      borderRadius: 5,
      marginLeft: 20,
      marginRight: 20,
      borderColor: '#000',
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginTop: 20,
      borderRadius: 5 


    },
    inputAndroidContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingVertical: 6,
      borderWidth: .5, 
      borderColor: '#000',
      borderRadius: 5,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      color: 'black',
      
    },
    inputIOS: {
      flex: 1,
      color: '#000',
    },
    inputAndroid: {
      flex: 1,
      color: '#000', 
      borderWidth: .5, 
      borderColor: '#000', 
      paddingVertical: 15,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    headlessAndroidContainer: {
      borderWidth: .5, 
      borderColor: '#000',
      marginLeft: 20,
      marginRight: 20, 
      borderRadius: 5,
    }
  });
  