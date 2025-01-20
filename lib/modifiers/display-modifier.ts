import { GameEntity, TGameEntity } from "../game-entity";

export interface IGameEntityModifier {
    name: string
    apply: (entity: TGameEntity) => void
}

export class DisplayModifier implements IGameEntityModifier {
    name: string = "Display Modifier";


    apply(entity: TGameEntity): void {
        entity.displayModifier = this;
    }

    // methodFromModifier(entity: GameEntity<any>): void {
    //     console.log("Method from DisplayModifier called on entity with id: ", entity.id);
    // }
}