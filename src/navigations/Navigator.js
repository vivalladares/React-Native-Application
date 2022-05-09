import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Whats from '../screens/Whats';
import Inicio from '../screens/Inicio';
import Cadastro from '../screens/Cadastro';
import Pack from '../screens/Pack';
import Processo from '../screens/Processo';
import Energia from '../screens/Energia';
import CartProvider from '../context/cart';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <CartProvider>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Inicio" component={Inicio}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Pack" component={Pack}/>
                <Stack.Screen name="Energia" component={Energia}/>
                <Stack.Screen name="Processo" component={Processo}/>
                <Stack.Screen name="Detail" component={Detail}/>
                <Stack.Screen name="Whats" component={Whats}/>
            </Stack.Navigator>
        </CartProvider>
    )
}
export default HomeStackNavigator;