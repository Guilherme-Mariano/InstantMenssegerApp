import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header(){
    return(
        <View style={styles.Header}>
            <Text style={styles.text}>InstMensg</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
      flex: 1,
      backgroundColor: '#0096FF',
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: '12%',
      minWidth: '100%',
      //borderRadius: 40,
      borderBottomEndRadius: 50,
      borderBottomStartRadius: 50,
    },
    text: {
        color: '#FCFFE7',
        fontSize: 30,
    }
  });
  

export default Header