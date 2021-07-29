import React, { Component } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';

const radioButtonsGenderData = [{
  id: '1', 
  label: 'Male',
  value: 'male',
  color:'#1359d1'
}, 
{
  id: '2',
  label: 'Female',
  value: 'female',
  color:'#1359d1'
},
{
  id: '3',
  label: 'Other',
  value: 'other',
  color:'#1359d1'
}]

export default function RegisterPatient({navigation}) {
    
    const [radioButtons, setRadioButtons] = useState(radioButtonsGenderData)
    
    function onContinueButtonClicked() {
        /// Navigate to next screen from here. Ex: Camera Screen
        //navigation.navigate('') /// PUT YOUR Screen name
    }

    function onPressRadioButton(radioButtonsArray) {
      
    }

    function onScanAadharButtonClicked() {
        /// Navigate to next screen from here. Ex: Scanner Screen
        navigation.navigate('AadharCardScannerScreen')
    }
    return (
        <View style={[styles.container]}>

        <View style={styles.patientUiContainer}>

          <TouchableOpacity style = {styles.scanAadharButton} onPress={onScanAadharButtonClicked}>
            <Text style={{color:'white'}}>Scan Aadhar Card</Text>
          </TouchableOpacity>

          <Text style={{color:'black', textAlign:'center', marginVertical:16}}>--- OR ---</Text>

          {/* PATIENT NAME */}
          <View style={styles.rowUi}>
            <Text style={styles.fieldNames}>Name</Text>
            <TextInput style={styles.inputTextFields} 
              returnKeyType='next' 
              placeholder='Enter Patient Name' 
              keyboardType='default' 
              onChangeText={(text)=> { }}
              placeholderTextColor="gray"/>

          </View>


          {/* AGE */}
          <View style={styles.rowUi}>
            <Text style={styles.fieldNames}>Age</Text>
            <TextInput style={styles.inputTextFields} 
              returnKeyType='next' 
              placeholder='Enter Patient Age' 
              keyboardType='number-pad' 
              onChangeText={(text)=> { }}
              placeholderTextColor="gray"/>

          </View>


          {/* GENDER */}
          <View style={styles.rowUi}>
            <Text style={styles.fieldNames}>Gender</Text>
            <View style={styles.genderRadioContainer}>
              <RadioGroup style={styles.genderRadioGroup}
                  layout = {'row'}
                  radioButtons={radioButtons} 
                  onPress={onPressRadioButton} />
            </View>
            
          </View>


          {/* MOBILE NO */}
          <View style={styles.rowUi}>
            <Text style={styles.fieldNames}>Mobile No</Text>
            <TextInput style={styles.inputTextFields} 
              returnKeyType='next' 
              placeholder='Enter Patient Mobile Number' 
              keyboardType='number-pad' 
              onChangeText={(text)=> { }}
              placeholderTextColor="gray"/>

          </View>
        

          {/* AADHAR NUMBER */}
          <View style={styles.rowUi}>
              <Text style={styles.fieldNames}>Aadhar No</Text>
              <TextInput style={styles.inputTextFields} 
                returnKeyType='next'
                placeholder='Enter Patient Aadhar Number' 
                keyboardType='number-pad' 
                onChangeText={(text)=> { }}
                placeholderTextColor="gray"/>
          </View>

          <TouchableOpacity style = {styles.actionButton} onPress={onContinueButtonClicked}>
              <Text style={{color:'white'}}>SUBMIT</Text>
          </TouchableOpacity>

        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 16, backgroundColor:'#f0f0f5', justifyContent:'flex-start'},
    patientUiContainer: {
      //backgroundColor: "#e3e3e8",
      backgroundColor:'transparent'
      // borderRadius:8,
      // borderWidth:1,
      // borderColor:'#b0b0b5',
      
    },
    rowUi: {
        flexDirection:'row',
        // backgroundColor:'cyan',
        marginHorizontal:4,
        marginVertical:4
    },
    fieldNames:{
      flex:.2,
      //backgroundColor:'gray',
      fontStyle:'normal',
      fontSize:13,
      //fontWeight:'bold',
      alignSelf:'center',
      textAlign:'right'
      
  },
    inputTextFields: {
      height:40,
      flex:.8,
      color:'black',
      borderColor:'skyblue',
      borderWidth:1,
      borderRadius:4,
      fontSize:13,
      textAlign:'left',
      paddingStart:8,
      marginStart:16,
      marginEnd:16
      //marginTop:UI_INPUT_FIELDS_MARGIN
    },
    actionButton: {
      backgroundColor: 'steelblue',
      padding: 12,
      width:'73%',
      alignSelf:'flex-end',
      //marginHorizontal:'5%',
      marginEnd:'5%',
      alignItems:'center',
      color:'white',
      borderRadius:4,
      marginTop:24
    },
    scanAadharButton: {
      backgroundColor: 'steelblue',
      padding: 12,
      width:'73%',
      alignSelf:'flex-end',
      marginHorizontal:'5%',
      alignItems:'center',
      color:'white',
      borderRadius:4,
      //marginBottom: 16,
      marginTop:24,
    },
    genderRadioContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-start',
      height:40,
      flex:.8,
      //borderColor:'skyblue',
      //borderWidth:1,
      marginStart:16,
      marginEnd:16,
      //borderRadius:4,
      paddingStart:8,
    },
    genderRadioGroup:{
      height:40,
      flex:.8,
      borderColor:'skyblue',
      backgroundColor:'blue',
      //borderWidth:1,
      //borderRadius:4,
      //fontSize:13,
      //textAlign:'left',
      //paddingStart:8,
      //marginStart:16,
    }
  })