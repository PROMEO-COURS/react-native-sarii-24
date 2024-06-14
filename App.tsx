/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
} from 'react-native';

type City = {
  nom: string;
  population: number;
  departement: {
    code: number;
    nom: string
  };
  region: {
    code: number;
    nom: string
  };
  code: number;
}

function App(): React.JSX.Element {
  const [postalCode, setPostalCode] = useState("");
  const [cities, setCities] = useState<City[]>([]);

  // Fonction execute lors du press du bouton
  const handlePress = () => {
    fetch("https://geo.api.gouv.fr/communes?codePostal=" + postalCode + "&fields=nom,departement,region,population&format=json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCities(data);
      })
  }

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
            value={postalCode}
            onChangeText={setPostalCode}
          ></TextInput>
          <Button
            title="Rechercher"
            onPress={handlePress}
          />
          <Text style={styles.result}>Résultat(s) : { cities.length }</Text>
          <View style={styles.cities}>
            {cities.map((city) => (
              <View style={styles.cityCard} key={city.nom}>
                <Text style={styles.cityName}>{ city.nom }</Text>
                <Text>
                  <Text style={styles.cityInfo}>
                    Population:
                  </Text>
                  { city.population }
                </Text>
                <Text><Text style={styles.cityInfo}>Région:</Text> { city.region.nom }</Text>
                <Text><Text style={styles.cityInfo}>Département:</Text> { city.departement.nom }</Text>
              </View>
            ))}
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
    marginBottom: 10
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30
  },
  cities: {
    marginTop: 10
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
