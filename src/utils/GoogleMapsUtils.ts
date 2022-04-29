export const loadMapApi = () => {
    const mapsURL = `https://maps.googleapis.com/maps/api/js?key=&libraries=places&language=eng&v=quarterly`;
    const scripts = document.getElementsByTagName('scripts');

    for(let i = 0; i< scripts.length; i++) {
        if (scripts[i].src.indexOf(mapsURL) === 0) {
            return scripts[i]; 
        }
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
};