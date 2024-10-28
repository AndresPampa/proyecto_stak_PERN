// import Input from "../components/ui/input";
// import {Card} from "../components/ui/card";
// import {Button} from "../components/ui/Button";
// import { json, response } from "express";
import {Button, Card, Input, Label} from "../components/ui"
import {useForm} from "react-hook-form";
import axios from "axios"
import { Link } from "react-router-dom";

function RegisterPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = handleSubmit(async(data) =>{
      const res = await axios.post("http://localhost:3000/api/signup", data, {
        withCredentials: true,
      });
      console.log(res);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      
      <Card>
        <h3 className= "text-4xl font-bold my-2">Registro</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input placeholder="Ingrese su nombre"
          {...register("name", {required:true})}></Input>

          {
            errors.name && <p className="text-red-500">Este Campo es requerido</p>
          }
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su Email"
          {...register("email", {required:true})}></Input>

          {
            errors.email && <p className="text-red-500">Este Campo es requerido</p>
          }
          <Label htmlFor="contraseña">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su Contraseña"
          {...register("password", {required:true})}></Input>
          {
            errors.password && <p className="text-red-500">Este Campo es requerido</p>
          }
          <Button>Registrarse</Button>
      </form>
      <div className="flex justify-between my-4 gap-1">
            <p>¿Ya Tienes una Cuenta?</p>
            <Link to="/login">Iniciar Sesion</Link>
        </div>
      </Card>
    </div>
  )
}

export default RegisterPage