import React,{useState} from 'react';
import {Grid} from "@material-ui/core"
import {Table} from "./styles"
import {FaTrash} from "react-icons/fa"
import {toast} from "react-toastify"
import history from "../../services/history"

import api from "../../services/api"

export default function TableUser({users, userOn,typeAction}) {

  const removeUser = async (id) => {

    const token = localStorage.getItem('@register:token');

    try{
        await api.delete(`users/${id}`, {headers: {
            Authorization: `Bearer ${token}`,
        }})
        toast.success("Usuário Excluído com sucesso!")
        
        setTimeout(function() {
          if(id == userOn){
            localStorage.removeItem('@register:token');
            localStorage.removeItem('@register:user');
            history.push('/')
          } else {
            
            window.location.reload()
          }
        }, 3000)
    } catch(e){
        toast.error("Erro ao excluir usuário")
    }
  }

  return (
    <Grid item container xs={12} lg={12} xs={12} justify="center" style={{bottom:'10px',overflow:'auto', padding: '10px 0px'}}>
      <Grid item xs={12} lg={10} sm={10} >
        <Table>
        <thead>
            <tr>
              <th>Primeiro Nome</th>
              <th>Segundo Nome</th>
              <th>E-mail</th>
              <th>Registro</th>
              <th>Cargo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.registration}</td>
                <td>{user.office}</td>
                <td><button disabled= {typeAction == 'index' ? true : false} 
                        style={{border: 'none', backgroundColor:'transparent'}}
                        onClick={() => removeUser(user.id)}><FaTrash size={20}/>
                    </button></td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Grid>
    </Grid>
  )

}