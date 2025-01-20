import { GameEntity } from "../game-entity";

export interface IGameEntityModifier {
    name: string
    apply: (entity: GameEntity) => void
}

export class DisplayModifier implements IGameEntityModifier {
    name: string = "Display Modifier";

    apply(entity: GameEntity): void {
        entity.displayModifier = this;
    }
}