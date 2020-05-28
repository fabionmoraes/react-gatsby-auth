import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { navigate } from 'gatsby';
import SEO from '../../components/seo';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { signInRequest } from '../../store/modules/auth/actions';

import { View, LoginView } from './styles';

export default function Login() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  if (profile) {
    navigate('app/profile');
  }

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email) {
      toast.error('Por favor! preencha o email.')
      return;
    }

    if (!form.password) {
      toast.error('Por favor! preencha a sua senha.')
      return;
    }

    const email = form.email;
    const password = form.password;

    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <SEO title="Login" />
      <View>
        <LoginView>
          <form
            method="post"
            onSubmit={e => handleSubmit(e)}
          >
            <h3>Faça seu Login</h3>

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <TextField
              id="outlined-basic"
              type="password"
              label="Senha"
              variant="outlined"
              name="password"
              onChange={e => setForm({ ...form, password: e.target.value })}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              {loading ? (
                'Carregando...'
              ) : (
                'Acessar minha conta'
              )}
            </Button>

            <div className="separa">OU</div>

            <Button variant="contained" color="secondary">
              Cadastrar uma Conta
            </Button>

          </form>
        </LoginView>
      </View>
    </>
  );
}
