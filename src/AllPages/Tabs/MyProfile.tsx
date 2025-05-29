import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Modalcomponent from '../../Components/Modalcomponent';
import {navigate} from '../../../App';
import {useNavigation} from '@react-navigation/native';

const MyProfile = () => {
  const navigation = useNavigation();

  const Optionlist = [
    {
      id: 1,
      iconimage: require('../../assets/Icons/CardTick.png'),
      title: 'Manage Address',
      text: 'Manage Address',
      arrowimg: require('../../assets/Icons/LightArrow.png'),
    },
    {
      id: 2,
      iconimage: require('../../assets/Icons/CardTick.png'),
      title: 'Manage Payment Methods',
      text: 'Manage Payment Methods',
      arrowimg: require('../../assets/Icons/LightArrow.png'),
    },
    {
      id: 3,
      iconimage: require('../../assets/Icons/setting.png'),
      title: 'Settings',
      text: 'Privacy and logout',
      arrowimg: require('../../assets/Icons/LightArrow.png'),
    },
    {
      id: 4,
      iconimage: require('../../assets/Icons/HelpSupport.png'),
      title: 'Help & Support',
      text: 'Privacy and logout',
      arrowimg: require('../../assets/Icons/LightArrow.png'),
    },
    {
      id: 5,
      iconimage: require('../../assets/Icons/Wishlist.png'),
      title: 'My Wishlist',
      text: 'Select language',
      arrowimg: require('../../assets/Icons/LightArrow.png'),
    },
  ];

  const cmslist = [
    {id: 1, title: 'Contact Us'},
    {id: 2, title: 'Term & Conditions'},
    {id: 3, title: "FAQ's"},
    {id: 4, title: 'Delete Account'},
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollView>
      <View style={styles.topHead}>
        <Text style={styles.toptext}>Account</Text>
      </View>
      <View style={styles.Profilesection}>
        <View style={styles.profileimagesection}>
          <Image
            style={styles.profileimage}
            source={require('../../assets/images/Profilepic.jpg')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.datasection}>
          <Text style={styles.namee}>Priyank </Text>
          <Text style={styles.emaill}>Priyank123@gmail.com </Text>
          <View style={styles.viewprofile}>
            <Text style={styles.profilee}>View Profile</Text>
            <Image
              style={styles.darkarrow}
              resizeMode="contain"
              source={require('../../assets/Icons/ArrowDark.png')}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={Optionlist}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item.id, 'item.id');

              if (item.id === 5) {
                navigation.navigate('MyWishlist');
              } else if (item.id === 4) {
                navigation.navigate('RatingHelpSupport');
              } else if (item.id === 1) {
                navigation.navigate('ALLAPI');
              } else if (item.id === 2) {
                navigation.navigate('ImageAPI');
              } else if (item.id === 3) {
                navigation.navigate('EditDeleteAPI');
              }
            }}
            style={styles.optionlist}>
            <Image style={styles.iconimagee} source={item.iconimage} />
            <View style={styles.maintextarrow}>
              <View style={styles.Titletext}>
                <Text style={styles.titlee}>{item.title}</Text>

                <Text style={styles.textt}>{item.text}</Text>
              </View>
              <Image style={styles.lightarrowimg} source={item.arrowimg} />
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{marginTop: 20}}></View>
      <FlatList
        data={cmslist}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              style={styles.cmslistt}
              onPress={() => {
                if (item.id === 1) {
                  navigation.navigate('ContactUs');
                } else if (item.id === 4) {
                  navigation.navigate('DeleteAccount');
                }
              }}>
              <Text style={styles.cmslistttext}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>

      {/* Conditionally render Modalcomponent */}
      {showModal && <Modalcomponent setShowModal={setShowModal} />}
    </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  topHead: {
    marginLeft: 12,
    marginTop: 10,
  },
  toptext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1D1D',
  },
  profileimage: {
    height: 75,
    width: 75,
  },
  Profilesection: {
    height: 120,
    width: 335,
    backgroundColor: '#F7FFE9',
    marginLeft: 12,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  profileimagesection: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  datasection: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  namee: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1D1D',
  },
  emaill: {
    fontSize: 12,
    color: '#1D1D1D',
    marginVertical: 5,
  },
  viewprofile: {
    flexDirection: 'row',
  },
  profilee: {
    fontSize: 12,
    color: '#010101',
  },
  darkarrow: {
    height: 14,
    width: 14,
    alignSelf: 'center',
    marginLeft: 5,
  },
  iconimagee: {
    height: 26,
    width: 26,
    alignSelf: 'center',
    marginLeft: 10,
  },
  maintextarrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: 280,
  },
  Titletext: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  titlee: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textt: {
    fontSize: 12,
  },
  lightarrowimg: {
    height: 17,
    width: 17,
    alignSelf: 'center',
  },
  optionlist: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
    height: 55,
    width: 335,
    marginLeft: 12,
    borderRadius: 10,
  },
  cmslistt: {
    marginLeft: 12,
    // backgroundColor: 'lightgrey',
    marginBottom: 12,
  },
  cmslistttext: {
    color: '#4F4F4F',
    fontSize: 14,
  },
  logout: {
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 14,
    // backgroundColor: 'lightgrey',
  },
});
