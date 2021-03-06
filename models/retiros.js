
const mongoose = require('mongoose') // requerimos mongoose

const passportLocalMongoose = require('passport-local-mongoose')

const moment = require('moment') // libreria moments
moment.locale('es') // traducir moments de inglés a español

const collection = 'retiros' // creamos una colección llamada retiros
const RetiroSchema = new mongoose.Schema({
// Creamos la base de datos y especificamos los campos con sus tipos
  owner: {type: String, required: false},
  category: { type: String, default: 'retiro' },
  title: String,
  mision: String,
  imageUrl: { type: String, default: 'http://www.hsmq.cl/blog/wp-content/uploads/imagenes/img_no_disponible.jpg', required: false },
  road: String,
  lat: Number,
  long: Number,
  comunity: String,
  localitation: String,
  createdEvent: { type: String, default: moment().format('L')},
  hourEvent: { type: String, default: moment().format('LT')},
  startDate: String,
  timeHourStart: Number,
  timeMinuteStart: Number,
  endDate: String,
  timeHourEnd: Number,
  timeMinuteEnd: Number,
  description: String,
  Service: Boolean,
  price: Number,
  tel: Number,
  web: String,
  tags: String
}, { collection })

RetiroSchema.virtual('imageurl').get(function () {
  if (this.imageUrl === undefined) {
    let cosita = '/public/img/nodisponible.jpg'
    return cosita
    console.log(cosita)
  }
  return this.imageUrl
})
RetiroSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('retiros', RetiroSchema)
// exportamos el modelo creado de la base de datos + coleccion
