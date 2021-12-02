import React from 'react'
import { View, Image, StyleSheet } from "react-native"

const CryoStorage = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../images/cryostorage.jpeg")} />
            </View>
            <Text>
                {"You step into the Cryo Storage Room, where you used to hold the specimens you experimented on...before the most dangerous got loose."}
            </Text>
            <Button 
                title="Move"
                onPress={() => Alert.alert('Move Button pressed')}
                color="#BA0000"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 1,
        overflow: 'hidden'
    },
    bottombutton: {
        marginTop: 20
    }
})

export default CryoStorage