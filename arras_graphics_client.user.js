// ==UserScript==
// @name         Arras Graphics Client
// @namespace    https://github.com/Ray-Adams
// @version      1.0.0
// @description  Fully customizable visual enhancements for arras.io
// @author       Ray Adams
// @match        *://arras.io/*
// @match        *://arras.netlify.app/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

const settings = {

    graphical: {
        screenshotMode: null,    // Boolean - Ex. false
        borderChunk: null,       // Number  - Ex. 6
        compensationScale: null, // Number  - Ex. 1.102
        lowGraphics: null,       // Boolean - Ex. true
        alphaAnimations: null,   // Boolean - Ex. false
        inversedRender: null,    // Boolean - Ex. true
        miterStars: null,        // Boolean - Ex. true
        miter: null,             // Boolean - Ex. false
        fontSizeOffset: null,    // Number  - Ex. 0
        shieldbars: null,        // Boolean - Ex. true
        renderGrid: null,        // Boolean - Ex. true
        renderNames: null,       // Boolean - Ex. true
        censorNames: null,       // Boolean - Ex. false
        darkBorders: null,       // Boolean - Ex. false
        neon: null,              // Boolean - Ex. false
        alternateBorder: null,   // Boolean - Ex. false
        coloredNest: null        // Boolean - Ex. false
    },
    gui: {
        enabled: null,           // Boolean - Ex. true
        scale: null,             // Number  - Ex. 1
        alcoveSize: null,        // Number  - Ex. 200
        spacing: null,           // Number  - Ex. 20
        leaderboard: null,       // Boolean - Ex. true
        barChunk: null           // Number  - Ex. 6
    }

};

(() => {

    'use strict';

    const _Arras = window.Arras();

    Object.keys(settings).forEach(_key => {

        for (let [key, value] of Object.entries(settings[_key])) {

            if (settings[_key][key] !== null) _Arras[_key][key] = value;

        };

    });

    console.info('Graphics Client Activated.');

})()
