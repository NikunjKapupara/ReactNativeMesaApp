import React, { Component } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const UI_FIELDS_MARGIN = 16
const UI_INPUT_FIELDS_MARGIN = 8
const UI_ACTION_BUTTON_MARGIN = 24

export default function RegisterInstitute ({navigation}) {

    const [instName, setInstName] = useState('')
    const [batchNo, setBatchNo] = useState('')

    return (
        <View style={[styles.container]}>
            <View style={styles.registerUiContainer}>
                
                {/* INSTITUTE NAME */}
                <Text style={styles.fieldNames}>Institute Name:</Text>
                <TextInput style={styles.inputTextFields} 
                    returnKeyType='next' 
                    placeholder='Enter Institute Name' 
                    keyboardType='default' 
                    onChangeText={(text) => setInstName(text)}
                    placeholderTextColor="gray"/>

                {/* BATCH / SERIAL NUMBER */}
                <Text style={styles.fieldNames}>Batch/Serial No:</Text>
                <TextInput style={styles.inputTextFields} 
                    returnKeyType='done' 
                    placeholder='Enter Batch/Serial Number' 
                    keyboardType='default'
                    onChangeText={(text) => setBatchNo(text)}
                    placeholderTextColor="gray"/>

                <TouchableOpacity style = {styles.actionButton} onPress={()=> {
                        /// TODO: Put validaton against UI fields.
                        navigation.navigate('Loginscreen')
                        console.log('Institute Name: '+instName +' Batch No: '+batchNo)
                    }}>
                    <Text style={{color:'white'}}>REGISTER</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: { flex: 1, padding: 16, backgroundColor:'#f0f0f5', justifyContent:'center'},
    
    registerUiContainer: {
        backgroundColor: "#e3e3e8",
        borderRadius:8,
        borderWidth:1,
        borderColor:'#b0b0b5',
        padding:28
    },

    fieldNames:{
        fontStyle:'normal',
        fontSize:15,
        fontWeight:'bold',
        marginTop:UI_FIELDS_MARGIN
    },

    inputTextFields: {
        height:40,
        width:"100%",
        color:'black',
        borderColor:'black',
        borderWidth:1,
        borderRadius:4,
        textAlign:'left',
        paddingStart:8,
        marginTop:UI_INPUT_FIELDS_MARGIN
      },
      actionButton: {
        backgroundColor: 'steelblue',
        padding: 12,
        //width:'75%',
        alignItems:'center',
        color:'white',
        borderRadius:4,
        marginBottom: 16,
        marginTop:UI_ACTION_BUTTON_MARGIN
      },
})