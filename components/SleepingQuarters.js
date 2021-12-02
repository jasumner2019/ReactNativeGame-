import React from 'react'
import { View, Image } from "react-native"


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

export default SleepingQuarters