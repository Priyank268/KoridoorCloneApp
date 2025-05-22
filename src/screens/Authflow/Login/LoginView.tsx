import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BackgroundCircles from '../../../components/BackgroundCircles'
import { IMAGE_NAMES } from '../../../helper/constants/images'
import CheckBox from '@react-native-community/checkbox'

export const LoginView = () => {
  const [Selected, setSelected] = useState(false);
  return (
    <SafeAreaView>
      {/* <Text>LoginView</Text> */}
      <BackgroundCircles />
      <View>
        <Image style={styles.logoimg} source={IMAGE_NAMES.logo} resizeMode='contain' />
        <View style={{ alignSelf: 'center', marginTop: 22 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Welcome back!</Text>
        </View>
        <View style={{ alignSelf: 'center', marginTop: 7 }}>
          <Text style={{ color: '#172228B2' }}>Enter your email and password to continue.</Text>
        </View>
        <View style={{ marginTop: 30, }}>
          <Text style={{ fontSize: 15, marginLeft: 20 }}>Email ID</Text>
          <TextInput style={{
            marginHorizontal: 20, marginTop: 8, borderWidth: 1,
            paddingHorizontal: 20, paddingVertical: 13, borderRadius: 12, borderColor: '#1722271A'
          }}
            placeholder='Email Address'></TextInput>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 15, marginLeft: 20 }}>Password</Text>
          <TextInput style={{
            marginHorizontal: 20, marginTop: 8, borderWidth: 1,
            paddingHorizontal: 20, paddingVertical: 13, borderRadius: 12, borderColor: '#1722271A'
          }}
            placeholder='Enter Password'></TextInput>
        </View>
        <View style={{
          flexDirection: 'row', marginTop: 16,
          marginBottom: 30,
          justifyContent: 'space-between', marginHorizontal: 21
        }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{ height: 10, width: 10, }}
            >
              <CheckBox style={{ transform: [{ scale: 0.7 }] }} value={Selected}
                onValueChange={setSelected} />
            </View>

            <Text
              style={{ marginLeft: 17, marginTop: 5 }}
            >Remember me</Text>
          </View>
          <View style={{ marginLeft: 23, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
              <Text style={{ color: '#01678C' }}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={{
            height: 52, width: 350, backgroundColor: '#151515'
            , alignSelf: 'center', justifyContent: 'center',
            alignItems: 'center', borderRadius: 12
          }}>
            <Text style={{
              color: '#FFFFFF',
              alignSelf: 'center', fontSize: 16
            }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 20, flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center',
          marginHorizontal: 20,
        }}>
          <View style={{ borderBottomWidth: 1, width: 120, borderColor: '#17222880' }}></View>
          <View ><Text style={{ color: '#17222880' }}>or Login with</Text></View>
          <View style={{ borderBottomWidth: 1, width: 120, borderColor: '#17222880' }}></View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 113 }}>
          <TouchableOpacity>
            <Image style={{ height: 44, width: 44 }} source={IMAGE_NAMES.googleimg} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ height: 44, width: 44 }} source={IMAGE_NAMES.facebookimg} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ height: 44, width: 44 }} source={IMAGE_NAMES.phonenoimg} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:60}}>
          <View>
            <Text style={{color:'#172228'}}>Not have an account? </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{color:'#01678C'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  logoimg: { height: 60, width: 161, marginTop: 132, marginLeft: 114 }
})
