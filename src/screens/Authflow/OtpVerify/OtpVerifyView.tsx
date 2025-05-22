import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackgroundCircles from '../../../components/BackgroundCircles'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OtpVerifyView = () => {
    return (
        <View>
            {/* <Text>OtpVerifyView</Text> */}
            <BackgroundCircles />
            <View style={{ marginTop: 120 }}>
                <Text style={{ fontSize: 30, alignSelf: 'center', color: '#0F1727' }}>Verify Email ID</Text>
            </View>
            <View style={{ alignSelf: 'center', width: 290, marginTop: 6 }}>
                <Text style={{ textAlign: 'center', color: '#172228B2' }}>A verification link has been sent to
                    your email. Please check your email</Text>
            </View>
            <View>
                <OTPInputView
                    style={{ width: '80%', height: 200, }}
                    pinCount={4}
                />
            </View>

            <View>
                <TouchableOpacity style={{
                    alignSelf: 'center', backgroundColor: '#151515',
                    height: 52, width: 350, borderRadius: 12, justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        color: '#FFFFFF', alignSelf: 'center', fontSize:16
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OtpVerifyView

const styles = StyleSheet.create({})