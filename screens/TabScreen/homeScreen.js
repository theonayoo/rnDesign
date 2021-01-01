import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,ScrollView,TouchableOpacity,Image,FlatList } from 'react-native';

const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

const DATA = [
      {
        id: '01',
        image:require('../../assets/images/img_learn_1.jpg'),
        intructor:'Theo',
        title: 'Python Course',
        desc:'The course is designed to provide an introduction to the Python programming language.',
        dateTime:'3 minus ago'
      },
      {
        id: '02',
        image:require('../../assets/images/img_learn_2.jpg'),
        intructor:'Phone Nyo',
        title: 'IELTS Course',
        desc:'The course is designed to provide an introduction to the English language.',
        dateTime:'1 days ago'
      },
      {
        id: '03',
        image:require('../../assets/images/img_learn_3.jpg'),
        intructor:'Theo',
        title: 'Java Course',
        desc:'The course is designed to provide an introduction to the Java programming language.',
        dateTime:'4 days ago'
      },
      {
        id: '04',
        image:require('../../assets/images/img_learn_4.jpg'),
        intructor:'Phone Nyo',
        title: 'React Course',
        desc:'The course is designed to provide an introduction to the React programming language.',
        dateTime:'1 hours ago'
      },
      {
        id: '05',
        image:require('../../assets/images/img_learn.jpg'),
        intructor:'Theo',
        title: 'React Native Course',
        desc:'The course is designed to provide an introduction to the React Native programming language.',
        dateTime:'2 hours ago'
      }
]

const headData =[
    {
        id:'01',
        title:'Software Engineering'
    },
    {
        id:'02',
        title:'IELTS COURSE'
    },
    {
        id:'03',
        title:'JAVA COURSE'
    },
    {
        id:'04',
        title:'PYTHON COURSE'
    },
]

export default homeScreen=({navigation})=> {

    const Item = ({items})=>{
        return(
            <View style={{marginTop:10}}>
                <View style={styles.listContent}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Details',{data:items})}>
                        <View style={styles.listItem}>
                            <View>
                                <Image source={items.image} style={styles.listImg}/>
                                <Text style={{marginTop:10}}>Instructor - {items.intructor} </Text>
                            </View>
                            <View style={styles.listTextConent}>
                                <Text style={styles.listText}> {items.title}</Text>
                                <Text style={styles.listDes}> {items.desc} </Text>
                                <Text style={{color:'#252526',alignSelf:'flex-end',marginTop:10,fontSize:10}}>Post: {items.dateTime}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>      
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollConent} showsHorizontalScrollIndicator={false}>
                <View style={styles.slideLearn}>
                    {headData.map((item)=>{
                        return(
                            <View style={styles.slideContent} key={item.id}>
                                <Text style={{color:'#fff',fontWeight:'bold',fontSize:17}}>{item.title}</Text>
                                <TouchableOpacity style={styles.footerEnrol}>
                                    <Text style={{alignSelf:'center'}}>Enroll</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                    <View>
                        <TouchableOpacity style={styles.slideContent_3} onPress={()=>navigation.navigate('Details')}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>See More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <FlatList 
                data={DATA}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <Item items={item}/>
                    )
                }
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    slideLearn:{
        flexDirection:'row'
    },
    scrollConent:{
        height:(height/4)+70
    },
    listContent:{
        alignItems:'center',
        
    },
    footerEnrol:{
        backgroundColor:'#8BC34A',
        justifyContent:'center',
        padding:10,
        width:width/3,
        marginBottom:-65,
        alignSelf:'center',
        borderRadius:50
    },
    footerEnrol_1:{
        backgroundColor:'#FFC107',
        justifyContent:'center',
        padding:10,
        width:width/3,
        marginBottom:-65,
        alignSelf:'center',
        borderRadius:50

    },
    footerEnrol_2:{
        backgroundColor:'#03A9F4',
        justifyContent:'center',
        padding:10,
        width:width/3,
        marginBottom:-65,
        alignSelf:'center',
        borderRadius:50,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1.0,
        shadowColor:'#000',

    },
    slideContent:{
        backgroundColor:'#388E3C',
        borderWidth:1,
        borderStyle:"solid",
        borderColor:'#858585',
        width:width/2,
        height:height/5,
        marginTop:10,
        borderRadius:5,
        marginHorizontal:5,
        padding:10,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1.0,
        shadowColor:'#000',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    slideContent_1:{
        backgroundColor:'#FFA000',
        borderWidth:1,
        borderStyle:"solid",
        borderColor:'#858585',
        width:width/2,
        height:height/5,
        marginTop:10,
        borderRadius:5,
        marginHorizontal:5,
        padding:10,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1.0,
        shadowColor:'#000',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    slideContent_2:{
        backgroundColor:'#1976D2',
        borderWidth:1,
        borderStyle:"solid",
        borderColor:'#858585',
        width:width/2,
        height:height/5,
        marginTop:10,
        borderRadius:5,
        marginHorizontal:5,
        padding:10,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1.0,
        shadowColor:'#000',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    slideContent_3:{
        backgroundColor:'#ddd',
        borderWidth:1,
        borderStyle:"solid",
        borderColor:'#858585',
        width:width/2,
        height:height/5,
        marginTop:10,
        borderRadius:5,
        marginHorizontal:5,
        padding:10,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1.0,
        shadowColor:'#000',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    listItem:{
        backgroundColor:'#fff',
        width:width-20,
        height:height/5,
        borderRadius:10,
        padding:5,
        borderWidth:1,
        borderColor:'#ddd',
        margin:5,
        flexDirection:'row',
        alignItems:'flex-start'
    },
    listImg:{
        height:(height/5)-50,
        width:((width-20)/2)-20,
        borderRadius:8

    },
    listTextConent:{
        height:(height/5)-20,
        width:((width-20)/2)-20,
        marginLeft:10,
    },
    listText:{
        fontWeight:'bold',
        fontSize:17,
        color:'green'
    },
    listDes:{
        marginTop:5,
        color:'#252526'
    }
})
