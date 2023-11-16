import { produce } from 'immer'

export function factory(set, get) {
  return {
    moveTopLeft() {
      const targetId = get().targetId;
      set(produce((state) => {
        state.elementCollection[targetId]["css"].left = 0;
        state.elementCollection[targetId]["css"].top = 0;
      }));
    },
    moveTopCenter() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        // state.elementCollection[targetId]["css"].left = canvasPanelWidth / 2 - elementWidth / 2;
        state.elementCollection[targetId]["css"].left = (document.getElementById(targetId).parentNode.offsetWidth - document.getElementById(targetId).offsetWidth)/2;
        state.elementCollection[targetId]["css"].top = 0;
      }));
    },
    moveTopRight() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        // state.elementCollection[targetId]["css"].left = canvasPanelWidth - elementWidth;
        state.elementCollection[targetId]["css"].left = (document.getElementById(targetId).parentNode.offsetWidth - document.getElementById(targetId).offsetWidth);
        state.elementCollection[targetId]["css"].top = 0;
      }));
    },
    moveCenterLeft() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        const elementHeight = state.elementCollection[targetId]["css"].height
        state.elementCollection[targetId]["css"].left = 0;
        // state.elementCollection[targetId]["css"].left = canvasPanelHeight / 2 - elementHeight / 2;
        state.elementCollection[targetId]["css"].top = (document.getElementById(targetId).parentNode.offsetHeight - document.getElementById(targetId).offsetWidth)/2;
      }));
    },
    moveCenterCenter() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        const elementHeight = state.elementCollection[targetId]["css"].height
        // state.elementCollection[targetId].left = canvasPanelHeight / 2 - elementHeight / 2;
        state.elementCollection[targetId]["css"].left = (document.getElementById(targetId).parentNode.offsetWidth - document.getElementById(targetId).offsetWidth)/2;
        // state.elementCollection[targetId]["css"].top = canvasPanelHeight / 2 - elementHeight / 2;
        state.elementCollection[targetId]["css"].top = (document.getElementById(targetId).parentNode.offsetHeight - document.getElementById(targetId).offsetWidth)/2;
      }));
    },
    moveCenterRight() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        const elementHeight = state.elementCollection[targetId]["css"].height
        // state.elementCollection[targetId]["css"].left = canvasPanelHeight / 2 - elementHeight / 2;
        state.elementCollection[targetId]["css"].left = (document.getElementById(targetId).parentNode.offsetWidth - document.getElementById(targetId).offsetWidth);
        // state.elementCollection[targetId]["css"].top = canvasPanelHeight / 2 - elementHeight / 2;
        state.elementCollection[targetId]["css"].top = (document.getElementById(targetId).parentNode.offsetHeight - document.getElementById(targetId).offsetWidth)/2;
      }));
    },
    moveBottomLeft() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        const elementHeight = state.elementCollection[targetId]["css"].height
        // state.elementCollection[targetId]["css"].top = canvasPanelHeight - elementHeight;
        state.elementCollection[targetId]["css"].top = (document.getElementById(targetId).parentNode.offsetHeight - document.getElementById(targetId).offsetWidth);
        state.elementCollection[targetId]["css"].left = 0
      }));
    },
    moveBottomCenter() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        const elementHeight = state.elementCollection[targetId]["css"].height
        // state.elementCollection[targetId]["css"].top = canvasPanelHeight - elementHeight;
        state.elementCollection[targetId]["css"].top = (document.getElementById(targetId).parentNode.offsetHeight - document.getElementById(targetId).offsetWidth);
        // state.elementCollection[targetId].left = canvasPanelHeight / 2 - elementHeight / 2;
        state.elementCollection[targetId]["css"].left = (document.getElementById(targetId).parentNode.offsetWidth - document.getElementById(targetId).offsetWidth)/2;
      }));
    },
    moveBottomRight() {
      const targetId = get().targetId;
      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      set(produce((state) => {
        const elementWidth = state.elementCollection[targetId]["css"].width
        const elementHeight = state.elementCollection[targetId]["css"].height
        // state.elementCollection[targetId]["css"].top = canvasPanelHeight - elementHeight;
        state.elementCollection[targetId]["css"].top = (document.getElementById(targetId).parentNode.offsetHeight - document.getElementById(targetId).offsetWidth);
        // state.elementCollection[targetId]["css"].left = canvasPanelHeight / 2 - elementHeight / 2;
        state.elementCollection[targetId]["css"].left = (document.getElementById(targetId).parentNode.offsetWidth - document.getElementById(targetId).offsetWidth);
      }));
    },
  }
}

