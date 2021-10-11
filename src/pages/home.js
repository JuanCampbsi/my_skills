import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';
import Button from '../components/Button';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Platform
} from 'react-native';


export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldSate => [...oldSate, newSkill])

  }
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Welcome, Juan Campos
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>

        {
          mySkills.map(skill => (
            <SkillCard key={skill} skill={skill} />
          ))
        }
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39333d',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    borderRadius: 7
  }
})


