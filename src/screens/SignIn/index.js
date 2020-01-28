import React,{useEffect, useState} from 'react';
import * as Yup from "yup"

import {Form, Input} from "@rocketseat/unform"
import logo from "../../assets/logo-icon.png"
import ufal from "../../assets/ufal.png"
import { Wrapper, Content } from '../../screens/_layouts/default';

//validação dos dados do form
const schema = Yup.object().shape({
  email: Yup.string('E-mail Inválido')
  .required('E-mail obrigatório'),
  password: Yup.string().required("Senha Obrigatória")
})

function handleSubmit(data){
    console.log(data)
}

export default function SignIn() {
    const [loading, setLoading] = useState(false)

  return (
    <>
    <Wrapper>
        <Content>
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
