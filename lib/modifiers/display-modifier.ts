import { GameEntity } from "../game-entity";

export interface IGameEntityModifier {
    applyTo: (entity: any) => void
}

export class DisplayModifier implements IGameEntityModifier {
    name: string = "Display Modifier";

    applyTo(entity: any): void {
        Object.assign(entity, this)
    }
    // apply(entity: GameEntity<[DisplayModifier]>): void {
    //     entity.displayModifier = this;
    // }
}