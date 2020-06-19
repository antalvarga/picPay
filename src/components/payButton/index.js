// Aula1 - 0:21:38
import React from 'react';
// Aula1 - 0:25:46 import {Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Aula1 0:28:09 
// Para que náo tenha nenhum efeito qd a pessoa clicar no botão
import { TouchableWithoutFeedback } from 'react-native';

// Aula1 0:27:20
import {Button, Label} from './styles';

// Aula1 - 0:29:29 recebendo parametro na PayButton
export default function PayButton( {onPress, focused} ) {
    // Aula1 - 0:25:45
    // return <Text style={{color: '#fff'}}>PayButton</Text>
    return (
        // Aula1 - 0:28:21 ~ 0:29:32
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                // cores para fazer o gradiente
                // Aula1 - 30:27: Alterei propriedade colors
                // colors={['#00fc6c', '#00ac4a']}
                colors = {
                    focused 
                        ? ['#fff', '#ccc'] // '#ccc']
                        : ['#00fc6c', '#00ac4a']
                }
                start={[1, 0.2]}
            >
                {/* Aula1 - 0:30:44 :
                <MaterialIcons name = "attach-money" size = {30} color = "#fff" /> */}
                <MaterialIcons 
                    name = "attach-money" 
                    size = {30} 
                    color = {focused ? '#000' : '#fff'}
                />
                {/* Aula1 - 0:27:20 */}
                {/* Aula1 - 0:30:54 : Passando o parâmetro focused para o styled components */}
                <Label focused={focused}>Pagar</Label>
            </Button>
        </TouchableWithoutFeedback>
    );
}
