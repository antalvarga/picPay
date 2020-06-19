import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons} from '@expo/vector-icons';

// botão pay 
import PayButton from './components/payButton';

import HomeScreen from './Home';
import WalletScreen from './Wallet';
import PayScreen from './Pay';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    //Aula1 - 0:22:45
    // Pay: {
    //     lib: AntDesign,
    //     name: 'home',
    // },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    },
}

// Aula1 - 0:28:51
// botao pay náo esta renderizando por isso devo usar a propriedade navigation
// Aula1 - 0:29:58 : focused
// Aula1 0:23:14 : if( route.name === 'Pay'){
// Aula1 - 0:29:00 passando a tela que eu quero rederizar
// onPress={() => navigation.navigate('Pay')}
// Aula3 - 2:13 initialRoutName 
export default function Navigation() {
    return (
        <Tab.Navigator 
            initialRoutName="Wallet"
            screenOptions={ ( {route, navigation}) => ({
                
                tabBarIcon: ({ color, size, focused  }) => {
                    
                    if( route.name === 'Pay'){
                        return (
                            <PayButton 
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        );                     
                    }

                    const {lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color}  />;
                },
            })}
            // Aula1 - 0:20:06
            tabBarOptions = {{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ 
                    title: 'Inicio',
                }} 
            />

            <Tab.Screen 
                name="Wallet" 
                component={WalletScreen}
                options={{ 
                    title: 'Carteira',
                }}         
            />

            <Tab.Screen 
                name="Pay" 
                component={PayScreen}
                options={{ 
                    // Aula1 - 22:58 title: 'Pagar',
                    title: '',
                }}                 
            />

            {/* Vou criar outros dois menus mas náo criaremos as funcionalidades */}

            <Tab.Screen 
                name="Notifications" 
                // Como não criaremos um tela pra esse caso 
                // renderizamos o PayScreen
                component={PayScreen}
                options={{ 
                    title: 'Notificaçoes',
                }}               
            />

            <Tab.Screen 
                name="Settings" 
                // Como não criaremos um tela pra esse caso 
                // renderizamos o PayScreen
                component={PayScreen}
                options={{ 
                    title: 'Ajustes',
                }}                 
            />

        </Tab.Navigator>
    );
}
