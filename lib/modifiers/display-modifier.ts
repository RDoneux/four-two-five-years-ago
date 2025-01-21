import { BoxGeometry, BufferGeometry, Material, Mesh, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { GameEntity } from "../game-entity";

export interface IGameEntityModifier {
    applyTo: (entity: any) => void
}

export class DisplayModifier implements IGameEntityModifier {
    public geometry: BufferGeometry<NormalBufferAttributes>
    public material: Material | Material[];
    public mesh: Mesh

    constructor() {
        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshStandardMaterial({ color: 0x00ffff })
        this.mesh = new Mesh(this.geometry, this.material);
    }

    applyTo(entity: any): void {
        Object.assign(entity, this)
    }
}