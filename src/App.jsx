import "./App.css";
import Home from "./Home";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const umail = "jasmine@gmail.com";
  const upass = "1234";
  const onSubmit = (data) => {
    console.log(data);
    if (data.email !== umail || data.password !== upass) {
      alert("Invalid email or password");
    } else {
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Login to your Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>Email is required</p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Password is required</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
