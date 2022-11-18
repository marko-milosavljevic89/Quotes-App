import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  let [quote, setQuote] = React.useState('')
  let [source, setSource] = React.useState('')

  const fetchApiCall = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "9d61261397mshddbe68667687c36p1e247cjsn040d9bac9f92"
      }
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.content);
        setSource(response.originator.name)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>      
      <Text style={styles.title}>Native API Calls</Text>
      <Text>Example with Fetch and AXIOS</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>{quote}</Text>
        <Text style={styles.source}>{source}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#fff'
  },
  quote: {
    fontSize: 17,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  source: {
    textAlign: 'right',
    marginTop: 15
  },
  quoteContainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5
  }
});
