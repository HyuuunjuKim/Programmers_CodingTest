package Programmers_12947;

public class Solution {
	public boolean solution(int x) {
		/*
		 * int x를 string으로 변환
		 * string 내에서 다 더하기
		 */
		boolean answer = true;
		
		String x_str = String.valueOf(x);
		int sum = 0 ;
		for(int i = 0 ; i < x_str.length(); i++) {
			sum = sum + Integer.parseInt(String.valueOf(x_str.charAt(i)));
		}
		
		if(x % sum == 0) {
			answer = true;
		}
		else {
			answer = false;
		}
		return answer;
	}
}
