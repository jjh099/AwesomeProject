import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import Icons from '../Icons';

const Task = ({data}) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <View style={styles.container} kety={idx}>
            {/* Icons에서 가져옴 */}
            <IconButton icon={Icons.check} onPress={() => alert('check')} />
            <Text style={{flex: 1}}>{item.text}</Text>
            {/* <IconButton icon={Icons.checked} onPress={() => alert('checked')} /> */}
            <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
            <IconButton icon={Icons.delete} onPress={() => alert('delete')} />
          </View>
        );
      })}
    </>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    // paddingHorizontal: 7,
    // paddingVertical: 5,
    backgroundColor: 'white',
  },
});
