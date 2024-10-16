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
      <div className="container">
        <h2> Log in to your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            required
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default App;
