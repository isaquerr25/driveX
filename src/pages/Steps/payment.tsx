import {Text, Image, StyleSheet, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Container, Button, ButtonText, SubTitle, Title, PickerButton, Spacer } from '../../styles'
import Icon  from 'react-native-vector-icons/Ionicons';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


const Payment = () =>{


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
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40}>
                <Title>Escolha como pagar</Title>
                <SubTitle>Preencha os dados do cartão de crédito</SubTitle>
            </Container>
            
            <Container>
                <Spacer height={50}/>
                <CreditCardInput requiresName/>
            </Container>

            <Container height={70} justify="flex-end">
                { visible && (
                    <Button>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                )}
            </Container>
        </Container>
        )
};
export default Payment;











