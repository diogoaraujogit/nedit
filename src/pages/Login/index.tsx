import React, { useContext, useEffect, useState } from 'react';
import * as formik from 'formik';
import * as yup from 'yup';
import { BiUserCircle } from 'react-icons/bi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Container,
  Content,
  IconInput,
  LoginContent,
  LoginFormArea,
  LoginLogo,
  SideLoginLogo,
  Version,
} from './styles';
import logoInovaWhite from '../../assets/logoInovaWhite.svg';
import neditWhite from '../../assets/neditWhite2.png';
import { AuthContext } from '../../contexts/AuthContext';
// import ThemeToggle from '../../components/ThemeToggle';
import api from '../../services/api';
import Loading from '../../components/Loading';
import useIntl from '../../hooks/useIntl';
import { handleLoginCall } from '../../utils/handleError';

interface FormValues {
  user?: string;
  password?: string;
  message?: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { Formik } = formik;
  const history = useHistory();
  const { login, logout } = useContext(AuthContext);
  const intl = useIntl();

  const schema = yup.object({
    user: yup.string().required('usuário é obrigatório'),
    password: yup.string().required('senha é obrigatória'),
  });

  const handleLogin = async (
    { user, password }: FormValues,
    { setErrors }: any,
  ) => {
    setLoading(true);
    setErrors({ message: '' });

    try {
      const response = await api.post('/auth/get-token', {
        username: user,
        password,
      });

      if (response.data) {
        const { token } = response.data;
        const userResponse = response.data.user;
        const { username } = userResponse;
        login({ token, username });
        history.push('dashboard');
      }
    } catch (e) {
      const error = handleLoginCall(
        e,
        intl.networkError,
        intl.loginError,
        intl.serverError,
      );

      setErrors({ message: error });
      toast.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <Container>
      <Content>
        <SideLoginLogo>
          <img src={logoInovaWhite} alt="Inova" />
        </SideLoginLogo>
        <LoginContent>
          <LoginLogo>
            <img src={neditWhite} alt="Inova" />
          </LoginLogo>
          <LoginFormArea>
            <Formik
              onSubmit={handleLogin}
              initialValues={{}}
              validationSchema={schema}
              validateOnChange={false}
            >
              {({ handleSubmit, handleChange, errors }) => {
                const message = errors?.message;
                const userError = errors?.user;
                const passwordError = errors?.password;

                return (
                  <form onSubmit={handleSubmit}>
                    <h4>{message}</h4>
                    <div>
                      <IconInput error={!!userError}>
                        <input
                          name="user"
                          onChange={handleChange}
                          placeholder={intl.username}
                        />
                        <BiUserCircle />
                      </IconInput>
                      <span>{userError}</span>
                    </div>
                    <div>
                      <IconInput error={!!passwordError}>
                        <input
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          onChange={handleChange}
                          placeholder={intl.password}
                        />
                        {showPassword ? (
                          <BsEyeSlash
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <BsEye
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </IconInput>
                      <span>{passwordError}</span>
                    </div>
                    {/* <p className="forgot-password">{intl.forgotPassword}</p> */}
                    <button disabled={loading} type="submit">
                      {intl.logIn} {loading && <Loading />}{' '}
                    </button>
                  </form>
                );
              }}
            </Formik>
          </LoginFormArea>
          {/* <ThemeToggle /> */}
          <Version>Versão: 0.9.5 - 2022</Version>
        </LoginContent>
      </Content>
    </Container>
  );
};

export default Login;
