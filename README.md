# Arras Graphics Client
Fully customizable visual enhancements for arras.io

## Installation
1. Download the Tampermonkey extension from https://www.tampermonkey.net/
2. Install [arras_graphics_client.user.js](https://github.com/Ray-Adams/Arras-Graphics-Client/raw/main/arras_graphics_client.user.js)

## Settings
```js
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
```
Once the UserScript has been installed, you can edit the script by navigating to the Tampermonkey dashboard, and then clicking on `Arras Graphics Client`. As you can see from the code snippet above (from the top portion of the script), all of the properties are already set to `null`, which will use their default values. Next to each property is a comment on the right (indicated by the `//`) that shows what type of value, either number or boolean, you can use and an example value. To change the value of one of the properties, just replace `null` (**make sure to not remove the comma**) with your desired value.

## Usage Examples
Disabling the gui:
```js
enabled: false,
```

Increasing border thickness (default is 6):
```js
borderChunk: 10,
```

## Release History
* 1.0.0
  * Initial release

## Compatability
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
