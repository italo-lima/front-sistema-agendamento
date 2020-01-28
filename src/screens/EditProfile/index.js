import React, {useState, useEffect} from 'react';
import * as Yup from "yup"

import {Link} from "react-router-dom"
import {Form, Input} from "@rocketseat/unform"

import logo from "../../assets/logo-icon.png"
import ufal from "../../assets/ufal.png"

import { Wrapper, Content } from '../../screens/_layouts/default';

//validação dos dados do form
const schema = Yup.object().shape({
  full_name: Yup.string()
  .required("Nome Completo Obrigatório"),
  email: Yup.string('E-mail Inválido')
  .required('E-mail obrigatório'),
  password: Yup.string()
  .min(6, 'Mínimo 6 caracteres')
  .required("Senha Obrigatória")
})

export default function EditProfile() {

    const [loading, setLoading] = useState(false)

    function handleSubmit(data){
        console.log(data)
    }

  return (
    <>
        <Wrapper>
            <Content>
                <div>
                    <img src={logo} alt="Register" style={{width: "110px", height:'80px', paddingRight: '30px'}}/> 
                    <img src={ufal} alt="UFAL" style={{width: "60px", height:'80px'}}/> 
                </div>
                <Form schema={schema} onSubmit={handleSubmit}>
                    <Input name="first_name" placeholder="Primeiro Nome" />
                    <Input name="last_name" placeholder="Último Nome" />
                    <Input name="registration" placeholder="Registro" />
                    <Input name="email" type="email" placeholder="Seu e-mail" />
                    <Input name="office" placeholder="Cargo" />

                    <button type="submit">Atualizar</button>
                    <Link to="/register">Agendar Equipamento</Link>

                </Form>
            </Content>
      </Wrapper>
    </>
  );
}
