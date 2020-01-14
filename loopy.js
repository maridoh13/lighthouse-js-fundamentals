// multiple of 3 - Loopy
// multiple of 4 - Lighthouse
// multiple of 3 and 4 - LoopyLighthouse
// from 100 to 200

for (var x = 100; x <= 200; x++) {
  if ((x % 3 === 0) && (x % 4 === 0)) {
    console.log("LoopyLighthouse");
    }

  else if (x % 3 === 0) {
    console.log("Loopy");
    }

  else if (x % 4 === 0) {
    console.log("Lighthouse");
    }

  else {
    console.log(x)
    }
}
