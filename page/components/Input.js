import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({onChangeText, todoText}) => {
  // onChangeInput : onChangeText
  const onChangeInput = text => {
    // onChangeText <- text
    onChangeText(text);
    // onChangeText가 app.js onChangeText로 전달
  };
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInput}
        maxLength={20}
        autoCapitalize="none"
        value={todoText}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    backgroundColor: Platform.select({android: '#eeeeee', ios: '#eeeeee'}),
    borderRadius: 10,
    paddingHorizontal: 16,
    height: Platform.select({
      ios: 50,
    }),
  },
});
