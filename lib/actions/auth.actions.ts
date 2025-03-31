"use server";

import axios from "axios";
import { SERVER_URL } from "../constants";
import { FormState, LoginFormSchema, SignupFormSchema } from "../schema";

export const register = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const validationFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validationFields.success) {
    return { error: validationFields.error.flatten().fieldErrors };
  }

  const { name, email, password } = validationFields.data;

  const response = await axios.post(`${SERVER_URL}/auth/register`, {
    name,
    email,
    password,
  });
  if (response.status !== 201) {
    return {
      message: response.statusText,
    };
  }
  return { status: 201, message: "회원가입이 완료되었습니다." };
};

export async function validateLoginForm(
  formData: FormData
): Promise<FormState> {
  const validationFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  return { data: validationFields.data };
}
