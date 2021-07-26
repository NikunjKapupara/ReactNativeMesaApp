import React, { Component } from 'react';

import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class LandingScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
            <TouchableOpacity style = {styles.actionButton} onPress={()=>{
                 navigate('RegisterPatientScreen')
            }}>
          <Text style={{color:'white'}}>START NEW TEST</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  //container: { flex: 1, padding: 16, backgroundColor:'#f0f0f5', justifyContent:'center'},
  actionButton: {
    backgroundColor: 'steelblue',
    padding: 12,
    //width:'75%',
    alignItems:'center',
    color:'white',
    borderRadius:4
  }
})