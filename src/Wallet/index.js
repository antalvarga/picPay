// Para a funcionalidade do button eye
// Aula3 - 36:44 - useState 
import React, { useState } from 'react';

//import {Text} from 'react-native';

// Aula3 - 10:10 : Feather
// Aula3 - 12:09 : MaterialCommunity
// Aula3 - 12:49 : FontAwesome
// Aula3 - 29:33 : AntDesign
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';


// Aula3 - 16:21 : Switch
import { Switch } from 'react-native'; 
//import { Switch } from 'react-native-gesture-handler';


// Aula3 - 3:32 : Wrapper
// Aula3 - 4:32 : Header
// Aula3 - 5:23 : HeaderContainer
// Aula3 - 6:35 : Title
// Aula3 - 9:30 : EyeButton 
// Aula3 - 16:30 : UseBalance, UseBalanceTitle
// Aula3 - 20:40 : Card
// Aula3 - 22:40 : CardDetails, CardTitle, CadInfo
// Aula3 - 25:31 : Img
// Aula3 - 28:09 : CardBody
// Aula3 - 30:31 : AddButton, AddLabel
// Aula3 - 33:12 : UseTicketButton, UseTicketLabel
// Aula3 - 34:56 : UseTicketContainer
import { Wrapper
            , Header
            , HeaderContainer
            , Title 
            , BalanceContainer
            , Value
            , Bold
            , EyeButton
            , Info
            , Actions
            , Action
            , ActionLabel
            , UseBalance
            , UseBalanceTitle
            , PaymentMethods
            , PaymentMethodsTitle
            , Card
            , CardBody
            , CardDetails
            , CardTitle
            , CardInfo
            , Img
            , AddButton
            , AddLabel
            , UseTicketButton
            , UseTicketLabel
            , UseTicketContainer
                    
        } from './styles';

// Aula3 - 25:02
import creditCard from '../images/credit-card.png';



// Aula3 - 04:41: Header
// Aula3 - 11:30: Actions
// Aula3 - 18:18: PaymentMethods
// Aula3 - 20:36: Card
// Aula3 - 26:50: resizeMode
// Aula3 - 27:59: CardBody
// Aula3 - 29:17: AddContainer
// Aula3 - 30:22: Alterar AddContainer para AddButton
// Aula3 - 31:00: UseTicketButton, UseTicketLabel
// Aula3 - 34:51: UseTicketContainer
// Aula3 - 36:50: isVisible (funcionalidade button eye)
export default function Wallet() {
    const [ isVisible, setIsVisible ] = useState( true );
    const [ useBalance, setUseBalance ] = useState( true );

    // Habilita a visualização do saldo e altera o icone do olho
    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState );
    }

    // Aula3 - 39:41
    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState );
    }

    return (
        <Wrapper>
{/* 
            <Header colors={[ '#52e78c', '#1ab563' ]}>
            Aula3 - 40:47
            Alterar o cor conforme valor do switch
 */}
            <Header
                colors={
                    useBalance
                        ? [ '#52e78c', '#1ab563' ]
                        : [ '#d3d3d3', '#868686' ]
                }
             
             >

                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
{/* 
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value> 
                        Aula3 - 37:06
*/}
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>


                        <EyeButton onPress={handleToggleVisibility}>
{/*                             
                            <Feather name = "eye" size={28} color="#fff" /> 
*/}

                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>

                    </Actions>
                </HeaderContainer>
            </Header>
            
            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>
{/* 
                <Switch />
                Aula3 - 40:20
 */}
                <Switch 
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />

            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Formas de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de crédito
                            </CardTitle>
                            <CardInfo>
                                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu picPay

                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain"/>
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0db060" />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>

                </Card>

                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                        <UseTicketLabel>
                            Usar código promossional
                        </UseTicketLabel>
                    </UseTicketButton>

                </UseTicketContainer>
                
            </PaymentMethods>
        </Wrapper>
    );
}