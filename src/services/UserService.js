import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
	constructor() {
		super();
	}
	login = (Email, Password) =>
		new Promise((resolve, reject) => {
			this.post("users/login", { Email, Password })
				.then((token) => {
					localStorage.setItem("token", token);
					resolve(token);
				})
				.catch((err) => {
					reject(err);
				});
		});
	register = (Name, Email, Password) =>
		this.post("users/register", { Password, Email, Name });
	logout = () => {
		localStorage.removeItem("token");
	};
	isLoggedIn = () => {
		return localStorage.getItem("token") ? true : false;
	};
	getLoggedInUser = () => {
		try {
			const jwt = localStorage.getItem("token");
			return jwtDecode(jwt);
		} catch (ex) {
			return null;
		}
	};
	isAdmin = () => {
		if (this.isLoggedIn()) {
			if (this.getLoggedInUser().role == "admin") return true;
			else return false;
		} else return false;
	};
}

let userService = new UserService();
export default userService;
