import { solicitud } from "../modelos/solicitudModelo.js"

const crear = (req,res)=>{

    if(!req.body.mascota_id){
        res.status(400).send({
            mensaje: "La id de Mascota no puede estar vacio."
        });
        return;
    }
    if(!req.body.adoptante_id){
        res.status(400).send({
            mensaje: "La id de adoptante no puede estar vacio."
        });
        return;
    }

    const dataset={
        adoptante_id: req.body.adoptante_id,
        mascota_id: req.body.mascota_id
    }

    solicitud.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro para Solicitud de Adopción Creado con Exito"
        });
    }).catch((err)=>{
        res.status(500).json({
            mensaje:`Registro de Solicitud No creado ::: id del adoptante= ${adoptante_id} e id de la mascota= ${mascota_id} ::: ${err} `
        });
    });

};

const buscar = (req, res) => {
    solicitud.findAll().then((resultado)=>{
        res.status(200).json({resultado});
    }).catch((err)=> {
        res.status(500).json({
            mensaje: `No se encontraron solicitudes ::: ${err}`
        });
    });
};

const buscarId = (req, res) => {
    const id = req.params.id;
    if(id == null){
        res.status(400).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }else{
        solicitud.findByPk(id).then((resultado)=>{
            res.status(200).json({resultado});
        }).catch((err)=> {
            res.status(500).json({
                mensaje: `No se encontro la solicitud ::: ${err}`
            });
        });
    }
    
};

const actualizar = (req, res) => {
    const id = req.params.id;
    if (!req.body.adoptante && !req.body.mascota) {
        res.status(400).json({
            mensaje: `No se encontraron datos de solicitud para actualizar`
        });
        return;
    }
    const adoptante = req.body.adoptante;
    const mascota = req.body.mascota;

    solicitud.update({adoptante,mascota},{where:{id}}).then((resultado)=> {
        res.status(200).json({
            tipo: 'succes',
            mensaje: 'Solicitud actualizada'
        });
    }).catch((err)=> {
        res.status(200).json({
            tipo: 'error',
            mensaje: `Error al actualizar solicitud ::: ${err}`
        });
    });
};


const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
      res.status(203).json({
        message: "Debe ingresar un ID!",
      });
      return;
    }
    solicitud.destroy({ where: { id: id } })
      .then((result) => {
        res.status(200).json({
            tipo: 'success',
            mensaje: `Solicitud con id ${id} Eliminado Correctamente`
        });
      })
      .catch((err) => {
        res.status(500).json({
            tipo: 'error',
            mensaje: `Error al eliminar Solicitud ::: ${err}`
        });
      });
  };


export { crear, buscar, buscarId, actualizar, eliminar };