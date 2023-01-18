import React from "react";
import { Image, StatusBar, Text, View } from "react-native";

import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
    return(
        <View style={styles.container}>
            <Image 
                source={IllustrationImg} 
                style={styles.image}
                resizeMode="stretch" 
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {'\n'}
                    suas jogatinas  {'\n'}
                    facilmente 
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games  {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entre com o Discord" 
                />
            </View>
        </View>
    )
}