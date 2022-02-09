package uni.fmi.login.service;

import java.util.Collections;
import java.util.List;

import uni.fmi.models.User;

public class LoginService {

	private static List<User> usersDb = Collections.singletonList(new User("Иван","123!pass"));	
	public static String login(String username, String password) {
		
		if (null == password || null == username) {
			return "Въведете име и парола";
		}
				
		final boolean isUserExists = usersDb.stream().anyMatch(u -> u.getUsername().equals(username)&& u.getPassword().equals(password));
		return isUserExists?"Успешно влизане":"Въведете валидни име и парола";
	}

}
