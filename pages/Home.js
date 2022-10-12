import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";

export default class Signin extends Component{
  constructor(props){
    super(props)
    this.state={
 
    }
  }
  render(){
    return(
      <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
     
        <TouchableOpacity onPress={() => this.props.navigation.navigate(Signin)} style={{width:'100%'}} ><Image style={{height:120,width:"90%",alignSelf:'center'}} resizeMode='contain' source={require('../Images/logo.jpeg')}/></TouchableOpacity>
         <Text style={{marginTop:10,fontSize:15,alignSelf:'center',fontWeight:'bold'}}>All Type of News from Trusted source</Text>
        <Text style={{fontSize:15,alignSelf:'center',fontWeight:'bold'}}>Type of people</Text>
      </SafeAreaView>
    );
  }
}