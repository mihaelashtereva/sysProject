package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class Position {


    private String position_name;
    private Set<User> users;

    
    public Position() {
    }


    public String getPositionName() {
                return position_name;
    }

    public void setPositionName(String position_name) {
        this.position_name = position_name;
       
    }

    public void setUsers(Set<User> users) {
        this.users = users;
       
    }

    public Set<User> getUsers() {
                return users;
    }

}