import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
// import CheckBox from '@react-native-community/checkbox';
import {Switch} from 'react-native-gesture-handler';
// import BackHeader from '../Components/BackHeader';

const Forget1password = props => {
  const [EmailSelected, setEmailSelected] = useState(true); // Default: Email is white

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Books', value: 'Books'},
    {label: 'Charger', value: 'Charger'},
    {label: 'Food', value: 'Food'},
  ]);

  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled(previousState => !previousState);

  const [email, setEmail] = useState();
  const [location, setLocation] = useState('');
  const [room, setRoom] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`-]).{6,}$/;

  const [securedata, setSecuredata] = useState(true);

  const validate4 = () => {
    // to directly move to next screen
    props?.navigation?.navigate('ForgetPassPhoneno');
    return;

    if (
      (email == '' && EmailSelected) ||
      (phone == '' && !EmailSelected) ||
      location == '' ||
      room == '' ||
      !value ||
      password == ''
    ) {
      Alert.alert('Enter all values');
    } else if (!email?.includes('@') && EmailSelected) {
      Alert.alert('invalid email');
    } else if (location?.length < 3) {
      Alert.alert('enter full location');
    } else if (room <= 0) {
      Alert.alert('Invalid room no');
    } else if (!passwordRegex.test(password)) {
      Alert.alert('include any special character to your password');
    } else {
      props?.navigation?.navigate('ForgetPassPhoneno');
    }
  };

  // console.log(securedata, 'location');

  return (
    <ScrollView>
      {/* <BackHeader text={'Password'} /> */}
      <View>
        <Image
          style={styles.signupbucket}
          source={require('../assets/images/Group1.jpg')}
        />
        <View style={styles.mainoption}>
          <TouchableOpacity
            style={[
              styles.emailbutton,
              {backgroundColor: EmailSelected ? 'white' : 'black'},
            ]}
            onPress={() => setEmailSelected(true)}>
            <Text style={{color: EmailSelected ? 'black' : 'white'}}>
              Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.phonebutton,

              {backgroundColor: EmailSelected ? 'black' : 'white'},
            ]}
            onPress={() => setEmailSelected(false)}>
            <Text style={{color: EmailSelected ? 'white' : 'black'}}>
              Phone number
            </Text>
          </TouchableOpacity>
        </View>

        {/* Email or Phone Section */}
        {EmailSelected ? (
          <View style={styles.calltab}>
            <Image
              style={styles.callicon}
              source={require('../assets/images/Email.jpg')} // Email icon
            />
            <TextInput
              style={styles.callplace}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
          </View>
        ) : (
          <View style={styles.calltab}>
            <Image
              style={styles.callicon}
              source={require('../assets/images/Call2.jpg')} // Phone icon
            />
            <TextInput
              keyboardType="numeric"
              style={styles.callplace}
              maxLength={10}
              onChangeText={setPhone}
              value={phone}
              placeholder="Phone Number"
            />
          </View>
        )}
      </View>

      <View style={styles.mainlocation}>
        <Image
          style={styles.locationicon}
          source={require('../assets/images/Location.png')}
        />
        <TextInput
          onChangeText={setLocation}
          value={location}
          style={styles.locationplace}
          placeholder="Location"
        />
      </View>
      <View style={styles.mainstore}>
        <Image
          style={styles.storeicon}
          // source={require('../Assets/Images/Store.png')}
          source={require('../assets/images/Email.jpg')}
        />
        {/* <TextInput style={styles.storeplace} placeholder="Campus Store" /> */}

        <DropDownPicker
          open={open}
          value={value}
          setItems={setItems}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          placeholder={'Choose a Material.'}
          style={styles.dropdownitem}
        />
      </View>
      <View style={styles.roomno}>
        <TextInput
          style={styles.textroomno}
          onChangeText={setRoom}
          value={room}
          keyboardType="numeric"
          maxLength={2}
          placeholder="Room No"
        />
      </View>

      <View style={styles.mainpassword}>
        <Image
          style={styles.passwordicon}
          source={require('../assets/images/Lock.jpg')}
        />
        <TextInput
          style={styles.locationplace}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={securedata}
        />
        <TouchableOpacity onPress={() => setSecuredata(!securedata)}>
          <Image
            style={styles.passwordimage}
            source={
              securedata
                ? require('../assets/images/closeeye.png')
                : require('../assets/images/openeye.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.forgetmain}>
        <Switch
          style={styles.Switchopt}
          onValueChange={toggleSwitch}
          value={enabled}
        />
        <Text style={styles.Remember}>Remember me</Text>
        <TouchableOpacity
          onPress={validate4}
          // onPress={() => props?.navigation?.navigate('ForgetPassPhoneno')}
        >
          <Text style={styles.forgettext}>Forget Password ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        // OTP verify on press Sign up========================================================================
        // onPress={() => props?.navigation?.navigate('HomePage')}
        onPress={() => props?.navigation?.navigate('Bottomtab')}
        style={styles.Loginbutton}>
        <Text style={styles.Logintext}>Login</Text>
      </TouchableOpacity>
      <View style={styles.mainline}>
        <View style={styles.line1}></View>
        <View style={styles.linetext}>
          <Text>Or Continue with</Text>
        </View>
        <View style={styles.line2}></View>
      </View>
      <View style={styles.lastimages}>
        <TouchableOpacity>
          <Image
            style={styles.fb}
            source={require('../assets/images/Facebook.jpg')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.google}
            source={require('../assets/images/Google.jpg')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.apple}
            source={require('../assets/images/Apple.jpg')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.mainlasttext}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => props?.navigation?.navigate('Signup')}>
          <Text style={styles.Login}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Forget1password;

const styles = StyleSheet.create({
  signupbucket: {
    height: 100,
    width: 100,
    marginTop: 50,
    marginHorizontal: 120,
  },
  mainoption: {
    backgroundColor: 'black',
    height: 50,
    width: 300,
    borderRadius: 50,
    marginHorizontal: 30,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    padding: 30,
  },
  emailbutton: {
    height: 50,
    width: 145,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: -5,
  },
  phonebutton: {
    height: 50,
    width: 145,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  calltab: {
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 20,
    width: 300,
    height: 40,
    alignItems: 'center',
    marginLeft: 30,
    padding: 0,
    borderRadius: 10,
    color: '#F3F3F3',
    borderColor: 'grey',
  },
  callicon: {
    height: 37,
    width: 40,
    marginLeft: 10,
    marginTop: 2,
    borderWidth: 0,
  },
  callplace: {
    marginLeft: 20,
    marginTop: 1,
    fontSize: 15,
    color: 'black',
    // borderWidth: 0.5,
    borderColor: 'yellowgreen',
    width: 250,
    // height: 40,
    padding: 0,
    borderRadius: 10,
  },
  locationicon: {
    height: 20,
    width: 20,
    marginLeft: 20,
    marginTop: 8,
  },
  locationplace: {
    marginLeft: 30,
    marginTop: 1,
    fontSize: 15,
    color: 'black',
    // borderWidth: 0.5,
    // borderColor: 'yellowgreen',
    // backgroundColor: 'red',
    width: 185,
    height: 36,
    borderRadius: 10,
    padding: 0,
  },
  mainlocation: {
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 15,
    height: 40,
    width: 300,
    marginLeft: 30,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 0,
  },
  storeicon: {
    height: 40,
    width: 38,
    marginLeft: 10,
    marginTop: 5,
  },
  storeplace: {
    marginLeft: 25,
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    borderWidth: 0.5,
    borderColor: 'yellowgreen',
    width: 195,
    height: 37,
    borderRadius: 10,
  },
  mainstore: {
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 15,
    width: 300,
    marginLeft: 30,
    borderRadius: 10,
    borderColor: 'grey',
  },
  dropdownitem: {
    // height: 10,
    width: 231,
    // marginTop: 20,
    marginLeft: 20,
    // borderColor: 'none',
    borderColor: 'grey',
    backgroundColor: 'none',
  },
  roomno: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    width: 300,
    padding: 0,
    // paddingTop: 0,
    // borderColor: 'yellowgreen',
    borderColor: 'grey',
  },

  textroomno: {marginLeft: 10},

  passwordicon: {
    height: 35,
    width: 40,
    padding: 0,
    marginLeft: 10,
  },
  passwordimage: {
    height: 5,
    width: 5,
    justifyContent: 'flex-end',
    marginRight: 50,
    marginTop: 5,
  },
  mainpassword: {
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 15,
    height: 40,
    width: 300,
    marginLeft: 30,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 0,
  },
  // checkboxtick: {
  //   marginLeft: 20,
  //   marginTop: 10,
  // },
  // TermCondition: {
  //   fontWeight: 'bold',
  // },
  // Checktext: {
  //   fontSize: 15,
  //   marginTop: 15,
  // },
  // maincheckbox: {
  //   flexDirection: 'row',
  // },
  Switchopt: {
    marginLeft: 25,
  },
  Remember: {fontSize: 13, marginTop: 5},
  forgettext: {fontSize: 13, marginTop: 5, marginLeft: 65},
  forgetmain: {flexDirection: 'row', marginVertical: 15},
  Loginbutton: {
    height: 40,
    width: 300,
    // borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginLeft: 30,
    backgroundColor: '#B8FF3D',
    borderRadius: 30,
  },
  Logintext: {fontWeight: 'bold', fontSize: 18},
  line1: {
    borderBottomWidth: 1,
    width: 110,
    color: 'grey',
    marginBottom: 8,
    marginHorizontal: 10,
    marginRight: 10,
  },
  line2: {
    borderBottomWidth: 1,
    width: 100,
    color: '#E5E5E5',
    marginBottom: 8,
    marginRight: 150,
    marginHorizontal: 10,
  },
  linetext: {marginTop: 15},
  mainline: {
    flexDirection: 'row',
  },
  fb: {height: 40, width: 40},
  google: {height: 40, width: 40, marginHorizontal: 20},
  apple: {height: 40, width: 40},
  lastimages: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 90,
  },
  mainlasttext: {
    flexDirection: 'row',
    marginLeft: 70,
    marginVertical: 20,
    marginTop: 60,
  },
  Login: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
