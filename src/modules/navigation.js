let history;
export const registerNav = (ref) => {
  	history = ref.history;
}

const jumpTo = (uri) => {
	history.push(uri)
}

export const goBack = () => {
	history.goBack();
}
export const goTo=(uri)=>{
	// history.go(uri);
	window.location.href = uri;
}
export default jumpTo;
