/**
 Unions with Common Fields
 */
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet(); // 戻り値 Fish or Bird
pet.layEggs(); // Fish, Bird 両方にあるmemberにはアクセス可能
pet.swim(); // Fishにしかないmemberにはアクセスできない

