import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './Colors';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            &lsaquo;Dev&rsaquo;<Text style={{fontWeigth: "300", color: colors.blue}}>Todo
          </Text>
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  }
});
