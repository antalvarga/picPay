import React from 'react';

// Aula2 - 11:35
// Aula2 - 14:13 Option, Img, Label
import { Container, Option, Img, Label } from './styles';

// Aula2 - 14:54
import img1 from '../../images/01.png';

// Aula2 - 16:01
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

// Aula2 - 16:35
// Aula2 - 32:32 - Alteração dos labels abaixo
const items = [
    {
        key: String( Math.random),
        img: img1, 
        label: 'Recarga'
    },

    {
        key: String( Math.random),
        img: img2, 
        label: 'Uber'
    },
    {
        key: String( Math.random),
        img: img3, 
        label: 'Ônibus'
    },
    {
        key: String( Math.random),
        img: img4, 
        label: 'TV'
    },
    {
        key: String( Math.random),
        img: img5, 
        label: 'Doações'
    },
    {
        key: String( Math.random),
        img: img6, 
        label: 'Barras'
    },
    {
        key: String( Math.random),
        img: img7, 
        label: 'FAC'
    },
];


// refatorando com o uso de array
export default function Suggestions () {
    return (
        <Container horizontal>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))}

        </Container>
    );
};