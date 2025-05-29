import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {navigate} from '../../../App';
import {useNavigation} from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Text style={styles.topnotification}>Notification</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.textnotifiaction}>6 Notification</Text>
        <TouchableOpacity>
          <Text style={styles.clearall}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todayy}>
        <Text style={styles.todaytext}>Today</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderCancelInputText')}
          style={styles.todaynotification}>
          <View style={styles.imagesection}>
            <Image
              style={styles.samllimage}
              source={require('../../assets/Icons/OrderCanceled.png')}
            />
          </View>
          <View style={styles.textcolumn}>
            <Text style={styles.onetext}>Order Canceled</Text>
            <Text style={styles.twotext}>
              You decide to cancel your order on...
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderCompletedStoreData')}
            style={styles.todaynotification}>
            <View style={styles.imagesection}>
              <Image
                style={styles.samllimage}
                source={require('../../assets/Icons/OrderComplete.png')}
              />
            </View>
            <View style={styles.textcolumn}>
              <Text style={styles.onetext}>Yah! Order Completed</Text>
              <Text style={styles.twotext}>
                Hurraay! Your order completed, Now check on my order...
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('VedioSlider')}
          style={styles.todaynotification}>
          <View style={styles.imagesection}>
            <Image
              style={styles.samllimage}
              source={require('../../assets/Icons/PaymentSuccess.png')}
            />
          </View>
          <View style={styles.textcolumn}>
            <Text style={styles.onetext}>Yippieee! Payment Success!</Text>
            <Text style={styles.twotext}>You check on my order...</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.todayy}>
        <Text style={styles.todaytext}>Yesterday</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('UploadallImage')}
          style={styles.todaynotification}>
          <View style={styles.imagesection}>
            <Image
              style={styles.samllimage}
              source={require('../../assets/Icons/FinishPayment.png')}
            />
          </View>
          <View style={styles.textcolumn}>
            <Text style={styles.onetext}>Please finish your payment</Text>
            <Text style={styles.twotext}>
              You decide yo cancel your order on...
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  topnotification: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#272C3F',
  },
  notification: {
    height: 46,
    backgroundColor: '#F7FFE9',
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  clearall: {
    fontSize: 12,
    color: '#272C3F',
  },
  textnotifiaction: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#272C3F',
  },
  todayy: {
    marginTop: 17,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 12,
    color: '#757885',
  },
  todaytext: {
    fontWeight: 'bold',
    color: '#757885',
  },
  imagesection: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  todaynotification: {
    flexDirection: 'row',
    backgroundColor: '#F7FFE9',
    marginBottom: 5,
    height: 60,
  },
  samllimage: {
    height: 32,
    width: 32,
  },
  textcolumn: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  onetext: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#272C3F',
  },
  twotext: {
    fontSize: 10,
    color: '#757885',
  },
  yesterdaycolumn: {},
});
