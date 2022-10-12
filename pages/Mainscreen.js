import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginRight: 90,
                marginTop: 10,
                marginLeft: 20,
              }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYWzaH31xSAaXyTNfQ_uR_j0_qmSV83EqSA&usqp=CAU',
              }}
            />
            <Image
              style={{
                width: 40,
                height: 40,
                borderColor: 'white',
                marginRight: 10,
                marginLeft: 90,
                marginTop: 5,
                borderRadius: 30,
              }}
              source={{
                uri: 'https://image.shutterstock.com/image-vector/bell-blue-icon-on-white-260nw-2085597337.jpg',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 2,
            }}>
            <TouchableOpacity
              style={{color: 'black', fontSize: 20}}
              onPress={() => this.props.navigation.navigate('Screen')}>
              <Text style={{color: 'grey', fontWeight: 'bold'}}> Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: 'grey', fontWeight: 'bold'}}> All</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: 'grey', fontWeight: 'bold'}}> Politics</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: 'grey', fontWeight: 'bold'}}> Healty</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: 'grey', fontWeight: 'bold'}}> Science</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{
                width: '90%',
                height: 180,
                marginTop: 20,
                borderRadius: 20,
                marginLeft: 10,
                marginEnd: 80,
              }}
              source={{
                uri: 'https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-9-zeenews/list/zeenewssudhirchaudhary2.jpg',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              marginTop: 10,
              marginLeft: 30,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 20,
                marginTop: 40,
              }}>
              Who is the Best Player India Cricket
            </Text>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
              Team?
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: 'grey',
                borderRadius: 20,
                height: 28,
                marginEnd: 150,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  alignSelf: 'flex-start',
                  marginStart: 20,
                }}>
                Ms Dhoni
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                color: 'grey',
                backgroundColor: 'grey',
                borderRadius: 20,
                height: 28,
                marginEnd: 150,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  alignSelf: 'flex-start',
                  marginStart: 20,
                }}>
                Virat Kholi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                color: 'grey',
                backgroundColor: 'grey',
                borderRadius: 20,
                height: 28,
                marginEnd: 150,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  alignSelf: 'flex-start',
                  marginStart: 20,
                }}>
                {' '}
                Rohit Sharma
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 15,
                backgroundColor: '#87CEEB',
                marginRight: 230,
                height: 35,
                borderRadius: 20,
              }}>
              <Text style={styles.logText}>See result</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{
                width: '90%',
                height: 120,
                marginTop: 20,
                borderRadius: 10,
                marginLeft: 10,
              }}
              source={{
                uri: 'https://media.cnn.com/api/v1/images/stellar/prod/7c21e04e-00d3-4c7b-90b7-ffddd91be5e2.jpg?q=h_1080,w_1920,x_0,y_0',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 2,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                alignSelf: 'center',
                marginLeft: 11,
                fontSize: 15,
              }}>
              The Election Commission would be apprised the People Act and In
              its outreach initiative, the party would{' '}
            </Text>
            <Image
              style={{
                width: '10%',
                marginLeft: 2,
                marginBottom: 10,
                marginRight: 15,
                height: 40,
              }}
              source={{
                uri: 'https://t3.ftcdn.net/jpg/02/05/50/86/360_F_205508624_vW2g4uq40jCyC59eFgXiTHuDdPvAIiO4.jpg',
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 20,
    alignItems: 'center',
    marginTop: 4,
    position:'absolute',
  },
});