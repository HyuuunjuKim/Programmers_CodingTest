package Programmers_12932;
import java.util.*;

public class Solution {
	public int[] solution(long n) {
		
		String n_str = String.valueOf(n); //인풋 n을 string으로 변환
		
		int[] answer = new int[n_str.length()];
		char[] char_array = n_str.toCharArray(); //char배열에 n담기
		
		
		for(int i = 0 ; i < n_str.length() ; i++) {
			char_array[i]= char_array[n_str.length()-i-1];
			answer[i] = Integer.parseInt(char_array[i]+"");
		}
		
		return answer;
	}

}
