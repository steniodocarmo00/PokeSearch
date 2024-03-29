import { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'
import { styles } from './styles'
import { PokeView } from '../../components/PokeView'
import api from '../../services/api'


type PokemonResult = {
    url: string;
}

type Sprite = {
    front_default: string;
}

type Pokemon ={
    name: string;
    id: string;
    sprites: Sprite;
}

export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect (() => {
        async function apiPokemons() {
            try {
                const response = await api.get('/pokemon?limit=151&offset=0');
                const pokemonResults: PokemonResult[] = response.data.results;
                const pokemonDetailsPromises = pokemonResults.map(async (pokemonResult) => {
                    const detailsResponse = await api.get(pokemonResult.url);
                    return detailsResponse.data;
                });
                const pokemonDetails = await Promise.all(pokemonDetailsPromises);
                setPokemons(pokemonDetails);
            } catch (error) {
                console.error('Erro ao buscar pokemons:', error);
            }
        }

        apiPokemons();
    }, [])
    
    return(
        <View style = {styles.container}>
           <Text style = {styles.title}> 
               PokéDex
           </Text>

           <FlatList 
              data = {pokemons}
              keyExtractor={(pokemon) => pokemon.name}
              renderItem={({ item }) => (
                <PokeView
                   key={item.name} 
                   name={item.name}
                   id={item.id}
                   src={item.sprites.front_default}
                /> 
               )} 
              showsVerticalScrollIndicator={false}
           />
        </View>
    )
}
