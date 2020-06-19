// Aula2 - 18:01
import React from 'react';

// Aula2 - 27:16 importar o cadeado
// Aula2 - 29:31 importar ícone de mensagens 
// Aula2 - 30:13 importar icone coração
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

// Aula2 - 19:01
// Aula2 - 21:36 - , Card, CardHeader, Avatar, Description, Bold
// Aula2 - 23:40 - CardBody, UserName
// Aula2 - 28:00 - Date, DateLabel
// Aula2 - 28:36 - DateLabel removido
// Aula2 - 30:30 - Actions, Options, OptionLabel
import {Container
    , Header
    , Title
    , Card
    , CardHeader
    , Avatar
    , Description
    , Bold 
    , CardBody
    , UserName
    , CardFooter
    , Details
    , Value
    , Divider
    , Date
    , Actions
    , Option
    , OptionLabel

} from './styles';

// Aula2 - 21:03 - importar o avatar
import avatar from '../../images/avatar.png';


// Aula2 - 23:30 <CardBody>
// Aula2 - 24:34 <CardFooter
// Aula2 - 26:05 <Divider
// Aula2 - 27:34 <Date
// Aula2 - 29:03 <Actions  (ícones mensagens e coracáo)
export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@mateussilva</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Mateus Silva</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider />
                        
                        <Feather name="lock" color="#fff" size={16}/>
                        <Date>há 2 anos</Date>
                    
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline"  size={14} color="#fff" />
                        </Option>
                        <OptionLabel>0</OptionLabel>

                        <Option>
                            <AntDesign name="hearto"  size={14} color="#fff" />
                        </Option>
                        <OptionLabel>0</OptionLabel>

                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
