import {Text, Image, StyleSheet, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import { AddressItem, Container, AddressList , Button, ButtonText, SubTitle, Title, Input, Spacer } from '../../styles'
import Icon  from 'react-native-vector-icons/Ionicons';


const Ride = () =>{

    const [visible, setVisible] = useState(true);
    useEffect(()=>{
        const keyboarDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            ()=> setVisible(false),
        );
        const keyboarDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            ()=> setVisible(true),
        );
        return () =>{
            keyboarDidShowListener.remove();
            keyboarDidHideListener.remove();
        }
    },[])
    return (
        <>
            <Container  row height={100} flexP  justify="flex-start">
                <Container align="flex-start" padding={20}>
                    <SubTitle>Voltar</SubTitle>
                </Container>
                <Container>
                    <Title>Corrida</Title>
                </Container>
                <Container align="flex-end" padding={20}>
                </Container>
            </Container>

            <Container padding={30} justify="flex-start"> 
                <Container height={80} justify="flex-start">
                    <Input placeholder="Embarque" />
                    <Input placeholder="Destino" />
                </Container>
                <Container>
                    <AddressList   
                        data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
                        renderItem={
                            ({ item , index}) => (
                            <AddressItem>
                                <SubTitle bold>Menlo Parl</SubTitle>
                                <SubTitle small>palo Alto, CA</SubTitle>
                            </AddressItem>
                        )}
                    />
                    
                </Container>
            </Container>
             


            { visible &&
                <Container height={10} padding={30} justify="flex-end">
                    <Button>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                </Container>
            }

        </>
        )
};
export default Ride;











