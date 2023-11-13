import armor from "../assets/images/armor.png";
import gun from "../assets/images/gun.png";
import blood from "../assets/images/blood.png";
import food from "../assets/images/food.png";
import { generalId } from "./utils";

export const listItemUsed = {
  weapon: {
    id: generalId(),
    name: "Súng Ngắn",
    image: gun,
    weight: 1,
    level: 1,
    type: "weapon",
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
  armor: {
    id: generalId(),
    name: "Áo Giáp",
    image: armor,
    weight: 1,
    type: "armor",
    level: 2,
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
};

export const ItemsOnBag = {
  1: {
    id: generalId(),
    name: "Súng Ngắn acb cbcb",
    image: gun,
    weight: 1,
    level: 1,
    type: "weapon",
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
  2: {
    id: generalId(),
    name: "Áo Giáp",
    image: armor,
    weight: 100,
    level: 2,
    type: "armor",
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
  3: {
    id: generalId(),
    name: "Máu",
    image: blood,
    weight: 1,
    level: 3,
    type: "food",
    quantity: 12,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
  4: {
    id: generalId(),
    name: "Thức Ăn",
    image: food,
    weight: 1,
    type: "food",
    level: 4,
    quantity: 10,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
};

export const ItemsOnSlots = {
  1: {
    id: generalId(),
    name: "Súng Ngắn",
    image: gun,
    weight: 1,
    level: 1,
    type: "weapon",
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
  2: {
    id: generalId(),
    name: "Áo Giáp",
    image: armor,
    weight: 1,
    level: 2,
    type: "armor",
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
  3: {
    id: generalId(),
    name: "Máu",
    image: blood,
    weight: 1,
    level: 3,
    type: "food",
    quantity: 12,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
  4: {
    id: generalId(),
    name: "Thức Ăn",
    image: food,
    weight: 1,
    type: "food",
    level: 4,
    quantity: 10,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
};

export const ItemsOutSide = {
  1: {
    id: generalId(),
    name: "Thức Ăn",
    image: food,
    weight: 1,
    type: "food",
    level: 1,
    quantity: 10,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
    cras augue tristique. Risus quis ac dignissim felis. Viverra
    faucibus dui venenatis senectus.`,
  },
  2: {
    id: generalId(),
    name: "Máu",
    image: blood,
    weight: 1,
    type: "food",
    quantity: 12,
    level: 2,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
    cras augue tristique. Risus quis ac dignissim felis. Viverra
    faucibus dui venenatis senectus.`,
  },
  3: {
    id: generalId(),
    name: "Áo Giáp",
    image: armor,
    weight: 1,
    level: 2,
    type: "armor",
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
    cras augue tristique. Risus quis ac dignissim felis. Viverra
    faucibus dui venenatis senectus.`,
  },
  4: {
    id: generalId(),
    name: "Súng Ngắn",
    image: gun,
    weight: 1,
    level: 2,
    type: "weapon",
    quantity: 1,
    description: `Lorem ipsum dolor sit amet consectetur. Facilisis duis amet lorem
                  cras augue tristique. Risus quis ac dignissim felis. Viverra
                  faucibus dui venenatis senectus.`,
  },
};
