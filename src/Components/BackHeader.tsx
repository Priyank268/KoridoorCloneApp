import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BackHeader = (props: {goBack?: any; text?: any}) => {
  const navigation = useNavigation();
  const {text} = props;

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation?.goBack()}>
        <Image
          style={styles.image}
          source={require('../assets/images/Goback.png')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
  },
  main: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: '70%',
    padding: 15,
  },
});
