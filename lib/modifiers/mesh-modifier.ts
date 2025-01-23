import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import { GameEntityClass, IGameEntityModifier } from "../game-entity/game-entity";

export class MeshModifier extends Mesh implements IGameEntityModifier {

    constructor() {
        super(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: 0x00ffff }))
    }

    applyTo(entity: GameEntityClass<any>): void {
        Object.assign(entity, this)
    }

}