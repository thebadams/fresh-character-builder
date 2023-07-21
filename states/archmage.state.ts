import { computed, signal } from "@preact/signals";
//CHARACTER NAME STATE
export const name = signal<string>("Valar the Oathsmith");
//CHARACTER CLASS STATE
export const className = signal<string>("Paladin");
//CHARACTER LEVEL STATE
export const level = signal<number>(2);
//CHARACTER ABILITIES STATE
export const strength = signal<number>(20);
export const dexterity = signal<number>(10);
export const constitution = signal<number>(16);
export const intelligence = signal<number>(14);
export const wisdom = signal<number>(13);
export const charisma = signal<number>(18);

const abilities = computed(() => {
  return {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  };
});

export const currentCharacter = computed(() => {
  return {
    name,
    className,
    level,
    abilities,
  };
});
