"use client";
import Image from "next/image";
import FormField from "@/components/auth/form-field";
import Button from "@/components/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAPI } from "@/api-queries/authAPI";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterCompleted , isRegisterCompletedSet] = useState(false);

  const handleRegister = async () => {
    setError("")
    setIsLoading(true);
    try {
      // const response = await new AuthAPI().register({ email, password });
      
      if (email !== "" && email.includes('@') && password !== '') {
        isRegisterCompletedSet(true)
      } else {
        setError( "validation error");
      }
    } catch (error) {
      setError("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-20 bg-secondary-color lg:p-24">
      <div className="container bg-white flex justify-around rounded-3xl gap-4 flex-col items-center p-5 lg:max-w-3xl lg:pb-10">
        <Image src="/logo.svg" width="500" height="110" alt="ProStart Logo" />
        <span className="text-xl  md:text-2xl lg:text-3xl">
          Создайте свой акаунт
        </span>
        <form className="w-4/5 sm:w-96 flex flex-col gap-2">
          <FormField
            id="email"
            type="text"
            placeholder="Введите адрес почты"
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormField
            id="password"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormField
            id="repeat-password"
            type="password"
            placeholder="Повторите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-center mb-1">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-xs sm:text-lg"
            >
              Согласие на лицензионное соглашение
            </label>
          </div>
          <Button text="Зарегистрироваться" action={handleRegister} disabled={isLoading} />
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {isRegisterCompleted && (
        <Link href="/auth/login" className="p-4 bg-slate-300 rounded-2xl">Registration Completed -&gt; login!</Link>)}
      </div>
    </main>
  );
};

export default RegisterPage;
