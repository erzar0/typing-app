/* eslint-disable quotes */
import style from "../Form.module.css";
import { Field, Form } from "react-final-form";
import authService from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const usernameRequirements = `Username must be 3-16 characters long, contain only alphanumeric symbols, - and _`;
const usernameRegex = /^[A-z0-9_-]{3,16}$/;
const passwordRequirements = `Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number`;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Register = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password, email } = values;
    try {
      await authService.register({ username, password, email });
      navigate("/");
      toast.success("Registration succeeded!");
    } catch (e) {
      toast.error("Registration failed!");
      console.log(e.message);
    }
  };
  const validate = (values) => {
    const { username, password, confirm, email } = values;
    let errors = {};

    if (!username) {
      errors.username = "Required";
    } else if (!usernameRegex.test(username)) {
      errors.username = usernameRequirements;
    }

    if (!password) {
      errors.password = "Required";
    } else if (!passwordRegex.test(password)) {
      errors.password = passwordRequirements;
    }

    if (!confirm) {
      errors.confirm = "Required";
    } else if (password !== confirm) {
      errors.confirm = "Passwords must match";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email";
    }
    console.log(errors);

    return errors;
  };
  const InputError = ({ meta }) => {
    if (meta.error && meta.touched) {
      return <span className={style.InputMessage}>{meta.error}</span>;
    }
    return null;
  };
  return (
    <div className={style.FormContainer}>
      <h1>Register</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label className={style.InputLabel}>Username</label>
                    <input
                      {...input}
                      className={style.InputField}
                      type="text"
                      placeholder="Username"
                    ></input>
                    <InputError meta={meta} />
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label className={style.InputLabel}>Password</label>
                    <input
                      {...input}
                      className={style.InputField}
                      type="password"
                      placeholder="Password"
                    ></input>
                    <InputError meta={meta} />
                  </div>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <div>
                    <label className={style.InputLabel}>Confirm</label>
                    <input
                      {...input}
                      className={style.InputField}
                      type="password"
                      placeholder="Confirm"
                    ></input>
                    <InputError meta={meta} />
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <label className={style.InputLabel}>Email</label>
                    <input
                      {...input}
                      className={style.InputField}
                      type="text"
                      placeholder="Email"
                    ></input>
                    <InputError meta={meta} />
                  </div>
                )}
              </Field>
            </div>
            <button className={style.SubmitButton} type="submit">
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default Register;
