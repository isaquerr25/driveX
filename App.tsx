import { AppRegistry } from 'react-native';
// import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import store from './src/store';



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Car from './src/pages/Steps/car';
import Type from './src/pages/Steps/type';
import Payment from './src/pages/Steps/payment';
import Ride from './src/pages/Ride';
import Home from './src/pages/Home';
import React from 'react';
import Routes from './src/routes';


export default function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
        
    
    );
}


