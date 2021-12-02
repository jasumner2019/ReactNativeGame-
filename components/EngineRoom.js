import React from 'react'
import { View, Image } from "react-native"

const EngineRoom = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../images/engineroom.jpeg")} />
            </View>
            <Text>
                {"You step into the Engine Room, where you used to keep the ship running...could that low hum be the sound of the monster breathing?"}
            </Text>
            <Button 
                title="Move"
                onPress={() => Alert.alert('Move Button pressed')}
                color="#BA0000"
            />
        </View>
    )
}

export default EngineRoom