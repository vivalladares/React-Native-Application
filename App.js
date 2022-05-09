import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Whats from './src/screens/Whats';
import Inicio from './src/screens/Inicio';
import Cadastro from './src/screens/Cadastro';
import Detalhes from './src/screens/Detalhes';
import Carrinho from './src/screens/Carrinho';
import Pack from './src/screens/Pack';
import Energia from './src/screens/Energia';
import Processo from './src/screens/Processo';

console.disableYellowBox = true;
export default class App extends Component {
     
    render() {
      return(
          <Router>
             <Scene key="app">
                {/* <Scene key='splash' component={SplashScreen} hideNavBar={true} />  */}
                <Scene key='inicio' component={Inicio} hideNavBar={true} /> 
                <Scene key='detail' backTitle=" " component={Detail} hideNavBar={true} title="Detalhes" /> 
                <Scene key='whats' backTitle=" " component={Whats} hideNavBar={false} title="Detalhes" /> 
                <Scene key='home' backTitle=" " component={Home} hideNavBar={false} title="Home" /> 
                <Scene key='cadastro' backTitle=" " component={Cadastro} hideNavBar={false} title="Cadastramento" /> 
                <Scene key='detalhes' backTitle=" " component={Detalhes} hideNavBar={false} title="Home" /> 
                <Scene key='carrinho' backTitle=" " component={Carrinho} hideNavBar={true} title="Carrinho" /> 
                <Scene key='pack' backTitle=" " component={Pack} hideNavBar={false} title="Pack" /> 
                <Scene key='energia' backTitle=" " component={Energia} hideNavBar={false} title="Energia" />
                <Scene key='processo' backTitle=" " component={Processo} hideNavBar={false} title="Processo" />  
                
                {/* <Scene key='escolhertipo' backTitle=" " renderBackButton={() => <View></View>} component={EscolherTipo} hideNavBar={true} title="Escolher a local" />  */}
                {/* <Scene key='agendempresas' backTitle=" " component={AgendamentosEmpresa} hideNavBar={false} title="Minha Agenda"  titleStyle={{ color: Constants.COLOR.LIGHT }} navigationBarStyle={{ borderBottomWidth: 0, elevation: 0 }} />  */}
                {/* <Scene key="video" component={Video} title="Video Feed" type={ActionConst.RESET} hideNavBar={true} /> */}
             </Scene>
          </Router>
      )
    }
}