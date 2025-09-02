## 🌟 Recriando a API da Champions League com Node.js e Express

### 📃 Descrição

API desenvolvida com Node.js e Express para gerenciar jogadores e clubes da Champions League. Permite listar, criar, atualizar e remover jogadores, além de consultar clubes participantes, facilitando integrações e aplicações esportivas.

### ⚙️ Pré-requisitos

- **IDE**: VSCode ou outra de sua preferência.
- **GitHub**: Plataforma para armazenar seus códigos desenvolvidos.
- **Node.js**: Ambiente de execução de códigos JavaScript assíncrona orientada a eventos para construir aplicações de rede escaláveis.

### 🛠️ Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação utilizada para o desenvolvimento do projeto.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de construção e empacotamento para projetos TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.

### 🔥 Como Utilizar

1. Clone este repositório:

        git clone https://github.com/wsawebmaster/node-express-api.git

2. Instale as dependências: 

        npm install

3. Inicie o servidor: 

        npm run start:watch

4. Acesse os endpoints fornecidos para listar os players ou clubs.

### 🚀 Exemplos de Endpoints

#### Listar jogadores (players)

```http
GET /api/players
```

#### Buscar jogador por ID

```http
GET /api/players/1
```

#### Criar jogador

```http
POST /api/players
Content-Type: application/json

{
    "id": 20,
    "name": "Novo Jogador",
    "club": "Novo Clube",
    "nationality": "Brasil",
    "position": "Atacante",
    "statistics": {
        "Overall": 99,
        "Pace": 79,
        "Shooting": 89,
        "Passing": 97,
        "Dribbling": 67,
        "Defending": 82,
        "Physical": 77
    }
}
```

#### Listar clubes

```http
GET /api/clubs
```

### 📚 Endpoints Disponíveis http://localhost:3333

| Método | Endpoint             | Descrição                                 |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/players`       | Lista todos os jogadores                  |
| GET    | `/api/players/:id`   | Busca jogador por ID                      |
| POST   | `/api/players`       | Cria um novo jogador                      |
| DELETE | `/api/players/:id`   | Remove jogador por ID                     |
| PATCH  | `/api/players/:id`   | Atualiza estatísticas de um jogador       |
| GET    | `/api/clubs`         | Lista todos os clubes                     |

> Todos os endpoints retornam respostas padronizadas conforme o modelo `HttpResponse`.

    export interface HttpResponse {
        statusCode: number;
        body: any;
    }


### 🏗️ Arquitetura do Projeto

A API segue uma arquitetura simples e organizada em camadas:

```
┌─────────────────────────────┐
│         Cliente/API         │
│(ex: Frontend, Insomnia...)  │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│        Express Router       │
│  (/api/players, /api/clubs) │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│        Controllers          │
│ players-controller.ts       │
│ clubs-controller.ts         │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│         Models/Data         │
│ players.ts, clubs.ts        │
│ (dados em memória)          │
└─────────────────────────────┘
```

- **Cliente/API:** Realiza requisições HTTP para os endpoints.
- **Express Router:** Direciona as requisições para os controllers adequados.
- **Controllers:** Processam a lógica de negócio e manipulam os dados.
- **Models/Data:** Armazenam os dados dos jogadores e clubes em arquivos TypeScript, sem uso de banco de dados externo.



---
---

### 👨‍💻 Expert

<p>
<img 
      align="left" 
      style="margin: 10px; width: 80px; border-radius: 50%;" 
      src="https://avatars.githubusercontent.com/u/52001930?s=400&u=fb999c966c5c652a8357cbede4b1112e79cbfe18&v=4" 
/>
    <p style="padding-top:25px">&nbsp&nbsp&nbsp Wagner Andrade<br>
    &nbsp&nbsp&nbsp
    <a href="https://github.com/wsawebmaster">
    GitHub</a>&nbsp;|&nbsp;
    <a href="https://www.linkedin.com/in/
wsawebmaster">LinkedIn</a>
&nbsp;|&nbsp;
<a href="mailto:wsawebmaster@yahoo.com.br">
    Email</a>
  &nbsp;|&nbsp;
</p>
</p>