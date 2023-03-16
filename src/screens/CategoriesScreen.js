import { Button, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIANEGOCIO } from '../data/categoriaNegocio'
import GridItems from '../components/GridItem'



const CategoriesScreen = ({ navigation }) => {

    const onSelectGridItem = (item) => {
        navigation.navigate('Productos', {
            categoryId: item.id,
            categoryName: item.title
        })
    }


    const renderGridItem = ({ item }) => <GridItems item={item} onSelect={onSelectGridItem} />

    return (
        <View style={styles.screen}>

            <View>


                <FlatList
                    data={CATEGORIANEGOCIO}
                    keyExtractor={(item) => item.id}
                    renderItem={renderGridItem}
                    numColumns={1}
                />



            </View>


        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})