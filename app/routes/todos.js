import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        let todos = [
            {
                title: "Learn Ember",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            }
        ];
        return todos;
    }
});