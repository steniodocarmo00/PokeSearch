import { Text, View, FlatList } from 'react-native'
import { styles } from './styles'
import { PokeView } from '../../components/PokeView'

 
export function Home() {
    const pokemons = ['pikachu', 'charizard', 'bulbasaur']
    
    return(
        <View style = {styles.container}>
           <Text style = {styles.title}> 
               PokeApp
           </Text>

           <FlatList 
              data = {pokemons}
              keyExtractor={item => item}
              renderItem={({ item }) => (
            <PokeView
               key={item} 
               name={item}
            /> 
           )} 
              showsVerticalScrollIndicator={false}
           />
        </View>
    )
}