import objection from "objection";
const { Model } = objection;

export class Channel extends Model{
     static get tableName(){
         return 'channel';
     }
}