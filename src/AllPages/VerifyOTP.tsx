import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import BackHeader from '../Components/BackHeader';
import {useNavigation} from '@react-navigation/native';

const VerifyOTP = props => {
  const nav = useNavigation();

  const [move, setMove] = useState('');

  const validate2 = () => {
    if (move == '') {
      Alert.alert('Enter value');
    } else if (move.length < 4) {
      Alert.alert('enter full OTP');
    } else {
      nav.replace('Profilesetup');
    }
  };
  console.log(move?.length, 'move');

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
      // text={'Verify OTP'}
      />
      <Text style={styles.verify}>Verify OTP</Text>
      <Text style={styles.smallText}>
        Enter the 4-digit code sent to your registered email at abc.gmail.com
      </Text>
      <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={{}}
        onCodeChanged={code => {
          setMove(code);

          console.log(`Code is ${code}, you are good to go!`);
        }}
      />

      <TouchableOpacity
        style={styles.continuebutton}
        onPress={validate2}
        // onPress={() => nav.replace('Profilesetup')}
      >
        <Text style={styles.continuetext}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resend}>Resend</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verify: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    marginTop: 15,
    marginLeft: 15,
  },
  smallText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 20,
    marginLeft: 15,
  },

  underlineStyleBase: {
    width: 40,
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 18,
    color: '#000',
    marginLeft: 38,
  },
  // underlineStyleHighLighted: {
  //   borderColor: '#03DAC6',
  // },
  continuebutton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    marginLeft: 75,
    borderRadius: 40,
    backgroundColor: '#B8FF3D',
  },
  continuetext: {
    fontWeight: 'bold',
  },
  resend: {
    marginLeft: 150,
    marginTop: 20,
    fontWeight: 'bold',
    width: 200,
    height: 50,
  },
});
