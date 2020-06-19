// Aula2 - 18:23
import styled from 'styled-components/native';

// Aula2 - 19:16
// Aula2 - 19:55 padding
export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

// Aula2 - 20:01 removi o background: red;
// Aula2 - 20:18 removi o height: 50px;
export const Header = styled.View`
    justify-content: center;
`;

// Aula2 - 19:31
export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

// Aula2 - 21:43
//  a mesma cor do suggestions
export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 20px;
    padding: 15px;
`;

// Aula2 - 22:36
export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

// Aula2 - 
export const Avatar = styled.Image``;


// Aula2 - 22:50
export const Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;
`;

// Aula2 - 23:05
export const Bold = styled.Text`
    font-weight: bold;
`;

// Aula2 - 23:48
export const CardBody = styled.View`
    margin-top: 20px;
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 20px;
`;

// Aula2 - 25:02
// Aula2 - 31:21 flex-direction
export const CardFooter = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

// Aula2 - 26:51
export const Details = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 15px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;

// Aula2 - 28:03
export const Date = styled.Text`
    color: #fff;
    margin-left: 5px;
`;

// Aula2 - 30:35
// Aula2 - 31:34 flex-direction
export const Actions = styled.View`
    flex-direction: row;

`;

export const Option = styled.TouchableOpacity`
    margin-left: 15px;
    flex-direction: row;
`;

export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;
