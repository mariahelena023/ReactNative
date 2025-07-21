import React, { useState } from "react";
import { Text, View } from "react-native";
import { IoIosArrowBack } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";

export default function Index() {
  return (
    <View>
      <View className="flex flex-row justify-between items-center px-4 py-4 bg-white">
        <Text className="text-[#db2cbe] hover:text-[#6e165f] cursor-pointer">
          <IoIosArrowBack size={32} />
        </Text>
        <View className="flex flex-row space-x-4">
          <Text className="text-[#db2cbe] hover:text-[#6e165f] cursor-pointer">
            <LuTicketPercent size={30}/>
          </Text>
          <Text className="text-[#db2cbe] hover:text-[#6e165f] cursor-pointer">
            <FaShoppingCart size={30}/>
          </Text>
        </View>
      </View>


      <View className="px-4 py-1 bg-white">
        <Text className="text-3xl font-bold mb-5">Best Dress Collection</Text>
        <View className=" px-4 py-4 flex flex-row justify-between">
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer">Categoria</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer">Cor</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer">Tamanho</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer">Preço</Text>
          <Text className="px-3 py-1 text-black font-bold hover:text-[#db2cbe] cursor-pointer">Mais</Text>
        </View>
      </View>
    </View>
  );
}
