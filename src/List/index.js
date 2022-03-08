import React from "react";
import {
    View,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Animated,
    StatusBar,
    animatedTranslateYOptions
} from 'react-native'; import { logo } from '../../assets/index'


export const ListUrls = () => {


    return (
        <KeyboardAvoidingView style={styles.background} >

            <View style={{ width: 40, height: 40 }} />

            
            {/* statusbar dark usado na tela login */}
            <StatusBar
                backgroundColor="#ffffff"
                barStyle="dark-content"
            />

            <Animated.View style={[styles.container, animatedTranslateYOptions]}>

                <View style={styles.sectionStyle}>
                    <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor='#444' autoCorrect={false} autoCapitalize="none" />
                </View>


                <View style={styles.sectionStyle}>
                    <TextInput style={styles.input} placeholder="Senha" placeholderTextColor='#444' autoCorrect={false} autoCapitalize="none" />
                </View>

                <View style={{ width: 40, height: 40 }} />

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textButton}>ACESSAR</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 80 }} >
                    <Text style={styles.version}>Alterar Servidor</Text>
                </View>

            </Animated.View>


        </KeyboardAvoidingView>
    );
}



const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#009999'
        backgroundColor: '#ffffff',
    },
    logo: { //New Image:363x125 pixels( 39.5 KB )
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: 'transparent',
        width: '80%',
        //color: '#FFF',
        color: '#000000',
        padding: 10,
        fontSize: 17,
        borderRadius: 8,
        height: 45,
    },
    button: {
        //backgroundColor: '#FFF',
        backgroundColor: '#009999',
        width: '85%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 1
    },
    iconStyle: {
        height: 30,
        width: 30,
        alignItems: 'center',

    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: 40,
        margin: 10,
    },
    textError: {
        position: 'absolute',
    },
    version: {
        color: '#a6a6a6',
        letterSpacing: 1
    },

});
