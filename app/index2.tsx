import React from "react";
import { Text, View, Button } from "react-native";

import { useState } from "react";

export default function App() {
  
    function soma(a: number, b:number): number{
        return a + b
    }

    function saudacao(): void{
        console.log("Olá, Mundo!")
    }

    const [contador, setContador] = useState(0)

    const [usuario, setUsuario] = useState<Usuario>({
        id: 1,
        nome: "João",
        email: "joao@email.com"
    })
  

    type Usuario ={
        id: number,
        nome: string,
        email: string
    }

    return (
        <View>
            <Text>Você clicou {contador} vezes</Text>
            <Button title="Clique Aqui" onPress={() => setContador(contador + 1)}></Button>

            <Button title="Atualizar Usuário" onPress={() => setUsuario({
                    id: 2,
                    nome: "Ederson",
                    email: "ederson@gmail.com"
                    })
                }>
            </Button>
            <Text> {usuario.id} {usuario.nome} {usuario.email}</Text>
        </View>
    )
}