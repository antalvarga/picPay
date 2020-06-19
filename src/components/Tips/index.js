import React from 'react';

// Aula2 - 35:12
// Aula2 - 36:04 Option, Title, Img
import {Container, Option, Title, Img} from './styles';

// Aula2 - 35:52
import img8 from '../../images/08.png';

// Aula2 - 39:06 importar as outras imagens
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

// Aula2 - 39:26 usar vetor
const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172c4a',   
    },

    {
        key: String(Math.random()),
        img: img9,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#6a0159',   
    },
    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#4139c8',   
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#00ab4b',   
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#ba2f76',   
    },


];

// Aula2 - 35:32 img
// Aula2 - 37:39 Option bgColor
export default function Tips() {
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key} bgColor={item.bgColor}>
                    <Title>{item.title}</Title>
                    <Img source={item.img} />
                </Option>
            
            ))}

        </Container>
    );
}