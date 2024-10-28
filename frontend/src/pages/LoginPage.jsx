import { Card, Input, Button, Label} from "../components/ui";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit((data) =>{
    console.log(data);
  })


  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
        <Card>
          <h1 className="text-4xl font-bold my-2 text-center">Iniciar Sesion</h1>
          <form onSubmit={onSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Ingrese su email" {...register("email", {require: true})}></Input>
            <Label htmlFor="contraseña">Contraseña</Label>
            <Input type="password" placeholder="Ingrese su contraseña" {...register("password", {require: true})}></Input>
            <Button>Ingresar</Button>
          </form>
          <div className="flex justify-between my-4">
            <p>¿No tienes Cuenta?</p>
            <Link to="/register">Registrate</Link>
          </div>
        </Card>
    </div>
  )
}

export default LoginPage