import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICON_NAMES} from '../../Helpers/Constants/Icon';
import {toggleCartItem} from '../../Reducer/Addtocart';

const MyWishlist = () => {
  const cartItems = useSelector(state => state.cart?.items);
  const dispatch = useDispatch();

  //   const handleRemove = item => {
  //     dispatch(removeFromCart(item));
  //   };

  const handleRemove = item => {
    dispatch(toggleCartItem(item)); // 🔧 use toggleCartItem
  };

  return (
    <View style={{flex: 1}}>
      <Text>MyWishlist</Text>
      <View>
        <FlatList
          style={{paddingHorizontal: 6}}
          data={cartItems}
          renderItem={({item}) => {
            return (
              <View style={styles.mainfruits}>
                <TouchableOpacity
                  onPress={() => {
                    // solve(item?.id);
                  }}>
                  <Image
                    source={ICON_NAMES.redheart}
                    resizeMode="contain"
                    style={styles.Whiteheartimage}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={item.imageway}
                    style={styles.fruitsimage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View style={styles.mainfruittext}>
                  <Text style={styles.titletext}>{item.title}</Text>
                  <Text style={styles.titletext2}>{item.title2}</Text>
                  <Text style={styles.quantitytext}>{item.quantity}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => handleRemove(item)}
                  style={styles.mainfruitbutton}>
                  <Text style={styles.fruittextbutton}>{'Remove'}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default MyWishlist;

const styles = StyleSheet.create({
  topimage: {
    height: 40,
    width: 40,
    marginRight: 16,
    marginTop: 12,
  },
  mainone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Polygonimg: {
    height: 8,
    width: 13,
    alignSelf: 'center',
  },
  smalllocation: {
    height: 14,
    width: 14,
    alignSelf: 'center',
  },
  mainlocation: {
    flexDirection: 'row',
    marginLeft: 16,
  },

  Searchmain: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 20,
    width: 330,
    height: 40,
    marginLeft: 16,
    marginTop: 29,
  },
  searchimg: {
    height: 19,
    width: 19,
    marginLeft: 10,
    marginTop: 10,
  },
  searchtext: {
    marginLeft: 10,
    width: 280,
    // backgroundColor: 'red',
  },
  Catagerytext: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  Catageryimage: {
    height: 90,
    width: 70,
  },
  imagetext: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#010101',
    width: '70%',
    textAlign: 'center',
  },
  maincatageryimgs: {
    flex: 1,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // padding: 5,
    margin: 5,
    borderRadius: 10,
    // marginHorizontal: 14,
    borderColor: '#00000015',
  },
  maincatagery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  Vstoreimage: {
    height: 190,
    width: 335,
    marginTop: 15,
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  heartimage: {
    height: 35,
    width: 35,
    marginLeft: 290,
    marginTop: 10,
    // backgroundColor: 'green',
  },
  coloumbackground: {
    backgroundColor: 'white',
    marginTop: 50,
    marginHorizontal: 5,
    height: 85,
    borderRadius: 10,
  },
  coloumtext: {
    paddingTop: 15,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    color: '#070606',
  },
  mainsmalllocationtext: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
  },
  columnsmalltext: {
    fontSize: 11,
  },
  maincoloumnlast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    marginTop: 10,
  },
  mainstar: {
    flexDirection: 'row',
    marginLeft: 5,

    justifyContent: 'space-between',
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  starimg: {
    height: 10,
    width: 62,
    alignSelf: 'center',
  },
  startext: {
    fontSize: 12,
    marginLeft: 4,
  },
  mainclock: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  clockimg: {
    height: 15,
    width: 15,
  },
  clocktext: {
    fontSize: 11,
    paddingLeft: 2,
  },
  Whiteheartimage: {
    height: 20,
    width: 20,
    marginLeft: 120,
    marginTop: 10,
  },
  fruitsimage: {
    height: 100,
    width: 95,
    alignSelf: 'center',
  },
  mainfruittext: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  titletext: {
    fontSize: 15,
    color: '#070606',
    fontWeight: 'bold',
  },
  titletext2: {
    fontSize: 8,
    color: 'grey',
  },
  quantitytext: {
    fontSize: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  mainfruits: {
    borderRadius: 10,
    margin: 10,
    width: 155,
    backgroundColor: 'lightgrey',
  },
  mainfruitbutton: {
    width: 154,
    height: 30,
    backgroundColor: '#B8FF3D',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  fruittextbutton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#010101',
    fontSize: 12,
  },
  mainfavProduct: {
    flex: 1,
    // backgroundColor: 'green',
    marginTop: 10,
  },
  realimg: {
    height: 110,
    width: 110,
  },
  maindisplay: {
    flexDirection: 'row',
    marginHorizontal: 15,
    // backgroundColor: 'red',
    marginBottom: 30,
  },
  maindatadisplay: {
    marginHorizontal: 10,
    // marginRight: 60,
    // backgroundColor: 'pink',
  },
  Besttext: {
    fontSize: 10,
    backgroundColor: '#B8FF3D',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: '#010101',
  },
  singlestarimg: {
    height: 15,
    width: 15,
    marginLeft: 5,
  },
  singlestartext: {
    fontSize: 12,
    color: '#272C3F',
    marginLeft: 5,
  },
  titletext3: {
    fontSize: 12,
    color: '#292D32',
    fontWeight: 'bold',
    marginTop: 5,
  },
  pricetext: {
    fontSize: 16,
    color: '#292D32',
    fontWeight: 'bold',
    marginTop: 5,
  },
  summaryytext: {
    fontSize: 10,
    color: '#A2A2A2',
    width: 215,
  },
  mainlastsection: {
    backgroundColor: '#EFEFEF',
    height: 271,
  },
  maindotedline: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 6,
    // paddingHorizontal: 10,
    // marginLeft: 10,
    // backgroundColor: 'red',
  },
  dotedline1: {
    width: 135,
    alignSelf: 'center',
  },
  testdashline: {
    fontSize: 25,
    paddingHorizontal: 5,
    color: '#010101',
    fontWeight: 'bold',
  },
  dotedline2: {
    width: 130,
    alignSelf: 'center',
  },
  imgdiscount: {
    height: 90,
    width: 90,
    // justifyContent: 'flex-end',
    marginLeft: 50,
    marginTop: -10,
  },
  imglogo: {
    height: 70,
    width: 100,
    alignSelf: 'center',
    marginTop: -25,
  },
  mainlastcoloumn: {
    backgroundColor: 'pink',
    // marginTop: 100,
  },
  mainlastprice: {
    flexDirection: 'row',
    // paddingBottom: 10,
    // marginBottom: 10,
  },
  mainlasttitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 12,
  },
  oldprice: {
    color: '#FFFFFF',
    marginTop: 8,
    marginLeft: 10,
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  newprice: {
    color: '#FFFFFF',
    marginTop: 5,
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
