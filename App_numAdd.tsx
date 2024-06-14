import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from './page/HomeScreen';
// import ProfileScreen from './page/ProfileScreen';

import Header from './page/components/Header';
import Generator from './page/components/Generator';
import NumList from './page/components/NumList';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  const [mainTitle, setMainTitle] = useState('Header');
  const [random, setRandom] = useState([100, 99]);

  const pressView = () => {
    alert('view');
  };

  const onAddRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandom(prevRandom => [...prevRandom, randomNum]);
  };

  const listDeleteNum = delNum => {
    const newArray = random.filter((num, index) => {
      return delNum != index;
    });
    setRandom(newArray);
  };
  const onChangeText = text => {
    console.log(text);
  };

  return (
    // <SafeAreaView> //노치 없애줌
    <View style={styles.container}>
      <Header title={mainTitle} onPressView={pressView} />

      {/* <View style={styles.btnCon}>
        <Button title="test" style={{flex: 1}} />
        <Button title="test" />
      </View>
      <Text>aaa</Text> */}
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          // maxLength={3}
          multiline={true} // 엔터치면 줄 내려감
          returnKeyType="done"
        />
      </View>

      <ScrollView>
        <Generator add={onAddRandom} />
        <NumList data={random} listDelete={listDeleteNum} />
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    // paddingTop: 40,
  },
  btnCon: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputWrap: {
    width: '100%',
    // backgroundColor: '#efefef',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});

// <NavigationContainer>
//   <Tab.Navigator
//     screenOptions={{
//       headerTitleAlign: 'center',
//       headerTintColor: 'red',
//       headerStyle: {
//         backgroundColor: 'skyblue',
//       },
//     }}>
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Profile" component={ProfileScreen} />
//   </Tab.Navigator>
// </NavigationContainer>
