import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoSlice';

const AddItem = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onChange = textValue => setText(textValue);

  const onSubmit = () => {
    if (text) {
      dispatch(addTodo({title: text}));
    }
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        value={text}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
