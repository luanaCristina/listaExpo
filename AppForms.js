import { StatusBar } from "expo-status-bar"; 
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function AppForm(){
    return(
        <View style = {style.container}>
            <Text>Formulário!</Text>
            <StatusBar style="light"/>
        </View>
    );
    const style = StyleSheet({
       container: {
        flex: 1,      
        backgroundColor: '#D93600',
        alignItems: 'center',
        justifyContent:'center'  
       } 
    })
}