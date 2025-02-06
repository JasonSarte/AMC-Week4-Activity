import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE  SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE SARTE
             
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 50,
    padding: 20,
  },
});

export default App;