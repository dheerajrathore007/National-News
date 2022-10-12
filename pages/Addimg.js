import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from "react-native";

export default class Addimg extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <SafeAreaView>
      <ScrollView>
        <View>
            <TouchableOpacity><Image  style={{height:30,width:40,margin:20,tintColor:'cyan'}} source={require('../Images/arrowback.png')}/></TouchableOpacity>
            <View style={{borderBottomWidth:1}}></View>
            <TouchableOpacity>
            <View style={{width:'80%',height:150,borderWidth:1,marginTop:10,marginLeft:"5%",borderRadius:10,backgroundColor:'grey'}}>
              <Image style={{width:40,height:40,alignSelf:'center',marginTop:50}} source={require('../Images/plus.jpg')}/>
              <Text style={{alignSelf:'center'}}>Add Post image</Text>
            </View>
            </TouchableOpacity>
            <TextInput style={{borderWidth:1,margin:15,width:'90%',borderRadius:10,alignSelf:"center"}} placeholder="Add Heading"></TextInput>
            <TextInput style={{borderWidth:1,margin:15,width:'90%',borderRadius:10,alignSelf:'center'}} placeholder="Add Tags"></TextInput>
            <TextInput style={{borderWidth:1,margin:15,width:'90%',borderRadius:10,alignSelf:'center'}} placeholder="Categary"></TextInput>
            <TextInput style={{borderWidth:1,margin:15,width:'90%',borderRadius:10,alignSelf:'center'}} placeholder="Add Video Link"></TextInput>
            <TextInput style={{borderWidth:1,margin:15,height:100,width:'90%',borderRadius:10,alignSelf:'center'}} placeholder="Write"></TextInput>
            <TouchableOpacity style={{borderRadius:30,alignSelf:'center',backgroundColor:'cyan',height:40,width:'60%',marginTop:10}}>
            <Text style={{color:'white',fontSize:20,alignSelf:'center',marginTop:5,fontWeight:'bold'}}>Post</Text></TouchableOpacity>
            </View>
            </ScrollView>
      </SafeAreaView>
    );
  }
}