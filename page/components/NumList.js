import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function NumList({data, listDelete}) {
  return (
    <View style={styles.numList}>
      {data.map((item, idx) => {
        return (
          <TouchableOpacity onPress={() => listDelete(idx)} key={idx}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default NumList;
const styles = StyleSheet.create({
  numList: {
    paddingHorizontal: 16,
    // backgroundColor: 'orange',
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
  },
});
