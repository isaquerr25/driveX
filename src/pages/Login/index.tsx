import {Text, Image, StyleSheet} from 'react-native';
import React, { useEffect }from 'react';
import { Container, Button, ButtonText } from '../../styles';
import logo from '../../assets/logo.png';
import bottonL from '../../assets/loginbottom.png';
import social from '../../services/social';
import ReactoTron from 'reactotron-react-native';

const Login = () => {

    const login = async () =>{
        try{
            console.log('aaaa');

            
            const auth  = await social.authorize('facebook', {scopes: 'email',});
            console.log('auth');
            const user  =await social.makeRequest('facebook','/me?fileds=id,name,email',);
            console.log('awwwww');
            
            console.tron.log(auth);
            console.tron.log(user);
            
        } catch (ex) {
            console.error('outer', ex.message);
        }
    };
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
                <Button onPress={() => login()} type="info">
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
    );
};

const styles = StyleSheet.create({
    logoI :{
        width:250,
        height:250
    }
});
export default Login;