import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = (props: {
  text?: string;
  onPress: () => void;
  style: any;
  style2: any;
}) => {
  const {text} = props;
  const {onPress} = props;
  const {style} = props;
  const {style2} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.Button, style2]}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 12,
    backgroundColor: '#B9FF3A',
    height: 50,
    width: 330,
    justifyContent: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    // marginTop: 10,
  },
});
