import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Contacts() {
  const [form, setForm] = useState({});
  const [formBoolean, setFormBoolean] = useState(false);

  const schema = yup.object().shape({
    fullName: yup.string().required("your full name is required"),
    email: yup.string().email().required("your email is required"),
    age: yup.number().positive().integer().max(4).required("your age is required"),
    password: yup.string().min(4).max(20).required("your password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required("your passworde is required"),
  });
  
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    setForm(data)
    setFormBoolean(true)
  }


  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full name..." {...register("fullName")} />
      <p className="error" >{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p className="error">{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p className="error">{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p className="error">{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm password..."
        {...register("confirmPassword")}
      />
      <p className="error">{errors.confirmPassword?.message}</p>
      <input type="submit" />
      <p>{ formBoolean && JSON.stringify(form)}</p>
    </form>
  );
}
