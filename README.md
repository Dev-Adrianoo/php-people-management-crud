# CRUD de Gestão de Pessoas com PHP

Uma Single Page Application (SPA) simples para gerenciar registros de pessoas (Criar, Ler, Atualizar, Deletar). Construído com PHP puro, MySQL e JavaScript (Fetch API).

## 📋 Pré-requisitos

- **PHP** (8.0 ou superior)
- **MySQL** (5.7 ou superior)
- **Git**
- **Composer** para gerenciamento de dependências do PHP.

---

## 🚀 Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/php-people-management-crud.git
cd php-people-management-crud
```

### 2. Instale as Dependências
Este projeto usa o Composer para carregar as bibliotecas necessárias (como o `php-dotenv`).
```bash
composer install
```

### 3. Configure o Ambiente (Banco de Dados)

O projeto usa um arquivo `.env` para gerenciar as credenciais do banco de dados de forma segura.

**Passo 1: Crie seu arquivo de ambiente**

Copie o arquivo de exemplo `.env.example` e renomeie a cópia para `.env`.
```bash
cp .env.example .env
```

**Passo 2: Preencha suas credenciais**

Abra o arquivo `.env` e preencha `DB_USER` e `DB_PASS` com o usuário e senha do seu servidor MySQL local.

**Valores Comuns para Ambientes Locais:**

| Sistema / Software | Usuário (`DB_USER`) | Senha (`DB_PASS`) |
| :----------------- | :---------------- | :---------------- |
| **Windows (XAMPP)**| `root`            | (deixe em branco) |
| **Mac (MAMP)**     | `root`            | `root`            |
| **Linux (Mint/Ubuntu)** | `dev` (recomendado)| `123456` (ou a que você criou) |

> **Nota para Usuários Linux:** Por padrão, o MySQL no Linux pode não ter um usuário com senha que possa ser usado por aplicações. É fortemente recomendado criar um. Veja o guia abaixo.

### 4. Crie o Banco de Dados e a Tabela
A aplicação é configurada para **criar automaticamente o banco de dados (`gestao_pessoas`) e a tabela (`pessoas`)** na primeira conexão, contanto que o usuário do MySQL tenha as permissões necessárias.

Se preferir criar manualmente, execute o script: `database/schema.sql`.

---

## 🏃 Como Executar

Você pode executar este projeto usando o **Servidor Embutido do PHP**.

1. Abra seu terminal.
2. Navegue até a pasta raiz do projeto.
3. Execute o seguinte comando:
   ```bash
   php -S localhost:8000 router.php
   ```
4. Acesse `http://localhost:8000` no seu navegador.

---

## 🧑‍💻 Guia Adicional: Criando um Usuário MySQL no Linux

Se você instalou o MySQL recentemente no Mint, Ubuntu ou um derivado, siga estes passos no terminal para criar um usuário que a aplicação possa usar:

1.  **Acesse o MySQL como administrador:**
    ```bash
    sudo mysql
    ```
2.  **Crie o usuário e a senha:** (substitua `sua_senha_aqui` pela que desejar)
    ```sql
    CREATE USER 'dev'@'localhost' IDENTIFIED BY 'sua_senha_aqui';
    ```
3.  **Dê as permissões necessárias:** (garante que o usuário possa criar o banco e a tabela)
    ```sql
    GRANT ALL PRIVILEGES ON gestao_pessoas.* TO 'dev'@'localhost';
    ```
4.  **Aplique as alterações e saia:**
    ```sql
    FLUSH PRIVILEGES;
    EXIT;
    ```
5.  **Pronto!** Agora use `dev` e `sua_senha_aqui` no seu arquivo `.env`.