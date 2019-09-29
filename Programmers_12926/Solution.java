package Programmers_12926;
import java.util.*;

public class Solution {
	public String solution(String s, int n) {
		String answer = "";
		/*
		 * 문자 첫번째를 아스키 코드로 바꿈
		 * 아스키코드 + n
		 * 이거를 시작으로 s.length만큼 문자열 만들기
		 * 다시 char로 변경
		 */
		
		int[] array_string = new int[s.length()]; //input S를 스트링 배열에 담은
		for(int i=0 ; i < s.length(); i++) {
			int ascii = (int)s.charAt(i); //문자들을 아스키 코드로 바꿈
			array_string[i] = ascii+n; //아스키코드 + n한 걸 배열에 담음
		}
		
		char[] answer_ascii = new char[s.length()]; 
		for(int i=0 ; i< s.length() ; i++) {
			answer_ascii[i] = (char)array_string[i];
		}
		answer = new String(answer_ascii);
		
		
		return answer;
	}

}
