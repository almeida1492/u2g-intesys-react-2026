import { useEffect, useState } from "react";
import styles from "./login.module.css";
import globalStyles from "../../globals.module.css";
import { Link, useNavigate, useParams } from "react-router";

export const Login = ({ goToProjects }: { goToProjects: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // We're pretending that we've got a token from the server and that the login was successful;
  //       goToProjects();
  //     });
  // };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      //       fetch("https://jsonplaceholder.typicode.com/users")
      //       .then((res) => {
      //         localStorage.setItem("token", "fakeToken");
      //         return res.json();
      //       })
      //       .then((data) => {
      //         // We're pretending that we've got a token from the server and that the login was successful;
      //         navigate("/");
      // >>>>>>> origin
      //       });

      if (res.status === 200) {
        goToProjects(); // 👉 App monte Dashboard
      } else {
        alert("Login échoué");
      }
    } catch (err) {
      alert("Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`${globalStyles.main} ${styles.loginContainer}`}>
      <div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.textField}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
              type="text"
              required
            ></input>
          </div>
          <div className={styles.textField}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="password"
              id="password"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Connexion..." : "Login"}
          </button>
          {/* <button type="submit">Login</button> */}
        </form>
      </div>
    </main>
  );
};
