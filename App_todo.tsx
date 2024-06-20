import {
  Alert,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
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
      // Alert.alert('add')
      const ID = Date.now().toString();
      const newTaskObject = {id: ID, text: todoText, completed: false};

      setTodos([...todos, newTaskObject]);
      setTodoText('');
    }
  };

  const deleteTask = (itemId: string) => {
    // alert(itemId)
    setTodos(todos.filter(task => task.id != itemId));
  };

  const checkCompleted = (itemId: string) => {
    setTodos(
      todos.map((item, idx) =>
        item.id === itemId ? {...item, completed: !item.completed} : item,
      ),
    );
  };

  const updateTask = (itemId, newText) => {
    setTodos(
      todos.map(item => (item.id === itemId ? {...item, text: newText} : item)),
    );
  };

  return (
    <View>
      <Text style={styles.title}>MY TODOLIST</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10, gap: 10}}>
        <View style={styles.inputWrap}>
          <Input onChangeText={onChangeText} todoText={todoText} />
          <TouchableOpacity style={styles.button} onPress={addTodo}>
            <Text style={{color: 'white', textAlign: 'center'}}>add</Text>
          </TouchableOpacity>
        </View>

        {/* <Button title="add todo" onPress={addTodo} /> */}
        <ScrollView>
          {[...todos].reverse().map((item, idx) => {
            return (
              <Task
                item={item}
                key={idx}
                data={todos}
                deleteTask={deleteTask}
                checkCompleted={checkCompleted}
                updateTask={updateTask}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingVertical: Platform.select({
      // ios: 50,
      android: 10,
    }),
    paddingTop: Platform.select({
      ios: 60,
    }),
    paddingBottom: Platform.select({
      ios: 15,
    }),
    backgroundColor: Platform.select({
      android: 'white',
      ios: 'pink',
    }),
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    marginBottom: Platform.select({
      ios: 5,
    }),
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '20%',
    height: '90%',
  },
  inputWrap: {
    flexDirection: 'row',
    gap: 5,
  },
});
