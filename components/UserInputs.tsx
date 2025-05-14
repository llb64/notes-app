import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import React, { useState } from "react";
import { Text } from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "./ui/input";
import { VStack } from "./ui/vstack";

type Props = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword?: React.Dispatch<React.SetStateAction<string>>;
};

export default function UserInputs({
  setEmail,
  setPassword,
  setConfirmPassword,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordButton = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <VStack space="xs">
        <Text className="text-typography-500">Email address</Text>
        <Input className="min-w-[250px]">
          <InputField type="text" onChangeText={setEmail} />
        </Input>
      </VStack>
      <VStack space="xs">
        <Text className="text-typography-500">Password</Text>
        <Input className="text-center">
          <InputField
            type={showPassword ? "text" : "password"}
            onChangeText={setPassword}
          />
          <InputSlot className="pr-3" onPress={handleShowPasswordButton}>
            <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
          </InputSlot>
        </Input>
      </VStack>
      {setConfirmPassword && (
        <VStack space="xs">
          <Text className="text-typography-500">Confirm Password</Text>
          <Input className="text-center">
            <InputField
              type={showPassword ? "text" : "password"}
              onChangeText={setPassword}
            />
            <InputSlot className="pr-3" onPress={handleShowPasswordButton}>
              <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
            </InputSlot>
          </Input>
        </VStack>
      )}
    </>
  );
}
