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
        <Text> React Native Hoje 30/08/2021 - feature/home/-mobile</Text>
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