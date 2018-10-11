import Component from '@ember/component';

export default Component.extend({
	query: null,
	method: null,
	didInsertElement () {
		let clase = this.get('query');
		let method = this.get('method');

		$(clase)[method]();
	},
	onInsertAlumno(model, nombre, apaterno, amaterno, curp, matricula){
		//override me...
	},
	onInsertAsignatura(nombre, creditos){
		//override me...
	},
	onSaveAlumno(alumno){
		//override me...
	},
	actions:{
		addAlumno(model, nombre, apaterno, amaterno, curp, matricula){
			this.onInsertAlumno(model, nombre, apaterno, amaterno, curp, matricula);	
		},
		addAsignatura(nombre, creditos){
			this.onInsertAsignatura(nombre, creditos);
		},
		saveAlumno(alumno){
			this.onSaveAlumno(alumno);
		}
	}
});
