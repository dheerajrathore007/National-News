import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";

export default class Setting extends Component{
  constructor(props){
    super(props)
    this.state={
 
    }
  }
  render(){
    return(
      <SafeAreaView>
        <View>
        <Text style={{fontSize:20,fontWeight:'bold',margin:20}}>Settings</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/profile.png')}/>
            <Text style={{fontSize:20}}> Profile</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/Wallet.png')}/>
            <Text style={{fontSize:20}}> My Wallet</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/Mypost.png')}/>
            <Text style={{fontSize:20}}> My Post</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/rocket.png')}/>
            <Text style={{fontSize:20}}> Boost Your Post</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/bell.png')}/>
            <Text style={{fontSize:20}}> Notifications</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:30,width:30}} source={require('../Images/Terms.png')}/>
            <Text style={{fontSize:20}}> Terms and Conditions</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/About2.png')}/>
            <Text style={{fontSize:20}}> About</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/Star.png')}/>
            <Text style={{fontSize:20}}> Watch Ads & Earn</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/Curve.png')}/>
            <Text style={{fontSize:20}}> Refer And Earn</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <Image style={{height:25,width:25}} source={require('../Images/Logout.png')}/>
            <Text style={{fontSize:20}}> log Out</Text>
             </View>
        <Image  style={{height:30,width:30}}  source={require('../Images/arrow.png')}/>
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:105,height:60,backgroundColor:'grey'}}>
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/Home.png')}/>
             <Text style={{fontWeight:'bold'}}>Home</Text>
             </TouchableOpacity>
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/ads.png')}/>
             <Text style={{fontWeight:'bold'}}>Ads</Text></TouchableOpacity> 
             <TouchableOpacity style={{backgroundColor:'white',borderRadius:30}}><Image style={{height:60,width:60,marginBottom:20}} source={require('../Images/plus.jpg')}/></TouchableOpacity> 
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/polls.png')}/>
             <Text style={{fontWeight:'bold'}}>polls</Text></TouchableOpacity> 
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/profile.png')}/>
             <Text style={{fontWeight:'bold'}}>profile</Text></TouchableOpacity> 
            </View>

        </View>
      </SafeAreaView>
    );
  }
}