import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IconButton from './IconButton';
import Icons from '../Icons';

const Task = ({data, deleteTask, checkCompleted, updateTask, item}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    setIsEditing(false);
    updateTask(item.id, text);
  };

  return isEditing ? (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        onSubmitEditing={_onSubmit}
        onBlur={_onSubmit}
        autoFocus={true}
      />
    </>
  ) : (
    <>
      <View style={styles.container}>
        <IconButton
          icon={item.completed ? Icons.checked : Icons.check}
          onPress={() => checkCompleted(item.id)}
        />
        <Text style={{flex: 1}}>{item.text}</Text>
        {item.completed || (
          <IconButton icon={Icons.edit} onPress={() => setIsEditing(true)} />
        )}
        <IconButton icon={Icons.delete} onPress={() => deleteTask(item.id)} />
      </View>
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
  input: {
    width: '100%',
    backgroundColor: Platform.select({
      ios: 'pink',
      android: 'skyblue',
    }),
    borderRadius: 10,
    paddingHorizontal: 16,
    height: Platform.select({
      ios: 50,
    }),
    marginBottom: Platform.select({
      ios: 7,
    }),
  },
});
