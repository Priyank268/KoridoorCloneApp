import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextComponent = (props: {Textt?: any; style: any}) => {
  const {Textt} = props;
  const {style} = props;
  return (
    <View>
      <Text style={[styles.toptext, style]}>{Textt}</Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  toptext: {
    fontSize: 18,
    marginLeft: 16,
    marginTop: 20,
    color: '#010101',
    fontFamily: 'Product Sans',
    fontWeight: 'bold',
  },
});
