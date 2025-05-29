import React, {useEffect, useRef, useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');

const videoData = [
  {id: '1', source: require('../../assets/Vedios/one.mp4')},
  {id: '2', source: require('../../assets/Vedios/one.mp4')},
  {id: '3', source: require('../../assets/Vedios/one.mp4')},
  {id: '4', source: require('../../assets/Vedios/one.mp4')},
  {id: '5', source: require('../../assets/Vedios/one.mp4')},
  {id: '6', source: require('../../assets/Vedios/one.mp4')},
];

const VideoSlider = () => {
  const sliderRef = useRef<AppIntroSlider>(null);
  const videoRefs = useRef<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    stopAutoScroll(); // Clear existing interval before starting a new one
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % videoData.length);
    }, 4000); // Slide every 4 seconds
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Start auto scroll when data is loaded
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // Go to the currentIndex programmatically
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.goToSlide(currentIndex, true);
    }
  }, [currentIndex]);

  // Pause all other videos except the current one
  const renderItem = ({item, index}: any) => (
    <View style={styles.slide} key={item.id}>
      <Video
        ref={(ref: Video) => {
          videoRefs.current[index] = ref;
        }}
        source={item.source}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={index !== currentIndex}
      />
    </View>
  );

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
    startAutoScroll(); // Reset interval on manual swipe
  };

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={videoData}
      renderItem={renderItem}
      showNextButton={false}
      showPrevButton={false}
      showDoneButton={false}
      onSlideChange={handleSlideChange}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      scrollEnabled
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    // backgroundColor: 'black',
  },
  video: {
    width: width,
    height: 350,
  },
  dot: {
    backgroundColor: '#ccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    marginBottom: 20,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    marginBottom: 20,
  },
});

export default VideoSlider;
