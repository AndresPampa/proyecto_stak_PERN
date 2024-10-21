// import Input from "../components/ui/input";
// import {Card} from "../components/ui/card";
// import {Button} from "../components/ui/Button";
import {Button, Card, Input} from "../components/ui"
import {useForm} from "react-hook-form";

function RegisterPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = handleSubmit((data) =>{
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh - 64px)] flex items-center justify-center">
      
      <Card>
        <h3 class="text-2xl font-bold">RegisterPage</h3>
        <form onSubmit={onSubmit}>
          <Input placeholder="Ingrese su nombre"
          {... register("name", {required:true})}></Input>

          {
            errors.name && <spam className="text-red-500">Este Campo es requerido</spam>
          }

          <Input type="email" placeholder="Ingrese su Email"
          {... register("email", {required:true})}></Input>

          {
            errors.email && <spam className="text-red-500">Este Campo es requerido</spam>
          }

          <Input type="password" placeholder="Ingrese su Contraseña"
          {... register("password", {required:true})}></Input>
          {
            errors.password && <spam className="text-red-500">Este Campo es requerido</spam>
          }
          <Button>Registrarse</Button>
      </form>
      </Card>
    </div>
  )
}

export default RegisterPage