import AutoImport from 'unplugin-auto-import/vite'

type AutoImportConfig = Parameters<typeof AutoImport>[0]

const autoImportConfig: AutoImportConfig = {
  include: [/\.[tj]sx?$/],
  imports: [
    {
      '@babylonjs/core': [
        'Scene',
        'Engine',
        'HemisphericLight',
        'MeshBuilder',
        'FreeCamera',
        'Vector2',
        'Vector3',
        'Vector4',
      ],
    },
  ],
  dirs: [],
  dts: 'src/types/auto-imports.d.ts',
  eslintrc: {
    enabled: true,
    filepath: 'config/.eslintrc-auto-import.json',
    globalsPropValue: true,
  },
}

export default AutoImport(autoImportConfig)
