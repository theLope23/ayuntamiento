const formatearFecha = fecha =>{
    const nuevaFecha = new Date(fecha).toUTCString()
    //toISOString().slice(0,10)
    const opciones= {
     weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric'
    }
 
    return new Date(nuevaFecha).toLocaleDateString('es-Es', opciones)
}

export {
    formatearFecha
}