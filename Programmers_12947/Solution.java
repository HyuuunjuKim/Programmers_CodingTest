package Programmers_12947;

public class Solution {
	public boolean solution(int x) {
		/*
		 * int x�� string���� ��ȯ
		 * string ������ �� ���ϱ�
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
