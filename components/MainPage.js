import React, { Component } from 'react'
import { ScrollView, View, Image } from "react-native"


class MainPage extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            turncount: 0,
            monsterroom: 0,
            playerroom: 0
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/controlroom.jpeg")} />
                    </View>
                    <Text>
                        {"CONTROL ROOM"}
                    </Text>
                </View>
                <View style={styles.container}>    
                    <View>
                        <Image source={require("../images/archive.jpeg")} />
                    </View>
                    <Text>
                        {"ARCHIVE"}
                    </Text>
                </View>
                <View style={styles.container}>    
                    <View>
                        <Image source={require("../images/cryostorage.jpeg")} />
                    </View>
                    <Text>
                        {"CRYO STORAGE"}
                    </Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/engineroom.jpeg")} />
                    </View>
                    <Text>
                        {"ENGINE ROOM"}
                    </Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/kitchen.jpeg")} />
                    </View>
                    <Text>
                        {"KITCHEN"}
                    </Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/lab.jpeg")} />
                    </View>
                    <Text>
                        {"LABORATORY"}
                    </Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/livingquarters.jpeg")} />
                    </View>
                    <Text>
                        {"SLEEPING QUARTERS"}
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 1,
        overflow: 'hidden'
    },
})

export default MainPage