package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class Project {

    private String project_name;
    private User manager_username;
    private Set<User> developers;
    private Set<Project> children;
    private Project parent;
    private Set<Task> tasks;

    public Project() {
    }

    public String getProjectName() {
        
        return project_name;
    }


    public void setProjectName(String project_name) {
       this.project_name = project_name;
    }


    public User getManagerUsername() {
        
        return manager_username;
    }


    public void setManagerUsername(User manager_username) {
       this.manager_username = manager_username;
    }


    public Set<User> getDevelopers() {
        return developers;
    }


    public void setDevelopers(Set<User> developers) {
      this.developers = developers;
    }

    public Set<Project> getChildren() {
        return children;
    }

    public void setChildren(Set<Project> children) {
        this.children = children;
    }

    public Project getParent() {
        return parent;
    }

    public void setParent(Project parent) {
        this.parent = parent;
    }


    public Set<Task> getTasks() {
        return tasks;
    }


    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }

}