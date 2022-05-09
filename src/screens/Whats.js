import React, {useState} from 'react';
import { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'


export default class Whats extends Component {

  constructor(props) {
    super(props);

    this.state = {
      international: '',
      id_funcionario: null,
      whatsAppMsg: '',
      itens: [],
    }
  }

  componentDidMount() {
    console.log(this.props.carrinho);
    var ids = [];
    for(var i in this.props.carrinho) {
      ids += '\n' + "*Nome*: " + this.props.carrinho[i].nome + '\n' + "*Código SAP*: " + this.props.carrinho[i].cod_sap + '\n' +
             "*Quantidade*: " + this.props.carrinho[i].quantidade + '\n' +
             "______________________" + '\n'
    }
    this.setState({ itens: ids });
  }

  initiateWhatsApp = () => {

    const unmasked = '8192244893';
    const vit = '8699614404';
    // Check for perfect 10 digit length

    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 'O funcionário do ID:' +
       this.state.id_funcionario + ' solicita os seguintes itens: \n' + this.state.itens + 
      '&phone=55' + unmasked;

      
      console.log(url);
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Você precisa ter o WhatsApp instalado.');
      });
  };


  render() {
    return(
  <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleText}>
            Solicitação WORKSTATION
          </Text>         
          <TextInput
            value={this.state.id_funcionario}
            onChangeText={text => {
                this.setState({ id_funcionario: text });
              }
            }
            placeholder={'Digite seu Id'}
            style={styles.textInput}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={this.initiateWhatsApp}>
            <Text style={styles.buttonTextStyle}>
              Enviar Solicitação
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

}
/*
export default function Whats() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsAppMsg, setWhatsAppMsg] = useState('');
  const [id, operador] = useState('');

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 12) {
      alert('Please insert correct WhatsApp number');
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 'O funcionário de ID:' +
       id + ' solicita os seguintes itens ' + whatsAppMsg + 
      '&phone=55' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Solicitação WORKSTATION
        </Text>
        <Text style={styles.titleTextsmall}>
          Digite o Numero de Solicitação
        </Text>
          <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          style={styles.textInput}
          value={this.state.international}
          onChangeText={text => {
            
          }}
          // add the ref to a local var
          ref={(ref) => this.phoneField = ref}
        />

        <TextInput
          value={id}
          onChangeText={
            (id) => operador(id)
          }
          placeholder={'Digite seu Id'}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>
            Enviar Solicitação
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});