import React, { Component } from 'react'
import { Text, View , StyleSheet,Image,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen =({navigation})=> {
    return (
      <View style={styles.container}>
        <View>
          <Animatable.Text style={styles.Text} iterationCount='infinite' animation='bounce' duration={4000}>UNITY LEARNING!</Animatable.Text>
          <Animatable.Image
           animation="zoomIn"
           duration={3000}
           source={require('../../assets/images/logo_main.png')} style={styles.Img}/>
        </View>
        <Animatable.View animation='fadeIn' duration={3000}>
            <TouchableOpacity style={styles.btnLogin} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.textLogin}>GET START</Text>
            </TouchableOpacity>
        </Animatable.View>
      </View>
    )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffc107',
    
  },
  btnLogin:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:70,
    paddingVertical:15,
    paddingHorizontal:120,
    borderRadius:50,
    backgroundColor:'#f50057',
    shadowOffset:{  width: 0,  height: 10 },
    elevation:5,
    shadowColor: 'black',
    shadowOpacity: 1.0,

},
  Text:{
    fontWeight:'bold',
    fontSize:20,
    color:'#fff',
  },
  Img:{
    marginTop:30,
    width:140,
    height:130,
    alignSelf:'center',
  },
  textLogin:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  }

})

export default SplashScreen;
