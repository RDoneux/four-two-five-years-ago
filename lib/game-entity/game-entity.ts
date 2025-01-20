import { UUID } from "crypto";
import { IGameEntityModifier } from "../modifiers/display-modifier";

export interface IGameEntity {
    id: UUID;
    name?: string;
    [key: string]: any;
}

export class BaseEntity {}

export function GameEntityMixin <T extends new (...args: any[]) => {}>(Modifier: T) {
    return class GameEntity extends Modifier implements IGameEntity {

        public id = crypto.randomUUID();
        public modifiers: IGameEntityModifier[];
        [key: string]: any
        
        constructor(...args: any[]) {
            super(...args)
            this.modifiers = args[0] ?? [];
            this.applyModifiers();
        }
    
        public applyModifiers() {
            this.modifiers.forEach(modifier => modifier.apply(this))
        }
    }
}

export const GameEntity = GameEntityMixin(BaseEntity);
export type TGameEntity = InstanceType<typeof GameEntity>;
