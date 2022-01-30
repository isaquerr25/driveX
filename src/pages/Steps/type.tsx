import {Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { Container, Button, ButtonText, SubTitle, Title, PickerButton } from '../../styles'
import Icon  from 'react-native-vector-icons/Ionicons';


const Type = () =>{
    return (
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40}>
                <Title>Passageiro ou motorista?</Title>
                <SubTitle>Selecione qual será a sua função no DriveX</SubTitle>
            </Container>

            <Container>

                <PickerButton >
                    <Icon name="car-sport-sharp" size={100} color="#426782" />
                    <Title>Motorista</Title>
                </PickerButton>
                <PickerButton >
                    <Icon name="ios-flag-outline" size={100} color="#426782" />
                    <Title>Passageiro</Title>
                </PickerButton>
            </Container>

            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Próximo Passo</ButtonText>
                </Button>
            </Container>
        </Container>
        )
};
export default Type;











