package Programmers_12948;
import java.util.*;

public class Solution {
	public String solution(String phone_number) {
		String answer = "";
		/*
		 * 폰 번호 제외하고 전부 *로 바꾸기 
		 */
		
		char[] number_array = phone_number.toCharArray(); //폰번호를 char배열로 변환
		for(int i = 0 ; i < phone_number.length()-4; i++) {
			number_array[i] = '*'; //뒤에 번호 네자리 제외하고 *로 변환
		}
		answer = new String(number_array); //char배열을 string으로 변환
		return answer;
	}

}
