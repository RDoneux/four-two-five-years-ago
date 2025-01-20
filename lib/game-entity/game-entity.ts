export interface IGameEntity {
    name: string;
}

export class GameEntity implements IGameEntity {
    public name = "GameEntity";
}