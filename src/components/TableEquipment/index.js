import React,{useState} from 'react';
import {Grid} from "@material-ui/core"
import {Table} from "./styles"
import {FaTrash} from "react-icons/fa"
import {toast} from "react-toastify"

import api from "../../services/api"

export default function TableEquipment({equipments, typeAction}) {

  const removeEquipment = async (id) => {

    const token = localStorage.getItem('@register:token');

    try{
        await api.delete(`equipment/${id}`, {headers: {
            Authorization: `Bearer ${token}`,
        }})
        toast.success("Equipamento Excluído com sucesso!")
        setTimeout(function() {
          window.location.reload()
        }, 3000)
    } catch(error){
        const { response } = error;
        const { request, data, ...errorObject } = response;
        toast.error(data.error)
    }
  }

  return (
    <Grid item container xs={12} lg={12} xs={12} justify="center" style={{bottom:'10px',overflow:'auto', padding: '10px 0px'}}>
      <Grid item xs={12} lg={10} sm={10} >
        <Table>
        <thead>
            <tr>
              <th>Nome</th>
              <th>Código</th>
              <th>Cor</th>
              <th>Proprietário</th>
              <th>Registro</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map(equipment => (
              <tr key={equipment.id}>
                <td>{equipment.name}</td>
                <td>{equipment.code}</td>
                <td>{equipment.color}</td>
                <td>{equipment.owner}</td>
                <td>{equipment.active == true ? 'Ativo' : 'Desativado'}</td>
                <td><button disabled= {typeAction == 'index' ? true : false} 
                        style={{border: 'none', backgroundColor:'transparent'}}
                        onClick={() => removeEquipment(equipment.id)}><FaTrash size={20}/>
                    </button></td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Grid>
    </Grid>
  )

}