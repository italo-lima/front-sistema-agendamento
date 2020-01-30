import React,{useState} from 'react';
import * as Yup from "yup"

import {toast} from "react-toastify"
import {Form, Input} from "@rocketseat/unform"
import logo from "../../assets/logo-icon.png"
import ufal from "../../assets/ufal.png"
import { Wrapper, Content } from '../../screens/_layouts/default';
import history from "../../services/history"
import {Grid, Typography} from "@material-ui/core"

import api from "../../services/api"

//validação dos dados do form
const schema = Yup.object().shape({
  email: Yup.string('E-mail Inválido')
  .required('E-mail obrigatório'),
  password: Yup.string().required("Senha Obrigatória")
})

export default function SignIn() {
    const [loading, setLoading] = useState(false)

    async function handleSubmit(values){
      try {
        setLoading(true)

        const response = await api.post('sessions', values);

        localStorage.setItem('@register:token', response.data.token);
        localStorage.setItem('@register:user', JSON.stringify(response.data.user));
        setLoading(false);
        history.push('/initial')
      } catch(e){
        setLoading(false);
        toast.error(JSON.stringify(e))
      }
  }

  return (
    <>
    <Wrapper>
        <Content>
            <Grid>
              <Typography>Bem vindo ao Register</Typography>
              <Typography variant="h6">Faça seu login!</Typography>
            </Grid>

            <div>
                <img src={logo} alt="Register" style={{width: "110px", height:'80px', paddingRight: '30px'}}/> 
                <img src={ufal} alt="UFAL" style={{width: "60px", height:'80px'}}/> 
            </div>

            <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Seu e-mail" />
            <Input name="password" type="password" placeholder="Sua senha" />

            <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
            </Form>
        </Content>
    </Wrapper>
    </>
  );
}
