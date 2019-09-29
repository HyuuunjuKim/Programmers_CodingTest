package Programmers_12926;
import java.util.*;

public class Solution {
	public String solution(String s, int n) {
		String answer = "";
		/*
		 * ���� ù��°�� �ƽ�Ű �ڵ�� �ٲ�
		 * �ƽ�Ű�ڵ� + n
		 * �̰Ÿ� �������� s.length��ŭ ���ڿ� �����
		 * �ٽ� char�� ����
		 */
		
		int[] array_string = new int[s.length()]; //input S�� ��Ʈ�� �迭�� ����
		for(int i=0 ; i < s.length(); i++) {
			int ascii = (int)s.charAt(i); //���ڵ��� �ƽ�Ű �ڵ�� �ٲ�
			array_string[i] = ascii+n; //�ƽ�Ű�ڵ� + n�� �� �迭�� ����
		}
		
		char[] answer_ascii = new char[s.length()]; 
		for(int i=0 ; i< s.length() ; i++) {
			answer_ascii[i] = (char)array_string[i];
		}
		answer = new String(answer_ascii);
		
		
		return answer;
	}

}
