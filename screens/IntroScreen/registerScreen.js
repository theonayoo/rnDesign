import React, { Component } from 'react'
import {
    Text, 
    View , 
    StyleSheet,
    TextInput,Image,
    TouchableOpacity,
    Alert,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const registerScreen =({navigation})=>{
    const [iconData, seticonData] = React.useState({
        email:'',
        passowrd:'',
        confirmpassword:'',
        check_InputChange:false,
        secureTextEntry:true,
        con_secureTextEntry:true
    })

    const inputTextChange = (value)=>{
        if(value != 0){
            seticonData({
                ...iconData,
                email:value,
                check_InputChange:true
            })
        }else{
            seticonData({
                ...iconData,
                email:value,
                check_InputChange:false
            })
        }
    }

    const inputPasswordChange =(value)=>{
        seticonData({
            ...iconData,
            passowrd:value
        })
    }

    const inputConPasswordChange =(value)=>{
        seticonData({
            ...iconData,
            confirmpassword:value
        })
    }

    const secureTextChage=()=>{
        seticonData({
            ...iconData,
            secureTextEntry:!iconData.secureTextEntry
        })
    }

    const secureConTextChage=()=>{
        seticonData({
            ...iconData,
            con_secureTextEntry:!iconData.con_secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.loginTitle}>UNITY LEARNING!</Text>
                <Animatable.Image 
                    animation='zoomIn' 
                    duration={3000} 
                    source={require('../../assets/images/img.webp')} 
                    style={styles.Img}/>
            </View>
            <Animatable.View 
                style={styles.loginfooter} 
                animation='fadeInUp' 
                duration={2000}>
                <View>
                    <View>
                        <View style={{alignSelf:'center'}}>
                            <TouchableOpacity style={styles.logintext}>
                                <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>REGISTER</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContent}>
                            <Icon 
                                name="ios-person" 
                                size={23} 
                                color="#0D1919"/>
                            <TextInput 
                                style={styles.input} 
                                placeholder='User Name' 
                                placeholderTextColor='#0D1919'
                                onChangeText={(value)=>inputTextChange(value)}
                                textContentType='emailAddress'
                            />
                            {iconData.check_InputChange ?
                            <Icon 
                                name='checkmark-done' 
                                size={20} color='#0D1919'
                            />:null}
                        </View>
                    </View>
                    <View>
                        <View style={styles.inputPassword}>
                            <Icon 
                                name="ios-lock-closed" 
                                size={23} 
                                color="#0D1919"/>
                            <TextInput 
                                style={styles.input} 
                                placeholder='Password' 
                                placeholderTextColor='#0D1919' 
                                secureTextEntry={iconData.secureTextEntry? true:false}
                                onChangeText={(value)=>inputPasswordChange(value)}
                                />
                            <TouchableOpacity onPress={()=>secureTextChage()}>
                                {iconData.secureTextEntry?
                                    <Icon 
                                    name='eye-off' 
                                    size={20} 
                                    color='#0D1919'/>
                                    :
                                    <Icon 
                                    name='eye' 
                                    size={20} 
                                    color='#0D1919'/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={styles.inputPassword}>
                            <Icon 
                                name="ios-lock-closed" 
                                size={23} 
                                color="#0D1919"/>
                            <TextInput 
                                style={styles.input} 
                                placeholder='Confirn Passowrd' 
                                placeholderTextColor='#0D1919' 
                                secureTextEntry={iconData.con_secureTextEntry?true:false}
                                onChangeText={(value)=>inputConPasswordChange(value)}
                            />
                            <TouchableOpacity onPress={()=>secureConTextChage()}>
                                {iconData.con_secureTextEntry?
                                    <Icon 
                                    name='eye-off' 
                                    size={20} 
                                    color='#0D1919'/>
                                    :
                                    <Icon 
                                    name='eye' 
                                    size={20} 
                                    color='#0D1919'/>
                                }
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btnLogin} onPress={()=>Alert.alert("Register Success!")}>
                            <Text style={styles.textLogin}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnReg} onPress={()=>navigation.goBack()}>
                            <Text style={styles.textReg}>Login</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style={{alignSelf:'center',marginTop:30}}>
                        <TouchableOpacity>
                            <Text style={{textDecorationLine:'underline'}}>Terms of Use & Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'column',
        justifyContent:'center',
    },
    header:{
        flex:1,
        padding:30,
        alignItems:'center'
    },
    loginfooter:{
        flex:3,
        backgroundColor:'#ffc107',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        padding:30
    },
    loginTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#0D1919'
    },
    textLogin:{
        fontSize:16,
        fontWeight:'bold',
        color:'#0D1919'
    },
    textReg:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'
    },
    Img:{
        marginTop:30,
        width:100,
        height:95,
    },
    input:{
        width:'90%',
        marginLeft:30,
        color:'#0D1919'
    },
    inputContent:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        borderWidth:0.5,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor:'#0D1919',
        justifyContent:'space-evenly',
    },
    inputPassword:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        borderWidth:0.5,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor:'#0D1919',
        justifyContent:'space-evenly',
        marginTop:30,
    },
    btnLogin:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:70,
        paddingVertical:15,
        borderRadius:50,
        backgroundColor:'#ffeb3b',
        shadowOffset:{  width: 0,  height: 10 },
        elevation:5,
        shadowColor: 'black',
        shadowOpacity: 1.0,

    },
    btnReg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        paddingVertical:15,
        borderRadius:50,
        backgroundColor:'#f50057',
        shadowOffset:{  width: 0,  height: 10 },
        elevation:5,
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    logintext:{
        marginTop:-50,
        backgroundColor:'#f50057',
        paddingHorizontal:70,
        alignItems:'center',
        justifyContent:'center',
        shadowOffset:{  width: 5,  height: 10 },
        elevation:5,
        shadowColor: 'green',
        shadowOpacity: 1.0,
        borderBottomLeftRadius:30,
        borderTopRightRadius:30
        
    }
})
export default registerScreen;
