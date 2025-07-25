import React, { useState } from "react";
import {View, Text, Button} from "react-native"

export default function App(){
    const [contador, setContador] = useState(0)

    function incrementar(){
        setContador(contador + 1)
    }

    function zerar(){
        setContador(0)
    }
    
    return(
        <View style={{padding: 20}}>
            <Text>Total: {contador}</Text>
            <Button title="Somar 1" onPress={incrementar}></Button>
            <Button title="Zerar Contador" onPress={zerar}></Button>
        </View>
    )
}