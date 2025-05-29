import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigaion = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigaion.replace('Signup');
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.main}>
      {/* <Text>Splash</Text> */}
      <Image
        style={styles.image}
        source={require('../assets/Icons/Mainsplash.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#BAFF39',
    height: 800,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
