import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const EditDeleteAPI = ({route}) => {
  const [products, setProducts] = useState([]);
  const [newPrice, setNewPrice] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    if (route.params?.product) {
      const product = route.params.product;
      if (product.thumbnail) {
        setProducts(prev => [...prev, product]);
      } else {
        // If no thumbnail, add a placeholder
        setProducts(prev => [
          ...prev,
          {...product, thumbnail: 'https://via.placeholder.com/180'},
        ]);
      }
    }
  }, [route.params?.product]);

  const handleEdit = async id => {
    try {
      const productToEdit = products.find(product => product.id === id);

      if (!productToEdit) return;

      const updatedProduct = {
        ...productToEdit,
        price: newPrice || productToEdit.price, // If new price is provided, update; otherwise keep old price
      };

      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedProduct),
      });
      const json = await response.json();

      setProducts(prev =>
        prev.map(item =>
          item.id === id ? {...item, price: updatedProduct.price} : item,
        ),
      );

      Alert.alert('Success', 'Product price updated!');
      setEditingProductId(null); // Reset the editing state
      setNewPrice(''); // Reset the new price input
    } catch (error) {
      console.error('Edit error:', error);
      Alert.alert('Error', 'Failed to update product.');
    }
  };

  const handleDelete = async id => {
    try {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
      });

      setProducts(prev => prev.filter(item => item.id !== id));
      Alert.alert('Deleted', 'Product deleted successfully.');
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>

      {editingProductId === item.id ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter new price"
            keyboardType="numeric"
            value={newPrice}
            onChangeText={setNewPrice}
          />
          <Pressable
            style={styles.editButton}
            onPress={() => handleEdit(item.id)}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={styles.editButton}
          onPress={() => setEditingProductId(item.id)}>
          <Text style={styles.buttonText}>Edit(put)</Text>
        </Pressable>
      )}

      <Pressable
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Added Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 40}}
      />
    </View>
  );
};

export default EditDeleteAPI;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
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
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  inputContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
});
