"use client";
import Image from "next/image";
import "./styles.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = () => {
      router.push("/dashboard");
    };

    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <div className="logo-container">
              <Image
                src="/images/icon.svg"
                alt="Gids Finance Logo"
                width={31}
                height={31}
                className="logo"
              />
              <h2>gids.finance</h2>
            </div>
            <h1> Bem-Vindo</h1>
            <p className="login-description">
              O gids.Finance é a plataforma de gestão financeira de Os Gideões
              Internacionais no Brasil para monitorar e gerenciar suas
              movimentações facilitando o controle de suas arrecadações.
            </p>
            <div className="login-form-group">
              <div className="input-group">
                <label>CPF (login)</label>
                <input
                  type="text"
                  id="cpf"
                  placeholder="(CPF sem pontos ou traços)"
                />

                <label>Senha</label>
                <input type="password" id="senha" placeholder="******" />
              </div>

              <div className="button-group">
                <button className="button button-cancel">Cancelar</button>
                <button className="button button-login" onClick={handleLogin}>
                  Login
                </button>
              </div>

              <button className="button-google">
                <Image
                  src="/images/google-logo.png"
                  width={20}
                  height={20}
                  alt="Google logo"
                />
                Entrar com Google
              </button>
            </div>
          </div>
        </div>

        {/* Lado direito - Imagem de fundo */}
        <div className="image-container">
          <Image
            src="/image.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Imagem de fundo"
          />
        </div>
      </div>
    );
  }
// i
