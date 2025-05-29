import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import RnRangeSlider from 'rn-range-slider';

// **Added useNavigation import**
import {useNavigation} from '@react-navigation/native'; // 🔹 Changed this line

const ratings = [1, 2, 3, 4, 5];
const options = [
  {id: '1', label: 'New'},
  {id: '2', label: 'Popular'},
  {id: '3', label: 'Price Low To High'},
  {id: '4', label: 'Price High To Low'},
];

const Filter = () => {
  // **Added navigation hook**
  const navigation = useNavigation(); // 🔹 Changed this line

  const [selectedId, setSelectedId] = useState('1');
  const [priceRange, setPriceRange] = useState({low: 0, high: 100});
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSliderChange = (low, high) => {
    if (low !== priceRange.low || high !== priceRange.high) {
      setPriceRange({low, high});
    }
  };

  const handleRatingSelect = rating => {
    setSelectedRating(rating === selectedRating ? null : rating);
  };

  // **Handle Clear Filter button press** - Reset selected filter states
  const handleClearFilter = () => {
    setSelectedId('1'); // 🔹 Reset selectedId to '1'
    setPriceRange({low: 0, high: 100}); // 🔹 Reset priceRange to {low: 0, high: 100}
    setSelectedRating(null); // 🔹 Reset selectedRating to null
  };

  const renderRatingItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleRatingSelect(item)}
      style={styles.item}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/Icons/base.png')}
          style={styles.baseImage}
        />
        <View
          style={[
            styles.overlayContent,
            selectedRating === item && styles.activeOverlay,
          ]}>
          <Text
            style={[
              styles.ratingText,
              selectedRating === item && styles.activeRatingText,
            ]}>
            {item}.0
          </Text>
          <Image
            source={require('../assets/Icons/star.png')}
            style={[
              styles.starImage,
              selectedRating === item && styles.activeStar,
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.sortTitle}>Sort by</Text>
        {options.map(option => (
          <Pressable
            key={option.id}
            onPress={() => setSelectedId(option.id)}
            style={styles.optionRow}>
            <Text
              style={[
                styles.optionLabel,
                selectedId === option.id && styles.selectedLabel,
              ]}>
              {option.label}
            </Text>
            <View style={styles.radioOuter}>
              {selectedId === option.id && <View style={styles.radioInner} />}
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.priceRangeContainer}>
        <Text style={styles.priceRangeTitle}>
          Price Range: ${priceRange.low} - ${priceRange.high}
        </Text>
        <RnRangeSlider
          style={{width: '100%', height: 40}}
          min={0}
          max={500}
          step={1}
          low={priceRange.low}
          high={priceRange.high}
          onValueChanged={handleSliderChange}
          renderThumb={() => <View style={styles.thumb} />}
          renderRail={() => <View style={styles.rail} />}
          renderRailSelected={() => <View style={styles.railSelected} />}
          renderLabel={() => null}
          renderNotch={() => null}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.sortTitle}>Rating</Text>
        <FlatList
          data={ratings}
          renderItem={renderRatingItem}
          contentContainerStyle={styles.listContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View>
        {/* **Apply Filter Button** */}
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomtabNavigation')}>
          <Text style={styles.applyfilter}>Apply Filter</Text>
        </TouchableOpacity>

        {/* **Clear Filter Button** */}
        <TouchableOpacity onPress={handleClearFilter}>
          <Text style={styles.clearfilter}>Clear Filter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Filter;

// 💅 Styles stay the same (copied from your existing code)
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sortTitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 16,
    fontWeight: '500',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  optionLabel: {
    fontSize: 14,
    color: '#000',
  },
  selectedLabel: {
    fontWeight: 'bold',
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  priceRangeContainer: {
    padding: 20,
  },
  priceRangeTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
    color: '#000',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  rail: {
    flex: 1,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
  },
  railSelected: {
    height: 4,
    backgroundColor: '#000',
    borderRadius: 2,
  },
  item: {
    alignItems: 'center',
  },
  imageWrapper: {
    width: 55,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  baseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 8,
  },
  overlayContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    height: 40,
    width: 55,
    borderRadius: 11,
  },
  activeOverlay: {
    backgroundColor: '#000',
    borderRadius: 11,
  },
  ratingText: {
    fontSize: 14,
    color: '#1A1824',
    fontWeight: '500',
  },
  activeRatingText: {
    color: '#B9FF3A',
  },
  starImage: {
    width: 18,
    height: 18,
    tintColor: '#1A1A1A',
  },
  activeStar: {
    tintColor: '#B9FF3A',
  },
  listContainer: {
    gap: 11,
  },
  applyfilter: {
    height: 50,
    width: 330,
    backgroundColor: '#B9FF3A',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 30,
    color: '#010101',
    fontWeight: 'bold',
    marginTop: 100,
    fontSize: 16,
  },
  clearfilter: {
    height: 50,
    width: 330,
    backgroundColor: '#B9FF3A',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 30,
    color: '#010101',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
});
