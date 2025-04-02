"use client";
import React from "react";
import "./dashboard.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DoughnutChart from "./components/DoughnutChart";

const Dashboard = () => {
  const pathname = usePathname();

  const handleTransaction = () => {
    window.location.href = "/transactions";
  };

  return (
    <div className="dashboard-container">
      {/* Navegação */}
      <nav className="dashboard-nav">
        <Image
          src="/images/icon.svg"
          alt="Gids Finance Logo"
          width={31}
          height={31}
          className="logo"
        />
        <h1>gids.finance</h1>
        <ul className="nav-menu">
          <li className={pathname === "/dashboard" ? "active" : ""}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className={pathname === "/transacoes" ? "active" : ""}>
            <a href="/transacoes">Transações</a>
          </li>
          <li className={pathname === "/conciliacao" ? "active" : ""}>
            <a href="/conciliacao">Conciliação</a>
          </li>
          <li className={pathname === "/relatorios" ? "active" : ""}>
            <a href="/relatorios">Relatórios</a>
          </li>
        </ul>
        <div className="user">
          <Image
            src="/images/user.svg"
            alt="User Icon"
            width={16}
            height={16}
          />
          <span>Maicon Berbert</span>
        </div>
      </nav>

      {/* Cabeçalho */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>

        <div className="reports">
          <button className="btn">
            <Image
              src="/images/report.svg"
              width={16}
              height={16}
              alt="Relatórios"
              ></Image>
            Relatórios
            </button>
        </div>
        <div className="months">
        <button className="btn"> Janeiro</button>
        </div>
      </header>

      <div className="dashboard-layout">
        {/* Conteúdo principal */}
        <div className="main-content">
          {/* Saldo do dia */}
          <section className="dashboard-saldo">
            <div className="card saldo">
              <div className="saldo-header">
                <Image
                  src={"/images/wallet.svg"}
                  alt={"Saldo do dia"}
                  width={31}
                  height={31}
                />
                <span>Saldo do dia</span>
              </div>
              <h1 className="saldo-value">
                R$ 28.700{" "}
                <Image
                  src={"/images/eye.svg"}
                  alt="visualizar saldo"
                  width={30}
                  height={30}
                />
              </h1>
              <div className="button-container">
                <button className="btn">
                  Adicionar Transação
                  <Image
                    src="/images/arrows-sort.svg"
                    alt="Transação"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Cards menores */}
          <section className="dashboard-cards">
            <div className="card a-receber">
              <div className="card-header">
                <Image
                  src="/images/pig.svg"
                  alt="A receber"
                  width={24}
                  height={24}
                />
                <span>A receber</span>
              </div>
              <h2>R$ 23.500</h2>
            </div>
            <div className="card processados">
              <div className="card-header">
                <Image
                  src="/images/trending-up.svg"
                  alt="Processados"
                  width={24}
                  height={24}
                  style={{
                    filter:
                      "invert(42%) sepia(94%) saturate(500%) hue-rotate(90deg) brightness(90%) contrast(85%)",
                    borderRadius: "20%",
                    backgroundColor: "rgba(0, 255, 0, 0.2)",
                  }}
                />
                <span>Processados</span>
              </div>
              <h2>R$ 108.150</h2>
            </div>
            <div className="card erro">
              <div className="card-header">
                <Image
                  src="/images/trending-down.svg"
                  alt="Com erro"
                  width={24}
                  height={24}
                  style={{
                    filter:
                      "invert(20%) sepia(100%) saturate(5000%) hue-rotate(0deg) brightness(90%) contrast(85%)",
                    borderRadius: "20%",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }}
                />
                <span>Com erro</span>
              </div>
              <h2>R$ 22.950</h2>
            </div>
          </section>

          {/* Gráficos e Entradas */}
          <section className="dashboard-charts">
            <div className="chart-container">
              <DoughnutChart />
            </div>
            <div className="entries-container">
              <div className="entries-header">
                <h3>Entradas por conta</h3>
              </div>
              <div className="entries-list">
                <ul>
                  <li className="entry-item">
                    <div className="entry-header">
                      <span>Amigos dos Gideões</span>
                      <span className="percentage">50%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "50%" }}></div>
                    </div>
                    <span className="entry-value">R$ 72.500</span>
                  </li>
                  <li className="entry-item">
                    <div className="entry-header">
                      <span>Igrejas Parceiras</span>
                      <span className="percentage">40%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "40%" }}></div>
                    </div>
                    <span className="entry-value">R$ 21.200</span>
                  </li>
                  <li className="entry-item">
                    <div className="entry-header">
                      <span>Materiais e EP</span>
                      <span className="percentage">30%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "30%" }}></div>
                    </div>
                    <span className="entry-value">R$ 3.200</span>
                  </li>
                  <li className="entry-item">
                    <div className="entry-header">
                      <span>Não identificado</span>
                      <span className="percentage">20%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "20%" }}></div>
                    </div>
                    <span className="entry-value">R$ 1.500</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Transações */}
        <div className="transactions-container">
          <div className="transactions-header">
            <h3>Transações</h3>
            <button className="transactions-more" onClick={handleTransaction}>
              Ver Mais
            </button>
          </div>
          <div className="transactions-list-container">
            <ul className="transactions-list">
              <li className="transaction positive">
                <div className="transaction-icon-container">
                  <Image
                    src="/images/pix.svg"
                    alt="Transação positiva"
                    width={24}
                    height={24}
                    className="transaction-icon"
                  />
                </div>
                <span>Marcos dos Santos</span>
                <span className="value positive">R$ 300,00</span>
              </li>
              <li className="transaction negative">
                <div className="transaction-icon-container">
                  <Image
                    src="/images/bank-slip.svg"
                    alt="Transação negativa"
                    width={24}
                    height={24}
                    className="transaction-icon"
                  />
                </div>
                <span>Denise da Silva</span>
                <span className="value negative">R$ 50,00</span>
              </li>
              <li className="transaction a-receber">
                <div className="transaction-icon-container">
                  <Image
                    src="/images/pix.svg"
                    alt="Transação a receber"
                    width={24}
                    height={24}
                    className="transaction-icon"
                  />
                </div>
                <span>João da Silva</span>
                <span className="value">R$ 100,00</span>
              </li>
              <li className="transaction positive">
                <div className="transaction-icon-container">
                  <Image
                    src="/images/pix.svg"
                    alt="Transação positiva"
                    width={24}
                    height={24}
                    className="transaction-icon"
                  />
                </div>
                <span>Maria Oliveira</span>
                <span className="value positive">R$ 500,00</span>
                </li>
              <li className="transaction negative">
                <div className="transaction-icon-container">
                  <Image
                    src="/images/bank-slip.svg"
                    alt="Transação negativa"
                    width={24}
                    height={24}
                    className="transaction-icon"
                  />
                </div>
                <span>Lucas Pereira</span>
                <span className="value negative">R$ 200,00</span>
              </li>
              <li className="transaction a-receber">
                <div className="transaction-icon-container">
                  <Image
                    src="/images/pix.svg"
                    alt="Transação a receber"
                    width={24}
                    height={24}
                    className="transaction-icon"
                  />
                </div>
                <span>Ana Costa</span>
                <span className="value">R$ 150,00</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
