import {Text, Image, StyleSheet, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import { AddressItem, Container, Map, AddressList , Button, ButtonText, SubTitle, Title, Input, Spacer } from '../../styles'
import Icon  from 'react-native-vector-icons/Ionicons';

const Home = () => {
    return (
        <>
        <Container>
            <Map/>
        </Container>
        <Container
            position='absolute'
            justify='space-between'
            align='flex-start'
            padding={20}
            zIndex={999}
            pointerEvents='box-none'
            style={{ height: '100%' }}
        >
            <Container height={100} justify="flex-start">

            </Container>
        </Container>
        </>
    )
}

export default Home