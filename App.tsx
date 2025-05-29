import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import Signup from './src/AllPages/Signup';
import VerifyOTP from './src/AllPages/VerifyOTP';
import Profilesetup from './src/AllPages/Profilesetup';
import Forget1password from './src/AllPages/Forget1password';
import ForgetPassPhoneno from './src/AllPages/ForgetPassPhoneno';
import ResetPassword from './src/AllPages/ResetPassword';
import HomePage from './src/AllPages/HomePage';
import BottomtabNavigation from './src/Navigation/BottomtabNavigation';
import MyOrder from './src/AllPages/Tabs/MyOrder';
import Notifications from './src/AllPages/Tabs/Notifications';
import MyProfile from './src/AllPages/Tabs/MyProfile';
import Modalcomponent from './src/Components/Modalcomponent';
import {checkPermission} from './src/Notification/PushNotification';
import messaging from '@react-native-firebase/messaging';
import {store} from './src/Reducer/Store';
import {Provider} from 'react-redux';
import {combinedStore} from './src/Reducer/CombinedStore';
import ContactUs from './src/AllPages/MyProfile/ContactUs';
import DeleteAccount from './src/AllPages/MyProfile/DeleteAccount';
import MyWishlist from './src/AllPages/MyProfile/MyWishlist';
import OrderCancelInputText from './src/AllPages/NotificationRedux.tsx/OrderCancelInputText';
import OrderCompletedStoreData from './src/AllPages/NotificationRedux.tsx/OrderCompletedStoreData';
import UploadallImage from './src/AllPages/NotificationRedux.tsx/UploadallImage';
import VedioSlider from './src/AllPages/NotificationRedux.tsx/VedioSlider';
import Filter from './src/AllPages/Filter';
import RatingHelpSupport from './src/AllPages/MyProfile/RatingHelpSupport';
import ALLAPI from './src/ALLAPI/ALLAPI';
import ImageAPI from './src/ALLAPI/ImageAPI';
import EditDeleteAPI from './src/ALLAPI/EditDeleteAPI';
import Splash from './src/AllPages/Splash';

// PushNotification code start

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// PushNotification code end

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef?.navigate(name as never, params as never);
  }
}
const App = () => {
  const handleNotifications = async () => {
    await checkPermission();
  };

  useEffect(() => {
    handleNotifications();
  }, []);

  return (
    <Provider store={combinedStore}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
          <Stack.Screen name="Profilesetup" component={Profilesetup} />
          <Stack.Screen name="Forget1password" component={Forget1password} />
          <Stack.Screen
            name="ForgetPassPhoneno"
            component={ForgetPassPhoneno}
          />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Bottomtab" component={BottomtabNavigation} />
          <Stack.Screen name="MyWishlist" component={MyWishlist} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
          <Stack.Screen
            name="OrderCancelInputText"
            component={OrderCancelInputText}
          />
          <Stack.Screen
            name="OrderCompletedStoreData"
            component={OrderCompletedStoreData}
          />
          <Stack.Screen name="UploadallImage" component={UploadallImage} />
          <Stack.Screen name="VedioSlider" component={VedioSlider} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen
            name="BottomtabNavigation"
            component={BottomtabNavigation}
          />
          <Stack.Screen
            name="RatingHelpSupport"
            component={RatingHelpSupport}
          />
          <Stack.Screen name="ALLAPI" component={ALLAPI} />
          <Stack.Screen name="ImageAPI" component={ImageAPI} />
          <Stack.Screen name="EditDeleteAPI" component={EditDeleteAPI} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
