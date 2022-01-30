import {Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { Container, Button, ButtonText } from '../../styles'
import logo from '../../assets/logo.png'
import bottonL from '../../assets/loginbottom.png'
const Login = () => {
    return (
        <Container color='info50' justify="flex-end">
            
            <Container
                justify="space-around"
                padding = {30}
                position="absolute"
                heigh={270}
                top={0}
                zIndex={9}>
                <Image style={styles.logoI} source={logo}/>
                <Button type="info">
                    <ButtonText color="light">Fazer Login com Facebook</ButtonText>
                </Button>
                <Button type="light">
                    <ButtonText >Fazer Login com Facebook</ButtonText>
                </Button>
            </Container>

            <Container>
                <Image source={bottonL} />
            </Container>
        </Container>
        )
};

const styles = StyleSheet.create({
    logoI :{
        width:250,
        height:250
    }
});
export default Login;