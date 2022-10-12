import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity,FlatList} from "react-native";
export default class Browser extends Component{
  constructor(props){
    super(props)
    this.state={
        data :[
            {
              image:require('../Images/climate.jpg'),
              txt:'climate Changes: Arctic Warming Linked to',
              txt2:'colder winters',
              btn:'nature Channel',
              time:'4 min Ago'
             },
             {
             image:require('../Images/cricket.jpg'),
             txt:'climate Changes:Arctic Warming Linked to',
             txt2:'colder winters',
             btn:'BBC Sprot',
             time:'4 min Ago'
             }
             ],
        data2 :[
            {
            txt:'US jobs growth disappoints as',
            txt2:'recovery falters',
            btn:'nature Channel',
            time:'4 min Ago',
            image:require('../Images/office.jpeg')
            },
            {
            txt:'Food price rise fears amid staff',
            txt2:'shortages',
            btn:'nature Channel',
            time:'4 min Ago',
            image:require('../Images/fruits.jpg')
            }
        ]
    }
  }
  render(){
    return(
      <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      <ScrollView>
        <View>
            <View style={{flexDirection:"row",backgroundColor:'#F9F9F9',marginTop:25,height:40,width:'90%',justifyContent:'space-between',alignSelf:'center',borderRadius:10}}>
            <TextInput style={{alignSelf:'center'}}  placeholder="Search"></TextInput>
            <Image style={{width:25,height:25,marginTop:10}} source={require('../Images/search.png')}/>
            </View>

            <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignSelf:'center',marginTop:10}}>
                <Text style={{fontSize:20,color:'#474747',fontWeight:'bold'}}>Popular Tags</Text>
                <TouchableOpacity><Text style={{color:'cyan',marginTop:5}}>View All</Text></TouchableOpacity>
            </View>
            <View style={{width:'90%',height:100,borderBottomWidth:0.5,alignSelf:'center',marginTop:10}}>
            </View>

            <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignSelf:'center',marginTop:10}}>
                <Text style={{fontSize:20,color:'#474747',fontWeight:'bold'}}>Latest News</Text>
            <TouchableOpacity><Text style={{color:'cyan',marginTop:5}}>View All</Text></TouchableOpacity>
             </View>
            {/* Flatlist */}
            <FlatList
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            renderItem={({item})=>
            <View style={{margin:20}}>
             <TouchableOpacity style={{borderRadius:10}}>
                <Image style={{ alignSelf:'center',height:150,width:300,borderRadius:10}}
                    source={item.image}
                />
            <Text style={{fontWeight:'bold'}}>{item.txt}</Text>
            <Text style={{fontWeight:'bold'}}>{item.txt2}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity><Text style={{color:'cyan'}}>{item.btn}  </Text></TouchableOpacity>
                <Text>  {item.time}</Text>
            </View>
            </View>
            }
            />
                <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignSelf:'center',marginTop:5}}>
                <Text style={{fontSize:20,color:'#474747',fontWeight:'bold'}}>Recomendation Topic </Text>
                <TouchableOpacity><Text style={{color:'cyan',marginTop:5}}>View All</Text></TouchableOpacity>
                </View>
            {/* 2 nd flatlist */}
            <FlatList 
            data={this.state.data2}
            renderItem={({item})=>
             <View style={{marginTop:10,width:'90%',flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}> 
             <View>
            <Text style={{fontWeight:'bold',marginTop:10}}>{item.txt}</Text>
            <Text style={{fontWeight:'bold',}}>{item.txt2}</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity><Text style={{color:'cyan'}}>{item.btn} </Text></TouchableOpacity>
                <Text> {item.time}</Text>
            </View>
            </View>
            <Image style={{height:80,width:80,borderRadius:15}} source={item.image}/>
            </View>
            }
            />
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,height:60,backgroundColor:'grey'}}>
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/Home.png')}/>
             <Text style={{fontWeight:'bold'}}>Home</Text>
             </TouchableOpacity>
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/ads.png')}/>
             <Text style={{fontWeight:'bold'}}>Ads</Text></TouchableOpacity> 
             <TouchableOpacity style={{backgroundColor:'white',borderRadius:30}}><Image style={{height:60,width:60,marginBottom:20}} source={require('../Images/plus.jpg')}/>
             <Text style={{fontWeight:'bold'}}>Home</Text></TouchableOpacity> 
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/polls.png')}/>
             <Text style={{fontWeight:'bold'}}>polls</Text></TouchableOpacity> 
             <TouchableOpacity><Image style={{height:30,width:30,marginTop:10}} source={require('../Images/profile.png')}/>
             <Text style={{fontWeight:'bold'}}>profile</Text></TouchableOpacity> 
            </View>
         </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}