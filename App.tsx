/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.title}>
            Recherche de ville par code postal
          </Text>
          <Text style={styles.postalCode}>Code postal</Text>
          <TextInput 
            style={styles.input}
            placeholder='60200'
          ></TextInput>
          <View style={styles.cityCard}>
            <Text style={styles.cityName}>Compiègne</Text>
            <Text>
              <Text style={styles.cityInfo}>
                Population:
              </Text>
               23584</Text>
            <Text><Text style={styles.cityInfo}>Région:</Text> Haut-de-France</Text>
            <Text><Text style={styles.cityInfo}>Département:</Text> Oise</Text>
          </View>
          <View style={styles.cityCard}>
            <Text style={styles.cityName}>Compiègne</Text>
            <Text>
              <Text style={styles.cityInfo}>
                Population:
              </Text>
               23584</Text>
            <Text><Text style={styles.cityInfo}>Région:</Text> Haut-de-France</Text>
            <Text><Text style={styles.cityInfo}>Département:</Text> Oise</Text>
          </View>
          <View style={styles.cityCard}>
            <Text style={styles.cityName}>Compiègne</Text>
            <Text>
              <Text style={styles.cityInfo}>
                Population:
              </Text>
               23584</Text>
            <Text><Text style={styles.cityInfo}>Région:</Text> Haut-de-France</Text>
            <Text><Text style={styles.cityInfo}>Département:</Text> Oise</Text>
          </View>
          <View style={styles.cityCard}>
            <Text style={styles.cityName}>Compiègne</Text>
            <Text>
              <Text style={styles.cityInfo}>
                Population:
              </Text>
               23584</Text>
            <Text><Text style={styles.cityInfo}>Région:</Text> Haut-de-France</Text>
            <Text><Text style={styles.cityInfo}>Département:</Text> Oise</Text>
          </View>
          <View style={styles.cityCard}>
            <Text style={styles.cityName}>Compiègne</Text>
            <Text>
              <Text style={styles.cityInfo}>
                Population:
              </Text>
               23584</Text>
            <Text><Text style={styles.cityInfo}>Région:</Text> Haut-de-France</Text>
            <Text><Text style={styles.cityInfo}>Département:</Text> Oise</Text>
          </View>
          <View style={styles.cityCard}>
            <Text style={styles.cityName}>Compiègne</Text>
            <Text>
              <Text style={styles.cityInfo}>
                Population:
              </Text>
               23584</Text>
            <Text><Text style={styles.cityInfo}>Région:</Text> Haut-de-France</Text>
            <Text><Text style={styles.cityInfo}>Département:</Text> Oise</Text>
          </View>
          <View style={styles.cityCard}>
            <Text style={styles.cityName}>Compiègne</Text>
            <Text>
              <Text style={styles.cityInfo}>
                Population:
              </Text>
               23584</Text>
            <Text><Text style={styles.cityInfo}>Région:</Text> Haut-de-France</Text>
            <Text><Text style={styles.cityInfo}>Département:</Text> Oise</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20
  },
  postalCode: {
    fontSize: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 30
  },
  cityCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f3f6f4',
    marginBottom: 10
  },
  cityName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  cityInfo: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default App;
