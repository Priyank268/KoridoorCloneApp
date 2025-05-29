import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../Components/BackHeader';
import CountryPickerComponent from '../Components/CountryPickerComponent';
import ImagePickerComponent from '../Components/ImagePickerComponent';

const Profilesetup = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [enumber, setEnumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`-]).{6,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validate3 = () => {
    // to change directly to next screen
    props?.navigation?.navigate('Forget1password');
    return;

    if (
      name == '' ||
      number == '' ||
      email == '' ||
      enumber == '' ||
      password == '' ||
      confirmpassword == ''
    ) {
      Alert.alert('enter all the values');
    } else if (name.length < 3) {
      Alert.alert('enter Full name');
    } else if (number.length < 8) {
      Alert.alert('enter valid phone no');
    } else if (!emailRegex.test(email)) {
      Alert.alert('enter valid email address');
    } else if (enumber.length < 8) {
      Alert.alert('enter valid Emergency no');
    } else if (!passwordRegex.test(password)) {
      Alert.alert(
        'use any special char with no and capital word in your password',
      );
    } else if (password !== confirmpassword) {
      Alert.alert('confirm password is not same');
    } else {
      props?.navigation?.navigate('Forget1password');
    }
  };

  // console.log(confirmpassword, 'confirmpassword');

  const [securedata, setSecuredata] = useState(true);
  const [securedata2, setSecuredata2] = useState(true);
  console.log(securedata2, securedata2, 'password');

  return (
    <ScrollView>
      <BackHeader
      //  text={'Profile Setup'}
      />
      <View style={styles.topText}>
        <Text style={styles.profile}>Profile Setup</Text>
        <Text style={styles.smalltext}>Enter your details below</Text>
      </View>
      <View>
        {/* <Image
          style={styles.profileimage}
          source={require('../assets/images/Profilepic.jpg')}
        /> */}
        <ImagePickerComponent
          requireimagepicker={require('../assets/images/Profilepic.jpg')}
        />
      </View>
      <View>
        <TextInput
          style={styles.name}
          onChangeText={setName}
          placeholder="Name"></TextInput>
      </View>
      <View style={styles.germanymain}>
        {/* <Image
          source={require('../assets/images/germany.jpg')}
          style={styles.germanyimage}
        />
        <Image
          style={styles.countryoption}
          source={require('../assets/images/countryoption.jpg')}
        /> */}

        <CountryPickerComponent
        // style={styles.countrypickeroption}
        />

        <TextInput
          style={styles.germanytext}
          keyboardType="numeric"
          placeholder="+1 399579452"
          onChangeText={setNumber}
          maxLength={10}
        />
        <Image
          style={styles.blacktick}
          source={require('../assets/images/Blacktick.jpg')}
        />
      </View>
      <View>
        <TextInput
          style={styles.name}
          onChangeText={setEmail}
          placeholder="Email ID"></TextInput>
      </View>
      <View>
        <TextInput
          style={styles.name}
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={setEnumber}
          placeholder="Emergency Mobile Number"></TextInput>
      </View>

      <View>
        {/* Password Field */}
        <View style={styles.mainpassword}>
          <TextInput
            secureTextEntry={securedata}
            style={styles.name}
            onChangeText={setPassword}
            value={password}
            maxLength={12}
            placeholder="Password"
          />

          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                paddingRight: 22,
              }}
              onPress={() => setSecuredata(!securedata)}>
              <Image
                style={styles.imageeye}
                source={
                  securedata
                    ? require('../assets/images/closeeye.png') // Hide password
                    : require('../assets/images/openeye.png') // Show password
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Field */}
        <View style={styles.mainpassword}>
          <TextInput
            secureTextEntry={securedata2}
            style={styles.name}
            onChangeText={setConfirmpassword}
            value={confirmpassword}
            maxLength={12}
            placeholder="Confirm Password"
          />
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              right: 0,
              bottom: 0,
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                paddingRight: 22,
                // backgroundColor: 'blue',
              }}
              onPress={() => setSecuredata2(!securedata2)}>
              <Image
                style={styles.imageeye}
                source={
                  securedata2
                    ? require('../assets/images/closeeye.png') // Hide password
                    : require('../assets/images/openeye.png') // Show password
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.mainsubmit}
        onPress={validate3}
        // onPress={() => props?.navigation?.navigate('Forget1password')}
      >
        <Text style={styles.submitbutton}>Sumbit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profilesetup;

const styles = StyleSheet.create({
  profile: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  topText: {
    marginLeft: 15,
    marginTop: 15,
  },
  smalltext: {
    fontSize: 10,
    marginTop: 5,
  },
  profileimage: {
    height: 90,
    width: 90,
    marginTop: 30,
    marginLeft: 130,
  },
  name: {
    borderBottomWidth: 0.5,
    marginHorizontal: 15,
    width: '90%',
  },
  germanyimage: {
    height: 30,
    width: 30,
    marginTop: 15,
  },
  germanytext: {
    marginHorizontal: 10,
    marginTop: 5,
    width: 250,
    // backgroundColor: 'red',
  },
  blacktick: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginLeft: -30,
  },
  germanymain: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    width: 330,
    marginLeft: 15,
  },
  countryoption: {
    height: 8,
    width: 8,
    marginTop: 25,
    marginLeft: 5,
  },

  imageeye: {
    height: 5,
    width: 5,
    padding: 10,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    // marginLeft: -50,
    // marginTop: 10,
  },
  // imageeye2: {
  //   height: 30,
  //   width: 30,
  //   marginLeft: -50,
  //   marginTop: 10,
  // },

  mainpassword: {
    flexDirection: 'row',
    flex: 1,
  },
  submitbutton: {
    // alignItems: 'center',
  },
  mainsubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginLeft: 20,
    backgroundColor: '#B8FF3D',
    height: 50,
    width: 320,
    borderRadius: 30,
  },
});
