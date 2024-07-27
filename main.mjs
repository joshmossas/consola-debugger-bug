import { consola } from "consola";

let msgCount = 0;

setInterval(() => {
  msgCount++;
  console.log(`Hello from console.log() ${msgCount}`);
  consola.log(`Hello from consola, ${msgCount}`);
}, 1000);
