import React, { Component } from 'react'
import { View, Image, Alert, StyleSheet } from "react-native"

class Archive extends Component {
    
    render() {
        return (
            <View style={styles.container} >
                <View>
                    <Image source={require("../images/archive.jpeg")} />
                </View>
                <Text>
                    {"You step into the Archive, where you used to hold the data files of your experiments."}
                </Text>
                <Button 
                    title="Move"
                    onPress={() => Alert.alert('Move Button pressed')}
                    color="#BA0000"
                />
            </View>
        )
    }
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

export default Archive