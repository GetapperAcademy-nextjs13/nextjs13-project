import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMemo } from "react";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

type LoginFormData = {
  email: string;
  password: string;
};

export const useLoginForm = () => {
  const formData = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log("SUCCESS ", data);
      }),
    [handleSubmit],
  );
  console.log({ errors });
  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
