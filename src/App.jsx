import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    handleInputChange,
    values,
    formState: { error },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <p> Log in to your account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
