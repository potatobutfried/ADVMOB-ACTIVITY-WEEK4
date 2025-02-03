import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



const DATA = [
  {
    id: ' 9:00 Cooking and Eating breakfast',
    title: 'Cooking and Eating breakfast',
  },
  {
    id: '10:00 playing with my dog',
    title: 'dog',
  },
  {
    id: '10:30 going outside to feel some cold air',
    title: 'cold',
  },
  {
    id: '11:00 getting ready for lunch',
    title: 'preparing lunch',
  },
  {
    id: '11:30 cooking for my lunch ',
    title: 'cooking',
  },
  {
    id: '12:00 eat',
    title: 'eat',
  },
  {
    id: '12:30 washing dishes',
    title: 'Clean',
  },
  {
    id: '1:00 sleep',
    title: 'sleep',
  },
  {
    id: '2:00 waking up',
    title: 'waking up',
  },
  {
    id: '2:30 eating snacks',
    title: 'snacks',
  },
  {
    id: '3:00 thinking whats life',
    title: 'anxiety',
  },
  {
    id: '3:30 cry',
    title: 'cry',
  },
  {
    id: '4:00 Reviewing',
    title: 'Reviewing',
  },
  {
    id: '5:00 taking a bath',
    title: 'bath',
  },
  {
    id: ' 5:30 going outside imaging life',
    title: 'imagining my life',
  },
  {
    id: '6:00 feeding my dog',
    title: 'dog eat',
  },
  {
    id: '6:30 preparing for dinner',
    title: 'prep',
  },
  {
    id: '6:40 cooking for dinner',
    title: 'cook dinner',
  },
  {
    id: '7:00 eating with my mother',
    title: 'mama',
  },
  {
    id: '7:30 poop',
    title: 'poop',
  },
  {
    id: '7:50 washing dishes',
    title: 'dishes',
  },
  {
    id: '8:00 getting my dog poop',
    title: 'doggo',
  },
  {
    id: '8:30 thinking why i lost myself',
    title: 'iyaq',
  },
  {
    id: '9:00 reviewing ',
    title: 'review',
  },
   {
    id: '10;00 sleep ',
    title: 'sleep',
  },
];

type ItemProps = {title: string};


const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (

  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.id} />}
        keyExtractor={item => item.id}
      />
      
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;