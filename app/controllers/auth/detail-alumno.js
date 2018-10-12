import Controller from '@ember/controller';

export default Controller.extend({
	names: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],
	actions:{
		saveAlumno(alumno){
		alumno.save(); 
		},
		addAsignatura(model, asignatura){
			model.asignaturas.map((a) =>{
				console.log(a.nombre);
				console.log(a.creditos);
			});
			console.log(model.alumno.persona.curp);
		}
	}
});
