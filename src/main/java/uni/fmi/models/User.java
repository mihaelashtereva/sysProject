package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class User {


    private String username;
    private String password;
    private String email;
    private String first_name;
    private String last_name;
    private Set<Position> positions;
    private Set<Project> projects;
    private Set<Task> tasks;

    
    public User() {
    }





    public User(final String firstName,final String lastName) {
		this.first_name = firstName;
		this.last_name = lastName;
	}

	public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
      
    }

    
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
      
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
       this.email = email;
      
    }

    public void setProjects (Set<Project> projects) {
        this.projects = projects;
       
    }
    
    public Set<Project> getProjects() {
        return projects;
    }
    
    
    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
       
    }
    
    public Set<Task> getTasks() {
        return tasks;
    }
    
    
    public void setPositions(Set<Position> positions) {
        this.positions = positions;
       
    }

    public Set<Position> getPositions() {
        return positions;
    }

    public String getFirstName() {
        return first_name;
    }

    public void setFirstName(String first_name) {
        this.first_name = first_name;

    }

    public String getLastName() {
        return last_name;
    }

    public void setLastName(String last_name) {
        this.last_name = last_name;
     
    }

}