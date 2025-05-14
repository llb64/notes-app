import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import UserInputs from "@/components/UserInputs";
import { Link } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormControl className="p-4 border rounded-lg border-outline-300 w-1/4 self-center mt-10">
      <VStack space="xl">
        <Heading className="text-typography-900">Login</Heading>
        <Text className="">Please enter your details to sign in</Text>
        <Divider />
        <UserInputs setEmail={setEmail} setPassword={setPassword} />
        <Link href="/" className="flex w-full justify-end">
          <Text className="color-blue-400">Forgot password?</Text>
        </Link>
        <Link href="/">
          <Button className="w-full">
            <ButtonText className="text-typography-0">Sign In</ButtonText>
          </Button>
        </Link>
      </VStack>
      <HStack className="w-full justify-center mt-5" space="xs">
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Link href="/sign-up">
            <Text className="color-blue-400">Create account</Text>
          </Link>
        </TouchableOpacity>
      </HStack>
    </FormControl>
  );
}
