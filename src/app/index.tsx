import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { Alert, Image, StatusBar, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  function handleAcessCredetial() {
    if (!code.trim()) {
      return Alert.alert("Ingresso", "Informe o código do ingresso!");
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8 space-y-12">
      <StatusBar barStyle="light-content" />
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full flex flex-col items-center justify-center space-y-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>

        <Button title="Acessar credencial" onPress={handleAcessCredetial} />

        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
