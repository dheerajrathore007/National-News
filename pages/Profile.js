import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      confPassword: '',
    };
  }
  myRecoverFunc() {
    if (this.state.username == '') {
      alert('Please fill Input');
    } else if (this.state.FirstName == '') {
      alert('Please fill Input');
    } else if (this.state.LastName == '') {
      alert('Please fill Input');
    } else if (this.state.email == '') {
      alert('Please fill Input');
    } else if (this.state.confPassword == '') {
      alert('Please fill Input');
    } else {
      //this.RagisterApiFun()
      alert('your Register is SuccessFully');
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => this.props.navigation.navigate('Addimage')}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/basic-ui-elementsblue-1/389467/35-512.png',
            }}
          />
          <Text
            style={{
              marginTop: 25,
              alignSelf: 'center',
              alignItems: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 115,
              color: 'black',
            }}>
            My Profile
          </Text>
        </TouchableOpacity>
        <Image
          style={{
            width: '40%',
            height: 155,
            marginTop: 10,
            alignItems: 'center',
            alignSelf: 'center',
          }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU',
          }}
        />
        <Text
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            position: 'relative',
            color: '#00FFFF',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          {' '}
          Change Profile Photo
        </Text>
        <TextInput
          style={styles.txtInput}
          placeholder="User Name"
          placeholderTextColor={'grey'}
          onChangeText={text => this.setState({fUserName: text})}
          keyboardType="name-phone-pad"
        />
        <TextInput
          style={styles.txtInput}
          placeholder="First Name"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          onChangeText={text => this.setState({FirstName: text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Last Name"
          keyboardType="numeric"
          placeholderTextColor={'grey'}
          onChangeText={Number => this.setState({LastName: text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Email Id"
          placeholderTextColor={'grey'}
          onChangeText={Text => this.setState({Emailid: Text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Change Password"
          placeholderTextColor={'grey'}
          onChangeText={Text => this.setState({confpassword: Text})}
        />
        <Text
          style={{
            color: 'black',
            marginLeft: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          I am a
        </Text>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: 28,
              width: 28,
              borderColor: '#51C5FF',
              borderRadius: 15,
            }}
            onPress={() => this.setState({checkBox: !this.state.checkBox})}>
            {this.state.checkBox ? (
              <Image
                style={{width: 20, height: 20, marginTop: 1, marginRight: 160}}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0DhI9AqLyS6CvbBOCGymel2JMo8NhZPOblgasg7jtX6HUivrjfD29xY4ZDig-0Wm6O8&usqp=CAU',
                }}
              />
            ) : null}
          </TouchableOpacity>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 16,
              marginRight: 40,
            }}>
            {' '}
            Media Reporter{' '}
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: 28,
              width: 28,
              borderColor: '#51C5FF',
              borderRadius: 15,
            }}
            onPress={() => this.setState({checkBox1: !this.state.checkBox1})}>
            {this.state.checkBox1 ? (
              <Image
                style={{width: 20, height: 20, marginRight: 120}}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0DhI9AqLyS6CvbBOCGymel2JMo8NhZPOblgasg7jtX6HUivrjfD29xY4ZDig-0Wm6O8&usqp=CAU',
                }}
              />
            ) : null}
          </TouchableOpacity>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
            {' '}
            Visitor{' '}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
              marginTop: 13,
            }}>
            Upload Media Documents
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'cyan',
            height: 40,
            borderRadius: 20,
            alignSelf: 'center',
            width: '40%',
            borderLeftColor: 'cyan',
            borderRightColor: 'cyan',
            marginRight: 180,
            marginTop: 10,
          }}
          onPress={() => this.props.navigation.navigate('Photo')}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginRight: 1,
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 17,
              position: 'absolute',
              marginTop: 10,
            }}>
            Browse file
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
  img: {
    marginTop: 20,
    height: 30,
    width: 35,
    marginLeft: 1,
    marginRight: 1,
  },
  txtInput: {
    borderBottomColor: 'grey',
    height: 50,
    color: 'white',
    backgroundColor: '#D1D1D1D1',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 28,
    marginTop: 10,
  },
  logbut: {
    backgroundColor: '#202224',
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  logText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 10,
  },
});