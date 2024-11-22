import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./form.module.css";

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

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log("form submitted");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contentform}>
      <div className={styles.formgroup}>
        <input
          type="text"
          placeholder="Insira o seu nome"
          {...register("nome")}
          className={errors.nome ? `${styles.inputError}` : ""}
        />
        <span className={styles.labelerror}>{errors.nome?.message}</span>
      </div>
      <div className={styles.formgroup}>
        <input
          type="email"
          placeholder="Insira o seu email"
          {...register("email")}
          className={errors.email ? `${styles.inputError}` : ""}
        />
        <span className={styles.labelerror}>{errors.email?.message}</span>
      </div>
      <div className={styles.formgroup}>
        <input
          type="password"
          placeholder="Insira a sua senha"
          {...register("password")}
          className={errors.password ? `${styles.inputError}` : ""}
        />
        <span className={styles.labelerror}>{errors.password?.message}</span>
      </div>
      <div className={styles.formgroup}>
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("password_confirmation")}
          className={errors.password_confirmation ? `${styles.inputError}` : ""}
        />
        <span className={styles.labelerror}>
          {errors.password_confirmation?.message}
        </span>
      </div>
      <div className={styles.formgroup}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default App;
