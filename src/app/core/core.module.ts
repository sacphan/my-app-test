import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroService, MessageService } from "./services";

@NgModule({
    imports:[CommonModule],
    providers:[
        HeroService,
        MessageService
    ],
    declarations:[]
})
export class CoreModule{};
