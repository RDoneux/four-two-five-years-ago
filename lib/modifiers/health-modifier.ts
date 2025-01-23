import { GameEntityClass, IGameEntityModifier } from "../game-entity/game-entity"

export class HealthModifier implements IGameEntityModifier {
    health: number = 100

    applyTo(entity: GameEntityClass<any>): void {
        Object.assign(entity, this)
    }

}