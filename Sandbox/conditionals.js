// conditionals.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit(){
    let isHit;
    let hit = Math.random();
    if(hit < 0.5){
        isHit = false;
    } else {
        isHit = true;
    }

    return isHit;
}

function shipCanFire(){
    let canFire;
    if(shipHealth != 0 && shipAmmo != 0){
        canFire = true;
    } else {
        canFire = false;
    }

    return canFire;
}

function isDestroyed(health){
    let isDestroyed;
    if(health <= 0){
        isDestroyed = true;
    } else {
        isDestroyed = false;
    }

    return isDestroyed;
}

function reloadShip(){
    shipHealth --;
    shipAmmo += 3;
}