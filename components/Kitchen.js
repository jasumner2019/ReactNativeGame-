import React from 'react'
import { View, Image, StyleSheet } from "react-native"

const Kitchen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../images/kitchen.jpeg")} />
            </View>
            <Text>
                {"You step into the Kitchen, where you used to eat with your crew...Wouldn't it be ironic if this is where the monster ate you?"}
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

export default Kitchen