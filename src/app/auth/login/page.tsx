"use client";
import Image from "next/image";
import FormField from "@/components/auth/form-field";
import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { AuthAPI } from "@/api-queries/authAPI";
import { useRouter } from "next/navigation";
import userAtom from "@/store/userStore";
import { useAtom } from "jotai";


const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [_ ,setUser] =useAtom(userAtom)
  const handleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      console.log({email, password})
      const authApi = new AuthAPI();
      // const response = await authApi.login({ email, password });
      
      if (email !== "" && email.includes('@') && password !== '') {
        const user = { email, password }
        localStorage.setItem('token', JSON.stringify(user))
        // const user = await authApi.me({token: response.data.token})
        setUser(user)
        setTimeout(() => {
          router.push('/products')
        }, 300);
      } else {
        setError( "Login failed");
      }
    } catch (error) {
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-20 bg-secondary-color lg:p-24">
      <div className="container bg-white flex justify-around rounded-3xl gap-4 flex-col items-center p-5 lg:max-w-3xl lg:pb-10">
        <Image src="/logo.svg" width="500" height="110" alt="ProStart Logo" />
        <span className="text-xl  md:text-2xl lg:text-3xl">
          Войдите в свой акаунт
        </span>
        <form className="w-4/5 sm:w-96 flex flex-col gap-2">
          <FormField
            id="email"
            type="text"
            placeholder="Введите электронную почту"
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormField
            id="password"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Войти" action={handleLogin} disabled={isLoading} />
          <div className="w-full flex gap-1 items-center mt-4 text-xs sm:text-base ">
            <span className="w-4/5">Нет аккаунта?</span>
            <Link
              href="/auth/register"
              className="bg-primary-color hover:bg-slate-200 hover:shadow-sm w-full text-black  text-center rounded-xl p-2 focus:outline-none focus:shadow-outline"
            >
              Зарегистрироваться
            </Link>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </main>
  );
};

export default LoginPage;
