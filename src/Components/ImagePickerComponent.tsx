// import {
//   Image,
//   PermissionsAndroid,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Platform,
//   Alert,
//   ActionSheetIOS,
//   Modal,
//   TouchableWithoutFeedback,
//   BackHandler,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const ImagePickerComponent = (props: {requireimagepicker: any}) => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const backAction = () => {
//       if (show) {
//         setShow(false);
//         return true;
//       }
//       return false;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();
//   }, [show]);

//   const {requireimagepicker} = props;

//   const [filePath, setFilePath] = useState(null);

//   // Request Camera Permission (Android only)
//   const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'App needs access to your camera',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions in Info.plist
//   };

//   // Open Camera
//   const handleCameraOpen = async () => {
//     const hasPermission = await requestCameraPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Camera access is required.');
//       return;
//     }

//     launchCamera({mediaType: 'photo', quality: 1}, response => {
//       console.log('Camera Response:', response);
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.errorMessage) {
//         console.error('Camera Error:', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         setFilePath(response.assets[0].uri);
//       }
//     });
//   };

//   // Request Gallery Permission (Android only)
//   const requestGalleryPermission = async () => {
//     if (Platform.OS === 'android') {
//       const permission =
//         Platform.Version >= 33
//           ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
//           : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

//       const granted = await PermissionsAndroid.request(permission, {
//         title: 'Gallery Permission',
//         message: 'App needs access to your photos',
//         buttonPositive: 'OK',
//       });

//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS handles permissions in Info.plist
//   };

//   // Open Gallery
//   const handleGalleryOpen = async () => {
//     const hasPermission = await requestGalleryPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Gallery access is required.');
//       return;
//     }

//     launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
//       console.log('Gallery Response:', response);
//       if (response.didCancel) {
//         console.log('User cancelled gallery selection');
//       } else if (response.errorMessage) {
//         console.error('Gallery Error:', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         setFilePath(response.assets[0].uri);
//       }
//     });
//   };

//   // Show Action Sheet (iOS & Android)
//   const showImagePickerOptions = () => {
//     if (Platform.OS === 'ios') {
//       ActionSheetIOS.showActionSheetWithOptions(
//         {
//           options: ['Cancel', 'Take a Photo', 'Choose from Gallery'],
//           cancelButtonIndex: 0,
//         },
//         buttonIndex => {
//           if (buttonIndex === 1) handleCameraOpen();
//           else if (buttonIndex === 2) handleGalleryOpen();
//         },
//       );
//     } else {
//       Alert.alert(
//         'Profile Picture',
//         'Select an option',
//         [
//           {text: 'Take a Photo', onPress: handleCameraOpen},
//           {text: 'Choose from Gallery', onPress: handleGalleryOpen},
//           {text: 'Cancel', style: 'cancel'},
//         ],
//         {cancelable: true},
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Profile Picture - Tap to Open Action Sheet */}
//       <TouchableOpacity
//         onPress={() => setShow(true)}
//         // onPress={showImagePickerOptions}
//       >
//         <Image
//           source={filePath ? {uri: filePath} : requireimagepicker}
//           style={styles.image}
//         />
//       </TouchableOpacity>

//       <Text style={styles.text}>Tap the image to change profile picture</Text>
//       {/* <Modal
//         visible={show}
//         animationType="slide"
//         transparent={true}
//         style={styles.modalview}>
//         <View>kkdkdkdk</View>
//       </Modal> */}

//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text onPress={() => setShow(true)}>Open Modal</Text>

//         <Modal
//           visible={show}
//           animationType="slide"
//           transparent={true}
//           onRequestClose={() => setShow(false)} // iOS & Android back
//         >
//           {/* 🔹 This catches taps outside the modal */}
//           <TouchableWithoutFeedback onPress={() => setShow(false)}>
//             <View style={styles.modalOverlay}>
//               {/* 🔹 Stop propagation so tap inside doesn't close modal */}
//               <TouchableWithoutFeedback>
//                 <View style={styles.modalview}>
//                   <Text style={{color: 'white'}}>kkdkdkdk</Text>
//                 </View>
//               </TouchableWithoutFeedback>
//             </View>
//           </TouchableWithoutFeedback>
//         </Modal>
//       </View>
//     </View>
//   );
// };

// export default ImagePickerComponent;

// const styles = StyleSheet.create({
//   container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 2,
//     borderColor: '#000',
//   },
//   text: {
//     marginTop: 10,
//     fontSize: 14,
//     color: '#555',
//   },
//   modalview: {
//     flex: 1,
//     backgroundColor: 'blue',
//     height: 50,
//     width: 200,
//     alignSelf: 'center',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)', // Dimmed background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalview: {
//     backgroundColor: 'blue',
//     height: 100,
//     width: 200,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// 222222222222222222222222222222222222222222222222222222222222222222

// import {
//   Image,
//   PermissionsAndroid,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Platform,
//   Alert,
//   ActionSheetIOS,
//   Modal,
//   TouchableWithoutFeedback,
//   BackHandler,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const ImagePickerComponent = (props: {requireimagepicker: any}) => {
//   const [show, setShow] = useState(false);
//   const {requireimagepicker} = props;
//   const [filePath, setFilePath] = useState(null);

//   useEffect(() => {
//     const backAction = () => {
//       if (show) {
//         setShow(false);
//         return true;
//       }
//       return false;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();
//   }, [show]);

//   const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'App needs access to your camera',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const handleCameraOpen = async () => {
//     const hasPermission = await requestCameraPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Camera access is required.');
//       return;
//     }

//     launchCamera({mediaType: 'photo', quality: 1}, response => {
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.errorMessage) {
//         console.error('Camera Error:', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         setFilePath(response.assets[0].uri);
//         setShow(false);
//       }
//     });
//   };

//   const requestGalleryPermission = async () => {
//     if (Platform.OS === 'android') {
//       const permission =
//         Platform.Version >= 33
//           ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
//           : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

//       const granted = await PermissionsAndroid.request(permission, {
//         title: 'Gallery Permission',
//         message: 'App needs access to your photos',
//         buttonPositive: 'OK',
//       });

//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const handleGalleryOpen = async () => {
//     const hasPermission = await requestGalleryPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Gallery access is required.');
//       return;
//     }

//     launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
//       if (response.didCancel) {
//         console.log('User cancelled gallery selection');
//       } else if (response.errorMessage) {
//         console.error('Gallery Error:', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         setFilePath(response.assets[0].uri);
//         setShow(false);
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Profile Picture - Tap to Open Modal */}
//       <TouchableOpacity onPress={() => setShow(true)}>
//         <Image
//           source={filePath ? {uri: filePath} : requireimagepicker}
//           style={styles.image}
//         />
//       </TouchableOpacity>

//       <Text style={styles.text}>Tap the image to change profile picture</Text>

//       {/* Modal */}
//       <Modal
//         visible={show}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setShow(false)}>
//         <TouchableWithoutFeedback onPress={() => setShow(false)}>
//           <View style={styles.modalOverlay}>
//             <TouchableWithoutFeedback>
//               <View style={styles.modalView}>
//                 <TouchableOpacity
//                   style={styles.modalButton}
//                   onPress={handleCameraOpen}>
//                   <Text style={styles.modalButtonText}>📷 Take a Photo</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.modalButton}
//                   onPress={handleGalleryOpen}>
//                   <Text style={styles.modalButtonText}>
//                     🖼️ Choose from Gallery
//                   </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.modalButton, {backgroundColor: '#ccc'}]}
//                   onPress={() => setShow(false)}>
//                   <Text style={[styles.modalButtonText, {color: '#000'}]}>
//                     ❌ Cancel
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </View>
//   );
// };

// export default ImagePickerComponent;

// const styles = StyleSheet.create({
//   container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 2,
//     borderColor: '#000',
//   },
//   text: {
//     marginTop: 10,
//     fontSize: 14,
//     color: '#555',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 12,
//     width: 250,
//     alignItems: 'center',
//   },
//   modalButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     marginVertical: 8,
//     backgroundColor: '#007BFF',
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePickerComponent = (props: {requireimagepicker: any}) => {
  const [show, setShow] = useState(false);
  const {requireimagepicker} = props;
  const [filePath, setFilePath] = useState(null);

  useEffect(() => {
    const backAction = () => {
      if (show) {
        setShow(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [show]);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleCameraOpen = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Camera access is required.');
      return;
    }

    launchCamera({mediaType: 'photo', quality: 1}, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.error('Camera Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setFilePath(response.assets[0].uri);
        setShow(false);
      }
    });
  };

  const requestGalleryPermission = async () => {
    if (Platform.OS === 'android') {
      const permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const granted = await PermissionsAndroid.request(permission, {
        title: 'Gallery Permission',
        message: 'App needs access to your photos',
        buttonPositive: 'OK',
      });

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleGalleryOpen = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Gallery access is required.');
      return;
    }

    launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
      if (response.didCancel) {
        console.log('User cancelled gallery selection');
      } else if (response.errorMessage) {
        console.error('Gallery Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setFilePath(response.assets[0].uri);
        setShow(false);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture - Tap to Open Modal */}
      <TouchableOpacity onPress={() => setShow(true)}>
        <Image
          source={filePath ? {uri: filePath} : requireimagepicker}
          style={styles.image}
        />
      </TouchableOpacity>

      <Text style={styles.text}>Tap the image to change profile picture</Text>

      {/* Modal */}
      <Modal
        visible={show}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShow(false)}>
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                {/* Title */}
                <Text style={styles.modalTitle}>Upload From</Text>

                {/* Camera Button */}
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleCameraOpen}>
                  <Text style={styles.emoji}>📷</Text>
                  <Text style={styles.modalButtonText}>
                    Open Camera from Image
                  </Text>
                </TouchableOpacity>

                {/* Gallery Button */}
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleGalleryOpen}>
                  <Text style={styles.emoji}>🖼️</Text>
                  <Text style={styles.modalButtonText}>
                    Import From Gallery for Image
                  </Text>
                </TouchableOpacity>

                {/* Cancel Button */}
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setShow(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: 300,
    alignItems: 'flex-start',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: 'black',
  },
  cancelButton: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
