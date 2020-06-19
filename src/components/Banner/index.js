// Aula2 - 41:23
import React from 'react';

// Aula2 - 42:45
// Aula2 - 43:51 Details, Img
// Aula2 - 44:53 Title
// Aula2 - 45:37 Description
import { Container, Details, Img, Title, Description } from './styles';

// Aula2 - 43:44
import img13 from '../../images/13.png';



export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Description>
                    Mantenha suas parcerias em dia, use o picPay para fazer suas cobranças. 
                </Description>
            </Details>

            <Img source={img13} />

        </Container>
    );
}