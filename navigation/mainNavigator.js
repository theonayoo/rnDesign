import React, { Component } from 'react'
import { Text, View , TouchableOpacity, Alert} from 'react-native';

import SplashScreen from '../screens/IntroScreen/splashScreen';
import LoginScreen from '../screens/IntroScreen/loginScreen';
import RegisterScreen from '../screens/IntroScreen/registerScreen';
import HomeScreen from '../screens/TabScreen/homeScreen';
import CategoryScreen from '../screens/TabScreen/categoryScreen';
import MessageScreen from '../screens/TabScreen/messageScreen';
import ProfileScreen from '../screens/TabScreen/profileScreen';
import DetailScreen from '../screens/detailsScreen';
import Notification from '../screens/notiScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionic from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons'

const splashStack = createStackNavigator();
const homeStack = createStackNavigator();
const categoryStack = createStackNavigator();
const messageStack = createStackNavigator();
const profileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TabScreen =()=>{
    return(
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor:'#ff8800',
            inactiveTintColor:'#0D1919'
        }}
        >
            <Tab.Screen 
                name="Home" 
                component={homeStackScreen} 
                options={{title:'Home',
                tabBarIcon:({color})=>(
                    <Ionic name='home' size={23} color={color}/>
                )}}
            />
            <Tab.Screen 
                name="Category" 
                component={categoryStackScreen}
                options={{title:'Category', 
                tabBarIcon:({color})=>(
                    <IconMat name='category' size={23} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Message' 
                component={messgaeStackScreen} 
                options={{title:'Message',
                tabBarIcon:({color})=>(
                    <IconMat name='message' size={23} color={color}/>
                )}}
            />
            <Tab.Screen 
                name='Profile' 
                component={profileStackScreen} 
                options={{title:'Profile',
                tabBarIcon:({color})=>(
                    <IconMat name='person' size={23} color={color}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

const mainNavigation =()=>{
        return (
            <splashStack.Navigator headerMode={false} initialRouteName="Splash">
                <splashStack.Screen name="Splash" component={SplashScreen}/>
                <splashStack.Screen name="Login" component={LoginScreen}/>
                <splashStack.Screen name="Register" component={RegisterScreen}/>
                <splashStack.Screen name="mainScreen" component={TabScreen}/>
                <splashStack.Screen name="Notification" component={Notification}/>
                <splashStack.Screen name="Details" component={DetailScreen}/>
            </splashStack.Navigator>
        )
    }

const homeStackScreen =({navigation})=>(
    <homeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#ffc107'
        },
        headerTintColor:'#0D1919',
        headerTitleAlign:'center',
        headerLeft:false,
        headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                <Ionic name='notifications-outline' size={23} color='#0D1919' style={{marginRight:20}}/>
            </TouchableOpacity>
            
        )
      }}>
        <homeStack.Screen name='Unity Learning !' component={HomeScreen}/>
    </homeStack.Navigator>
)

const categoryStackScreen =()=>(
    <categoryStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#ffc107'
        },
        headerTintColor:'#0D1919',
        headerTitleAlign:'center',
        headerLeft:false,
        headerRight:()=>(
            <TouchableOpacity onPress={()=>Alert.alert('Information', 'Notification details coming soon')}>
                <Ionic name='notifications-outline' size={23} color='#0D1919' style={{marginRight:20}}/>
            </TouchableOpacity>
        )
      }}>
        <categoryStack.Screen name='Unity Learning !' component={CategoryScreen}/>
    </categoryStack.Navigator>
)

const messgaeStackScreen =()=>(
    <messageStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#ffc107'
        },
        headerTintColor:'#0D1919',
        headerTitleAlign:'center',
        headerLeft:false,
        headerRight:()=>(
            <TouchableOpacity onPress={()=>Alert.alert('Information','Notification details coming soon')}>
                <Ionic name='notifications-outline' size={23} color='#0D1919' style={{marginRight:20}}/>
            </TouchableOpacity>
        )
      }}>
        <messageStack.Screen name='Unity Learning !' component={MessageScreen}/>
    </messageStack.Navigator>
)

const profileStackScreen =()=>(
    <profileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#ffc107'
        },
        headerTintColor:'#0D1919',
        headerTitleAlign:'center',
        headerLeft:false,
        headerRight:()=>(
            <TouchableOpacity onPress={()=>Alert.alert('Information','Notification details coming soon')}>
                <Ionic name='notifications-outline' size={23} color='#0D1919' style={{marginRight:20}}/>
            </TouchableOpacity>
        )
      }}>
        <profileStack.Screen name='Unity Learning !' component={ProfileScreen}/>
    </profileStack.Navigator>
)


export default mainNavigation;

