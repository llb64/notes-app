import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordButton = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormControl className="p-4 border rounded-lg border-outline-300 w-1/4 self-center mt-10">
      <VStack space="xl">
        <Heading className="text-typography-900">Login</Heading>
        <Text className="">Please enter you details to sign in</Text>
        <Divider />
        <VStack space="xs">
          <Text className="text-typography-500">Email address</Text>
          <Input className="min-w-[250px]">
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500">Password</Text>
          <Input className="text-center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot className="pr-3" onPress={handleShowPasswordButton}>
              <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
            </InputSlot>
          </Input>
        </VStack>
        <Link href="/" className="flex w-full justify-end">
          <Text className="color-blue-400">Forgot password?</Text>
        </Link>
        <Divider />

        <Link href="/">
          <Button className="w-full">
            <ButtonText className="text-typography-0">Sign In</ButtonText>
          </Button>
        </Link>
      </VStack>
      <HStack className="w-full justify-center" space="xs">
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Link href="/">
            <Text className="color-blue-400">Create account</Text>
          </Link>
        </TouchableOpacity>
      </HStack>
    </FormControl>
  );
}
