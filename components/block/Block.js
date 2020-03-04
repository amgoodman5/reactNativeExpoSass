import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./Block.scss";

export default function Block() {
  return (
    <View style={styles.container__background_blue}>
      <Text style={styles.text__yellow}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text__white}>dicks</Text>
        <Text style={styles.text__blue}>Open up App.js to start working on your app!</Text>
        <TouchableOpacity style={styles.button__lg}>
        <Text style={styles.text__blue}>
               Test
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn__green}>
        <Text style={[styles.text__yellow]}>
               Test
          </Text>
        </TouchableOpacity>
    </View>
  );
}
