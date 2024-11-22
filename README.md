
# Projeto: Validação de Formulários com React Hook Form e Yup

Este projeto foi desenvolvido com o objetivo de explorar boas práticas e soluções eficientes para validação de formulários no React, utilizando as bibliotecas React Hook Form e Yup. A abordagem combina flexibilidade, desempenho e uma excelente experiência para o usuário.

O foco está em implementar validações robustas, incluindo campos obrigatórios, formatos específicos (como e-mails), e validações complexas (como confirmação de senha), além de melhorar a usabilidade com mensagens claras e feedback visual.

## Stack utilizada

**Front-end:** React, React Form Hook,Yup e VITE




## Uso/Exemplos

```javascript
const schema = yup
  .object({
    nome: yup.string().required("Insira o seu nome"),
    email: yup.string().required("Insira o seu email").email("email inválido"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(8, "No minimo 8 caracteres"),
    password_confirmation: yup
      .string()
      .oneOf([null, yup.ref("password")], "Senhas não coincidem"),
  })
  .required();
```

  
 ## Detalhamento do Código

### `nome`
- Deve ser uma **string**.
- **Obrigatório**: Este campo precisa ser preenchido.
- **Mensagem de erro**:
  - `"Insira o seu nome"`.

---

### `email`
- Deve ser uma **string**.
- **Obrigatório**: Este campo precisa ser preenchido.
- Deve estar no **formato de e-mail válido**.
- **Mensagens de erro**:
  - `"Insira o seu email"` (caso esteja vazio).
  - `"email inválido"` (caso não seja um formato válido).

---

### `password`
- Deve ser uma **string**.
- **Obrigatório**: Este campo precisa ser preenchido.
- Deve ter **no mínimo 8 caracteres**.
- **Mensagens de erro**:
  - `"Senha Obrigatória"`.
  - `"No mínimo 8 caracteres"`.

---

### `password_confirmation`
- Deve ser uma **string**.
- Deve ser igual ao campo **`password`**.
- **Mensagem de erro**:
  - `"Senhas não coincidem"`.

## Instalação

Instale o react hookform e 

```bash
npm install react-hook-form @hookform/resolvers yup

```
    
