// Get Method (CRUD = R = Read)

// import {StyleSheet, Text, View, FlatList} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const ALLAPI = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const getdata = async () => {
//       try {
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/posts',
//         );
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };
//     getdata();
//   }, []);

//   return (
//     <View>
//       {/* <Text>ALLAPI</Text> */}
//       <FlatList
//         data={data}
//         renderItem={({item}) => (
//           <View style={styles.card}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text>{item.body}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default ALLAPI;

// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 16},
//   card: {padding: 10, borderBottomWidth: 1, borderColor: '#ccc'},
//   title: {fontWeight: 'bold', marginBottom: 5},
// });

// Post Method (CRUD = C = Create)

// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const ALLAPI = () => {
//   const [response, setResponse] = useState(null);

//   useEffect(() => {
//     const postData = async () => {
//       try {
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/posts',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               title: 'Hello',
//               body: 'This is test post',
//               userID: 1,
//             }),
//           },
//         );
//         const json = await response.json();
//         setResponse(json);
//       } catch (error) {
//         console.log('Error dusring POST:', error);
//       }
//     };
//     postData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>ALLAPI</Text>
//       {response ? (
//         <View style={styles.resultBox}>
//           <Text>ID: {response.id}</Text>
//           <Text>Title: {response.title}</Text>
//           <Text>Body:{response.body}</Text>
//           <Text>User ID: {response.userID}</Text>
//         </View>
//       ) : (
//         <Text>Sending Data...</Text>
//       )}
//     </View>
//   );
// };

// export default ALLAPI;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   resultBox: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 8,
//     width: '100%',
//   },
// });

// PUT (CRUD = U = Update)

// import React, {useEffect, useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const App = () => {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     const updateData = async () => {
//       try {
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/posts/1',
//           {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               id: 1,
//               title: 'Updated Title',
//               body: 'Updated body content.',
//               userId: 1,
//             }),
//           },
//         );

//         const json = await response.json();
//         setResponseData(json);
//       } catch (error) {
//         console.error('Error during PUT:', error);
//       }
//     };

//     updateData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>PUT Response:</Text>
//       {responseData ? (
//         <View style={styles.resultBox}>
//           <Text>ID: {responseData.id}</Text>
//           <Text>Title: {responseData.title}</Text>
//           <Text>Body: {responseData.body}</Text>
//           <Text>User ID: {responseData.userId}</Text>
//         </View>
//       ) : (
//         <Text>Updating data...</Text>
//       )}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
//   resultBox: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 8,
//     width: '100%',
//   },
// });

// Delete CRUD = D = Delete

// import React, {useEffect, useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const App = () => {
//   const [message, setMessage] = useState('Deleting data...');

//   useEffect(() => {
//     const deleteData = async () => {
//       try {
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/posts/1',
//           {
//             method: 'DELETE',
//           },
//         );

//         if (response.ok) {
//           setMessage('Post deleted successfully!');
//         } else {
//           setMessage('Failed to delete the post.');
//         }
//       } catch (error) {
//         console.error('Error during DELETE:', error);
//         setMessage('An error occurred.');
//       }
//     };

//     deleteData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{message}</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//   text: {fontSize: 16},
// });

// All

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [message, setMessage] = useState('');

  // (CRUD = R = Read)

  const handleGet = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      const json = await response.json();
      setResponseData(json);
      setMessage('GET successful');
    } catch (error) {
      setMessage('GET failed');
    }
  };

  // (CRUD = C = Create)

  const handlePost = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'New Post',
            body: 'This is a POST request.',
            userId: 1,
          }),
        },
      );
      const json = await response.json();
      setResponseData(json);
      setMessage('POST successful');
    } catch (error) {
      setMessage('POST failed');
    }
  };

  // (CRUD = U = Update)

  const handlePut = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: 1,
            title: 'Updated Title',
            body: 'Updated body content.',
            userId: 1,
          }),
        },
      );
      const json = await response.json();
      setResponseData(json);
      setMessage('PUT successful');
    } catch (error) {
      setMessage('PUT failed');
    }
  };

  // CRUD = D = Delete

  const handleDelete = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
          method: 'DELETE',
        },
      );

      if (response.ok) {
        setResponseData(null);
        setMessage('DELETE successful');
      } else {
        setMessage('DELETE failed');
      }
    } catch (error) {
      setMessage('DELETE failed');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>API Requests (GET, POST, PUT, DELETE)</Text>

      <View style={styles.buttonContainer}>
        <Button title="GET" onPress={handleGet} />
        <Button title="POST" onPress={handlePost} />
        <Button title="PUT" onPress={handlePut} />
        <Button title="DELETE" onPress={handleDelete} />
      </View>

      <Text style={styles.message}>{message}</Text>

      {responseData && (
        <View style={styles.resultBox}>
          <Text>ID: {responseData.id}</Text>
          <Text>Title: {responseData.title}</Text>
          <Text>Body: {responseData.body}</Text>
          <Text>User ID: {responseData.userId}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {padding: 20, flexGrow: 1, justifyContent: 'center'},
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    flexWrap: 'wrap',
    gap: 10,
  },
  message: {textAlign: 'center', marginVertical: 10, fontSize: 16},
  resultBox: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
});

// My profile Manage Address
