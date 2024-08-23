
export default function redirectSignIn() {
	document.querySelector("login-btn").addEventListener("onclick", () => {
		window.location.href="/sign-in";
	})
}