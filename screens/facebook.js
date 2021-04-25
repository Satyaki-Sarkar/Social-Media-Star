import React,{Component} from 'react';
import {View, Image, StyleSheet} from 'react-native'

export default class Facebook extends Component{
  render(){
    return(
      <View style={styles.screenStyles}>
        <Image
              style={{width : 48, height : 42}}
              source={require('../images/facebook.png')}
            />
      </View>
    )
  }
}

var styles=StyleSheet.create({
  screenStyles:{
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  }
})