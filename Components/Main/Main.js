import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";

function Main(){
    return(
        <View style={styles.Main}>
            <Header></Header>
            <Contact></Contact>
        </View>
    )
}

const styles = StyleSheet.create({
    Main: {
      top: 0,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

export default Main