import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SeeallButtonComponent = (props: {Text1: any}) => {
  const {Text1} = props;
  return (
    <View>
      <Text style={styles.Text}>{Text1}</Text>
    </View>
  );
};

export default SeeallButtonComponent;

const styles = StyleSheet.create({
  Text: {
    marginRight: 16,
    marginTop: 32,
    backgroundColor: '#B8FF3D',
    fontSize: 10,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#010101',
    fontWeight: 'bold',
  },
});
