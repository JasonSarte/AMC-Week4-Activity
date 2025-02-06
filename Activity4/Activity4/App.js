import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'TOOTH BRUSH',
  },
  {
    id: '2',
    title: 'BREAKFAST',
  },
  {
    id: '3',
    title: 'WATCHING',
  },
  {
    id: '4',
    title: 'CELLPHONE',
  },
  {
    id: '5',
    title: 'ONLINE GAMES',
  },
  {
    id: '6',
    title: 'CLEANING',
  },
  {
    id: '7',
    title: 'FISH FEEDING',
  },
  {
    id: '8',
    title: 'COOKING',
  },
  {
    id: '9',
    title: 'WASHING DISHES',
  },
  {
    id: '10',
    title: 'EATING',
  },
  {
    id: '11',
    title: 'SLEEPING',
  },
  {
    id: '12',
    title: 'PLAY',
  },
  {
    id: '13',
    title: 'COD',
  },
  {
    id: '14',
    title: 'TAKING A BATH',
  },
  {
    id: '15',
    title: 'SNACKS',
  },
  {
    id: '16',
    title: 'WATCHING ANIME',
  },
  {
    id: '17',
    title: 'WALKING',
  },
  {
    id: '18',
    title: 'WATCHING NETFLIX',
  },
  {
    id: '19',
    title: 'WATCHING KDRAMA',
  },
  {
    id: '20',
    title: 'DOING ACTIVITY',
  },
  {
    id: '21',
    title: 'SITTING',
  },
  {
    id: '22',
    title: 'WACHING VLOG',
  },
  {
    id: '23',
    title: 'GO TO WETMARKET',
  },
  {
    id: '24',
    title: 'EATING DINNER',
  },
  {
    id: '25',
    title: 'SLEEPING',
  },

];


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
        renderItem={({item}) => <Item title={item.title} />}
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    borderWidth: 4,
    borderColor: '#20232a',
    color: '#20232a',
    borderRadius: 6,
    backgroundColor: 'white',
    color: '#20232a',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default App;



