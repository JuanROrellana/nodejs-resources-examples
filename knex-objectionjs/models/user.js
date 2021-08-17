import objection from "objection";
const { Model } = objection;

export class User extends Model{
    static get tableName(){
        return 'user';
    }
}