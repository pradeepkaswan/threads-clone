export const checkIfLoggedIn = (): boolean => {
	const token = localStorage.getItem("authToken")
	return !!token
}
