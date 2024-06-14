import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import Icons from '../Icons';

const Task = ({data, deleteTask, checkCompleted}) => {
  return (
    <>
      {/* [...data].reverse() : 입력된 data를 복사해서 입력한게 첫번째로 나옴 */}
      {[...data].reverse().map((item, idx) => {
        return (
          <View key={idx} style={styles.container}>
            <IconButton
              icon={item.completed ? Icons.checked : Icons.check}
              onPress={() => checkCompleted(item.id)}
            />
            <Text style={{flex: 1}}>{item.text}</Text>
            {item.completed || (
              <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
            )}
            <IconButton
              icon={Icons.delete}
              onPress={() => deleteTask(item.id)}
            />
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
