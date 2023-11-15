import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsUsed: null,
  itemsOnBag: null,
  itemsOutSide: null,
  itemsOnSlots: null,
};

export const TYPE_GROUP = {
  OUTSIDE: "outside",
  ON_BAG: "on-bag",
  ON_SLOT: "on-slot",
  USED: "used",
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    updatePosition: (state, action) => {
      // {
      //     index: string|number,
      //     item: data,
      //     side: TYPE_GROUP
      // }
      const { itemDrag, itemDrop } = action.payload;
      const stateTemp = JSON.parse(JSON.stringify(state));
      const itemDragTemp = JSON.parse(JSON.stringify(itemDrag));
      const itemDropTemp = JSON.parse(JSON.stringify(itemDrop));
      //drag
      if (itemDragTemp.side === TYPE_GROUP.ON_BAG) {
        delete stateTemp.itemsOnBag[itemDragTemp.index];
        itemDropTemp.item &&
          (stateTemp.itemsOnBag[itemDragTemp.index] = itemDropTemp.item);
      }
      if (itemDragTemp.side === TYPE_GROUP.USED) {
        delete stateTemp.itemsUsed[itemDragTemp.index];
        itemDropTemp.item &&
          (stateTemp.itemsUsed[itemDragTemp.index] = itemDropTemp.item);
      }
      if (itemDragTemp.side === TYPE_GROUP.ON_SLOT) {
        delete stateTemp.itemsOnSlots[itemDragTemp.index];
        itemDropTemp.item &&
          (stateTemp.itemsOnSlots[itemDragTemp.index] = itemDropTemp.item);
      }
      if (itemDragTemp.side === TYPE_GROUP.OUTSIDE) {
        delete stateTemp.itemsOutSide[itemDragTemp.index];
        itemDropTemp.item &&
          (stateTemp.itemsOutSide[itemDragTemp.index] = itemDropTemp.item);
      }
      //drop
      if (itemDropTemp.side === TYPE_GROUP.ON_BAG) {
        delete stateTemp.itemsOnBag[itemDropTemp.index];
        stateTemp.itemsOnBag[itemDropTemp.index] = itemDragTemp.item;
      }
      if (itemDropTemp.side === TYPE_GROUP.USED) {
        delete stateTemp.itemsUsed[itemDropTemp.index];
        stateTemp.itemsUsed[itemDropTemp.index] = itemDragTemp.item;
      }
      if (itemDropTemp.side === TYPE_GROUP.ON_SLOT) {
        delete stateTemp.itemsOnSlots[itemDropTemp.index];
        stateTemp.itemsOnSlots[itemDropTemp.index] = itemDragTemp.item;
      }
      if (itemDropTemp.side === TYPE_GROUP.OUTSIDE) {
        delete stateTemp.itemsOutSide[itemDropTemp.index];
        stateTemp.itemsOutSide[itemDropTemp.index] = itemDragTemp.item;
      }
      // update
      state.itemsOnBag = { ...stateTemp.itemsOnBag };
      state.itemsOnSlots = { ...stateTemp.itemsOnSlots };
      state.itemsOutSide = { ...stateTemp.itemsOutSide };
      state.itemsUsed = { ...stateTemp.itemsUsed };
      console.log("On change position when update to data: ", stateTemp);
    },
    setDataInit: (state, action) => {
      const { itemUsed, itemsOnBag, itemsOnSlots, itemsOutSide } =
        action.payload;
      state.itemsUsed = { ...itemUsed };
      state.itemsOnBag = { ...itemsOnBag };
      state.itemsOnSlots = { ...itemsOnSlots };
      state.itemsOutSide = { ...itemsOutSide };
    },
  },
});

export const { updatePosition, setDataInit } = inventorySlice.actions;

export const selectItemsUsed = (state) => state.inventory.itemsUsed;
export const selectItemsOnBag = (state) => state.inventory.itemsOnBag;
export const selectItemsOutSide = (state) => state.inventory.itemsOutSide;
export const selectItemsOnSlots = (state) => state.inventory.itemsOnSlots;

export default inventorySlice.reducer;
