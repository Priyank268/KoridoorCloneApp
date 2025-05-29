import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import React from 'react';
import BackHeader from '../../Components/BackHeader';

const Contactoption = [
  {
    id: 1,
    iconss: require('../../assets/Icons/Chatwithus.png'),
    title: 'Chat with Us',
    details: 'For a better experience, chat from your registered number',
  },
  {
    id: 2,
    iconss: require('../../assets/Icons/CallNow.png'),
    title: 'Call Now',
    details: 'For a better experience, call from your registered number',
  },
  {
    id: 3,
    iconss: require('../../assets/Icons/Writetous.png'),
    title: 'Write to Us',
    details: 'Average response time 24-48 Hrs',
  },
];

// open whatsapp

const openWhatsApp = async () => {
  const phone = `+91 6397317676`; // Format the phone number
  const whatsappUrl = `whatsapp://send?phone=${phone}`;
  const appStoreUrl = 'itms-apps://itunes.apple.com/app/whatsapp/id310633997';
  const playStoreUrl = 'market://details?id=com.whatsapp'; // URL for the Play Store
  try {
    // Check if WhatsApp is installed on the device
    const supported = await Linking.canOpenURL(whatsappUrl);
    if (supported) {
      // If WhatsApp is installed, open it
      await Linking.openURL(whatsappUrl);
    } else {
      // If WhatsApp is not installed, redirect to the app store based on platform
      if (Platform.OS === 'ios') {
        // Redirect to App Store on iOS
        await Linking.openURL(appStoreUrl);
      } else if (Platform.OS === 'android') {
        // Redirect to Play Store on Android
        await Linking.openURL(playStoreUrl);
      }
    }
  } catch (error) {
    console.error('Error opening WhatsApp:', error);
  }
};

const ContactUs = () => {
  return (
    <View>
      <BackHeader />
      <Text style={styles.textone}> Contact Us</Text>
      <Image
        style={styles.imageone}
        source={require('../../assets/images/Contactus.png')}
      />
      <Text style={styles.texttwo}>FACING ANY ISSUE?</Text>
      <Text style={styles.textthree}>
        Please get in touch and we will be happy to help you
      </Text>
      <FlatList
        data={Contactoption}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              if (item.id === 1) {
                openWhatsApp();
              } else if (item.id === 2) {
                Linking.openURL(`tel:${353435435345}`);
              } else {
                Linking.openURL(`mailto:${'vc@yopmail.com'}`);
              }
            }}
            style={styles.mainFlatlist}>
            <Image style={styles.icons} source={item.iconss} />
            <View style={styles.textsection}>
              <Text style={styles.textfour}>{item.title}</Text>
              <Text style={styles.textfive}>{item.details}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  imageone: {
    height: 200,
    width: 312,
    alignSelf: 'center',
    marginTop: 30,
  },
  mainFlatlist: {
    marginLeft: 20,
    flexDirection: 'row',
    marginTop: 30,
  },
  icons: {
    height: 18,
    width: 18,
    marginTop: 5,
    // alignSelf: 'center',
  },
  textone: {
    fontWeight: 'bold',
    color: '#272C3F',
    marginTop: -45,
    marginLeft: 50,
    fontSize: 18,
  },
  texttwo: {
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#111111',
  },
  textthree: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 208,
    marginTop: 8,
    // marginBottom: 50,
  },
  textsection: {
    marginLeft: 10,
  },
  textfour: {
    fontWeight: 'bold',
    color: '#1D1D1D',
    fontSize: 14,
  },
  textfive: {
    fontSize: 10,
  },
});
