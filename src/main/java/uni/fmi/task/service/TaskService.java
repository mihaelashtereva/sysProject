package uni.fmi.task.service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import uni.fmi.models.User;

public class TaskService {


	private static List<User> developersDb = Collections.singletonList(new User("Станислав","Иванов"));	
	private static List<String> statuses = Arrays.asList(new String[]{"нова", "в процес на разработка", "завършена", "отказана"});
	

	public static String  changeTask(String name, String status) {
		
		if (null == name || null == status) {
			return "Въведете име и статус";
		}	
		
		if(status == "завършена")
		{
			return "Статусът на завършена задача не може да бъде сменен!";
		}
		
		return "Успешно променихте статуса на задачата!";
	}
	

	public static String startTask(String firstName, String lastName) {
		
		if (null == firstName || null == lastName) {
			return "Въведете име";
	}
		
		final boolean isUserExists = developersDb.stream().anyMatch(u -> u.getFirstName().equals(firstName)&& u.getLastName().equals(lastName));
		return isUserExists?"Успешно започване на работа по задача!":"Въведете валидно име на разработчик!";

	}
	

	public static String insertTask(String taskName, String status) {
		if (null == taskName || null == status) {
			return "Въведете име и статус";
		}	
		
		if(!statuses.contains(status))
		{
			return "Въведете валиден статус!";
		}
		
		return "Успешно създаване на задача!";
	}
	
	
}
