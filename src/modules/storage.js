export const setData = info => {
	try {
		localStorage.setItem("donation", JSON.stringify(info));
		return true;
	} catch {
		return null;
	}
}

export const getData = () => {
	try {
		return JSON.parse(localStorage.getItem("donation"));
	} catch {
		return null;
	}
}
