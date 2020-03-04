import React from 'react';
import { Text, View } from 'react-native';
import styles from './assets/global/styles.scss';
import Header from "./components/header/Header"

export default function App() {
  return (
    <View style={styles.header__title}>
      <Header title="Guess a number"/>
    </View>
  );
}
