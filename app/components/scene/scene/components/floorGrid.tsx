import { DoubleSide, Color } from 'three'
import { Grid, Instance, Instances } from '@react-three/drei'

const FloorGrid = ({
  number = 23,
  lineWidth = 0.026,
  height = 0.5,
  positionY,
}: {
  number?: number
  lineWidth?: number
  height?: number
  positionY: number
}) => {
  const accentColor = [0.2, 2, 1]
  const gridColor = '#666'

  return (
    <>
      <Instances position={[0, positionY, 0]}>
        <planeGeometry args={[lineWidth, height]} />
        <meshBasicMaterial
          color={new Color(0.2, 2, 1)}
          toneMapped={false}
          side={DoubleSide}
        />
        {Array.from({ length: number }, (_, y) =>
          Array.from({ length: number }, (_, x) => (
            <group
              key={x + ':' + y}
              position={[
                x * 2 - Math.floor(number / 2) * 2,
                -0.01,
                y * 2 - Math.floor(number / 2) * 2,
              ]}
            >
              <Instance rotation={[-Math.PI / 2, 0, 0]} />
              <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
            </group>
          ))
        )}
        {/* <gridHelper
            args={[100, 100, gridColor, gridColor]}
            position={[0, -0.02, 0]}
          /> */}
      </Instances>
      <Grid
        renderOrder={-1}
        position={[0, positionY - 0.3, 0]}
        infiniteGrid={true}
        cellSize={0.5}
        cellThickness={0.6}
        cellColor={'#888888'}
        sectionSize={4}
        sectionThickness={1}
        sectionColor={'#04C2A2'}
        fadeDistance={25}
        fadeStrength={1.2}
        side={DoubleSide}
      />
      <Grid
        renderOrder={-1}
        // position={[0, 0.2, 0]}
        position={[0, 2, 0]}
        infiniteGrid={true}
        cellColor={'#0a0a0a'}
        cellSize={0.5}
        cellThickness={0.6}
        sectionSize={4}
        sectionThickness={1}
        sectionColor={[1, 0.78, 0]}
        fadeDistance={25}
        fadeStrength={1.2}
        side={DoubleSide}
      />
      {/* <color args={_dark ? [0x101010] : [0xffffff]} attach='background' /> */}
    </>
  )
}

export default FloorGrid
