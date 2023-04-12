import { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'
import { styles } from './styles'
import { PokeView } from '../../components/PokeView'
import api from '../../services/api'

interface Pokemon {
    name: string;
}

export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect (() => {
        api.get("/pokemon").then((response) => {
            setPokemons(response.data.results)
        })
    }, [])
    
    return(
        <View style = {styles.container}>
           <Text style = {styles.title}> 
               PokeApp
           </Text>

           <FlatList 
              data = {pokemons}
              keyExtractor={(pokemon) => pokemon.name}
              renderItem={({ item }) => (
            <PokeView
               key={item.name} 
               name={item.name}
            /> 
           )} 
              showsVerticalScrollIndicator={false}
           />
        </View>
    )
}