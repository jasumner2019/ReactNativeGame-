import React from 'react'
import { View, Image } from "react-native"

const CryoStorage = () => {
    return (
        <View>
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

export default CryoStorage