// Aula1 - 0:23:42
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

// Aula1 - 0:25:11
// Passa dentro do parenteses o componente que deseja estilizar
// qd o border-radius é a metade do height ele será um circulo
export const Button = styled(LinearGradient) `
 width: 60px;
 height: 60px;
 border-radius: 30px;
 align-items: center;
 justify-content: center;
`;

//  Aula1 - 0:31:02 : utilizando o parâmetro focused
// export const Label = styled.Text `
//  font-size: 12px;
//   color: #fff;
// `;



export const Label = styled.Text `        
 font-size: 12px;
 color: ${ ({ focused}) => focused ? '#000' : '#fff' };
`;