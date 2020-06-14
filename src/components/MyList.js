import React, { useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

const MyList = props => {

    let styles = props.item.isDone ? doneStyles : unDoneStyles

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.dot} />
                <View>
                    <TouchableOpacity

                        onPress={() => props.onListPress()} >

                        <Text style={styles.textStyle}> {props.item.todoText} </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {props.item.isDone && <Text>Done!</Text>}

            </View>
        </View>

    )
}


const unDoneStyles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        marginLeft: 10
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        borderRadius: 10,
    }
})

const doneStyles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    textStyle: {
        fontSize: 20,
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        borderRadius: 10
    }
})

export { MyList }