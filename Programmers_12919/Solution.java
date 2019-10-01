package Programmers_12919;

public class Solution {
	public String solution(String[] seoul) {
	    String answer = "";
	   
	    for (int i = 0 ; i< seoul.length ; i++) {
	    	if(seoul[i].equals("Kim")) { //자바에서 스트링 비교는 equals
	    		answer = "김서방은 " + i + "에 있다";
	    	}
	    }
	    return answer;
	}

}
