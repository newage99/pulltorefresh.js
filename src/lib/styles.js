export default `
.__PREFIX__ptr {
  pointer-events: none;
  font-size: 1em;
  font-weight: bold;
  top: 0;
  height: 0;
  transition: height 0.3s, min-height 0.3s;
  text-align: center;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  align-content: stretch;
}

.__PREFIX__box {
  padding: 10px;
  flex-basis: 100%;
}

.__PREFIX__pull {
  transition: none;
}

.__PREFIX__text {
  color: white;
  margin-top: .33em;
}

.__PREFIX__icon {
  color: white;
  transition: transform .3s;
}

/*
When at the top of the page, disable vertical overscroll so passive touch
listeners can take over.
*/
.__PREFIX__top {
  touch-action: pan-x pan-down pinch-zoom;
}

.__PREFIX__release {
  .__PREFIX__icon {
    transform: rotate(180deg);
  }
}
`;
