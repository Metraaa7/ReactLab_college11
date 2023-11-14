import { useForm} from "react-hook-form";
import './App.css';

function App() {
    const {
      register,
      reset,
      formState: { errors },
      handleSubmit,
    } = useForm({
      mode: "onSubmit",
    });
  
    const onSubmit = (data) => {
      console.log(JSON.stringify(data));
      reset();
    };
    return (
      <div className="App">
        <h1>React Hook Form for IPZ</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Login:
            <input {...register("login", {
              pattern: {
                  value: /[A-Za-z]{1}/,
                  message:"русский военный корабль иди на..."
              }
          
            })} />
          </label>
          <div style={{ height: 40 }}>
          {errors?.login && (
            <p>{errors?.login?.message}</p>
          )}
          </div>
          <label>
            FirstName:
            <input {...register("firstName", {
              required: "Мінімальне значення 5",
              minLength: 5
            })} />
          </label>
          <div style={{ height: 40 }}>
          {errors?.firstName && (
            <p>Мінімальне значення символів - 5</p>
          )}
          </div>
           <label>
            LastName:
            <input {...register("lastName", {
              required: "Мінімальне значення 5",
              minLength: 5,
              maxLength: 25
            })} />
          </label>
          <div style={{ height: 40 }}>
          {errors?.lastName && (
            <p>Мінімальне значення символів - 5, максимальне - 25</p>
          )}
        </div>
          <input type="submit" />
        </form>
      </div>
    );
}

export default App;
