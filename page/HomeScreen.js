import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyImage from '../assets/image/dog1.png';
// import {Image} from 'react-native-reanimated/lib/typescript/Animated';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={MyImage} style={{width: '100%', height: '50%'}} />
      <Button
        title="go Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
});
