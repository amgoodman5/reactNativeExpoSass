import React from 'react';
import { Text, View } from 'react-native';
import styles from "./Header.scss"


const Header = props => {
    return(
       <View style={styles.header}>
        <Text style={styles.header__title}> {props.title} </Text>
       </View>
    )
};


export default Header;
