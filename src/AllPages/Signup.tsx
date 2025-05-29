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
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Signup = props => {
  // console.log(props?.navigation?.navigate, '89889');

  const [EmailSelected, setEmailSelected] = useState(true); // Default: Email is white

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Books', value: 'Books'},
    {label: 'Charger', value: 'Charger'},
    {label: 'Food', value: 'Food'},
  ]);

  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [roomno, setRoomno] = useState();
  // console.log(EmailSelected, 'saa');

  const validatee = () => {
    // to directly go to next screen
    props?.navigation?.navigate('VerifyOTP');
    return;

    if (
      (email == '' && EmailSelected) ||
      location == '' ||
      (phone === '' && !EmailSelected) ||
      roomno == '' ||
      !value ||
      !checked
    ) {
      Alert.alert('enter all the values');
    } else if (
      (!email?.includes('@') && EmailSelected) ||
      (!email?.includes('.com') && !email?.includes('.in') && EmailSelected)
    ) {
      Alert.alert('Invalid email!  Enter a valid email address');
    } else if (phone?.length < 8 && !EmailSelected) {
      Alert.alert('Enter a valid phone no');
    } else if (roomno <= 0 || roomno > 99) {
      Alert.alert('Please enter a valid room no');
    } else if (location?.length < 3) {
      Alert.alert('Invalid Location!   Enter a valid Location');
    } else if (!value) {
      Alert.alert('Please select any one Material');
    } else if (!checked) {
      Alert.alert('Accept the Term and conditions');
    } else {
      props?.navigation?.navigate('VerifyOTP');
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '766847512767-0cqv54rn09m4rgvdme31qo3t2tkemat2.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const SigninwithGoogle = async () => {
    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      GoogleSignin.signIn().then(data => {
        var googleuser = data;
        const currentUser = GoogleSignin.getTokens().then(async res => {
          console.log(googleuser);
        });
      });
    } catch (error) {}
  };

  return (
    <ScrollView>
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
            onPress={() => {
              setEmailSelected(true);
            }}>
            <Text style={{color: EmailSelected ? 'black' : 'white'}}>
              Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.phonebutton,

              {backgroundColor: EmailSelected ? 'black' : 'white'},
            ]}
            onPress={() => {
              setEmailSelected(false);
            }}>
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
              value={email}
              onChangeText={setEmail}
              style={styles.callplace}
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
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
              style={styles.callplace}
              placeholder="Phone Number"
              maxLength={10}
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
          value={location}
          onChangeText={setLocation}
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
          containerStyle={
            {
              // width: 250,
              // backgroundColor: 'yellow',
              // marginRight: 20,
              // marginLeft: 10,
              // paddingLeft: 10,
              // borderWidth: 'none',
            }
          }
          customItemLabelStyle={
            {
              // color: 'red',
              // backgroundColor: 'blue',
              // paddingLeft: 20,
              // width: 200,
            }
          }
          closeIconContainerStyle={
            {
              // backgroundColor: 'green',
              // borderColor: 'red',
              // width: 200,
            }
          }
          customItemContainerStyle={
            {
              // backgroundColor: 'orange',
              // marginLeft: 40,
              // paddingLeft: 20,
              // width: 200,
            }
          }
          closeIconStyle={
            {
              // backgroundColor: 'pink',
              // marginLeft: 20,
              // paddingLeft: 30,
              // width: 200,
            }
          }
          // selectedItemContainerStyle={{backgroundColor: 'green'}}
        />
      </View>
      <View style={styles.roomno}>
        <TextInput
          value={roomno}
          onChangeText={setRoomno}
          style={styles.roomnotext}
          keyboardType="numeric"
          placeholder="Room No"
          maxLength={2}
        />
      </View>
      <View style={styles.maincheckbox}>
        <CheckBox
          style={styles.checkboxtick}
          value={checked}
          onValueChange={setChecked}
          tintColors={{true: 'green', false: 'gray'}} // iOS and Android support
        />
        <Text style={styles.Checktext}>
          I accept all the
          <Text style={styles.TermCondition}> Terms and Conditions</Text>
        </Text>
      </View>
      <TouchableOpacity
        // OTP verify on press Sign up========================================================================
        // onPress={() => props?.navigation?.navigate('VerifyOTP')}
        onPress={validatee}
        style={styles.signupbutton}>
        <Text style={styles.signintext}>Sign Up</Text>
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
        <TouchableOpacity onPress={SigninwithGoogle}>
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
        <Text>Already have an account</Text>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate('Forget1password')}>
          <Text style={styles.Login}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

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
    width: 200,
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
    width: 251,
    // marginTop: 20,
    // marginLeft: 20,
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
  roomnotext: {
    marginLeft: 10,
  },

  checkboxtick: {
    marginLeft: 25,
    marginTop: 10,

    // borderRadius: 1,
  },
  TermCondition: {
    fontWeight: 'bold',
  },
  Checktext: {
    fontSize: 14,
    marginTop: 16,
    marginLeft: 10,
  },
  maincheckbox: {
    flexDirection: 'row',
  },
  signupbutton: {
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
  signintext: {fontWeight: 'bold', fontSize: 18},
  line1: {
    borderBottomWidth: 1,
    width: 110,
    color: 'green',
    marginBottom: 8,
    marginHorizontal: 10,
    marginRight: 10,
  },
  line2: {
    borderBottomWidth: 1,
    width: 100,
    color: 'green',
    marginBottom: 8,
    marginRight: 150,
    marginHorizontal: 10,
  },
  linetext: {marginTop: 15},
  mainline: {
    flexDirection: 'row',
  },
  fb: {height: 40, width: 40},
  google: {
    height: 40,
    width: 40,
    marginHorizontal: 20,
  },
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
    marginTop: 45,
  },
  Login: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
