import React, { Component } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const UI_FIELDS_MARGIN = 16
const UI_INPUT_FIELDS_MARGIN = 8
const UI_ACTION_BUTTON_MARGIN = 24

export default function AadharCardScanner({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Aadhar Card Scaner Screen</Text>
          <TouchableOpacity style = {styles.actionButton} onPress={()=> {
                navigation.navigate('RegisterPatientScreen')
          }}>
        <Text style={{color:'white'}}>Go BACK</Text>
      </TouchableOpacity>
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