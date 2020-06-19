import React from 'react';
import {Text} from 'react-native';

// Aula2 5:11 - AntDesign 8:32
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

// Aula2 3:32
// Aula2 5:54
// Container Aula2 - 10:12
import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

// Aula2 - 10:54
import Suggestions from '../components/Suggestions';

// Aula2 - 18:16
import Activities from '../components/Activities';

// Aula2 - 34:07
import Tips from '../components/Tips';

// Aula2 - 41:41
import Banner from '../components/Banner';

export default function Home() {
    // Aula2 3:42
    // return <Text>Home</Text>;

    // Aula2 - 18:19 - renderizar Activities
    // Aula2 - 34:11 - rederizar Tips
    // Aula2 - 41:42 - renderizar Banner
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                    
                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>
                <Suggestions />
                <Activities />
                <Tips /> 
                <Banner />
            </Container>
        </Wrapper>
    );

}
