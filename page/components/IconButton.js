import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// app에 있는 icon 받아와서 스타일 변경
const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchWrap}>
      <Image source={icon} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  touchWrap: {
    // width: 30,
    // height: 30,
    margin: 10,
  },
});
