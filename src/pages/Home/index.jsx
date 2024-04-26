import styles from "./styles.module.css";
import axios from "axios";
function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`http://localhost:3333/auth/logout`, "_self");
	};

	const getUser = async () => {
		try {
			const url = `http://localhost:3333/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Home</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/profile.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Profile</h2>
					<img
						src={user.picture}
						alt="profile"
						className={styles.profile_img}
					/>
					<input
						type="text"
						defaultValue={user.name}
						className={styles.input}
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className={styles.input}
						placeholder="Email"
					/>
					<button className={styles.btn} onClick={logout}>
						Log Out
					</button>
					<button onClick={() => getUser()}>click !!!!!</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
