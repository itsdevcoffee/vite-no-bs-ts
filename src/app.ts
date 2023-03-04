import {
  Engine,
  Scene,
  HemisphericLight,
  FreeCamera,
  MeshBuilder,
} from '@babylonjs/core'

const targetVec3 = new Vector3(0, 1, 0)

export function setupGameCanvas(canvas: HTMLCanvasElement) {
  console.log(canvas)
  const engine = new Engine(canvas, true)
  const scene = new Scene(engine)
  const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene)
  camera.setTarget(targetVec3)
  camera.attachControl(canvas, true)

  const light = new HemisphericLight('light', targetVec3, scene)
  light.intensity = 0.7

  const sphere = MeshBuilder.CreateSphere(
    'sphere',
    { segments: 32, diameter: 2 },
    scene
  )
  sphere.position.y = 1

  const ground = MeshBuilder.CreateGround(
    'ground',
    { width: 6, height: 6 },
    scene
  )

  engine.runRenderLoop(() => {
    scene.render()
  })
}
