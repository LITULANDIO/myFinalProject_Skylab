const Instructor = require('../../../../models/instructores') // llamamos al modelo --> colección retiros

module.exports = (req, res) => {
// {se le denomina deconstrucción}
  const { id } = req.body // -
  console.log(id)
  Instructor.findByIdAndRemove(id) // hacemos la consulta directamente eliminando por el id, así nos aseguramos el completo borrado
    .then(instructores => { // => siginifica arrow functions --> característica de es2015
    				   // El método then es un método que define otra función
    				   // Una promesa Nos permite encapsular una operación futura, como si se tratara de una operación asíncrona.
      console.log(`instructor BORRADO: ` + id) // comprovaciones
      res.status(200).json(instructores) // estado 200 significa todo ok
    })
}

