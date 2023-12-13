const toggler = {
  hide: (element) => {
    if (element) {
      element.classList.add('hidden');
    } else {
      console.error('Element not provided.');
    }
  },

  show: (element) => {
    if (element) {
      element.classList.remove('hidden');
    } else {
      console.error('Element not provided.');
    }
  },

  toggle: (element) => {
    if (element) {
      element.classList.toggle('hidden');
    } else {
      console.error('Element not provided.');
    }
  },

  toggleOpacity: (element) => {
    if (element) {
      element.classList.toggle('half-opacity');
    } else {
      console.error('Element not provided.');
    }
  }
};

export { toggler };
