// conditionCode - oro sąlygos, kodas.
// Galimos reikšmės:
// clear - giedra;
// isolated-clouds - mažai debesuota;
// scattered-clouds - debesuota su pragiedruliais;
// overcast - debesuota;
// light-rain - nedidelis lietus;
// moderate-rain - lietus;
// heavy-rain - smarkus lietus;
// sleet - šlapdriba;
// light-snow - nedidelis sniegas;
// moderate-snow - sniegas;
// heavy-snow - smarkus sniegas;
// fog - rūkas;
// na - oro sąlygos nenustatytos.

//this function will decide wich image to render when showing the weather forecast

export const imageLogic = (forecast) => {
    if (forecast.includes('rain') || forecast === 'sleet') {
        return 'umbrella'
    }
    if (forecast.includes('snow')) {
        return 'snow'
    } else {
        return 'sunglasses'
    }
}