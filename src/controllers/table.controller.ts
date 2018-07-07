import {TableService} from './../services/table.service';

export class TableController {

    private table: TableService;

    constructor() {
        this.table = new TableService();
    }

    public createTables(): void {
        
        this.table.initTables();
    }

}