import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <View style={styles.screen}>

            

            <Text>Acceso a Tienda</Text>

            
            

<View style={styles.renglonForm} >  
<Text>Usuario:</Text>
<TextInput ></TextInput>
 </View>

 <View style={styles.renglonForm}>  
<Text>Contraseña:</Text>
<TextInput ></TextInput>
 </View>


      


            <Button title="Ir a Home" onPress={() => {
                navigation.navigate('Home')
            }} />
      
        </View>


  )
}






const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
renglonForm:{

flexDirection: 'row',
justifyContent:'space-between',
alignItems: 'center',
marginVertical: 10,
width: '80%',
borderBottomColor: 'black',
borderBottomWidth: 1,
paddingBottom: 5

},




})