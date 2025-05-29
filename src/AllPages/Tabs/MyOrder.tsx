import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const MyOrder = () => {
  const [selected, setSelected] = useState(true);

  const orderlist = [
    {
      id: 1,
      images: require('../../assets/images/Realjuice.png'),
      orderno: '#3545545',
      datetime: '10 /02/22 at 12:00 PM',
      name: 'Real Orange Fruit Juices',
      title: 'Fruit Juices',
      text: '2 X Fruit Juices',
      price: '$90.00',
      pricetext: 'Total Price',
      shareimage: require('../../assets/Icons/Shareicon.png'),
    },
    {
      id: 2,
      images: require('../../assets/images/Realjuice.png'),
      orderno: '#3545545',
      datetime: '10 /02/22 at 12:00 PM',

      name: 'Real Orange Fruit Juices',
      title: 'Fruit Juices',
      text: '2 X Fruit Juices',
      price: '$90.00',
      pricetext: 'Total Price',
      shareimage: require('../../assets/Icons/Shareicon.png'),
    },
    {
      id: 3,
      images: require('../../assets/images/Realjuice.png'),
      orderno: '#3545545',
      datetime: '10 /02/22 at 12:00 PM',

      name: 'Real Orange Fruit Juices',
      title: 'Fruit Juices',
      text: '2 X Fruit Juices',
      price: '$90.00',
      pricetext: 'Total Price',
      shareimage: require('../../assets/Icons/Shareicon.png'),
    },
  ];

  const completedOrder = [
    {
      id: 1,
      images: require('../../assets/images/Realjuice.png'),
      orderno: '#3545545',
      datetime: '10 /02/22 at 12:00 PM',
      name: 'Real Orange Fruit Juices',
      title: 'Fruit Juices',
      text: '2 X Fruit Juices',
      price: '$90.00',
      pricetext: 'Total Price',
      shareimage: require('../../assets/Icons/Shareicon.png'),
      ratenow: 'Rate Now',
      reorder: 'Re-Order',
    },
    {
      id: 2,
      images: require('../../assets/images/Realjuice.png'),
      datetime: '10 /02/22 at 12:00 PM',
      orderno: '#3545545',
      name: 'Real Orange Fruit Juices',
      title: 'Fruit Juices',
      text: '2 X Fruit Juices',
      price: '$90.00',
      pricetext: 'Total Price',
      shareimage: require('../../assets/Icons/Shareicon.png'),
      ratenow: 'Rate Now',
      reorder: 'Re-Order',
    },
    {
      id: 3,
      images: require('../../assets/images/Realjuice.png'),
      datetime: '10 /02/22 at 12:00 PM',
      orderno: '#3545545',
      name: 'Real Orange Fruit Juices',
      title: 'Fruit Juices',
      text: '2 X Fruit Juices',
      price: '$90.00',
      pricetext: 'Total Price',
      shareimage: require('../../assets/Icons/Shareicon.png'),
      ratenow: 'Rate Now',
      reorder: 'Re-Order',
    },
  ];

  return (
    <ScrollView>
      <View>
        <Text style={styles.topText}>My Orders</Text>
      </View>
      <View style={styles.mainButton}>
        <TouchableOpacity
          style={[
            styles.neworderButton,
            {backgroundColor: selected ? '#B9FF3A' : '#EFEFEF'},
          ]}
          onPress={() => {
            setSelected(true);
          }}>
          <Text
            style={{fontWeight: 'bold', color: selected ? 'black' : '#A2A2A2'}}>
            New Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.Completedorderbutton,
            {backgroundColor: selected ? '#EFEFEF' : '#B9FF3A'},
          ]}
          onPress={() => {
            setSelected(false);
          }}>
          <Text
            style={{fontWeight: 'bold', color: selected ? '#A2A2A2' : 'black'}}>
            Completed Order
          </Text>
        </TouchableOpacity>
      </View>
      {selected ? (
        <View style={styles.mainimagecontainer}>
          <FlatList
            data={orderlist}
            renderItem={({item}) => (
              <View style={styles.topmaincolumn}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.maincoloumn}>
                    <Image
                      style={styles.realimage}
                      resizeMode="contain"
                      source={item.images}
                    />
                    <View style={styles.secondcolumn}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.ordernoo}>{item.orderno}</Text>
                        <Text style={styles.datetimee}>{item.datetime}</Text>
                      </View>
                      <Text style={styles.namee}>{item.name}</Text>
                      <Text style={styles.titlee}>{item.title}</Text>
                      <View style={styles.line}></View>
                      <Text style={styles.textt}>{item.text}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text style={styles.pricee}>{item.price}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.pricetextt}>
                            {item.pricetext}
                          </Text>
                          <TouchableOpacity>
                            <Image
                              style={styles.shareimg}
                              source={item.shareimage}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={styles.mainimagecontainer}>
          <FlatList
            data={completedOrder}
            renderItem={({item}) => (
              <View style={styles.topmaincolumn}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.maincoloumn}>
                    <Image
                      style={styles.realimage}
                      resizeMode="contain"
                      source={item.images}
                    />
                    <View style={styles.secondcolumn}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.ordernoo}>{item.orderno}</Text>
                        <Text style={styles.datetimee}>{item.datetime}</Text>
                      </View>
                      <Text style={styles.namee}>{item.name}</Text>
                      <Text style={styles.titlee}>{item.title}</Text>
                      <View style={styles.line}></View>
                      <Text style={styles.textt}>{item.text}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text style={styles.pricee}>{item.price}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.pricetextt}>
                            {item.pricetext}
                          </Text>
                          {/* <Image style={styles.shareimg} source={item.shareimage} /> */}
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <TouchableOpacity style={styles.ratenoww}>
                    <Text>{item.ratenow}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.reorder}>
                    <Text>{item.reorder}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  topText: {
    marginLeft: 12,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#272C3F',
  },
  mainButton: {
    flexDirection: 'row',
    width: 340,
    height: 40,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  neworderButton: {
    // marginHorizontal: 20,
    backgroundColor: 'grey',
    width: 170,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
  },
  Completedorderbutton: {
    backgroundColor: 'pink',
    width: 170,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
  },
  realimage: {
    height: 100,
    width: 80,
    // resizeMode: 'contain',
    marginLeft: 8,
  },
  mainimagecontainer: {
    backgroundColor: 'lightgrey',
    width: 335,
    marginLeft: 12,
    height: 590,
    borderRadius: 10,
    flexDirection: 'row',
  },
  maincoloumn: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    width: 320,
    borderRadius: 10,
  },
  secondcolumn: {
    marginLeft: 10,
    marginVertical: 5,
  },
  topmaincolumn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 11,
    marginHorizontal: 8,
    // paddingBottom: 10,
  },
  ordernoo: {
    color: '#548AE6',
    fontSize: 12,
  },
  datetimee: {
    color: '#A2A2A2',
    fontSize: 10,
    marginLeft: 60,
  },
  namee: {
    color: '#272C3F',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titlee: {
    color: '#272C3F',
    fontSize: 10,
  },
  line: {
    borderBottomWidth: 0.5,
    color: '#96979C',
    paddingTop: 5,
    marginBottom: 5,
  },
  textt: {
    color: '#272C3F',
    fontSize: 10,
  },
  pricee: {
    color: '#010101',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pricetextt: {
    color: '#A2A2A2',
    fontSize: 10,
    alignSelf: 'center',
    marginLeft: 5,
  },
  shareimg: {
    height: 24,
    width: 24,
    marginLeft: 90,
  },
  ratenoww: {
    backgroundColor: '#96979C',
    height: 30,
    width: 150,
    marginHorizontal: 6,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reorder: {
    backgroundColor: '#B1B1B12B',
    textAlign: 'center',
    height: 30,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
