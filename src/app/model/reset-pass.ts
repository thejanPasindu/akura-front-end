export class ResetPass {
    constructor(
        public email: String,
        public password? : String,
        public password_confirmation? : String,
        public token? : String
    ) {}
}
