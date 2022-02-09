package uni.fmi.task;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.task.model.TaskScreenModel;

public class TaskSteps {
	
	private TaskScreenModel taskModel;


	
	@Given("^Потребителят отваря екрана за работа със задача$")
	public void openTaskScreen() throws Throwable {
		taskModel = new TaskScreenModel();
	}
	
	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void checkMessage(final String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, taskModel.getMessage());
			
	}

	//Scenario 1
	

	@When("^натисне бутона за създаване на задача$")
	public void clickInsertTaskButton() throws Throwable {
	    taskModel.clickInsertTaskButton();
	}
	
	
	@Then("^Вижда съобщение: Успешно създаване на задача!$")
	public void checkSuccessMessage() throws Throwable {
		assertEquals("Успешно създаване на задача!", taskModel.getMessage());
	}
	
	//Scenario 2
	

	
	@When("^натисне бутона за създаване на подзадача$")
	public void clickInsertSmallerTaskButton() throws Throwable {
	    taskModel.clickInsertSmallerTaskButton();
	}

	
	@When("^Въведе подзадача(\\d+) на име$")
	public void insertSmallTaskName(int num) throws Throwable {
		taskModel.setTaskName("подзадача" + num);
	}
	

	@Then("^Вижда съобщение: Успешно създаване на подзадача!$")
	public void checkSuccessMessage1() throws Throwable {
		assertEquals("Успешно създаване на задача!", taskModel.getMessage());
	}
	
	//Scenario 3


	@When("^въведе стат(\\d+) на статус на задача$")
	public void insertInvalidStatus1(int num) throws Throwable {
		taskModel.setStatus("стат1" + num);
	}

	@Then("^Вижда съобщение: Въведете валиден статус!$")
	public void checkStatMessage() throws Throwable {
		assertEquals("Въведете валиден статус!", taskModel.getMessage());
	}
	
	//Scenario 4

	@When("^натисне бутона за започване на работа по задача$")
	public void clickStartTaskButton() throws Throwable {
	    taskModel.clickStartTaskButton(); 
	}
	
	
	@When("^Въведе задача(\\d+)$")
	public void insertTaskName(int num) throws Throwable {
		taskModel.setTaskName("задача" + num);
	}

	@When("^въведе Станислав Иванов на разработчик$")
	public void insertDeveloperName1() throws Throwable {
		taskModel.setDeveloperName("Станислав","Иванов");
	}

	@Then("^Вижда съобщение: Успешно започване на работа по задача!$")
	public void checkStartMessage() throws Throwable {
		assertEquals("Успешно започване на работа по задача!", taskModel.getMessage());
	}
	
	//Scenario 5

	
	@When("^въведе Димитър Иванов на разработчик$")
	public void insertDeveloperName2() throws Throwable {
		taskModel.setDeveloperName("Димитър","Иванов");
	}

	@Then("^Вижда съобщение: Въведете валидно име на разработчик!$")
	public void checkStartErrorMessage() throws Throwable {
		assertEquals("Въведете валидно име на разработчик!", taskModel.getMessage());
	}

	//Scenario 6

	@When("^натисне бутона за промяна на статус на задача$")
	public void clickChangeStatusButton() throws Throwable {
	    taskModel.clickChangeStatusButton();
	} 

	@When("^въведе в процес на разработка на статус на задача$")
	public void changeStatusToWorkingOnTask1() throws Throwable {
		taskModel.setStatus("в процес на разработка");
	}

	@Then("^Вижда съобщение: Успешно променихте статуса на задачата!$")
	public void checkMessageStatusUpdated() throws Throwable {
		assertEquals("Успешно променихте статуса на задачата!", taskModel.getMessage());
	}
	
	
	//Scenario 7

	@When("^въведе стара на статус на задача$")
	public void changeStatusToFinishedTask1() throws Throwable {
		taskModel.setStatus("завършена");
	}

	@Then("^Вижда съобщение: Статусът на завършена задача не може да бъде сменен!$")
	public void checkMessage1() throws Throwable {
		assertEquals("Статусът на завършена задача не може да бъде сменен!", taskModel.getMessage());
	}

	@When("^Въведе задача(\\d+) на име$")
	public void insertTaskName1(int num) throws Throwable {
		taskModel.setTaskName("задача" + num);
	}

	@When("^въведе нова на статус на задача$")
	public void changeStatusToFinishedTask2() throws Throwable {
		taskModel.setStatus("завършена");
	}





}
