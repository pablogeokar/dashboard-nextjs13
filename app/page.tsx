import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { H1 } from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col justify-center items-center">
      <Form>
        <Image
          src="/logo.png"
          alt="Logo"
          width={330}
          height={180}
          className="p-4"
        />
        <H1>Login</H1>
        <Input placeholder="Digite o seu nome" label="E-mail" />
        <Input placeholder="Digite a sua senha" type="password" label="Senha" />
        <div className="border-b-[1px] p-4" />
        <Button label="Acessar" fullWidth />
      </Form>
    </div>
  );
}
