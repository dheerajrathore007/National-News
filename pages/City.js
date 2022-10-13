import React, { Component } from "react";
import {View,Text, FlatList,SafeAreaView,TouchableOpacity,Image, TextInput, ScrollView} from 'react-native';
const backupData=[
  {
    name:'Kolkata',
   },
  {
    name:'Delhi',
   },
  {
    name:'Banglore',
   },
  {
    name:'Kochi',
   },
  {
    name:'Nodia',
   },
  {
    name:'Mumbai',
   },
  {
    name:'Banglore',
   },
  {
    name:'Kochi',
  },
  {
    name:'Nodia',
  },
  {
    name:'Mumbai',
  },
]
export default class FlatListScreen extends Component{
  
constructor(Props){
   super(Props)
   this.state={
     data :backupData
   }
}

searchFilterFunctions(txt){
  let text = txt.toLowerCase()
  if(txt.length == 0){
    this.setState({data:backupData})
  }
 else{
  let filter = this.state.data.filter(item=>{
    if(item.name.toLowerCase().match(text))
        {
          return item
        }
  })
  this.setState({data:filter})
 }

}


  //  let filterTracks = newdata.filter(item => {
  //     let filterTracks = this.state.searchData.filter(item=>{
  //    if(item.first_name.toLowerCase().match(text))
  //    {
  //      return item
  //    }
  //   })

render(){
   return(
    <SafeAreaView>
    <ScrollView>
    <View>
    <View style={{flexDirection:"row",borderWidth:2,borderRadius:25,marginTop:30,height:50,width:'90%',alignSelf:'center',borderColor:'cyan'}}>
    <Image style={{width:25,height:25,marginTop:10}} source={require('../Images/search.png')}/>
    <TextInput style={{alignSelf:'center'}} 
    onChangeText={(text)=>this.searchFilterFunctions(text)}
    placeholder="Search your city"></TextInput>
    </View>

     <FlatList style={{marginTop:20,borderTopWidth:1,borderColor:'grey',color:'cyan'}}
       data={this.state.data}
       renderItem={({item})=>
       <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItem:'center',alignSelf:'center',height:50,borderBottomColor:"grey",alignItems:'center'}}>
        <View>
        <Image style={{width:30,height:30,alignSelf:'center',borderRadius:20,marginLeft:10}}
            source={require('../Images/plan.png')}
         />
        </View>
         <View style={{marginLeft:10}}>
         <Text style={{fontSize:18}}>{item.name}</Text>
         </View>
       </TouchableOpacity>
     }
     />
     <TouchableOpacity style={{width:'50%',height:40,backgroundColor:'#2DB3FB',borderRadius:20,marginTop:50,alignSelf:"center",alignItems:'center',alignContent:'center'}}>
              <Text style={{alignSelf:'center',color:'white',marginTop:8,fontWeight:'bold'}}>Next</Text></TouchableOpacity>
              </View>
   </ScrollView>
   </SafeAreaView>
   );
}
}
