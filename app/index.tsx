import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { IoIosArrowBack } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";

export default function Index() {
  return (
    <ScrollView className="bg-white">
      <View className="flex flex-row justify-between items-center px-4 py-4 bg-white">
        <Text className="text-[#db2cbe] hover:text-[#6e165f] cursor-pointer transform transition duration-300 hover:scale-110">
          <IoIosArrowBack size={32} />
        </Text>
        <View className="flex flex-row space-x-4">
          <Text className="text-[#db2cbe] hover:text-[#6e165f] cursor-pointer transform transition duration-300 hover:scale-110">
            <LuTicketPercent size={30} />
          </Text>
          <Text className="text-[#db2cbe] hover:text-[#6e165f] cursor-pointer transform transition duration-300 hover:scale-110">
            <FaShoppingCart size={30} />
          </Text>
        </View>
      </View>

      <View className="px-4 py-1 bg-white">
        <Text className="text-3xl font-bold mb-5">Melhor Coleção de Roupas</Text>
        <View className="px-4 py-4 flex flex-row justify-between">
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer transform transition duration-300 hover:scale-110">Categoria</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer transform transition duration-300 hover:scale-110">Cor</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer transform transition duration-300 hover:scale-110">Tamanho</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer transform transition duration-300 hover:scale-110">Preço</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer transform transition duration-300 hover:scale-110">Mais</Text>
        </View>
      </View>

      <View className="flex flex-row flex-wrap justify-around px-6 py-6">
        <View className="w-[30%] bg-white rounded-lg shadow mb-6 cursor-pointer transform transition duration-300 hover:scale-105">
          <Image className="w-full h-48 rounded-t-lg" resizeMode="cover"/>
          <View className="p-3 bg-slate-50">
            <Text className="font-semibold text-lg">Nome da Peça</Text>
            <Text className="text-[#db2cbe] font-bold">R$420</Text>
          </View>
        </View>

        <View className="w-[30%] bg-white rounded-lg shadow mb-6 cursor-pointer transform transition duration-300 hover:scale-105">
          <Image className="w-full h-48 rounded-t-lg" resizeMode="cover"/>
          <View className="p-3 bg-slate-50">
            <Text className="font-semibold text-lg">Nome da Peça</Text>
            <Text className="text-[#db2cbe] font-bold">R$399</Text>
          </View>
        </View>

        <View className="w-[30%] bg-white rounded-lg shadow mb-6 cursor-pointer transform transition duration-300 hover:scale-105">
          <Image className="w-full h-48 rounded-t-lg" resizeMode="cover"/>
          <View className="p-3 bg-slate-50">
            <Text className="font-semibold text-lg">Nome da Peça</Text>
            <Text className="text-[#db2cbe] font-bold">R$385</Text>
          </View>
        </View>

        <View className="w-[30%] bg-white rounded-lg shadow mb-6 cursor-pointer transform transition duration-300 hover:scale-105">
          <Image className="w-full h-48 rounded-t-lg" resizeMode="cover"/>
          <View className="p-3 bg-slate-50">
            <Text className="font-semibold text-lg">Nome da Peça</Text>
            <Text className="text-[#db2cbe] font-bold">R$410</Text>
          </View>
        </View>

        <View className="w-[30%] bg-white rounded-lg shadow mb-6 cursor-pointer transform transition duration-300 hover:scale-105">
          <Image className="w-full h-48 rounded-t-lg" resizeMode="cover"/>
          <View className="p-3 bg-slate-50">
            <Text className="font-semibold text-lg">Nome da Peça</Text>
            <Text className="text-[#db2cbe] font-bold">R$450</Text>
          </View>
        </View>

        <View className="w-[30%] bg-white rounded-lg shadow mb-6 cursor-pointer transform transition duration-300 hover:scale-105">
          <Image className="w-full h-48 rounded-t-lg" resizeMode="cover"
          />
          <View className="p-3 bg-slate-50">
            <Text className="font-semibold text-lg">Nome da Peça</Text>
            <Text className="text-[#db2cbe] font-bold">R$390</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
