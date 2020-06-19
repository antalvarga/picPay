// Aula 2 - 3:00

import styled from 'styled-components/native';

// Aula2 - 3:49
export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

// Aula2 - 9:57 scroll view
export const Container = styled.ScrollView`

`;


// Aula2 - 5:54
export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
    color: rgba( 255, 255, 255, 0.8);
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;
