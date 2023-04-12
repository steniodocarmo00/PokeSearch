import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function PokeView(){
    return(
    <View style={styles.container}>
        <Text style={styles.name}>
            Pikachu
        </Text>

        <View style={styles.pokephoto}>
            
        </View>
    </View>
    )
}