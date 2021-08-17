import objection from "objection";
const { Model } = objection;

export class Video extends Model{
    static get tableName(){
        return 'video';
    }

}