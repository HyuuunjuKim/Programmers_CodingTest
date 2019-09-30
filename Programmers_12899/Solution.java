package Programmers_12899;

public class Solution {
	public String solution(int n) {
	    String answer = "";
	    /*
	     *n을 -1, -2, 4해서
	     *나누기 3을 해서 나머지가 0이면
	     * 3*몫+() = n이므로,,,
	     * "몫"+"()"
	     */
	    int a=0;
	    
	    if((n-1)%3 == 0) {
	    	a = a + (n-1)/3;
	    	answer = Integer.toString(a)+"1";
	    }
	    else if ((n-2) % 3 == 0) {
	    	a = a + (n-2)/3;
	    	answer = Integer.toString(a)+"1";
	    }
	    else if ((n-4) % 3 == 0) {
	    	a = a + (n-4)/3;
	    	answer = Integer.toString(a)+"1";
	    }asdasd
	    return answer;
	}

}
