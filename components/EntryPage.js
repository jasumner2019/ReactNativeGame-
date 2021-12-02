import React from 'react'
import { View, Text } from "react-native"

const EntryPage = () => {
    return (
        <View>
            <Text>
                {"SURVIVE"}
            </Text>
            <Text>
                {"You are the last survivor of a starship whose mission was to perform biochemical tests on alien species in space. One of these tests went horribly wrong and transformed the subject into a raving monster, which has already claimed the lives of the other five crew members. You and your team called for help, but no one has responded to your desperate cries."}
            </Text>
            <Text>
                {"Up until this point, you've been hiding in the cargo bay, but the monster found you, and you narrowly escaped. It sealed off the entrance to the cargo bay, and now it knows there is still one survivor. It will stop at nothing to find you."}
            </Text>
            <Text>
                {"The monster is mobile. It is moving randomly from room to room, ravenous for your flesh. You pass a modem in the hall that tells you help is finally on the way, and will be there to rescue you in 5 minutes. Avoid the monster until help arrives. Good luck!"}
            </Text>
            <Button 
                title="Hide!"
                onPress={() => Alert.alert('Hide Button pressed')}
                color="#BA0000"
            />
        </View>
    )
}

export default EntryPage