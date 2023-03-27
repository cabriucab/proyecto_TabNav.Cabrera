import { StyleSheet, Text, View, ImageBackground, Image, Animated } from 'react-native'
import React from 'react' 
import { useEffect, useState } from 'react'
import MainNavigator from '../navigators/MainNavigator'


const image = require('../../assets/imagenFondo.png')
const imageLogo = require('../../assets/logo.png')

export default function Intro({navigation}) {

const [fadeIn, setFadeIn] = useState(new Animated.Value(0))


    useEffect(() => {
        

        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 7000,
            useNativeDriver: true
        }).start()

        setTimeout(() => {
          
         
        }, 8000)
    });

    return (

        <View style={styles.screen}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.textoBienvenida}> Bienvenidos! </Text>
                <Animated.Image source={imageLogo} style={[styles.imageLogo, {opacity:fadeIn} ]} />
            </ImageBackground>
        </View>



    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },



    imageLogo: {
        width: 450,
        height: 450,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
       
    },

    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%',
       
    },

    textoBienvenida: {
        color: 'white',
        fontSize: 60,
       
    }

})