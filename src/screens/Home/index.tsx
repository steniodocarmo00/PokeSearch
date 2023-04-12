import { Text, View } from 'react-native'
import { styles } from './styles'
import { PokeView } from '../../components/PokeView'
 
export function Home() {
    return(
        <View style = {styles.container}>
           <Text style = {styles.title}> 
               PokeApp
           </Text>
           <PokeView /> 
        </View>
    )
}