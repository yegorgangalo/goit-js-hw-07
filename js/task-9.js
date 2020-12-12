/* ---------------count script-------------------- */
const countRef = document.querySelector('.count');
const maxNumber = Number(countRef.textContent);

const printNumbers = (from, to, elementRef, interval) => {
  let current = from;

  const inCrement = () => {
      elementRef.textContent = current;
    if (current === to) {
      return;
      // clearInterval(this).bind();
    }
    current += 1;
  }

  setInterval(inCrement, interval);
}

printNumbers(0, maxNumber, countRef, 100);
/* ----------------------------------- */