import { UUID } from "crypto";

// Base Modifier Interface
export interface IGameEntityModifier {
  applyTo(entity: GameEntityClass<any>): void; // Modifiers attach methods/properties to the GameEntity
}

// Helper Type to Merge Modifier Types into the GameEntity
type MergeModifierTypes<T extends IGameEntityModifier[]> = T extends [infer First, ...infer Rest extends IGameEntityModifier[]]
  ? First extends IGameEntityModifier
  ? { [K in keyof First]: First[K] } & MergeModifierTypes<Rest>
  : never
  : {};
export type GameEntityWithModifiers<T extends IGameEntityModifier[]> = GameEntityClass<T> & MergeModifierTypes<T>;

export class GameEntityClass<T extends IGameEntityModifier[]> {

  public id: UUID;

  constructor(public modifiers: T) {
    this.id = crypto.randomUUID();
    modifiers.forEach(modifier => modifier.applyTo(this))
  }

}

export function GameEntity<T extends { new(): IGameEntityModifier }[]>(...modifiers: T): GameEntityWithModifiers<{ [K in keyof T]: InstanceType<T[K]> }> {
  const instances = modifiers.map((Modifier) => new Modifier());
  return new GameEntityClass(instances) as GameEntityWithModifiers<{ [K in keyof T]: InstanceType<T[K]> }>;
}