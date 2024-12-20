# 📋 ToDoList-Node

Bem-vindo ao repositório **ToDoList-Node**! Este é um projeto de lista de tarefas simples e eficiente, desenvolvido com Node.js.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construção de servidores web.
- **PostgreSQL**: Banco de dados relacional para armazenar as tarefas.

## 📦 Estrutura do Projeto

```
📁 ToDoList-Node
├── 📁 src
│   ├── 📄 index.js  // Arquivo principal para inicializar o servidor
│   ├── 📁 controllers  // Controladores de rotas
│   ├── 📁 models  // Definições de modelos e esquemas de banco de dados
│   ├── 📁 routes  // Definições das rotas da API
│   └── 📁 config  // Configurações da aplicação (como banco de dados)
├── 📄 .gitignore  // Arquivos e pastas a serem ignorados pelo Git
├── 📄 package.json  // Configurações e dependências do projeto
└── 📄 README.md  // Documentação do projeto
```

## ⚙️ Configuração do Ambiente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Thurzin11/ToDoList-Node.git
   ```

2. **Acesse o diretório do projeto**

   ```bash
   cd ToDoList-Node
   ```

3. **Instale as dependências**

   ```bash
   npm install
   ```

4. **Configure o banco de dados**

   - Certifique-se de ter o PostgreSQL instalado e em execução.
   - Crie um banco de dados para o projeto.
   - Configure o arquivo de conexão ao banco de dados (normalmente em `src/config/database.js`).

5. **Inicie o servidor**

   ```bash
   npm start
   ```

6. **Acesse a aplicação**

   - O servidor será iniciado e estará acessível em: `http://localhost:3000`

## 📚 Funcionalidades

- 📋 **CRUD de Tarefas**: Criação, leitura, atualização e exclusão de tarefas.
- 📅 **Marcar Conclusão**: Permite marcar uma tarefa como concluída.
- 🔍 **Filtragem e Ordenação**: Permite filtrar as tarefas por status e ordená-las.

## 📄 Endpoints

| Método | Endpoint    | Descrição                   |
| ------ | ----------- | --------------------------- |
| GET    | /tasks      | Lista todas as tarefas      |
| POST   | /tasks      | Cria uma nova tarefa        |
| GET    | /tasks/\:id | Retorna uma tarefa pelo ID  |
| PUT    | /tasks/\:id | Atualiza uma tarefa pelo ID |
| DELETE | /tasks/\:id | Remove uma tarefa pelo ID   |

## 💡 Melhorias Futuras

- 🔐 **Autenticação e Autorização**
- 📅 **Notificações de Prazo**
- 🌐 **Interface Frontend** para interação com a API

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um **fork** do repositório.
2. Crie uma **branch** com a sua feature ou correção de bug.
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o **commit** das suas alterações.
   ```bash
   git commit -m 'Adicionando nova funcionalidade'
   ```
4. Envie o **push** para a branch.
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request** para revisão.

---

Feito por [Arthur Santos Gonçalves](https://github.com/Thurzin11) 🚀

Se este projeto foi útil para você, não se esqueça de deixar uma ⭐ no repositório!

