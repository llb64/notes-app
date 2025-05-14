import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import UserInputs from "@/components/UserInputs";
import { Link } from "expo-router";
import React, { useState } from "react";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <FormControl className="p-4 border rounded-lg border-outline-300 w-1/4 self-center mt-10">
      <VStack space="xl">
        <Heading className="text-typography-900">Sign up</Heading>
        <Text className="">Please enter your details to sign up</Text>
        <Divider />
        <UserInputs
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <Link href="/">
          <Button className="w-full">
            <ButtonText className="text-typography-0">Sign Up</ButtonText>
          </Button>
        </Link>
      </VStack>
    </FormControl>
  );
}
