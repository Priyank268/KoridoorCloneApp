import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Modalcomponent = ({setShowModal}) => {
  const navigation = useNavigation();

  return (
    <View>
      {/* <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>Log out</Text>
      </TouchableOpacity> */}

      <Modal visible={true} transparent={true} animationType="slide">
        <View style={styles.modalcontainer}>
          <View style={styles.modalcontent}>
            <Text> Are you sure you want to Log Out?</Text>

            <View style={styles.buttoncontainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.button}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text style={styles.button}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modalcomponent;

const styles = StyleSheet.create({
  // modalcontainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 300,
  //   backgroundColor: 'lightgrey',
  //   marginTop: 200,
  // },
  modalcontent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    height: 220,
    marginTop: 240,
    justifyContent: 'center',
    marginLeft: 30,
  },
  button: {
    backgroundColor: 'lightskyblue',
    borderRadius: 20,
    fontSize: 16,
    marginTop: 20,
    height: 30,
    width: 100,
    textAlign: 'center',
    paddingTop: 4,
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
