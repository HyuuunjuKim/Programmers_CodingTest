package Programmers_12933;
import java.util.*;

public class Solution {
	public long solution(long n) {
		long answer = 0;
		String n_str = String.valueOf(n); //n�� string���� ����
		
		char[] n_char = new char[n_str.length()];
		for (int i = 0 ; i < n_str.length() ; i++) {
			n_char[i] = n_str.charAt(i);
		}
		
		Arrays.sort(n_char);
		char[] answer_char = new char[n_str.length()];
		for (int j = 0 ; j < n_str.length() ; j++) {
			answer_char[j] = n_char[n_str.length()-j-1];
		}
		String str_answer = new String(answer_char); //char�迭�� string����
		answer = Long.valueOf(str_answer); //string�� long����
		
		return answer;
	}

}
