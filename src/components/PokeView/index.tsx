import { View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props ={
    name: string;
}

export function PokeView({name}: Props){
    return(
    <View style={styles.container}>
        <Text style={styles.name}>
            {name}
        </Text>

        <View style={styles.pokephoto}>
               
        </View>
    </View>
    )
}