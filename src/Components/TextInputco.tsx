import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const TextInputco = (props: {
  placeholder?: any;
  maxlength?: any;
  onchangetexttt?: any;
  keyboardTypee?: any;
  valuee?: any;
  securetextentryy?: any;
}) => {
  const {placeholder} = props;
  const {maxlength} = props;
  const {onchangetexttt} = props;
  const {keyboardTypee} = props;
  const {valuee} = props;
  const {securetextentryy} = props;
  return (
    <View>
      <TextInput
        style={[styles.TextInput, props?.style]}
        placeholder={placeholder}
        maxLength={maxlength || 100}
        onChangeText={onchangetexttt}
        value={valuee}
        keyboardType={keyboardTypee}
        secureTextEntry={securetextentryy}></TextInput>
    </View>
  );
};

export default TextInputco;

const styles = StyleSheet.create({
  TextInput: {
    borderBottomWidth: 0.5,
    marginHorizontal: 25,
    color: 'grey',
  },
});
