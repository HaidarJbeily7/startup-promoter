"use client";
import Image from "next/image";
import FormField from "@/components/auth/form-field";
import Button from "@/components/button";
import Link from "next/link";

const LoginPage = () => {
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
          />

          <FormField
            id="password"
            type="password"
            placeholder="Введите пароль"
          />
          <Button
            text="Войти"
            action={() => {
              console.log("login clicked!");
            }}
          />
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
        
      </div>
    </main>
  );
};

export default LoginPage;
