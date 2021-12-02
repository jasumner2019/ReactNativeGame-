import React from 'react'
import { View, Image } from "react-native"

const Laboratory = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../images/lab.jpeg")} />
            </View>
            <Text>
                {"You step into the Laboratory, where you used to conduct experiments."}
            </Text>
            <Button 
                title="Move"
                onPress={() => Alert.alert('Move Button pressed')}
                color="#BA0000"
            />
        </View>
    )
}

export default Laboratory