package Programmers_12954;

public class Solution {
	 public long[] solution(int x, int n) {

	     long[] answer = new long[n];
	     long x_long = x;
	     for(int i = 1 ; i <= n ; i++) {
	    	 answer[i-1] = x_long*i;
	     }

	     return answer;
	 }

}
