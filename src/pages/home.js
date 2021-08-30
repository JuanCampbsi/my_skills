import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

export default function home() {
  return (
    <>     
     <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
<<<<<<< HEAD
        <Text> React Native Hoje 30/08/2021 testando conflict </Text>
=======
        <Text> React Native Hoje 30/08/2021 teste branch </Text>
>>>>>>> feature/mobile
      </View>

      <Text style={{
        alignSelf: 'center',
        marginBottom: 20
      }}>
        Ignite
      </Text>
    </>
  )
}