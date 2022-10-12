import * as React from 'react';
 import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './pages/Home'
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
// import Detail from './pages/Detail';
// import Verify from './pages/Verify';
// import City from './pages/City';
// import Browser from './pages/Browser';
// import Mainscreen from './pages/Mainscreen'
import Monarch from './pages/Monarch'
// import Profile from './pages/Profile'
// import Addimg from './pages/Addimg'
// import Setting from './pages/Setting'


function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
        {/* <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Verify" component={Verify}/> */}
        {/* <Stack.Screen name="City" component={City}/> */}
        {/* <Stack.Screen name="Mainscreen" component={Mainscreen}/> */}
        {/* <Stack.Screen name="Profile" component={Profile}/> */}
        {/* <Stack.Screen name="Addimg" component={Addimg}/> */}
        {/* <Stack.Screen name="Setting" component={Setting}/> */}
        <Stack.Screen name="Monarch" component={Monarch}/>
        {/* <Stack.Screen name="Browser" component={Browser}/> */}

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;