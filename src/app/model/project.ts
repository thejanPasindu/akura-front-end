export class Project {
    constructor(
        
        public project_name: String,
        public project_manager_id: Number,
        public project_coordinator1: Number,
        public project_coordinator2: Number,
        public start_date: Date,
        public end_date: Date,
        public location: String,
        public project_type: String,
        public description: String,
        public district: Number,
        public city: String,
        public addres_line_1: String,
        public addres_line_2?: String,
        public zip? : Number,
         //*/

    ){}
}
