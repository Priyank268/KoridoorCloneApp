// // myprofile Manage Payment Methods

// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';

// const ImageAPI = () => {
//   const [product, setProduct] = useState(null);

//   // 1. GET Product (CRUD = R = Read)

//   const getProduct = async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/products/9');
//       const json = await response.json();
//       setProduct(json);
//     } catch (error) {
//       console.error('GET Error:', error);
//     }
//   };

//   // 2. POST Product (CRUD = C = Create)
//   const postProduct = async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/products/add', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           title: 'Fresh Mango',
//           price: 150,
//         }),
//       });
//       const json = await response.json();
//       setProduct(json);
//     } catch (error) {
//       console.error('POST Error:', error);
//     }
//   };

//   // 3. PUT Product (CRUD = U = Update)
//   const putProduct = async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/products/7', {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           title: 'Updated iPhone 14',
//           price: 1099,
//         }),
//       });
//       const json = await response.json();
//       setProduct(json);
//     } catch (error) {
//       console.error('PUT Error:', error);
//     }
//   };

//   // 4. DELETE Product (CRUD = D = Delete)
//   const deleteProduct = async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/products/10', {
//         method: 'DELETE',
//       });
//       const json = await response.json();
//       setProduct(json);
//     } catch (error) {
//       console.error('DELETE Error:', error);
//     }
//   };

//   return (
//     <View>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.heading}>API Example</Text>

//         <View style={styles.buttonGroup}>
//           <TouchableOpacity onPress={getProduct}>
//             <Text style={styles.button}>GET Product</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={postProduct}>
//             <Text style={styles.button}>POST Product</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={putProduct}>
//             <Text style={styles.button}>PUT Product</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={deleteProduct}>
//             <Text style={styles.button}>DELETE Product</Text>
//           </TouchableOpacity>
//         </View>

//         {product && (
//           <View style={styles.card}>
//             {product.thumbnail && (
//               <Image source={{uri: product.thumbnail}} style={styles.image} />
//             )}
//             <Text style={styles.title}>{product.title}</Text>
//             <Text style={styles.price}>Price: ${product.price}</Text>
//             <Text style={styles.rating}>
//               Rating: ⭐ {product.rating || 'N/A'}
//             </Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default ImageAPI;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: 'center',
//     paddingBottom: 40,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonGroup: {
//     width: '100%',
//     gap: 10,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#2e86de',
//     color: 'white',
//     textAlign: 'center',
//     paddingVertical: 10,
//     borderRadius: 6,
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   card: {
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 16,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   image: {
//     width: 180,
//     height: 180,
//     borderRadius: 10,
//     marginBottom: 12,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 6,
//     textAlign: 'center',
//   },
//   price: {
//     fontSize: 16,
//     color: 'green',
//     marginBottom: 4,
//   },
//   rating: {
//     fontSize: 15,
//     color: '#555',
//   },
// });

// // myprofile Manage Payment Methods

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ImageAPI = () => {
  const [id, setId] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const json = await res.json();
        setAllProducts(json.products);
      } catch (err) {
        console.error('Error fetching all products:', err);
      }
    };

    fetchAllProducts();
  }, []);

  const fetchProductById = async () => {
    if (!id) return;

    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await response.json();
      setSearchedProduct(json);
    } catch (error) {
      console.error('Error fetching product:', error);
      alert('Invalid ID');
    }
  };

  const handleAdd = async () => {
    if (!searchedProduct) return;

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: searchedProduct.title,
          price: searchedProduct.price,
          description: searchedProduct.description,
          category: searchedProduct.category,
          image: searchedProduct.image,
        }),
      });

      const addedProduct = await response.json();
      alert('Product added successfully!');
      navigation.navigate('EditDeleteAPI', {product: addedProduct});
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  const renderProductCard = ({item}) => (
    <View style={styles.gridCard}>
      <TouchableOpacity onPress={() => setSelectedImage(item.thumbnail)}>
        <Image source={{uri: item.thumbnail}} style={styles.gridImage} />
      </TouchableOpacity>
      <Text style={styles.gridTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.gridPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.outerContainer}>
      {/* Enlarged Image Preview Always on Top */}
      {selectedImage && (
        <TouchableOpacity
          onPress={() => setSelectedImage(null)}
          style={styles.previewContainer}>
          <Image source={{uri: selectedImage}} style={styles.previewImage} />
          <Text style={styles.previewText}>Tap to close</Text>
        </TouchableOpacity>
      )}

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Search Product by ID (1-194)</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Product ID"
          keyboardType="numeric"
          value={id}
          onChangeText={setId}
        />

        <Pressable style={styles.fetchButton} onPress={fetchProductById}>
          <Text style={styles.buttonText}>Search Product</Text>
        </Pressable>

        {searchedProduct && (
          <View style={styles.card}>
            {searchedProduct.thumbnail && (
              <Image
                source={{uri: searchedProduct.thumbnail}}
                style={styles.image}
              />
            )}
            <Text style={styles.title}>{searchedProduct.title}</Text>
            <Text style={styles.price}>Price: ${searchedProduct.price}</Text>

            <Pressable style={styles.addButton} onPress={handleAdd}>
              <Text style={styles.addText}>Add Product</Text>
            </Pressable>
          </View>
        )}

        <Text style={styles.sectionHeading}>All Products</Text>

        <FlatList
          data={allProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProductCard}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={styles.gridContainer}
        />
      </ScrollView>
    </View>
  );
};

export default ImageAPI;

const {width} = Dimensions.get('window');
const itemSize = width / 3 - 20;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 100,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  fetchButton: {
    backgroundColor: '#008000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    marginTop: 15,
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  gridContainer: {
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  gridCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 8,
    margin: 5,
    alignItems: 'center',
    width: itemSize,
  },
  gridImage: {
    width: itemSize - 16,
    height: itemSize - 16,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  gridTitle: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  gridPrice: {
    fontSize: 12,
    color: 'green',
  },
  previewContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    // marginTop: 200,
  },
  previewImage: {
    width: '90%',
    height: 600,
    borderRadius: 10,
    resizeMode: 'contain',
    // marginTop: 50,
  },
  previewText: {
    color: '#888',
    marginTop: 6,
    fontSize: 14,
  },
});
