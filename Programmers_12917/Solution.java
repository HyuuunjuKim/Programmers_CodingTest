package Programmers_12917;
import java.util.*;

public class Solution {
	public String solution(String s) {
		String answer = "";
		/*
		���� �ϳ��ϳ��� �ƽ�Ű �ڵ�� �ٲ� ��
		�ƽ�Ű�ڵ� �������� ���� ��
		�ٽ� ���ڷ� �ٲ㼭 ���
		*/
		
		int[] array_ascii = new int[s.length()]; //�ƽ�Ű�ڵ� ���� �迭 ����
		char[] want_array = new char[s.length()];
		for(int i = 0 ; i < s.length() ; i++) {
			int ascii = (int)s.charAt(i);
			array_ascii[i] = ascii;
		}
		
		Arrays.sort(array_ascii); //�迭�� ������������ ����
		
		for (int j = 0 ; j < s.length(); j++) {
			char ascii = (char)array_ascii[j]; //�ƽ�Ű�ڵ带 char�� ��ȯ
			want_array[s.length()-j-1] = ascii; //�迭�� �������� ������������
		}
		
		answer = new String(want_array); //char�迭�� String���� 
		
		return answer;
	}
}
