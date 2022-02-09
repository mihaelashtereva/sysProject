package uni.fmi.task.model;

import uni.fmi.task.service.TaskService;

public class TaskScreenModel {
	private String taskName;
	private String message;
	private String status;
	private String devFirstName;
	private String devLastName;
	
	public void setTaskName(final String taskName) {
		this.taskName = taskName;
			}
	
	
	public String getMessage() {
		return message;
	}


	public void clickInsertTaskButton() {
	    message = TaskService.insertTask(taskName,status);	
		
	}


	public void setStatus(final String status) {
		this.status = status;
		
	}

	public void setDeveloperName(String devFirstName, String devLastName) {
		this.devFirstName = devFirstName;
		this.devLastName = devLastName;	
	}

	public void clickStartTaskButton() {
		
	    message = TaskService.startTask(devFirstName,devLastName);
	}



	public void clickChangeStatusButton() {
	    message = TaskService.changeTask(taskName,status);	
		
	}

	public void clickInsertSmallerTaskButton() {
	    message = TaskService.insertTask(taskName,status);	
		
	}





}
