package Programmers_12918;
import java.util.*;

public class Solution {
	public boolean solution(String s) {
	     boolean answer = true;
	     
	     if(s.length()== 4 || s.length() == 6) {
	    	 try {
	    		if( 1000 <= Integer.parseInt(s) && Integer.parseInt(s) <= 999999 ) {
	    			answer = true;
	    		}
	    	 }
	    	 catch (Exception e) { 
	    		 answer = false;
	    	 }
	     }
	     else {
	    	 answer = false; 
	     }
	    	 
	     return answer;
	}
}
