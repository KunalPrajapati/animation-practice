import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import React, { useState } from 'react';

const LayoutAnimations = () => {

  const [expanded, setExpanded] = useState(false);


  const toggleExpanded = () => {

    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    //either the above or the below will work the same way
    LayoutAnimation.spring();
    setExpanded(!expanded);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleExpanded}>
        <Text style={styles.buttonText}>
          {
            expanded ? 'Collapse' : 'Expand'
          }
        </Text>
      </TouchableOpacity>

      {
        expanded && (
          <View style={styles.box}>
            <Text style={styles.buttonText}>Hello World</Text>
          </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText:{
      color: 'white',
      fontSize: 16,
    },
    box:{
      marginTop: 20,
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
});

export default LayoutAnimations;
