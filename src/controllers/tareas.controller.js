import {pool} from "../db.js"

export const listarTareas = async(req, res) =>{
    console.log(req.usuarioId)
    // console.log(req.headers);
    const resultado = await pool.query('SELECT * FROM tareas');
    return res.json(resultado.rows)

};

export const listarTarea = async(req,res) => {
    const resultado = await pool.query('SELECT * FROM tareas WHERE id = $1', [req.params.id]);
    if(resultado.rowCount === 0){
        return res.status(404).json({
            message: "La tarea no existe"
        });
    }
    return res.json(resultado.rows[0]);
};


export const crearTarea = async(req, res, next) => {
    const {titulo, descripcion} = req.body;

    try{
        const result = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2) RETURNING *', [titulo, descripcion]);
        res.json(result.rows[0]);
        console.log(result.rows[0]);
    }catch(error) {
        if(error.code === '23505'){
            return res.status(409).json({
                message: 'Ya existe una tarea con ese titulo'
            });
        }
        console.log(error);
        next(error);
    };

};

export const actualizarTarea = async(req, res) => {
    const {titulo, descripcion} = req.body;
    const id = req.params.id;
    const resultado = await pool.query('UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3 RETURNING *', [titulo, descripcion, id]);
    if(resultado.rowCount === 0){
        return res.status(404).json({
            message: "La tarea no existe"
        });

    };
    return res.json(resultado.rows[0]);
}

export const eliminarTarea = async(req, res) => {
    const resultado = await pool.query('DELETE FROM tareas WHERE id = $1', [req.params.id]);
    if(resultado.rowCount === 0){
        return res.status(404).json({
            message: "La tarea a eliminar con ese id no existe"
        });
    };
    return res.sendStatus(204);
};