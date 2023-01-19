import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Contact(){
    return(
        <View style={styles.Contact}>
             <Image
          source={require('../../Images/user_avatar.png')} 
          style={styles.img}
        />
            <Text style={styles.Text}>Contact</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Contact: {
      flex: 2,
      margin: 20,
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '5%',
      minWidth: '100%',
      maxHeight: '9%',
      maxWidth: '100%',
    },

    img:{
        flex: 1,
        width: 'auto', 
        maxWidth: '15%',
        height: '85%', 
        marginLeft: 10,
        marginRight: 30,
        borderRadius: 100,
    },

    Text:{
        fontSize: 25,
        color: 'white',
        flex: 2,
    }
  });
  

export default Contact