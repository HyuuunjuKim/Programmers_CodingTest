package Programmers_12899;

public class Solution {
	public String solution(int n) {
	    String answer = "";
	    /*
	     *n�� -1, -2, 4�ؼ�
	     *������ 3�� �ؼ� �������� 0�̸�
	     * 3*��+() = n�̹Ƿ�,,,
	     * "��"+"()"
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
