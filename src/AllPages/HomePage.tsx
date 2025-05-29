import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Modal,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import TextComponent from '../Components/TextComponent';
import SeeallButtonComponent from '../Components/SeeallButtonComponent';
import DashedLine from 'react-native-dashed-line';
import LinearGradient from 'react-native-linear-gradient';
import BottomtabNavigation from '../Navigation/BottomtabNavigation';
import {ICON_NAMES} from '../Helpers/Constants/Icon';
import {useDispatch, useSelector} from 'react-redux';
import {toggleCartItem} from './../Reducer/Addtocart';
import {RefreshControl} from 'react-native-gesture-handler';
import AppIntroSlider from 'react-native-app-intro-slider';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';

const sidingimages = [
  {id: 1, imgs: require('../assets/images/VisitedStore.png')},
  {id: 2, imgs: require('../assets/images/VisitedStore.png')},
  {id: 3, imgs: require('../assets/images/VisitedStore.png')},
  {id: 4, imgs: require('../assets/images/VisitedStore.png')},
];

const Imagedata = [
  {
    id: 1,
    title: 'Hot Deals',
    imageurl: require('../assets/images/HotDeals.png'),
  },
  {
    id: 2,
    title: 'Fruits & vegitable',
    imageurl: require('../assets/images/fruit&vegi.png'),
  },
  {
    id: 3,
    title: 'Instant Food',
    imageurl: require('../assets/images/Instantfood.png'),
  },
  {
    id: 4,
    title: 'Dry fruits, Oils And Masalas',
    imageurl: require('../assets/images/Dryfruit.png'),
  },
  {id: 5, title: 'Juices', imageurl: require('../assets/images/Juices.png')},
  {
    id: 6,
    title: 'Baby Care',
    imageurl: require('../assets/images/Babycare.png'),
  },
];

const FavProduct = [
  {
    id: 1,
    imageone: require('../assets/images/Realjuice.png'),
    title: 'Real Orange Fruit Juices',
    price: '$ 61',
    summaryy:
      '| Serves 1-2 | Real Orange Fruit Juices Real Orange Fruit Juices Real Orange Fruit Juices Real Orange Fruit Juices Real',
  },
  {
    id: 2,
    imageone: require('../assets/images/Diredfruit.png'),
    title: 'Peak Dried Fruits',
    price: '$ 613',
    summaryy:
      '| Serves 1-2 | Peak Dried Fruits Peak Dried Fruits Peak Dried Fruits Peak Dried Fruits Peak Dried Fruits Peak Dried',
  },
];

const BrandProduct = [
  {
    id: 1,
    discountimg: require('../assets/images/15off.png'),
    logoimg: require('../assets/images/kisanlogo.png'),
    title: 'Mixed Fruit Jam',
    oldPrice: '$ 613',
    newPrice: '$ 500',
    bgcolor: ['#F2BC32', '#926B0F'],
    width: 125,
    height: 181,
  },
  {
    id: 2,
    discountimg: require('../assets/images/5off.png'),
    logoimg: require('../assets/images/paperboat.png'),
    title: 'Drinks',
    oldPrice: '$ 613',
    newPrice: '$ 500',
    bgcolor: ['#81C115', '#81C115'],
    height: 181,
    width: 125,
  },
  {
    id: 3,
    discountimg: require('../assets/images/15off.png'),
    logoimg: require('../assets/images/motherdairy.png'),
    title: 'Milk & Ice-cream',
    oldPrice: '$ 613',
    newPrice: '$ 500',
    bgcolor: ['#32D1F2', '#0D5E6B'],
    width: 125,
    height: 181,
  },
];

const fruitsdata = [
  {
    id: 1,
    imageway: require('../assets/images/Cherries.png'),
    title: 'Cherries',
    title2: 'Fresho',
    quantity: '1kg',
    text: 'Add to Cart',
    Heart: require('../assets/Icons/WhiteHeart.png'),
  },
  {
    id: 2,
    imageway: require('../assets/images/fruit&vegi.png'),
    title: 'Pineapple',
    title2: 'Fresho',
    quantity: '9-11pcs',
    text: 'Add to Cart',
    Heart: require('../assets/Icons/WhiteHeart.png'),
  },
  {
    id: 3,
    imageway: require('../assets/images/strawberry.png'),
    title: 'Strawberry',
    title2: 'Fresho',
    quantity: '1 Piece/Pieces',
    Heart: require('../assets/Icons/WhiteHeart.png'),
    text: 'Add to Cart',
  },
  {
    id: 4,
    imageway: require('../assets/images/Avcado.png'),
    title: 'Avcado',
    title2: 'Fresho',
    quantity: '1 Piece/Pieces',
    Heart: require('../assets/Icons/WhiteHeart.png'),
    text: 'Add to Cart',
  },
];

const HomePage = () => {
  const navigation = useNavigation();

  // Heart red to white for adding to fav on recently visited store
  const [shopingRed, setShopingRed] = useState(false);

  // search here start
  const [searchdata, setSearchdata] = useState('');
  const [focused, setFocused] = useState(false);

  // If search bar is focused, filter results, otherwise show all data
  const filterData = focused
    ? Imagedata.filter(item =>
        item.title.toLowerCase().includes(searchdata.toLowerCase()),
      )
    : Imagedata;

  const filterBrandProduct = focused
    ? BrandProduct.filter(item =>
        item.title.toLowerCase().includes(searchdata.toLowerCase()),
      )
    : BrandProduct;

  const filterFavProduct = focused
    ? FavProduct.filter(item =>
        item.title.toLowerCase().includes(searchdata.toLowerCase()),
      )
    : FavProduct;

  const filterfruitsdata = focused
    ? fruitsdata.filter(item =>
        item.title.toLowerCase().includes(searchdata.toLowerCase()),
      )
    : fruitsdata;

  // search here end

  // Heart red to white for adding to fav on fruits image

  const [selected, setSelected] = useState<number[]>([]);
  // console.log(selected, 'selected');

  const solve = (id: number) => {
    // console.log('selectedId', id);

    if (selected.includes(id)) {
      setSelected(prev => prev.filter(item => item !== id));
    } else {
      setSelected(prev => [...prev, id]);
    }
  };

  // redux start
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart?.items);
  // console.log(cartItems, '@@@cartItems');

  // const isInCart = id => cartItems?.includes(id);
  const isInCart = '';

  // pull to refresh

  const [refresh, setRefresh] = useState(false);
  const Pullme = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  // Function for sliding images / image slider

  const renderSlide = ({item}) => {
    return (
      <View>
        <Image
          source={item.imgs}
          style={styles.sidingimage}
          resizeMode="contain"
        />
      </View>
    );
  };

  // AutoSlide image

  const sliderRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % sidingimages.length;
      sliderRef.current?.goToSlide(index, index !== 0);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Location and storage Permission

  const [modalVisible, setModalVisible] = useState(true);
  const [storageModalVisible, setStorageModalVisible] = useState(false);

  const requestLocationPermission = async () => {
    setModalVisible(false);
    setStorageModalVisible(true);
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              console.log('📍 Location:', position);
              setStorageModalVisible(true);
              setModalVisible(false);
            },
            error => {
              console.log('❌ Location error:', error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          Alert.alert('Permission Denied', 'Location access is needed.');
          setModalVisible(false);
          setStorageModalVisible(true);
        }
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  // useEffect(() => {
  //   requestLocationPermission();
  // }, []);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image
              style={styles.locationimage}
              source={require('../assets/Icons/Location.png')}
            />
            <Text style={styles.modalTitle}>Allow Location</Text>
            <Text style={styles.modalMessage}>
              Be you access your location to find relevant posts nearby.
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.dontAllowButton}
                onPress={() => {
                  setModalVisible(false);
                  setStorageModalVisible(true);
                }}>
                <Text style={styles.dontallowText}>Don't Allow</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.allowButton}
                onPress={requestLocationPermission}>
                <Text style={styles.allowText}>Allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Storage Modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={storageModalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image
              style={styles.locationimage}
              source={require('../assets/Icons/Camera.png')}
            />
            <Text style={styles.modalTitle}>Allow Storage, camera</Text>
            <Text style={styles.modalMessage}>
              Be you need access to a camera’s storage to share photos.
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.dontAllowButton}
                onPress={() => setStorageModalVisible(false)}>
                <Text style={styles.dontallowText}>Don't Allow</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.allowButton}
                onPress={() => {
                  // Trigger location permission logic here if needed
                  setStorageModalVisible(false);
                }}>
                <Text style={styles.allowText}>Allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView
        // pull to refresh
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={Pullme} />
        }>
        <View style={styles.mainone}>
          <TextComponent Textt={'Hello Priyank'} />
          <TouchableOpacity>
            <Image
              style={styles.topimage}
              source={require('../assets/images/Homebag.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.mainlocation}>
            <Image
              style={styles.smalllocation}
              source={require('../assets/images/Locationsmall.png')}
            />
            <Text style={{fontSize: 12}}>
              145 Stafford Rd, Wallington 13732
            </Text>
            <Image
              style={styles.Polygonimg}
              source={require('../assets/images/Polygon.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Image
            style={styles.filter}
            resizeMode="cover"
            source={require('../assets/Icons/Filter.png')}
          />
        </TouchableOpacity>
        <View>
          {/* <TouchableOpacity> */}
          <View style={styles.Searchmain}>
            <Image
              style={styles.searchimg}
              resizeMode="contain"
              source={require('../assets/images/Search.png')}
            />
            <TextInput
              style={styles.searchtext}
              value={searchdata}
              onChangeText={setSearchdata}
              placeholder="Search here"
              onFocus={() => setFocused(true)} // Start filtering when focused
              onBlur={() => setFocused(false)} // Reset to all data when unfocused
            ></TextInput>
          </View>
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.maincatagery}>
          <TextComponent style={styles.Catagerytext} Textt={'All Catagery'} />
          <TouchableOpacity>
            <SeeallButtonComponent Text1={'See All'} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={{marginHorizontal: 10}}
            data={filterData}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.maincatageryimgs}>
                <Image
                  source={item.imageurl}
                  style={styles.Catageryimage}
                  resizeMode="contain"
                />
                <Text style={styles.imagetext}>{item.title}</Text>
              </TouchableOpacity>
            )}
            numColumns={3}
          />
        </View>
        <View style={styles.maincatagery}>
          <TextComponent
            style={styles.Catagerytext}
            Textt={'Recently Visited Store'}
          />
          <TouchableOpacity>
            <SeeallButtonComponent Text1={'See All'} />
          </TouchableOpacity>
        </View>
        <View>
          <ImageBackground
            style={styles.Vstoreimage}
            source={require('../assets/images/VisitedStore.png')}>
            <TouchableOpacity onPress={() => setShopingRed(!shopingRed)}>
              <Image
                style={styles.heartimage}
                resizeMode="contain"
                source={
                  shopingRed
                    ? require('../assets/Icons/WhiteHeart.png')
                    : require('../assets/images/Heart.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.coloumbackground}>
              <Text style={styles.coloumtext}>Shushiteria</Text>
              <View style={styles.mainsmalllocationtext}>
                <Image
                  style={styles.smalllocation}
                  source={require('../assets/images/Locationsmall.png')}
                />
                <Text style={styles.columnsmalltext}>
                  3598 Elkview Drive, Huntland CA 001 US Street
                </Text>
              </View>
              <View style={styles.maincoloumnlast}>
                <View style={styles.mainstar}>
                  <Image
                    style={styles.starimg}
                    source={require('../assets/images/star.png')}
                  />
                  <Text style={styles.startext}>4.8</Text>
                </View>
                <View style={styles.mainclock}>
                  <Image
                    style={styles.clockimg}
                    source={require('../assets/images/clock.png')}
                  />
                  <Text style={styles.clocktext}>60 Min</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View>
          {/* <Text>kifoefofi</Text> */}
          <AppIntroSlider
            data={sidingimages}
            renderItem={renderSlide}
            ref={sliderRef}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.dot}
            showDoneButton={false}
            showNextButton={false}
          />
        </View>
        <View>
          <FlatList
            style={{paddingHorizontal: 6}}
            data={filterfruitsdata}
            renderItem={({item}) => {
              console.log(item?.id, '3434');

              return (
                <View style={styles.mainfruits}>
                  <TouchableOpacity
                    onPress={() => {
                      solve(item?.id);
                    }}>
                    <Image
                      source={
                        selected.includes(item.id)
                          ? ICON_NAMES.redheart
                          : item.Heart
                      }
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
                    style={styles.mainfruitbutton}
                    onPress={() => dispatch(toggleCartItem(item))}>
                    <Text style={styles.fruittextbutton}>
                      {cartItems?.includes(item) ? 'Remove' : 'Add to Cart'}
                    </Text>
                    {/* <Text style={styles.fruittextbutton}>Add to Cart</Text> */}
                  </TouchableOpacity>
                </View>
              );
            }}
            numColumns={2}
          />
        </View>
        <View style={styles.maincatagery}>
          <TextComponent
            style={styles.Catagerytext}
            Textt={'Favorite Products'}
          />
          <TouchableOpacity>
            <SeeallButtonComponent Text1={'See All'} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={styles.mainfavProduct}
            data={filterFavProduct}
            renderItem={({item}) => (
              <View style={styles.maindisplay}>
                <View>
                  <TouchableOpacity>
                    <Image
                      source={item.imageone}
                      style={styles.realimg}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.maindatadisplay}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                      <Text style={styles.Besttext}>Best Seller</Text>
                    </TouchableOpacity>
                    <Image
                      style={styles.singlestarimg}
                      source={require('../assets/images/SingleStar.png')}
                    />
                    <Text style={styles.singlestartext}>4.8</Text>
                  </View>
                  <Text style={styles.titletext3}>{item.title}</Text>
                  <Text style={styles.pricetext}>{item.price}</Text>
                  <Text style={styles.summaryytext}>{item.summaryy}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.mainlastsection}>
          <View style={styles.maindotedline}>
            <View style={styles.dotedline1}>
              <DashedLine dashLength={5} dashThickness={1} dashGap={5} />
            </View>
            <View>
              <Text style={styles.testdashline}>Brands</Text>
            </View>
            <View style={styles.dotedline2}>
              <DashedLine dashLength={5} dashThickness={1} dashGap={5} />
            </View>
          </View>
          <View>
            <FlatList
              data={filterBrandProduct}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity>
                  <LinearGradient
                    colors={item.bgcolor}
                    style={[
                      styles.mainlastcoloumn,
                      {
                        // alignItems: 'center',
                        width: item.width,
                        height: item.height,
                        marginHorizontal: 7,
                        borderRadius: 10,
                        marginTop: 15,
                      },
                    ]}>
                    <Image
                      source={item.discountimg}
                      style={styles.imgdiscount}
                      resizeMode="contain"
                    />
                    <Image
                      source={item.logoimg}
                      style={styles.imglogo}
                      resizeMode="contain"
                    />
                    <Text style={styles.mainlasttitle}>{item.title}</Text>
                    <View style={styles.mainlastprice}>
                      <Text style={styles.oldprice}>{item.oldPrice}</Text>
                      <Text style={styles.newprice}>{item.newPrice}</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomePage;

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
    marginTop: 10,
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
  sidingimage: {
    height: 200,
    width: 330,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 20,
  },
  dot: {
    backgroundColor: '#ccc',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#010101',
    marginTop: 20,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#A2A2A2',
  },
  buttonContainer: {
    // backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  dontAllowButton: {
    color: '#010101',
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    width: 100,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#A2A2A2',
  },
  dontallowText: {
    color: '#A2A2A2',
    textAlign: 'center',
    marginTop: 8,
    // justifyContent: 'center',
    // alignSelf: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // verticalAlign: 'middle',
    // textAlignVertical: 'center',
  },
  allowButton: {
    color: '#010101',
    height: 40,
    width: 120,
    // borderWidth: 1,
    borderColor: '#A2A2A2',
    borderRadius: 20,
    backgroundColor: '#B9FF3A',
    marginLeft: 20,
  },
  allowText: {
    color: '#010101',
    alignSelf: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    // justifyContent: 'center',
    // textAlign: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // verticalAlign: 'middle',
    // textAlignVertical: 'center',
  },
  locationimage: {
    height: 70,
    width: 70,
  },
  filter: {
    height: 25,
    width: 25,
    marginLeft: 300,
  },
});
