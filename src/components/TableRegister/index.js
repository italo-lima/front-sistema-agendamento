import React,{useEffect, useState} from 'react';
import {Grid} from "@material-ui/core"
import {Table} from "./styles"
import {FaTimesCircle} from "react-icons/fa"
import {toast} from "react-toastify"
import {format, parseISO} from "date-fns"

import api from "../../services/api"

export default function TableRegister({registers, typeAction}) {

    const [regist, setRegist] = useState([])

  const cancelRegister = async (id) => {

    const token = localStorage.getItem('@register:token');

    try{
        await api.delete(`register/${id}`, {headers: {
            Authorization: `Bearer ${token}`,
        }})
        toast.success("Registro Cancelado com sucesso!")
        setTimeout(function() {
          window.location.reload()
      }, 3000)
    } catch(e){
        toast.error("Existe registro nesse horário para este equipamento")
    }
  }

  useEffect(() => {
      const objUser = []
      const registerActive = registers.filter(el => el.canceled_at == null && el)

      registerActive && registerActive.forEach(el => {
        var id = el.id
        var di = el.date_initial
        var diParse = parseISO(di)
        var df = el.date_final
        var dfParse = parseISO(df)
        var date_initial = format(diParse, "dd/MM/yyyy - kk:mm:ss")
        var date_final = format(dfParse, "dd/MM/yyyy - kk:mm:ss")
        var name = el.user.first_name + ' ' + el.user.last_name
        var equip = el.equipment.name + '-' + el.equipment.code
        objUser.push({id, name, date_initial, date_final, equip})
      });
      setRegist(objUser)
  }, [])

  return (
    <Grid item container xs={12} lg={12} xs={12} justify="center" style={{bottom:'10px',overflow:'auto', padding: '10px 0px'}}>
      <Grid item xs={12} lg={10} sm={10} >
        <Table>
            
         <thead>
            <tr>
              <th>Nome</th>
              <th>Data Inicial</th>
              <th>Data Final</th>
              <th>Equipamento</th>
              <th>Cancelar Registro</th>
            </tr>
          </thead>
          <tbody>
            {regist.map(el => (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.date_initial}</td>
                <td>{el.date_final}</td>
                <td>{el.equip}</td>
                <td><button disabled= {typeAction == 'index' ? true : false} 
                        style={{border: 'none', backgroundColor:'transparent'}}
                        onClick={() => cancelRegister(el.id)}><FaTimesCircle size={20}/>
                    </button></td>
            </tr>
            ))}
          </tbody>
            </Table>
      </Grid>
    </Grid>
  )
}