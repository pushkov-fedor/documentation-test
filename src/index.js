/**
 * Calculates whether there was a click on the left margin or padding zone of content element
 *
 * @kind function
 * @param event - onClick event
 * @param content - HTML element
 * @returns {boolean} true if click was on the left margin or padding zone else returns false
 */
const isLeftSpaceClick = (event, content) => {
  const style = window.getComputedStyle(content);
  const pTop = parseInt(style.getPropertyValue("padding-top"));
  const mTop = parseInt(style.getPropertyValue("margin-top"));
  const pLeft = parseInt(style.getPropertyValue("padding-left"));
  const mLeft = parseInt(style.getPropertyValue("margin-left"));
  const x = event.clientX;
  const y = event.clientY;
  return x < mLeft + pLeft && y > pTop + mTop;
};
