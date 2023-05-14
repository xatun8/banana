import React from "react";
import { Image, StyleSheet,  Text, TouchableOpacity, View } from "react-native";
const Payment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity >
                    <Image source={require('./assets/images/vector.png')}
                        style={styles.vector} />
                </TouchableOpacity>
                <Text style={styles.text}>Banana Pancakes</Text>
                <TouchableOpacity >
                    <Image source={require('./assets/images/icon.png')}
                        style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View>
                <Image source={require('./pankek.png')}
                    style={styles.pankek} /></View>

           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        backgroundColor: '#E5E5E5',
    },
    button:{

    },
    vector:{

    },
    text:{

    },
    icon:{

    },
    pankek:{

    },
});
export default Payment;