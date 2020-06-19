// Aula3 - 3:00
import styled from 'styled-components/native';

// Aul3 - 4:15
import { LinearGradient } from 'expo-linear-gradient';

// Aula3 - 5:07 não pode usar a SafeAreaView pq a barra de notificaçõe ficará preta
export const Wrapper = styled.View`
    background: #000;
    flex:1;
`;

// Aula3 - 3:53 
export const Header = styled( LinearGradient )`
    height: 300px;
`;

// Aula3 - 5:16 
export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

// Aula3 - 6:21
export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;

`;

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: 200;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba( 255, 255, 255, 0.4);
    width: 150px;
    height: 45px;
    border-radius: 25px;
    margin: 0 10px;
`;

export const ActionLabel = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
`;

// Aula3 - 16:35
export const UseBalance = styled.View`
    background: #1c1c1e;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;

// Aula3 - 18:35
export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

// text-transform : transforma em maiúscula
export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
`;

// Aula3 - 20:48 
// Aula3 - 24:45 : Aumentou o paddin de 15 para 20px
// Aula3 - 25:30 : flex-direction 
// Aula3 - 29:03 : Transferi o flex-direction para o CardBody
export const Card = styled.View`
    background: #1e232a;
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
    
`;

// Aula3 - 28:14: CardBody
export const CardBody = styled.View`
    flex-direction: row;
`;


// Aula3 22:43
// Aula3 25:54 
export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`;

export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const CardInfo = styled.Text`
    font-size: 16px;
    color: rgba( 255, 255, 255, 0.6);
    margin-top: 15px;

`;

// Aula3 - 25:35
export const Img = styled.Image`
    width: 70px;

`;

// Aula3 - 30:31
export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const AddLabel = styled.Text`
    color: #0db060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`;

// Aula3 - 35:01
export const UseTicketContainer = styled.View`
    align-items: center;
    margin-top: 25px;
`;


// Aula3 - 33:17
export const UseTicketButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 25px 25px;
`;

export const UseTicketLabel = styled.Text`
    color: #0db060;
    font-size: 16px;
    font-weight: bold;
    margin-left: 15px;
    text-decoration-line: underline;
`;
