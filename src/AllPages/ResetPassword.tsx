import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../Components/BackHeader';
import TextInputco from '../Components/TextInputco';
import Button from '../Components/Button';

const ResetPassword = () => {
  const [securedata, setSecuredata] = useState();
  const [securedata2, setSecuredata2] = useState();
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState();

  const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`-]).{6,}$/;

  const validate6 = () => {
    if (password == '' || confirmpassword == '') {
      Alert.alert('Enter all the values');
    } else if (password !== confirmpassword) {
      Alert.alert('Confirm password is not same');
    } else if (!passwordRegex.test(password)) {
      Alert.alert('enter strong password');
    } else {
      Alert.alert('good to go');
    }
  };

  console.log(password, 'password');

  return (
    <View>
      <BackHeader
      //  text={'Reset Your Password'}
      />
      <View style={styles.main}>
        <Text style={styles.firstText}>Reset Password</Text>
        <Text style={styles.smallText}>
          Set your new password to access your account
        </Text>
      </View>
      <View style={styles.maininput}>
        <TextInputco
          style={styles.placeholderline}
          placeholder={'Enter new Password'}
          onchangetexttt={setPassword}
          valuee={password}
          securetextentryy={securedata}
        />
        <TouchableOpacity onPress={() => setSecuredata(!securedata)}>
          <Image
            style={styles.eyeimage}
            source={
              securedata
                ? require('../assets/images/openeye.png')
                : require('../assets/images/closeeye.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.maininput}>
        <TextInputco
          style={styles.placeholderline2}
          placeholder={'Confirm new Password'}
          securetextentryy={securedata2}
          valuee={confirmpassword}
          onchangetexttt={setConfirmpassword}
        />
        <TouchableOpacity onPress={() => setSecuredata2(!securedata2)}>
          <Image
            style={styles.eyeimage}
            source={
              securedata2
                ? require('../assets/images/openeye.png')
                : require('../assets/images/closeeye.png')
            }
          />
        </TouchableOpacity>
      </View>
      <Button onPress={validate6} text={'Update'} />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  firstText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  smallText: {
    fontSize: 10,
    marginTop: 5,
  },
  main: {
    marginTop: 20,
    marginLeft: 15,
  },
  maininput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: -10,
    // borderBottomWidth: 0.5,
    // marginHorizontal: 20,
  },
  eyeimage: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginRight: 25,
    // padding: 20,
    // paddingTop: 20,
    // paddingBottom: 20,
    // backgroundColor: 'red',
  },
  placeholderline: {
    width: '175%',
  },
  placeholderline2: {
    width: '160%',
  },
});
