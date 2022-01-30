import {Text, Image, StyleSheet, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Container, Button, ButtonText, SubTitle, Title, Input, Spacer } from '../../styles'
import Icon  from 'react-native-vector-icons/Ionicons';


const Car = () =>{

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
                <Title>Cadastre seu veículo</Title>
                <SubTitle>Preencha os campos abaixo.</SubTitle>
            </Container>

            <Container justify="flex-start">
                <Spacer height={50}/>
                <Input placeholder="Placa do Veículo"/>
                <Spacer />
                <Input placeholder="Marca do Veículo"/>
                <Spacer />
                <Input placeholder="Modelo do Veículo"/>
                <Spacer />
                <Input placeholder="Cor do Veículo"/>
                
            </Container>


            { visible &&
                <Container height={70} justify="flex-end">
                    <Button>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                </Container>
            }
        </Container>
        )
};
export default Car;











