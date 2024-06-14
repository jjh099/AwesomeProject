import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import IconButton from './page/components/IconButton';
import Icons from './page/Icons';
import Input from './page/components/Input';
import Task from './page/components/Task';

const App = () => {
  const temData = [
    {id: '1', text: 'react native', completed: false},
    {id: '2', text: 'mysql', completed: true},
    {id: '3', text: 'docker', completed: false},
  ];
  const [todos, setTodos] = useState(temData);
  const [todoText, setTodoText] = useState('');

  const onChangeText = (text: string) => {
    // console.log(text);
    setTodoText(text);
  };

  const addTodo = () => {
    if (todoText.trim()) {
      // Alert.alert('add');
      const ID = Date.now().toString(); //날짜를 문자 형태로 ID에 넣음
      const newTaskObject = {id: ID, text: todoText, completed: false};
      setTodos([...todos, newTaskObject]);
      setTodoText('');
    }
  };

  const deleteTask = (itemId: string) => {
    // alert(itemId);
    setTodos(todos.filter(task => task.id != itemId));
    // todos id task id랑 itemId를 비교해서 itemId를 빼고 배열에 남김
  };

  const checkCompleted = (itemId: string) => {
    setTodos(
      todos.map((item, idx) =>
        item.id === itemId ? {...item, completed: !item.completed} : item,
      ),
    );
  };

  return (
    <View>
      <Text style={styles.title}>my todolist</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10, gap: 10}}>
        {/* input.js에서 전달받은 onChangeText로 변경 */}
        <Input onChangeText={onChangeText} todoText={todoText} />
        <Button title="add todo" onPress={addTodo} />
        <ScrollView>
          <Task
            data={todos}
            deleteTask={deleteTask}
            checkCompleted={checkCompleted}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'skyblue',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
