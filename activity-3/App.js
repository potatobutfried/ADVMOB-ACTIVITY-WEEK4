import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '#1a4045',
    title: ' 9:00 Cooking and Eating breakfast',
  },
  {
    id: '#2439af',
    title: '10:00 playing with my dog',
  },
  {
    id: '#e6ef4c',
    title: '10:30 going outside to feel some cold air',
  },
  {
    id: '#f49b20',
    title: '11:00 getting ready for lunch',
  },
  {
    id: '#06f5b1',
    title: '11:30 cooking for my lunch',
  },
  {
    id: '#bb0b5a',
    title: '12:00 eat',
  },
  {
    id: '#ed154a',
    title: '12:30 washing dishes',
  },
  {
    id: '#f49b20',
    title: '1:00 sleep',
  },
  {
    id: '#ef61a3',
    title: '2:00 waking up',
  },
  {
    id: '#0986d8',
    title: '2:30 eating snacks',
  },
  {
    id: '#78d1b8',
    title: '3:00 thinking whats life',
  },
  {
    id: '#dcaca9',
    title: '3:30 cry',
  },
  {
    id: '#c1019c',
    title: '4:00 Reviewing',
  },
  {
    id: '#24a611',
    title: '5:00 taking a bath',
  },
  {
    id: '#f2e58d ',
    title: 'imagining my life',
  },
  {
    id: '#499854',
    title: '6:00 feeding my dog',
  },
  {
    id: '#b42070',
    title: '6:30 preparing for dinner',
  },
  {
    id: '#d6b5de',
    title: '6:40 cooking for dinner',
  },
  {
    id: '#8315b7',
    title: '7:00 eating with my mother',
  },
  {
    id: '#a90cd7',
    title: '7:30 poop',
  },
  {
    id: '#d88619',
    title: '7:50 washing dishes',
  },
  {
    id: '#0cba29',
    title: '8:00 getting my dog poop',
  },
  {
    id: '#cf77c1',
    title: '8:30 thinking why i lost myself',
  },
  {
    id: '#134aac',
    title: '9:00 reviewing ',
  },
   {
    id: '#d2af7e',
    title: '10:00 sleep',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#47e7f6' : item.id;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;