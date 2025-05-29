// In My Profile press on Help & Support
// .

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';

const RatingHelpSupport = () => {
  const [groceryRating, setGroceryRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);

  const navigation = useNavigation();
  return (
    <>
      <View>
        <Text style={styles.heading}>Rate Your Order</Text>
      </View>
      <ScrollView>
        <View style={styles.maingrocery}>
          <Text style={styles.title}>Rate our Grocery</Text>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={32}
            startingValue={groceryRating}
            onFinishRating={setGroceryRating}
            fractions={0} // 👈 ensures tapping only (no sliding/fractions)
            showRating={false}
            tintColor="#fff"
            ratingColor="#B9FF3A"
            fullStarColor={'#F2BC32'}
            ratingBackgroundColor="#ccc"
            style={styles.rating}
          />
          <Text style={styles.ratingValue}>
            You rated: {groceryRating} star's
          </Text>
        </View>

        {/* Delivery Rating */}
        <View style={styles.maindelivery}>
          <Text style={styles.title}>Rate our Delivery Boy</Text>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={32}
            startingValue={deliveryRating}
            onFinishRating={setDeliveryRating}
            fractions={0} // 👈 same here
            showRating={false}
            tintColor="#fff"
            ratingColor="#B9FF3A"
            ratingBackgroundColor="#ccc"
            style={styles.rating}
          />
          <Text style={styles.ratingValue}>
            You rated: {deliveryRating} star's
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BottomtabNavigation')}>
            <Text style={styles.submitbutton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default RatingHelpSupport;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // backgroundColor: 'blue',
    flexGrow: 1,
    // justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  rating: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
  ratingValue: {
    fontSize: 14,
    color: '#333',
    marginBottom: 30,
  },
  submitbutton: {
    height: 50,
    width: 330,
    backgroundColor: '#B9FF3A',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 30,
    color: '#010101',
    fontWeight: 'bold',
    marginTop: 250,
    fontSize: 16,
  },
  heading: {
    fontWeight: 'bold',
    color: '#010101',
    fontSize: 20,
    // justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  maingrocery: {
    height: 120,
    width: 340,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 30,
  },
  maindelivery: {
    height: 120,
    width: 340,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 30,
    borderRadius: 10,
  },
});

// 333333333=====without Package==========333333333333333333

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';

// const stars = [1, 2, 3, 4, 5];

// const RatingHelpSupport = () => {
//   const [groceryRating, setGroceryRating] = useState(0);
//   const [deliveryRating, setDeliveryRating] = useState(0);

//   const renderStars = (selectedRating, onSelectRating) => (
//     <View style={styles.starsContainer}>
//       {stars.map(star => (
//         <TouchableOpacity key={star} onPress={() => onSelectRating(star)}>
//           <Image
//             source={require('../../assets/Icons/StarRating.png')}
//             style={[
//               styles.starIcon,
//               selectedRating >= star && styles.selectedStarIcon,
//             ]}
//           />
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Rate Our Grocery</Text>
//       {renderStars(groceryRating, setGroceryRating)}
//       <Text style={styles.selectedText}>
//         You rated: {groceryRating} {groceryRating > 0 && '⭐'}
//       </Text>

//       <Text style={[styles.title, {marginTop: 40}]}>Rate Our Delivery Boy</Text>
//       {renderStars(deliveryRating, setDeliveryRating)}
//       <Text style={styles.selectedText}>
//         You rated: {deliveryRating} {deliveryRating > 0 && '⭐'}
//       </Text>

//       <TouchableOpacity style={styles.submitButton}>
//         <Text style={styles.submitText}>Submit Ratings</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default RatingHelpSupport;

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     backgroundColor: '#fff',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 16,
//   },
//   starsContainer: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   starIcon: {
//     width: 40,
//     height: 40,
//     tintColor: '#ccc',
//   },
//   selectedStarIcon: {
//     tintColor: '#B9FF3A',
//   },
//   selectedText: {
//     fontSize: 16,
//     marginTop: 8,
//     color: '#333',
//   },
//   submitButton: {
//     marginTop: 60,
//     backgroundColor: '#000',
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: 'center',
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });
