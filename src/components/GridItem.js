import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const GridItem = ({
    item,
    onSelect
}) => {

    return (
        <View style={styles.gridItem}>

            <TouchableOpacity onPress={() => onSelect(item)} style={[styles.container, { backgroundColor: item.color }]}>

                <View style={styles.texto}>

                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 300,
        width: 300,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        padding: 8,
     
    },
    title: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 22,
        textAlign: 'center',
    },

    texto: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',



    }



})