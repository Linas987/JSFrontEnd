import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

function Spin(){
    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeigth] = useState(window.innerWidth);

    const checkSize = () => {
        setWidth(window.innerWidth);
        setHeigth(window.innerHeight);
    };

    useEffect(()=> {
        window.addEventListener('resize', checkSize);
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        let container =document.querySelector('#bg');
        var renderer = new THREE.WebGLRenderer({
            canvas: container
        });
        renderer.setSize( window.innerWidth, window.innerHeight );
        //renderer.setPixelRatio(window.devicePixelRatio);

        document.body.appendChild( renderer.domElement );
        //this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.TorusGeometry(10, 2, 16, 6);
        var material = new THREE.MeshStandardMaterial( { color: 'rgba(255,255,255)'} );
        var torus = new THREE.Mesh( geometry, material );

        //torus2
        var geo2 =new THREE.TorusGeometry(5, 1, 16, 6)
        var material2 = new THREE.MeshStandardMaterial( { color: 'rgba(255,255,255)'} );
        var torus2 = new THREE.Mesh( geo2, material2 );

        //orb
        var geo3 =new THREE.SphereGeometry(1.5, 24, 24);
        var material3 = new THREE.MeshBasicMaterial( { color: 'rgba(255,255,255)'} );
        var orb = new THREE.Mesh( geo3, material3 );
        scene.add(orb);
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(0, 0, 0);

        const ambientLight = new THREE.AmbientLight(0xff333e3);
        scene.add(pointLight, ambientLight);

        const spaceTexture = new THREE.TextureLoader().load("space.jpg");
        scene.background = spaceTexture;
        scene.background.width=width;
        scene.background.height=heigth;
        scene.add( torus );
        scene.add( torus2 )
        camera.position.z = 50;

        function changeColor() {
            const t = document.body.getBoundingClientRect().top;
            torus.material.color.r=(0-t*0.002);
            //cube.material.color.g=(1-t*0.002);
            torus.material.color.b=(1+t*0.002);
            torus2.material.color.r=(0-t*0.002);
            torus2.material.color.g=(1+t*0.002);
            torus2.material.color.b=(0-t*0.002);
            //console.log(torus2.material.color.g);
            camera.position.y = (t-100)* 0.01;
            camera.position.z = (t-100)/ -4;
        }

        document.body.onscroll = changeColor;
        changeColor();

        var animate = function () {
            requestAnimationFrame( animate );
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            torus.rotation.z += 0.01;
            torus2.rotation.x -= 0.02;
            torus2.rotation.y -= 0.02;
            torus2.rotation.z -= 0.02;
            renderer.render( scene, camera );
        };
        animate();
        // === THREE.JS EXAMPLE CODE END ===
        return()=>{window.removeEventListener('resize', checkSize);};
    });
    return(<></>);
}
export default Spin
