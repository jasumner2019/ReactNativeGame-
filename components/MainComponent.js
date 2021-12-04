import React, { Component } from 'react'
import { FlatList, View, Image } from "react-native"
import { createAppContainer } from 'react-navigation';
import ROOMS from "../shared/ROOMS"

class MainPage extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            monsterroom: 0,
            playerroom: 0
        }
    }

    render() {
        return (
            <FlatList>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/controlroom.jpeg")} />
                    </View>
                    <Text>
                        {"CONTROL ROOM"}
                    </Text>
                    <Button 
                        title="Hide Here."
                        onPress={() => Alert.alert('Move Button pressed')}
                        color="#BA0000"
                    />
                </View>
                <View style={styles.container}>    
                    <View>
                        <Image source={require("../images/archive.jpeg")} />
                    </View>
                    <Text>
                        {"ARCHIVE"}
                    </Text>
                    <Button 
                        title="Hide Here."
                        onPress={() => Alert.alert('Move Button pressed')}
                        color="#BA0000"
                    />
                </View>
                <View style={styles.container}>    
                    <View>
                        <Image source={require("../images/cryostorage.jpeg")} />
                    </View>
                    <Text>
                        {"CRYO STORAGE"}
                    </Text>
                    <Button 
                        title="Hide Here."
                        onPress={() => Alert.alert('Move Button pressed')}
                        color="#BA0000"
                    />
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/engineroom.jpeg")} />
                    </View>
                    <Text>
                        {"ENGINE ROOM"}
                    </Text>
                    <Button 
                        title="Hide Here."
                        onPress={() => Alert.alert('Move Button pressed')}
                        color="#BA0000"
                    />
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/kitchen.jpeg")} />
                    </View>
                    <Text>
                        {"KITCHEN"}
                    </Text>
                    <Button 
                        title="Hide Here."
                        onPress={() => Alert.alert('Move Button pressed')}
                        color="#BA0000"
                    />
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/lab.jpeg")} />
                    </View>
                    <Text>
                        {"LABORATORY"}
                    </Text>
                    <Button 
                        title="Hide Here."
                        onPress={() => Alert.alert('Move Button pressed')}
                        color="#BA0000"
                    />
                </View>
                <View style={styles.container}>
                    <View>
                        <Image source={require("../images/livingquarters.jpeg")} />
                    </View>
                    <Text>
                        {"SLEEPING QUARTERS"}
                    </Text>
                    <Button 
                        title="Hide Here."
                        onPress={() => Alert.alert('Move Button pressed')}
                        color="#BA0000"
                    />
                </View>
            </FlatList>
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

//look up react-navigation for version 5