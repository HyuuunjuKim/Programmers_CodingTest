package Programmers_12926;

import java.util.*;

public class Solution {
	public String solution(String s, int n) {
		String answer = "";
		/*
		 * 문자 한 글자마다 아스키코드로 바꿈 아스키코드 + n 이거를 시작으로 s.length만큼 문자열 만들기 다시 char로 변경
		 */

		char[] s_arr = new char[s.length()]; // input S를 스트링 배열에 담은
		for (int i = 0; i < s.length(); i++) {
			int ascii = s.charAt(i); // 문자들을 아스키 코드로 바꿈

			int after_ascii = ascii + n;
			if(ascii == 32) {
				after_ascii = 32;
			}
			if (ascii <= 90 && after_ascii > 90) {
				after_ascii -= 26;
			}
			if (ascii >= 97 && after_ascii > 122) {
				after_ascii -= 26;
			}

			s_arr[i] = (char) after_ascii; // 아스키코드 + n한 걸 배열에 담음
		}

		answer = new String(s_arr);

		return answer;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Solution sl = new Solution();
		String s = "a B z";
		int n = 1;
		System.out.println(sl.solution(s, n));

	}

}
