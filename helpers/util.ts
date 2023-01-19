// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

export function debounce(callback: () => void, wait: number) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      timeoutId = null;
      callback.call(this, ...args);
    }, wait);
  };
}

export const elScrolledTop = (el: HTMLElement) => {
  const { scrollTop } = el;
  return scrollTop === 0;
};

export const findClosest = (array: number[], goal: number) => {
  return array.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};

export const isPrime = (number: number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

// NOTE: Decide on whether to write type interface for data returned by API
export const toFeatureCollection = (array) => {
  return {
    type: 'FeatureCollection',
    features: [...array],
  };
};
