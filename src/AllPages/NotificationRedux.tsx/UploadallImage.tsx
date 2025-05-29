// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Alert, // Import Alert for confirmation
// } from 'react-native';

// import {launchImageLibrary} from 'react-native-image-picker';

// const UploadAllImage = () => {
//   const [images, setImages] = useState<any[]>([]);

//   // Handle adding image
//   const handleAddImage = () => {
//     launchImageLibrary({mediaType: 'photo'}, response => {
//       if (response.assets && response.assets.length > 0) {
//         const selectedImage = response.assets[0];
//         if (images.length < 10) {
//           setImages([...images, selectedImage]);
//         }
//       }
//     });
//   };

//   // Handle deleting an image
//   const handleDeleteImage = (index: number) => {
//     Alert.alert(
//       'Delete Image',
//       'Are you sure you want to delete this image?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Delete',
//           onPress: () => {
//             const updatedImages = images.filter((_, i) => i !== index);
//             setImages(updatedImages);
//           },
//         },
//       ],
//       {cancelable: true},
//     );
//   };

//   const renderItem = ({item, index}: any) => {
//     if (item.placeholder) {
//       // Render the Add Image button
//       return (
//         <TouchableOpacity style={styles.addTile} onPress={handleAddImage}>
//           <Image
//             source={require('../../assets/Icons/ImageUpload.png')} // Upload icon
//             style={{height: 36, width: 36}}
//           />
//         </TouchableOpacity>
//       );
//     }

//     // Render the image
//     return (
//       <TouchableOpacity
//         onLongPress={() => handleDeleteImage(index)} // Add long press functionality
//         activeOpacity={0.8}>
//         <Image
//           source={{uri: item.uri}}
//           style={styles.image}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Upload up to 10 Images</Text>

//       <FlatList
//         data={images.length < 10 ? [...images, {placeholder: true}] : images}
//         renderItem={renderItem} // Use renderItem here
//         numColumns={3}
//       />

//       <Text style={styles.countText}>{images.length} / 10 images uploaded</Text>
//     </View>
//   );
// };

// export default UploadAllImage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     marginTop: 50,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   addTile: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     borderWidth: 2,
//     borderColor: '#ccc',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   countText: {
//     marginTop: 10,
//     fontSize: 14,
//     color: '#555',
//   },
// });

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';

const UploadAllImage = () => {
  const [images, setImages] = useState<any[]>([]);

  // ✅ Modified to allow multiple image selection
  const handleAddImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 10 - images.length, // ✅ Allow multiple images up to remaining slots
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          const selectedImages = response.assets.slice(0, 10 - images.length); // ✅ Limit to remaining
          setImages(prev => [...prev, ...selectedImages]); // ✅ Append multiple images
        }
      },
    );
  };

  const handleDeleteImage = (index: number) => {
    Alert.alert(
      'Delete Image',
      'Are you sure you want to delete this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedImages = images.filter((_, i) => i !== index);
            setImages(updatedImages);
          },
        },
      ],
      {cancelable: true},
    );
  };

  const renderItem = ({item, index}: any) => {
    if (item.placeholder) {
      return (
        <TouchableOpacity style={styles.addTile} onPress={handleAddImage}>
          <Image
            source={require('../../assets/Icons/ImageUpload.png')}
            style={{height: 36, width: 36}}
          />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        onLongPress={() => handleDeleteImage(index)}
        activeOpacity={0.8}>
        <Image
          source={{uri: item.uri}}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload up to 10 Images</Text>

      <FlatList
        data={images.length < 10 ? [...images, {placeholder: true}] : images}
        renderItem={renderItem}
        numColumns={3}
      />

      <Text style={styles.countText}>{images.length} / 10 images uploaded</Text>
    </View>
  );
};

export default UploadAllImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addTile: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  countText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});
