import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleOptions from "../../particles.json"
import type { Engine } from "tsparticles-engine";

export function ParticlesContainer(props: unknown) {
    // this customizes the component tsParticles installation
    const particlesInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    const options = particleOptions as {};

    return <Particles options={options} init={particlesInit} loaded={particlesLoaded} />;
}
