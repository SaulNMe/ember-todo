import Controller from '@ember/controller';
export default Controller.extend({
	actions:{
		onAlumnoDelete(alumno){
			if(confirm("Are you sure")) alumno.destroyRecord();
		},
		addAlumno(){
			let nombre = this.get('nombre');	
			let apaterno = this.get('apaterno');	
			let amaterno = this.get('amaterno');	
			let curp = this.get('curp');	
			let matricula = this.get('matricula');
			let newPersona = this.store.createRecord('persona', {
				nombre: nombre,
				apellidoPaterno: apaterno,
				apellidoMaterno: amaterno,
				curp: curp
			});
			let newAlumno = this.store.createRecord('alumno', {
				matricula: matricula,
				persona: newPersona
			});
			newPersona.save().then(() => newAlumno.save());

			this.set('nombre', '');
			this.set('apaterno', '');
			this.set('amaterno', '');
			this.set('curp', '');
			this.set('matricula', '');
		}
	}
});
