import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackgroundCircles from '../../../components/BackgroundCircles'
import { IMAGE_NAMES } from '../../../helper/constants/images'

const SignupView = () => {
    return (
        <View>
            {/* <Text>SignupView</Text> */}
            <BackgroundCircles />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{
                        marginTop: 175,
                        height: 60, width: 161,
                    }} source={IMAGE_NAMES.logo} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, }}>Your Home Services Expert</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 7 }}>
                <Image style={{ height: 22, width: 213 }} source={IMAGE_NAMES.logotextimg} />
            </View>
            <View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderWidth: 1,
                    height: 52,
                    width: 350,
                    alignSelf: 'center',
                    marginTop: 30,
                    borderRadius: 12,
                    borderColor: '#1722271A'
                }}>
                    <Image style={{ height: 45, width: 45 }} source={IMAGE_NAMES.googleimg} />
                    <Text>Sign up with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderWidth: 1,
                    height: 52,
                    width: 350,
                    alignSelf: 'center',
                    marginTop: 12,
                    borderRadius: 12,
                    borderColor: '#1722271A'
                }}>
                    <Image style={{ height: 45, width: 45 }} source={IMAGE_NAMES.facebookimg} />
                    <Text>Sign up with Facebook</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 20, flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center',
                marginHorizontal: 20,
            }}>
                <View style={{ borderBottomWidth: 1, width: 120, borderColor: '#17222880' }}></View>
                <View ><Text style={{ color: '#17222880' }}>or Sign up with</Text></View>
                <View style={{ borderBottomWidth: 1, width: 120, borderColor: '#17222880' }}></View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 52,
                    width: 350, backgroundColor: '#151515',
                    borderRadius: 12,
                    marginTop: 30
                }}>
                    <Text style={{ color: '#FFFFFF' }}>Sign up with Phone Number or Email</Text>
                </TouchableOpacity>
            </View>



            <View style={{ alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#515978' }}>
                        By signing up, you agree to the{' '}
                    </Text>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: '#01678C', fontWeight: '500' }}>
                            Terms of Service
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 14, color: '#515978' }}>{' and '}</Text>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: '#01678C', fontWeight: '500' }}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 14, color: '#515978' }}>{', including '}</Text>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: '#01678C', fontWeight: '500' }}>
                            Cookie Use.
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 120 }}>
                <View>
                    <Text style={{ color: '#172228' }}>Already have an account?  </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{ color: '#01678C' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignupView

const styles = StyleSheet.create({})