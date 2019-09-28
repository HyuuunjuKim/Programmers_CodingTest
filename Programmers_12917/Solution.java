package Programmers_12917;
import java.util.*;

public class Solution {
	public String solution(String s) {
		String answer = "";
		/*
		문자 하나하나를 아스키 코드로 바꾼 후
		아스키코드 내림차순 정렬 후
		다시 문자로 바꿔서 출력
		*/
		
		int[] array_ascii = new int[s.length()]; //아스키코드 담을 배열 생성
		char[] want_array = new char[s.length()];
		for(int i = 0 ; i < s.length() ; i++) {
			int ascii = (int)s.charAt(i);
			array_ascii[i] = ascii;
		}
		
		Arrays.sort(array_ascii); //배열을 오름차순으로 정렬
		
		for (int j = 0 ; j < s.length(); j++) {
			char ascii = (char)array_ascii[j]; //아스키코드를 char로 변환
			want_array[s.length()-j-1] = ascii; //배열에 넣을때는 내림차순으로
		}
		
		answer = new String(want_array); //char배열을 String으로 
		
		return answer;
	}
}
