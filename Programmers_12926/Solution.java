package Programmers_12926;

import java.util.*;

public class Solution {
	public String solution(String s, int n) {
		String answer = "";
		/*
		 * ���� �� ���ڸ��� �ƽ�Ű�ڵ�� �ٲ� �ƽ�Ű�ڵ� + n �̰Ÿ� �������� s.length��ŭ ���ڿ� ����� �ٽ� char�� ����
		 */

		char[] s_arr = new char[s.length()]; // input S�� ��Ʈ�� �迭�� ����
		for (int i = 0; i < s.length(); i++) {
			int ascii = s.charAt(i); // ���ڵ��� �ƽ�Ű �ڵ�� �ٲ�

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

			s_arr[i] = (char) after_ascii; // �ƽ�Ű�ڵ� + n�� �� �迭�� ����
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
