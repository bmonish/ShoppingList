import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {useSelector} from 'react-redux';

const App = () => {
  const todos = useSelector(state => state.todos);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem />
      <FlatList
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
});

export default App;
