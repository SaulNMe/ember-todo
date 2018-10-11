import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		onAsignaturaDelete(asignatura){
			if(confirm("Are you sure")) asignatura.destroyRecord();	
		},
		addAsignatura(){
			let nombre = this.get('nombre');
			let creditos = this.get('creditos');
			let newAsignatura = this.store.createRecord('asignatura', {
				nombre: nombre,
				creditos: creditos
			}).save();
		}
	}
});
