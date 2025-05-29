import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addUser} from './UserSlice';

const OrderCancelInputText = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handelsubmit = () => {
    dispatch(addUser({id: Date.now().toString(), firstName, lastName}));
    setFirstName('');
    setLastName('');
    navigation.navigate('OrderCompletedStoreData');
  };

  return (
    <View>
      <Text>OrderCancelInputText</Text>
      <View style={styles.mainname}>
        <TextInput
          style={styles.one}
          placeholder="Enter your First Name"
          value={firstName}
          onChangeText={setFirstName}></TextInput>
        <TextInput
          style={styles.two}
          placeholder="Enter your Last Name"
          value={lastName}
          onChangeText={setLastName}></TextInput>
      </View>
      <TouchableOpacity onPress={handelsubmit}>
        <Text style={styles.submitbutton}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderCancelInputText;

const styles = StyleSheet.create({
  mainname: {
    flexDirection: 'row',
    // marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 40,
    // borderRadius: 10,
  },
  one: {
    borderWidth: 1,
    marginHorizontal: 5,
  },
  two: {
    borderWidth: 1,
  },
  submitbutton: {
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: '#B9FF3A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    fontWeight: 'bold',
  },
});
