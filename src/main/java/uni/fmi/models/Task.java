package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class Task {

    private String task_name;
    private String status;
    private User username;
    private Project project;
    private Set<Task> children;
    private Task parent;
    
    public Task() {
    }

    public Task(String name, String status) {
		this.task_name = name;
		this.status = status;
	}




	public String getTaskName() {
    	return task_name;
    }

    public void setTaskName(String task_name) {
        this.task_name = task_name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User getUsername() {
        return username;
    }

    public void setUsername(User username) {
        this.username = username;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Set<Task> getChildren() {
        return children;
    }

    public void setChildren(Set<Task> children) {
        this.children = children;
    }

    public Task getParent() {
        return parent;
    }

    public void setParent(Task parent) {
        this.parent = parent;
    }

}