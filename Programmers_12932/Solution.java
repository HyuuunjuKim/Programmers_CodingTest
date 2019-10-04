package Programmers_12932;
import java.util.*;

public class Solution {
	public int[] solution(long n) {
		String n_str = String.valueOf(n); //인풋 n을 string으로 변환
		
		int[] answer = new int[n_str.length()];		
		
		for(int i = 0 ; i < n_str.length() ; i++) {
			answer[i] =  Character.getNumericValue(n_str.charAt(n_str.length()-i-1));
		}
		
		return answer;
	}

}
