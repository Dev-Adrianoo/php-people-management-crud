# CRUD de Gestão de Pessoas com PHP

Uma Single Page Application (SPA) simples para gerenciar registros de pessoas (Criar, Ler, Atualizar, Deletar). Construído com PHP puro, MySQL e JavaScript (Fetch API).

---

## 🚀 Guia Rápido: Do Zero à Execução

Siga estes passos para ter o projeto rodando rapidamente no seu ambiente.

### Passo 1: Pré-requisitos

Garanta que você tenha os seguintes softwares instalados no seu sistema:

1.  **Git:** Para clonar o repositório do projeto.
2.  **PHP:** Versão 8.0 ou superior.
3.  **Composer:** Gerenciador de dependências para PHP.
4.  **MySQL:** Um servidor de banco de dados MySQL/MariaDB.
    *   **Dica:** A forma mais fácil de instalar o PHP e o MySQL juntos é com pacotes como **XAMPP** (para Windows) ou **MAMP** (para Mac), que são gratuitos e já vêm com tudo configurado.

### Passo 2: Instalação do Projeto

```bash
# 1. Clone o projeto para sua máquina
git clone https://github.com/seu-usuario/php-people-management-crud.git
cd php-people-management-crud

# 2. Instale as dependências do PHP com o Composer
composer install
```

### Passo 3: Configuração do Banco de Dados

O projeto utiliza um arquivo `.env` para gerenciar as credenciais de conexão com o banco de dados. Este arquivo **não é enviado para o Git**, pois contém informações sensíveis.

1.  **Crie seu arquivo `.env`:**
    O projeto já vem com um arquivo de exemplo chamado `.env.example`. Copie-o e renomeie a cópia para `.env` na raiz do projeto:
    ```bash
    cp .env.example .env
    ```

2.  **Edite o arquivo `.env`:**
    Abra o seu novo arquivo `.env` e ajuste as variáveis `DB_USER` (usuário) e `DB_PASS` (senha) conforme a sua configuração local do MySQL:

    *   **Se você usa XAMPP (Windows):** Provavelmente as credenciais padrão do `.env.example` (`DB_USER="root"`, `DB_PASS=""`) já estão corretas.
    *   **Se você usa MAMP (Mac):** Altere a linha `DB_PASS` para: `DB_PASS="root"`.
    *   **Se você usa Linux (Ubuntu, Mint, etc.):** O processo é um pouco diferente, pois o MySQL no Linux geralmente exige a criação de um usuário específico para aplicações. **Siga o "Guia Adicional: Criando um Usuário MySQL no Linux" no final deste README** e depois preencha o `.env` com as credenciais que você criou.

### Passo 4: Execute a Aplicação!

Com todas as configurações prontas, inicie o servidor embutido do PHP:

```bash
php -S localhost:8000 router.php
```

Abra seu navegador e acesse: `http://localhost:8000`.

**Parabéns!** Na primeira vez que você acessar, a aplicação irá automaticamente criar o banco de dados (`gestao_pessoas`) e a tabela (`pessoas`). Se você vir a interface de gerenciamento de pessoas, tudo funcionou perfeitamente.

---

## 🧑‍💻 Guia Adicional: Criando um Usuário MySQL no Linux

Se você instalou o MySQL recentemente no seu sistema Linux (Ubuntu, Mint ou um derivado) e precisa criar um usuário para que a aplicação PHP possa se conectar, siga estes passos no terminal:

1.  **Acesse o MySQL como administrador:**
    ```bash
    sudo mysql
    ```
2.  **Crie o usuário e defina a senha:** (Substitua `sua_senha_aqui` por uma senha forte de sua escolha. **Anote esta senha!**)
    ```sql
    CREATE USER 'dev'@'localhost' IDENTIFIED BY 'sua_senha_aqui';
    ```
3.  **Conceda as permissões necessárias:** (Isso permite que o usuário `dev` tenha controle total sobre o banco de dados `gestao_pessoas`.)
    ```sql
    GRANT ALL PRIVILEGES ON gestao_pessoas.* TO 'dev'@'localhost';
    ```
4.  **Aplique as alterações e saia do MySQL:**
    ```sql
    FLUSH PRIVILEGES;
    EXIT;
    ```
5.  **Lembre-se:** Após seguir estes passos, preencha o seu arquivo `.env` com `DB_USER="dev"` e `DB_PASS="sua_senha_aqui"` (a senha que você acabou de criar).