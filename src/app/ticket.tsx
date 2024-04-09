import {
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { Credential } from "@/components/Credential";
import { Header } from "@/components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/Button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { QRCode } from "@/components/QRCode";

export default function Ticket() {
  const [image, setImage] = useState("");
  const [expandQRCode, setExpandQRCode] = useState(false);

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // define que o usuário irá selecionar apenas imagens
        allowsEditing: true, // permite o usuário cortar a imagem
        aspect: [4, 4], // define a altura e largura que a imagem precisa ter. Se a imagem que o usuário selecionar não estiver nessas condições ele pode editar a imgem e recortá-la
      });

      if (result.assets) {
        setImage(result.assets[0].uri); // pega o caminho no dispositivo da imagem que foi selecionada
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Foto", "Não foi possível selecionar a imagem.");
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />
      <Header title="Minha credencial" />

      <ScrollView
        className="-mt-28 -z-10"
        contentContainerStyle={{ paddingHorizontal: 32, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandQRCode(true)}
        />

        <View className="self-center my-6">
          <FontAwesome
            name="angle-double-down"
            size={24}
            color={colors.gray[300]}
          />
        </View>

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar crendencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você vai participar do Unite Summit!
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity activeOpacity={0.7} className="mt-10">
          <Text className="text-base text-white font-bold text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Estratégia para ampliar a imagem do QRCode */}
      <Modal visible={expandQRCode} statusBarTranslucent animationType="fade">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandQRCode(false)}
          >
            <QRCode value="teste" size={300} />
            <Text className="font-body text-orange-500 text-sm mt-10 text-center">
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
