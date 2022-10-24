import React, { Suspense } from 'react'
import { DoubleSide } from 'three';
import { VRCanvas, VRButton, ARButton, XR, Controllers, Hands, DefaultXRControllers, RayGrab } from '@react-three/xr'
import TeleportTravel from './TeleportTravel';
import BallPit from './BallPit';
import MovementController from './MovementController';

function Floor(props) {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
			<planeBufferGeometry args={[10, 10]} attach="geometry" />
			<meshBasicMaterial attach="material" color={'#25282F'} />
		</mesh>
	);
}

function Cage(props) {
	return (
		<mesh {...props}>
			<sphereBufferGeometry args={[15, 32, 16]} attach="geometry" />
			<meshBasicMaterial
				attach="material"
				color={'#001219'}
				side={DoubleSide}
			/>
		</mesh>
	);
}

function App() {
	return (
		<VRCanvas>
			<TeleportTravel useNormal={true}>
				<Floor rotation={[-Math.PI / 2, 0, 0]} />
			</TeleportTravel>
			<MovementController />
			<MovementController
				hand="left"
				applyRotation={false}
				applyHorizontal={true}
			/>
			<DefaultXRControllers />
			<Suspense fallback={null} r3f>
				<BallPit position={[0, 3, 0]} />
			</Suspense>
			<Cage />
		</VRCanvas>
	);
}

export default App
