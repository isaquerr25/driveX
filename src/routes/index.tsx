import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation';

import Login from '../pages/Login';
import Type from '../pages/Steps/type';
import Car from '../pages/Steps/car';
import Payment from '../pages/Steps/payment';
import Ride from '../pages/Ride';
import Home from '../pages/Home';


const Stack = createStackNavigator();

const Routes: React.FC = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
                options = {{headerShow: false}}
                name="Login"
                component={Login}
            /> 
            <Stack.Screen 
                options = {{headerShow: false}}
                name="Type"
                component={Type}
            /> 
            <Stack.Screen 
                options = {{headerShow: false}}
                name="Car"
                component={Car}
            /> 
            <Stack.Screen 
                options = {{headerShow: false}}
                name="Ride"
                component={Ride}
            /> 
            <Stack.Screen 
                options = {{headerShow: false}}
                name="Payment"
                component={Payment}
            /> 
            <Stack.Screen 
                options = {{headerShow: false}}
                name="Home"
                component={Home}
            />  
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;













