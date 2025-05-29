import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../NotificationRedux.tsx/UserDataStore';
import {deleteUser, editUser} from './UserSlice';

const OrderCompletedStoreData = () => {
  const dispatch = useDispatch();
  const UserList = useSelector((state: RootState) => state.users);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingFirstName, setEditingFirstName] = useState('');
  const [editingLastName, setEditingLastName] = useState('');

  const handelEdit = user => {
    setEditingId(user.id);
    setEditingFirstName(user.firstName);
    setEditingLastName(user.lastName);
  };

  const handelSave = () => {
    if (editingId) {
      dispatch(
        editUser({
          id: editingId,
          firstName: editingFirstName,
          lastName: editingLastName,
        }),
      );
      setEditingId(null);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      {editingId === item.id ? (
        <>
          <TextInput
            style={styles.input}
            value={editingFirstName}
            onChangeText={setEditingFirstName}
          />
          <TextInput
            style={styles.input}
            value={editingLastName}
            onChangeText={setEditingLastName}
          />
          <TouchableOpacity onPress={handelSave}>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.text}>First Name: {item.firstName}</Text>
          <Text style={styles.text}>Last Name: {item.lastName}</Text>
          <TouchableOpacity onPress={() => handelEdit(item)}>
            <Text style={styles.button}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(deleteUser(item.id))}>
            <Text style={[styles.button, {backgroundColor: 'red'}]}>
              Delete
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  return (
    <View style={{padding: 16}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Stored Users:</Text>
      <FlatList
        data={UserList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default OrderCompletedStoreData;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    marginBottom: 8,
    padding: 6,
    borderRadius: 6,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: 6,
    marginVertical: 4,
    textAlign: 'center',
  },
});
