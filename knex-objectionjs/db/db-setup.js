import knex from 'knex';
import * as knexFile from "./knexfile.js";
import {Model} from "objection";

export default class DatabaseSetUp{
    setupDb(){
        const db = knex(knexFile.default.development);
        Model.knex(db);
    }
}
