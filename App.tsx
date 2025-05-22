import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { LoginView } from './src/screens/Authflow/Login/LoginView'
import OtpVerifyView from './src/screens/Authflow/OtpVerify/OtpVerifyView'
import SignupView from './src/screens/Authflow/SignUp/SignupView'
import RegisterEmailView from './src/screens/Authflow/RegisterEmail/RegisterEmailView'

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        {/* <LoginView /> */}
        {/* <OtpVerifyView /> */}
        {/* <SignupView /> */}
        <RegisterEmailView />
      </View>
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})