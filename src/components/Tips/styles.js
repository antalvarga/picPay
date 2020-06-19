// Aula2 - 34:19
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    }
}))`
    margin-top: 25px;

`;

// Aula2 - 38:31 justify-content
// Aula2 - 40:59 margin-right
export const Option = styled.TouchableOpacity`
    background: ${({ bgColor }) => bgColor};
    width: 150px;
    height: 200px
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
    margin-right: 16px;
`;

// Aula2 - 38:16
export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold
`;

// Aula2 - 38:43 Align-self
export const Img = styled.Image`
    align-self: center;
`;
