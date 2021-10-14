import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';

export function home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> Welcome, Juan Campos </Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    borderRadius: 7
  }
})


export default home;
