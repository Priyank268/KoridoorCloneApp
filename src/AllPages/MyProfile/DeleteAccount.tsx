import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackHeader from '../../Components/BackHeader';
import Button from '../../Components/Button';
import RadioGroup from 'react-native-radio-buttons-group';
import ModalDeleteaccount from './ModalDeleteaccount';

const DeleteAccount = () => {
  const [DeleteAccountModal, setDeleteAccountModal] = useState(false);

  const [selectedid, setSelectedid] = useState();

  const radiobutton = [
    {id: 1, title: 'Something was broken'},
    {id: 2, title: 'I have Privacy Concern'},
    {id: 3, title: 'Are you using other app'},
    {id: 4, title: 'Other'},
  ];

  return (
    <View>
      <BackHeader />
      <Text style={styles.textone}>DeleteAccount</Text>
      <Text style={styles.texttwo}>
        Are you sure you want to delete your account?
      </Text>
      <Text style={styles.textthree}>
        Deleting your account will delete all personal information and data from
        your profile that is stored by Koridorr. This data cannot be recovered.
      </Text>
      <Text style={styles.textfour}>What is the reason ?</Text>

      {radiobutton?.map(item => (
        <TouchableOpacity
          onPress={() => setSelectedid(item?.id)}
          style={styles.mainoptionsall}>
          <Text style={styles.textfive}> {item?.title}</Text>

          <Image
            source={
              selectedid == item?.id
                ? require('../../assets/Icons/radiocheck.png')
                : require('../../assets/Icons/radiouncheck.png')
            }
            style={styles.iconn}
          />
        </TouchableOpacity>
      ))}

      <Button
        onPress={() => setDeleteAccountModal(true)}
        text="Delete Account"
        style2={styles.deletebutton}
      />
      {/* {/* Conditionally render ModalDeleteAccount */}
      {/* {DeleteAccountModal && (
        <ModalDeleteaccount setDeleteAccountModal={setDeleteAccountModal} />
      )}  */}

      <ModalDeleteaccount
        visible={DeleteAccountModal}
        setDeleteAccountModal={setDeleteAccountModal}
      />
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  textone: {
    fontWeight: 'bold',
    marginTop: -42,
    marginLeft: 50,
    color: '#272C3F',
    fontSize: 18,
  },
  texttwo: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#010101',
    fontWeight: 'bold',
    fontSize: 20,
    width: 232,
    marginTop: 50,
  },
  textthree: {
    textAlign: 'center',
    alignSelf: 'center',
    width: 334,
    fontSize: 14,
    marginTop: 18,
    color: '#414141',
  },
  textfour: {
    color: '#010101',
    marginTop: 32,
    marginLeft: 18,
    marginBottom: 40,
    fontSize: 20,
  },
  textfive: {
    marginLeft: 32,
    marginBottom: 50,
    color: '#010101',
    fontSize: 14,
  },
  deletebutton: {
    fontWeight: 'bold',
    color: '#010101',
    width: 300,
    marginLeft: 30,
    // textAlign: 'center',
    // alignSelf: 'center',
    // backgroundColor: 'red',
  },
  iconn: {
    height: 25,
    width: 25,
    maxWidth: 300,
  },
  mainoptionsall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330,
  },
});
