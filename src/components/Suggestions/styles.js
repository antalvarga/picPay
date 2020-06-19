import styled from 'styled-components/native';


// Aula2 - 11:20 ScrollView horizontal (para os lados)
// A ScrollView não aceita align-items
// export const Container = styled.ScrollView`
// Aula2 - 33:10 - Desabilitar a barra no scroll -> showsHorizontalScrollIndicator: false,
export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}) )`
    background: #1e222b;
    height: 130px;
`;

// Aula2 - 15:01
export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image``;


export const Label = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
`;
