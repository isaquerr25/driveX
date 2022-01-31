import {Text, Image, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { PulseCirle, Avatar, Bullet, VerticalSeparator, Container, Map, AddressList , Button, ButtonText, SubTitle, Title, Input, Spacer } from '../../styles';


type statusType='S'|'I'|'P'|'C'
type tipeType='P'|'M'

const Home = () => {
    const tipo:tipeType = 'M';
    const status:statusType = 'C'; // S - SEM CORRIDA, I - INFORMAÇÕES, P - PESQUISA, C - EM CORRIDA

    const SemCorrida            = (status === 'S');
    const Pesquisa              = (status === 'P');
    const Informacoes           = (status === 'I');
    const passageiroSemCorrida  = (tipo === 'P' &&  status === 'S');
    const passageiroInformacoes = (tipo === 'P' &&  status === 'I');
    const passageiroPesquisa    = (tipo === 'P' &&  status === 'P');
    const passageiroEmCorrida   = (tipo === 'P' &&  status === 'C');

    const Motorista             = (tipo === 'M' );
    const MotoristaSemCorrida   = (tipo === 'M' &&  status === 'S');
    const MotoristaEmCorrida    = (tipo === 'M' &&  status === 'C');
    return (
        <Container>
            <Map
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.1637373,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                disabled={Pesquisa}
            />
                
            <Container
                position='absolute'
                justify='space-between'
                align='flex-start'
                padding={20}
                zIndex={999}
                top='20px'
                pointerEvents='box-none'
                style={{ height: '100%' }}>

                {/* PARTE SUPERIOR */}
                
                <Container height={110} 
                    justify="flex-start"
                    align="flex-start">

                    { (SemCorrida || Motorista) &&
                        <TouchableOpacity>
                            <Avatar 
                                source={{ uri: 'https://imagens.brasil.elpais.com/resizer/AXY-znKLjN2eo__LAuOLMJSSPFA=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6TE7TL7D4YWZFV2TFRSGNGN6JE.jpg'}}
                            />
                        </TouchableOpacity>
                    }
                    { !SemCorrida && Pesquisa &&
                        <Container justify='flex-end' elevation={50} color="light">

                            <Container padding={15}>

                                <Container justify="flex-start" row >
                                    <Bullet />
                                    <SubTitle padding>Endereço do embarque completo</SubTitle>
                                </Container>
                                <Spacer/>
                                <Container justify="flex-start" row>
                                    <Bullet destination/>
                                    <SubTitle padding>Endereço do destino completo</SubTitle>
                                </Container>

                            </Container>
                            
                            <Button type="dark" compact marginD={0}>
                                <ButtonText color="light">Toque para editar</ButtonText>
                            </Button>
                        </Container>
                    }
                
                </Container>

                {/* PASSAGEIRO PROCURANDO CORRIDA Pulse */}
                {passageiroPesquisa &&
                        <Container
                            padding={20}
                            zIndex={-1}
                        >
                            
                            <PulseCirle
                                numPulses={3}
                                diameter={400}
                                speed={20}
                                duration={200}
                            />
                        </Container>
                }

                {/* PARTE INFERIOR */}
                <Container top='-10'  height={150} color="light">
                    {/* PASSAGUEIRO SEM CORRIDA */}
                    { passageiroSemCorrida &&  
                        <Container justify='flex-start' padding={20} align='flex-start' >
                            <SubTitle>Olá, Sou Isaque Ribeiro Ferreira</SubTitle>
                            <Title>Para onde você quer ir?</Title>
                            <Spacer/>
                            <Input placeholder='Procure um destino ...' />
                        </Container>}
                        
                    {/* PASSGEIRO INFORMAÇÕES DA CORRIDA */}
                    { ( passageiroInformacoes || passageiroPesquisa ) && (
                        <Container>
                            <Container padding={20}>
                                <SubTitle>DriveX Convencional</SubTitle>
                                <Spacer/>
                                <Container row>
                                    <Container>
                                        <Title>R$ 13,90</Title>
                                    </Container>
                                    <VerticalSeparator/>
                                    <Container>
                                        <Title>5 mins</Title>
                                    </Container>
                                </Container>
                            </Container>
                            <Button marginD={0} type={Pesquisa ? 'muted' : 'primary' } >
                                <ButtonText>{Pesquisa ? 'Cancelar DriveX':'Chamar DriveX'} </ButtonText>
                            </Button>
                        </Container>
                    )}

                    {/* PASSAGEIRO_EM_CORRIDA */}
                    { passageiroEmCorrida &&
                    <Container>
                        <Container justify='flex-end' padding={20} align='flex-start' >
                            <Container row>
                                <Container align='center' padding={20} height={100}  row>
                                    <Avatar
                                        small
                                        source={{
                                            uri:'https://grupomidia.com/hcm/wp-content/uploads/2020/12/UnimedPetropolis2-800x600.jpg'
                                        }}
                                    />
                                    <Spacer width={10}/>
                                    <Container align='flex-start'>
                                        <SubTitle bold>Julio Bata</SubTitle>
                                        <SubTitle small>ADG-458, FERRARI x6, Laranja</SubTitle>
                                    </Container>
                                </Container>
                                <VerticalSeparator />
                                <Container width={150}>
                                    <Title>R$ 12,90</Title>
                                    <SubTitle bold color="primary">Aprox. 5 mins</SubTitle>
                                </Container>
                            </Container>
                        
                        </Container>
                        <Button marginD={0} type="muted">
                            <ButtonText>Cancelar Corrida</ButtonText>
                        </Button>
                    </Container>
                    }
                    {/* MOTORISTA SEM CORRIDA */}
                    { MotoristaSemCorrida &&  
                        <Container>
                            <SubTitle>Olá, Julio</SubTitle>
                            
                            <Title>Nenhuma corrida encontrada.</Title>
                            <Spacer/>
                            
                        </Container>}
                    {/* MOTORISTA EM CORRIDA */}
                    { MotoristaEmCorrida &&
                    <Container>
                        <Container justify='flex-end' padding={20} align='flex-start' >
                            <Container row>
                                <Container align='center' padding={20} height={100} row>
                                    <Avatar
                                        small
                                        source={{
                                            uri:'https://grupomidia.com/hcm/wp-content/uploads/2020/12/UnimedPetropolis2-800x600.jpg'
                                        }}
                                    />
                                    <Spacer width={10}/>
                                    <Container align='flex-start'>
                                        <Container justify="flex-start" row height={20}>
                                            <Bullet />
                                            <SubTitle small numberOfLines={1}>Endereço do emba00000000000000rque completo</SubTitle>
                                        </Container>
                                        <Container   justify="flex-start" row height={20}>
                                            <Bullet destination/>
                                            <SubTitle small numberOfLines={1}>Endereço do destino completo</SubTitle>
                                        </Container>
                                    </Container>
                                </Container>
                                <VerticalSeparator />
                                <Container width={150}>
                                    <Title>R$ 12,90</Title>
                                    <SubTitle bold color="primary">Aprox. 5 mins</SubTitle>
                                </Container>
                            </Container>
                        </Container>
                        <Button marginD={0} type="primary">
                            <ButtonText>Aceitar Corrida</ButtonText>
                        </Button>
                    </Container>
                    }
                </Container>
                
                

            </Container>
        </Container>
    );
};

export default Home;