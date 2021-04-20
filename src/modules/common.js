import lodash from 'lodash';

export const priceFormatter = price => {
	price = price ? price : 0;
	return new Intl.NumberFormat('en-US', {style: 'decimal'}).format(price)
}

export const textSlicer = (text, length) => {
	return text.slice(0, length) + (text.length > length ? ' ...': '');
}

export const slugify = str => {
	return str.replace(/\s/g, '-')
}

export const deepCopy = obj => {
	return JSON.parse(JSON.stringify(obj));
}

export const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export const addToast = (...args) => {
	const add = lodash.get(window, '__react_toast_provider.current.add')
  
	if (!add) {
	  console.error('Some helpful error.')
	  return
	}
  
	add(...args)
}