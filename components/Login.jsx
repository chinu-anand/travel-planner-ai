import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
    return (
        <View>
            <Image source={require('../assets/images/login.jpg')}
                style={
                    { width: '100%', height: 460 }
                } />

            <View style={styles.container}>
                <Text style={{
                    fontSize: 26,
                    fontFamily: 'Outfit-Bold',
                    textAlign: 'center',
                    marginTop: 15,
                }}>Travel Genie</Text>

                <Text style={{
                    fontSize: 17,
                    fontFamily: 'Outfit',
                    textAlign: 'center',
                    padding: 10,
                    marginTop: 20,
                    color: Colors.Gray
                }}>
                Discover the magic of travel with our AI-powered companion for crafting personalized itineraries, booking flights and stays, and exploring new destinations effortlessly. Let Travel Genie make your journey unforgettable.
                </Text>

                <View style = {styles.button}>
                    <Text
                        style={{
                            color: Colors.White,
                            fontSize: 18,
                            fontFamily: 'Outfit-Bold'
                        }}
                    >Sign In with Google</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.White,
        marginTop: -20,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    button:{
        backgroundColor: Colors.Primary,
        padding: 15,
        borderRadius: 99,
        marginTop: '15%',
        alignItems: 'center',
    }
})