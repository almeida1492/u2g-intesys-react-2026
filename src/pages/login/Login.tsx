import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import globalStyles from "../../globals.module.css";
import { authApi, userApi } from "../../services";
import styles from "./login.module.css";

export const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required field"),
      password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Required field"),
    }),
    onSubmit: async (values) => {
      try {
        console.log("values: ", values);
        const response = await authApi.login({
          loginRequest: values,
        });
        if (!response.token) {
          throw new Error("No token received");
        }
        localStorage.setItem("token", response.token);
        navigate("/");
      } catch (error) {
        console.error("Login failed", error);
      }
    },
  });

  return (
    <main className={`${globalStyles.main} ${styles.loginContainer}`}>
      <div>
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
          <div className={styles.textField}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="username"
              id="username"
              type="text"
              required
            ></input>
            {formik.errors.username && (
              <p style={{ color: "red" }}>{formik.errors.username}</p>
            )}
          </div>
          <div className={styles.textField}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              name="password"
              id="password"
              required
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};
