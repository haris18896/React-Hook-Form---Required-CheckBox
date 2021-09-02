import './App.css';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers";

function App() {
  // form validationRules
  const validationSchema = Yup.object().shape({
    acceptTerms: Yup.bool()
    .oneOf([true], 'Accept Ts & Cs  is Required')
  });

  // functions to build form returned by useForm() hook
  const {register, handleSubmit, reset, errors} = useForm(
    {
      resolver: yupResolver(validationSchema)
    }
  );

  const onSubmit = data => {
    alert(`Success!!! :-\n\n`, JSON.stringify(data, null, 4));
  }

  return (
    <div className="App">
      <h5 className="card-header">React - Required CheckBox with React Hook Form</h5>
      <div className="card-body">
        <form 
        onSubmit={handleSubmit(onSubmit)}
         onReset={reset}
         >
          <div>
              <input
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                ref={register}
                className={`form-check-input ${errors.acceptTerms ? 'isInvalid' : ''}`}
              />
              <label className="form-check-label" for="acceptTerms">Accept Terms & conditions</label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-1">Register</button>
            <button type="reset" className="btn btn-secondary">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
