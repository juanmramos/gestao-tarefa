# gestao-tarefa
Gestão de Tarefa

# 📄 Documento Adicional – Arquitetura e Organização do Projeto

---

## 1. 🧠 Decisões Técnicas

### ● Tecnologias e Frameworks Escolhidos

| Camada        | Tecnologia         | Justificativa                                                                 |
|---------------|--------------------|-------------------------------------------------------------------------------|
| Backend       | Java + Spring Boot | Framework robusto, produtivo e amplamente utilizado no mercado corporativo.  |
| Banco de Dados| H2 (in-memory)     | Simples e ideal para testes locais; não requer configuração externa.         |
| ORM           | Spring Data JPA    | Abstrai operações com banco de forma eficiente, reduzindo código repetitivo. |
| Frontend      | React + Vite       | Frontend moderno, com ótima performance e boa experiência de desenvolvedor.  |
| Comunicação   | REST + JSON        | Padrão amplamente aceito para aplicações web modernas.                       |
| Documentação  | Swagger/OpenAPI    | Geração automática da documentação da API para fácil consumo.                |
| Testes        | JUnit / Pytest     | Ferramentas confiáveis para teste de APIs e funcionalidades.                 |

---

### ● Estrutura de Pastas e Organização do Projeto

#### **Backend (Spring Boot)**


#### **Frontend (React)**

---

### ● Estratégias de Separação de Responsabilidades

- **Controller:** recebe as requisições HTTP e delega ao serviço.
- **Service:** contém as regras de negócio e intermedia a lógica da aplicação.
- **Repository:** interage com a base de dados usando Spring Data JPA.
- **DTO:** garante controle de dados entre camadas.
- **Entity (Model):** mapeia a estrutura da base de dados.

---

## 2. 🚀 Evolução e Escalabilidade

### ● Propostas de Evolução

- Autenticação de usuários com JWT.
- Multiusuário: associar tarefas por conta.
- Sistema de comentários ou histórico.
- Anexos em tarefas (upload de arquivos).
- Paginação e ordenação das tarefas.
- Notificações por e-mail ou WebSockets.

---

### ● Sugestões Técnicas para Ganho de Performance e Manutenção

- Cache (Spring Cache ou Redis).
- Externalização do banco (PostgreSQL ou MySQL).
- Monitoramento e logging com ferramentas como ELK ou Sentry.
- Padronização com linters e checkers (Checkstyle, ESLint).
- Testes automatizados integrados ao CI/CD.
- Deploy contínuo com GitHub Actions.

---

## 3. 👥 Simulação de Distribuição de Tarefas em Equipe

### ● Time: 3 Desenvolvedores

| Dev | Especialidade       | Responsabilidades                                                                 |
|-----|---------------------|-----------------------------------------------------------------------------------|
| 1   | Backend (Java)      | - Estrutura do projeto Spring Boot<br> - API REST<br> - Modelos, serviços e repositórios<br> - Integração com banco H2<br> - Swagger |
| 2   | Frontend (React)    | - Criação da interface<br> - Consumo da API<br> - Componentes reutilizáveis<br> - Responsividade |
| 3   | Testes/Documentação | - Testes unitários e integração<br> - Documentação (README, Swagger, ERD)<br> - Scripts de deploy e CI/CD |

---

### ● Boas Práticas Colaborativas

- **Git Flow Simplificado:**
    - `main` → produção
    - `dev` → branch de desenvolvimento
    - `feature/*` → funcionalidades específicas

- **Revisão de Código:**
    - Pull Requests com revisão obrigatória
    - Checklist de boas práticas e testes

- **Automação:**
    - Execução de testes automáticos em cada push
    - Deploy automático com GitHub Actions

- **Daily meetings / check-ins rápidos:**
    - Alinhamento de progresso
    - Resolução de bloqueios

---

## ✅ Considerações Finais

- Aplicação modular e escalável.
- API REST documentada e de fácil integração.
- Código limpo, com separação de responsabilidades clara.
- Frontend funcional, simples e responsivo.
- Base para evolução contínua com práticas modernas de desenvolvimento.

