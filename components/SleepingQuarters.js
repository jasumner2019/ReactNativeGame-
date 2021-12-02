import React from 'react'
import { View, Image, StyleSheet } from "react-native"


const SleepingQuarters = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../images/livingquarters.jpeg")} />
            </View>
            <Text>
                {"You step into the Sleeping Quarters, where you used to sleep soundly...too bad those days are past."}
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

export default SleepingQuarters