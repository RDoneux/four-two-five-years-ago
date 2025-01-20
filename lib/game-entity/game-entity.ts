import { UUID } from "crypto";
import { DisplayModifier, IGameEntityModifier } from "../modifiers/display-modifier";

interface IGameEntity {
    id: UUID;
    name?: string;
}

export interface GameEntityWithModifiers extends IGameEntity {
    displayModifier?: DisplayModifier;
}

export class GameEntity implements GameEntityWithModifiers {

    public id = crypto.randomUUID();

    public displayModifier?: DisplayModifier;

    constructor(modifiers: IGameEntityModifier[]) {
        modifiers.forEach(modifier => modifier.apply(this));
    }

}
