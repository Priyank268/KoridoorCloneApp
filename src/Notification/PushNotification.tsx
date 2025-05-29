// import {PermissionsAndroid} from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';
// import {useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';
// // import {navigate} from '../navigation';

// const nav = useNavigation();

// const requestPermissions = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//     );
//     if (granted) {
//       try {
//         // let fcmToken = await getKeyFromStorage(STORAGE_KEYS.fcmToken);

//         // await messaging().registerDeviceForRemoteMessages();
//         let fcmToken = await messaging().getToken();
//         // user has a device token
//         console.log(fcmToken, '<===fcmToken');

//         // await addKeyToStorage(STORAGE_KEYS.fcmToken, fcmToken);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   } catch (error) {
//     console.log(error, 'RRRR');
//   }
// };

// const getToken = async () => {
//   try {
//     // await messaging().registerDeviceForRemoteMessages();
//     let fcmToken = await messaging().getToken();
//     // user has a device token
//     console.log(fcmToken, '<===fcmToken');
//   } catch (error) {
//     console.log(error, 'eeee');
//   }
// };

// export const checkPermission = async () => {
//   const enabled = await messaging().hasPermission();
//   if (enabled) {
//     getToken();
//   } else {
//     requestPermissions();
//   }
// };

// PushNotification.configure({
//   onRegister: async function () {
//     PushNotification.getDeliveredNotifications((callback: string | any[]) => {
//       if (callback.length > 0) {
//         console.log('badge number', callback);
//       }
//     });

//     PushNotification.createChannel(
//       {
//         channelId: 'default-channel-id',
//         channelName: 'default channel',
//         channelDescription: 'A channel to categorise your notifications',
//         soundName: 'default',
//         importance: 4,
//         vibrate: true,
//       },
//       (channel: any) => {
//         console.log(`channel created: ${channel}`);
//       },
//     );

//     messaging().onMessage(async remoteMessage => {
//       //   console.log(remoteMessage, '<====9090909090909');
//       PushNotification.localNotification({
//         channelId: 'default-channel-id',
//         title: remoteMessage?.data?.title || '',
//         message: remoteMessage?.data?.message || '',
//         picture: '',
//         userInfo: '',
//         playSound: true,
//         icon: 'image',
//         soundName: 'default',
//         number: 0,
//         priority: 'high',
//         visibility: 'private',
//         channelName: 'default channel',
//         channelDescription: 'A channel to categorise your notifications',
//         importance: 'high',
//         vibrate: true,
//       });
//     });
//   },

//   onNotification: async function (notification: {
//     foreground: any;
//     userInteraction: any;
//     finish: (arg0: string) => void;
//   }) {
//     if (notification?.foreground) {
//     }

//     if (notification?.userInteraction) {
//       // console.log(notification, 'isForeground');
//       // if (userToken !== null) {
//       nav?.navigate('Profilesetup');
//       // }
//     }

//     // notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });

import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {navigate} from '../../App';

// Request Notification Permission
const requestPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      try {
        let fcmToken = await messaging().getToken();
        console.log('FCM Token:', fcmToken);
      } catch (error) {
        console.error('FCM Token Error:', error);
      }
    }
  } catch (error) {
    console.error('Permission Request Error:', error);
  }
};

// Get FCM Token
const getToken = async () => {
  try {
    let fcmToken = await messaging().getToken();
    console.log('FCM Token:', fcmToken);
  } catch (error) {
    console.error('Error fetching FCM Token:', error);
  }
};

// Check & Request Permission
export const checkPermission = async () => {
  const enabled = await messaging().hasPermission();
  if (enabled) {
    getToken();
  } else {
    requestPermissions();
  }
};

// Push Notification Configuration
PushNotification.configure({
  onRegister: async function () {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id',
        channelName: 'Default Channel',
        channelDescription: 'A channel for notifications',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      channel => console.log(`Channel created: ${channel}`),
    );

    messaging().onMessage(async remoteMessage => {
      PushNotification.localNotification({
        channelId: 'default-channel-id',
        title: remoteMessage?.notification?.title || '',
        message: remoteMessage?.notification?.body || '',
        playSound: true,
        soundName: 'default',
        priority: 'high',
        vibrate: true,
      });
    });
  },

  onNotification: async function (notification) {
    console.log('Notification Clicked:', notification);

    if (notification?.userInteraction) {
      // if (navigationRef.isReady())
      {
        console.log('Navigating to Profilesetup...');
        navigate('ForgetPassPhoneno', undefined);
      }
    }
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: true,
});
