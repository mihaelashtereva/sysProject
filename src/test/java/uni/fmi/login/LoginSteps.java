package uni.fmi.login;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.login.model.LoginScreenModel;

public class LoginSteps {
	
	private LoginScreenModel loginModel;
	
	@Given("^Потребителят отваря екрана за вход системата$")
	public void openLoginScreen() throws Throwable {
	    loginModel = new LoginScreenModel();
	    
	}

	@When("^Въведе валидно потребителско име$")
	public void addUsername() throws Throwable {
	    loginModel.setUsername("Иван");
	}

	@When("^въведе валидна потребителска парола$")
	public void addPassword() throws Throwable {
	    loginModel.setPassword("123!pass");
	}

	@When("^натисне бутона за вход в системата$")
	public void clickLoginButton() throws Throwable {
	    loginModel.clickLoginButton();
	}

	@Then("^Вижда съобщение за успех$")
	public void checkMessage() throws Throwable {
		assertEquals("Успешно влизане", loginModel.getMessage());
	}


	@Then("^Вижда съобщение за липсващи данни$")
	public void checkMissingDataMessage() throws Throwable {
		assertEquals("Въведете име и парола", loginModel.getMessage());

	}
	
	@Then("^Вижда съобщение за неуспех$")
	public void checkFailedDataMessage() throws Throwable {
		assertEquals("Въведете валидни име и парола", loginModel.getMessage());

	}
	
	@When("^Въведе невалидно потребителско име$")
	public void insertUnknowsUsername() throws Throwable {
	    loginModel.setUsername("unknown");
	}
}

