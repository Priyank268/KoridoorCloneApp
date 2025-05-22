// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { IMAGE_NAMES } from '../helper/constants/images'
// import LinearGradient from 'react-native-linear-gradient'

// const BackgroundCircles = () => {
//     return (
//         <View>
//             {/* <Text>BackgroundCircles</Text> */}
//             <View>
//                 <LinearGradient colors={['#FFFFFF', '#EEFAFF']}>
//                 </LinearGradient>
//                 <Image style={{ height: 186.5, width: 186.5 }} resizeMode='contain'
//                     source={IMAGE_NAMES.top_left_circle}
//                 />
//                 <Image source={IMAGE_NAMES.bottom_right_circle} resizeMode='contain'
//                     style={{
//                         height: 186.5, width: 186.5, marginTop: 420, marginLeft: 200
//                     }} />
//             </View>
//         </View>
//     )
// }

// export default BackgroundCircles

// const styles = StyleSheet.create({})




import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { IMAGE_NAMES } from '../helper/constants/images';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundCircles = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#EEFAFF']}
        // colors={['#FFFFFF', '#f69697']}
        // colors={['red', 'blue']}
        style={StyleSheet.absoluteFill} // covers the whole screen
      />
      <Image
        style={styles.topLeft}
        resizeMode="contain"
        source={IMAGE_NAMES.top_left_circle}
      />
      <Image
        source={IMAGE_NAMES.bottom_right_circle}
        resizeMode="contain"
        style={styles.bottomRight}
      />
    </View>
  );
};

export default BackgroundCircles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topLeft: {
    height: 186.5,
    width: 186.5,
  },
  bottomRight: {
    height: 186.5,
    width: 186.5,
    marginTop: 420,
    marginLeft: 200,
  },
});