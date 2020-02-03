import React, {useState, useEffect} from 'react';
import * as Yup from "yup"

import {Link} from "react-router-dom"
import {Form, Input} from "@rocketseat/unform"
import Header from "../../components/Header"
import {toast} from "react-toastify"

import logo from "../../assets/logo-icon.png"
import ufal from "../../assets/ufal.png"
import api from "../../services/api"

import { Wrapper, Content } from './styles';

//validação dos dados do form
const schema = Yup.object().shape({
  first_name: Yup.string(),
  last_name: Yup.string(),
  registration: Yup.string(),
  office: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string(),
  //field refere-se ao password
  password: Yup.string().when('oldPassword', (oldPassword, field) => 
      oldPassword ? field.required() : field
  ),
  //Yup.ref -> garante que confirmPassword sejá igual ao password
  confirmPassword: Yup.string().when('password', (password, field) => 
      password ? field.required().oneOf([Yup.ref('password')]) : field
  )
})

export default function EditProfile() {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})

    const initialData = {
      first_name: user.first_name, 
      last_name: user.last_name, 
      cpf: user.cpf, 
      registration:user.registration,
      email:user.email , 
      office:user.office
  }

    async function handleSubmit(data){
      const user = localStorage.getItem('@register:user')
      const {id} = JSON.parse(user)
      const token = localStorage.getItem('@register:token');

      if(data.oldPassword == "" || data.confirmPassword == "" || data.password == ""){
          delete data.oldPassword; 
          delete data.confirmPassword; 
          delete data.password; 
      }

      try {
          await api.put(`users/${id}`, data, {headers: {
              Authorization: `Bearer ${token}`,
          }})
          toast.success("Dados Atualizados")
          setTimeout(()=> {window.location.reload()}, 3000)
      } catch(error){
        const { response } = error;
        const { request, data} = response;
        setLoading(false)
        toast.error(data.error)
      }
    }

    const loadUser = async (token, id) => {
      const {data} = await api.get(`users/${id}`, {headers: {
        Authorization: `Bearer ${token}`}})
        setUser(data)
    }

    useEffect(()=> {
      const token = localStorage.getItem('@register:token');
      const user = localStorage.getItem('@register:user')
      const {id} = JSON.parse(user)

      loadUser(token, id)
    },[])

  return (
    <>
        <Header />
        <Wrapper>
            <Content>
                <div >
                    <img src={logo} alt="Register" style={{width: "110px", height:'80px', paddingRight: '30px'}}/> 
                    <img src={ufal} alt="UFAL" style={{width: "60px", height:'80px'}}/> 
                </div>
                <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
                    <div>
                      <Input name="first_name" placeholder="Primeiro Nome" />
                      <Input name="last_name" placeholder="Último Nome" />
                    </div>
                    <div>
                      <Input name="cpf" placeholder="CPF" />
                      <Input name="registration" placeholder="Registro" />
                    </div>
                    <div>
                      <Input name="email" type="email" placeholder="Seu e-mail" />
                      <Input name="office" placeholder="Cargo" />
                    </div>
                    <div>
                      <Input name="oldPassword" type="password" placeholder="Senha atual" />
                      <Input name="password" type="password" placeholder="Senha nova" />
                    </div>
                    <div>
                      <Input name="confirmPassword" type="password" placeholder="Confirme sua senha" />
                      <button type="submit">{loading ? "Carregando..." : "Atualizar"}</button>
                    </div>
                     
                    <Link to="/register">Agendar Equipamento</Link>
                </Form>
            </Content>
            
      </Wrapper>
    </>
  );
}
