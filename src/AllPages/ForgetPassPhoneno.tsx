import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../Components/BackHeader';
import Button from '../Components/Button';
import TextInputco from '../Components/TextInputco';
import {useNavigation} from '@react-navigation/native';

const ForgetPassPhoneno = props => {
  const nav = useNavigation();
  // console.log('hihih');

  const [phone, setPhone] = useState();

  // const phoneRegex = /^\+?[1-9]\d{0,3}[-\s]?\d{7,14}$/;
  // const phoneRegex = /^\+?\d{8,15}$/;
  const phoneRegex = /^\d{8,15}$/;

  const validate5 = () => {
    if (!phoneRegex.test(phone)) {
      Alert.alert('ENter valid Phone no');
    } else {
      nav?.navigate('ResetPassword');
    }
  };

  return (
    <View>
      <BackHeader
      //  text={'Enter Your Phone no'}
      />
      <View>
        <Text style={styles.Forgettext}>Forgot Password</Text>
        <Text style={styles.smalltext}>
          Enter your Phone number to verify your account
        </Text>
      </View>
      <View style={styles.inputphone}>
        <TextInputco
          maxlength={10}
          onchangetexttt={setPhone}
          placeholder={'Phone'}
          keyboardTypee={'numeric'}
        />
      </View>

      <Button
        // onPress={() => {nav?.navigate('ResetPassword');}}
        onPress={validate5}
        text={'Continue'}
      />
    </View>
  );
};

export default ForgetPassPhoneno;

const styles = StyleSheet.create({
  Forgettext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginLeft: 15,
  },
  smalltext: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 10,
  },
  buttoncontinue: {
    marginTop: 50,
  },
  inputphone: {
    marginTop: 50,
    marginLeft: -10,
  },
});
