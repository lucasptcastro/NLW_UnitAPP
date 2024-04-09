import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, TextInputProps, View, ViewProps } from "react-native";

function Input({ children, ...rest }: { children: ReactNode }) {
  return (
    <View
      className="w-full h-14 flex-row items-center p-3 border border-green-400 rounded-lg space-x-3"
      {...rest}
    >
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-white text-base font-regular"
      placeholderTextColor={colors.gray[200]}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
