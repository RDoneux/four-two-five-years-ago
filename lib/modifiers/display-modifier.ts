import { BoxGeometry, BufferGeometry, Group, Material, Mesh, MeshStandardMaterial, NormalBufferAttributes, Object3DEventMap } from "three";
import { FBXLoader } from 'three-stdlib'

export interface IGameEntityModifier {
    applyTo: (entity: any) => void
}

export class DisplayModifier implements IGameEntityModifier {
    public geometry: BufferGeometry<NormalBufferAttributes>
    public material: Material | Material[];
    public mesh: Mesh | Group<Object3DEventMap>;

    constructor() {
        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshStandardMaterial({ color: 0x00ffff })
        this.mesh = new Mesh(this.geometry, this.material);
    }

    applyTo(entity: any): void {
        Object.assign(entity, this)
    }

    public loadFBX = (path: string) => {

        new FBXLoader().load(path,
            (object: Group<Object3DEventMap>) => {
                this.mesh = object
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded')
            },
            (error) => {
                console.log('An error happened', error)
            })

    }
}