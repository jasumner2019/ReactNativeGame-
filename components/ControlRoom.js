import React from 'react'
import { View, Image } from "react-native"

const ControlRoom = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../images/controlroom.jpeg")} />
            </View>
            <Text>
                {"You step into the Control Room, where you used to control the ship."}
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
        flex: 1
    },
    bottombutton: {
        marginTop: 20
    }
})

export default ControlRoom