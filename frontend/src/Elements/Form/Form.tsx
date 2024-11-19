import React from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import styles from './Form.module.scss'

type FormValues = {
    name:string,
    phone:string,
    email:string
}

const Form:React.FC = () =>{
    const {register,handleSubmit,formState:{errors}} = useForm<FormValues>()

    const onSubmit:SubmitHandler<FormValues>=(data)=>{
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" />
            </div>
        </form>
    )
}

export default Form