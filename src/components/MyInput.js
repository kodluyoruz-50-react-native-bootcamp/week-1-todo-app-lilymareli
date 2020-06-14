
import React from 'react'
import { StyleSheet, Dimensions, TextInput, View, Button, TouchableOpacity } from 'react-native'

const MyInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={{ width: Dimensions.get("window").width / 1.2 }}
                onChangeText={props.onType}
                placeholder="Add some item to do"
                multiline />
            <TouchableOpacity
                onPress={props.onPress} >
                <Button style={styles.buttonContainer} title="+" onPress={props.onPress} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonContainer: {
        borderRadius: 10,
        position: 'relative'
    }
})
export { MyInput }