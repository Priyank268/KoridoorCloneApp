import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  BackHandler,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {navigate} from '../../../App';
import {useNavigation} from '@react-navigation/native';

const ModalDeleteaccount = ({setDeleteAccountModal, visible}) => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      if (visible) {
        setDeleteAccountModal(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setDeleteAccountModal(false)}>
      <Pressable onPress={() => setDeleteAccountModal(false)} style={{flex: 1}}>
        <Pressable onPress={() => {}} pointerEvents="box-none">
          {/* Close icon */}
          <TouchableOpacity
            onPress={() => setDeleteAccountModal(false)}
            style={styles.closeIconWrapper}>
            <Image
              style={styles.closeIcon}
              source={require('../../assets/Icons/delete.png')}
            />
          </TouchableOpacity>

          {/* Modal box */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
              setDeleteAccountModal(false);
            }}
            style={styles.mainbackground}>
            <Image
              style={styles.background}
              source={require('../../assets/Icons/DeleteBackground.png')}
            />
            <Image
              style={styles.box}
              source={require('../../assets/Icons/Deletebox.png')}
            />
            <Text style={styles.Deletetext}>Delete Account</Text>
            <Text style={styles.requesttext}>
              Request has been sent to Admin. Admin will remove your account.
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ModalDeleteaccount;

const styles = StyleSheet.create({
  closeIconWrapper: {
    position: 'absolute',
    top: 210,
    right: 40,
  },
  closeIcon: {
    height: 24,
    width: 24,
  },
  background: {
    position: 'absolute',
    width: 70,
    height: 70,
    marginTop: 30,
  },
  box: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginTop: 30,
  },
  mainbackground: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 250,
    height: 250,
    width: 300,
    borderRadius: 20,
    paddingTop: 20,
  },
  Deletetext: {
    color: '#010101',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
  },
  requesttext: {
    color: '#A2A2A2',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
    width: 230,
  },
});
