import {CustomModel} from 'src/app/models/custom-models/custom-model';
import {TextModelField} from 'src/app/models/custom-models/text-model-field';

export class IdNameModel extends CustomModel {

    public fields = {
        name: new TextModelField({}),
        id: new TextModelField({})
    };

    constructor(id: string, name: string) {
        super();
        this.set('id', id);
        this.set('name', name);
    }
}
