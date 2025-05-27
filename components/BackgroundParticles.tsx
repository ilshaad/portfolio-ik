import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // 360  500  576  768  992  1200 1400  1600px
  // 185 link.distance: 120	150	180
  // 45 particles.number.limit: 30	40	45
  // 5 motion.reduce.factor	8	7	5

  // default value set for 320px width or above (really its for 360px)
  let [linkDistance, setLinkDistance] = useState(130);
  let [particlesNumberLimit, setParticlesNumberLimit] = useState(23);
  let [particlesNumberValue, setParticlesNumberValue] = useState(23);
  let [motionReduceFactor, setMotionReduceFactor] = useState(12);

  // setting the canvas to have more power depending on screen size
  useEffect(() => {
    const mediaQuery500 = window.matchMedia("(min-width: 500px)");
    const mediaQuery576 = window.matchMedia("(min-width: 576px)");
    const mediaQuery992 = window.matchMedia("(min-width: 992px)");

    const updateParticles = () => {
      // Reset to default first
      setLinkDistance(130);
      setParticlesNumberLimit(23);
      setParticlesNumberValue(23);
      setMotionReduceFactor(12);

      if (mediaQuery500.matches) {
        setLinkDistance(145);
        setParticlesNumberLimit(40);
        setParticlesNumberValue(99);
        setMotionReduceFactor(9);
      }
      if (mediaQuery576.matches) {
        setLinkDistance(180);
        setParticlesNumberLimit(43);
        setMotionReduceFactor(7);
      }
      if (mediaQuery992.matches) {
        setLinkDistance(900);
        setParticlesNumberLimit(95);
        setMotionReduceFactor(99);
      }
    };

    // Initial check
    updateParticles();

    // Add listeners
    mediaQuery500.addEventListener("change", updateParticles);
    mediaQuery576.addEventListener("change", updateParticles);
    mediaQuery992.addEventListener("change", updateParticles);

    // Cleanup
    return () => {
      mediaQuery500.removeEventListener("change", updateParticles);
      mediaQuery576.removeEventListener("change", updateParticles);
      mediaQuery992.removeEventListener("change", updateParticles);
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#fff",
        },
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "#000",
          },
          opacity: 1,
        },
        enable: false,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 50,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onDiv: {
            selectors: ["#Header"],
            enable: true,
            mode: ["bounce"],
            type: "rectangle",
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60,
              smooth: 20,
            },
          },
          resize: { enable: true },
          // resize: true,
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 100,
          },
          bubble: {
            distance: 400,
            duration: 2,
            mix: false,
            opacity: 0.8,
            size: 40,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 300,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff",
                },
                stop: {
                  value: "#000000",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#000000",
              },
              length: 2000,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 2,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: {
            factor: 3,
            radius: 200,
          },
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1,
          },
        },
      },
      manualParticles: [],
      motion: {
        disable: false,
        reduce: {
          factor: motionReduceFactor,
          value: true,
        },
      },
      particles: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        collisions: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          enable: false,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: "#004aad",
          animation: {
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
          },
        },
        destroy: {
          mode: "none",
          split: {
            count: 1,
            factor: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 3,
            },
            rate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
          },
        },
        gradient: [],
        groups: {},
        links: {
          blink: false,
          color: {
            value: "#004aad",
          },
          consent: false,
          distance: linkDistance,
          enable: true,
          frequency: 1,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: true,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          center: {
            x: 50,
            y: 50,
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 1,
            fillColor: {
              value: "#000000",
            },
          },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
            factor: 1000,
          },
          limit: { value: particlesNumberLimit },
          value: particlesNumberValue,
        },
        opacity: {
          random: {
            enable: true,
            minimumValue: 0.1,
          },
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 3,
            decay: 0,
            sync: false,
            destroy: "none",
            startValue: "random",
            minimumValue: 0.1,
          },
        },
        reduceDuplicates: false,
        repulse: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
        rotate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        shadow: {
          blur: 0,
          color: {
            value: "#000",
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          options: {},
          type: "circle",
        },
        size: {
          random: {
            enable: true,
            minimumValue: 1,
          },
          value: {
            min: 0.1,
            max: 10,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 20,
            decay: 0,
            sync: false,
            destroy: "none",
            startValue: "random",
            minimumValue: 0.1,
          },
        },
        stroke: {
          width: 0,
        },
        zIndex: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        pauseOnOutsideViewport: true,
      },
      pauseOnBlur: true,
      responsive: [],
      style: {},
      themes: [],
      zLayers: 100,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
