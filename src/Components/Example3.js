import React, { useEffect, useRef } from 'react';


// Importera detta för att kunna access CSS koden till denna komponent
import './Example3.css';

export default () => {
  const sceneRef = useRef(null);

  // TODO: här måste vi få in relevant för just vår facemesh tracking
  // så vi kan attacha våra örhängen senare (on-virtualtry)
/*
    const list = ["glasses1", "glasses2", "hat1", "hat2", "earring"];
    const visibles = [true, false, false, true, true];
    const setVisible = (button, entities, visible) => {
      if (visible) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
      entities.forEach((entity) => {
        entity.setAttribute("visible", visible);
      });
    }
    list.map((item, index) => {
      const button = document.querySelector("#" + item);
      const entities = document.querySelectorAll("." + item + "-entity");
      setVisible(button, entities, visibles[index]);
      button.addEventListener('click', () => {
        visibles[index] = !visibles[index];
        setVisible(button, entities, visibles[index]);
      });
    });   
    */   

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-face-system"];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR 
    });
    return () => {
      arSystem.stop();
    }
  }, []);


  const myContainer = useRef(null);
  
  useEffect(() => {
    console.log("myContainer..", myContainer.current);
  });  

  return (
    <a-scene ref={sceneRef} mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        <a-assets>
          <a-asset-item id="headModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/face-tracking/assets/sparkar/headOccluder.glb"></a-asset-item>
          <a-asset-item id="glassesModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/face-tracking/assets/glasses/scene.gltf"></a-asset-item>
          <a-asset-item id="glassesModel2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/face-tracking/assets/glasses2/scene.gltf"></a-asset-item>
          <a-asset-item id="hatModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/face-tracking/assets/hat/scene.gltf"></a-asset-item>
          <a-asset-item id="hatModel2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/face-tracking/assets/hat2/scene.gltf"></a-asset-item>
          <a-asset-item id="earringModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/face-tracking/assets/earring/scene.gltf"></a-asset-item>
        </a-assets>
        <a-camera active="false" position="0 0 0"></a-camera>
	
        <a-entity mindar-face-target="anchorIndex: 168">
            <a-gltf-model mindar-face-occluder position="0 -0.3 0.15"rotation="0 0 0" scale="0.065 0.065 0.065" src="#headModel"></a-gltf-model>
        </a-entity>
        <a-entity mindar-face-target="anchorIndex: 10">
            <a-gltf-model rotation="0 -0 0" position="0 1.0 -0.5" scale="0.35 0.35 0.35" src="#hatModel" class="hat1-entity" visible="false"></a-gltf-model>
        </a-entity>
        <a-entity mindar-face-target="anchorIndex: 10">
            <a-gltf-model rotation="0 -0 0" position="0 -0.2 -0.5" scale="0.008 0.008 0.008" src="#hatModel2" class="hat2-entity" visible="false"></a-gltf-model>
        </a-entity>
        <a-entity mindar-face-target="anchorIndex: 168">
            <a-gltf-model rotation="0 -0 0" position="0 0 0" scale="0.01 0.01 0.01" src="#glassesModel" class="glasses1-entity" visible="false"></a-gltf-model>
        </a-entity>
        <a-entity mindar-face-target="anchorIndex: 168">
            <a-gltf-model rotation="0 -90 0" position="0 -0.3 0" scale="0.6 0.6 0.6" src="#glassesModel2" class="glasses2-entity" visible="false"></a-gltf-model>
        </a-entity>
        <a-entity mindar-face-target="anchorIndex: 127">
            <a-gltf-model rotation="-0.1 -0 0" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" src="#earringModel" class="earring-entity" visible="false"></a-gltf-model>
        </a-entity>
        <a-entity mindar-face-target="anchorIndex: 356">
            <a-gltf-model rotation="0.1 -0 0" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" src="#earringModel" class="earring-entity" visible="false"></a-gltf-model>
        </a-entity>
    </a-scene>
  )
}
