package Programmers_12931;

public class Solution {
	public int solution(int n) {
        int answer = 0;
        int sum = 0;
        String n_str = String.valueOf(n); //n�� string���� ��ȯ
        for (int i = 0 ; i < n_str.length() ; i++) {
        	// char -> String -> int
        	sum = sum + Integer.parseInt(String.valueOf(n_str.charAt(i)));
        }
        answer = sum;
        return answer;
    }

}
