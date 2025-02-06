
import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData [] = [
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

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? 'lightgreen' : 'lightblue';
    const color = item.id === selectedId ? 'blue' : 'green';

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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    borderWidth: 4,
    borderColor: '#20232a',
    color: '#20232a',
    borderRadius: 6, 
    color: '#20232a',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default App;



