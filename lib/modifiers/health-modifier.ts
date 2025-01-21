import { IGameEntityModifier } from "./display-modifier";

export class HealthModifier implements IGameEntityModifier {
    health: number = 100

    applyTo(entity: any): void {
        Object.assign(entity, this)
    }
    // apply(entity: GameEntity<[DisplayModifier]>): void {
    //     entity.displayModifier = this;
    // }
}