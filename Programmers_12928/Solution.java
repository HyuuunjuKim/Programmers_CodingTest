package Programmers_12928;

public class Solution { 
	public int solution(int n){
		int answer = 0;
		/*
		 * n�� 1���� n���� �����鼭 �������� 0�̸�
		 * ����̹Ƿ� answer�� �߰�
		 */
		for(int i=1 ; i <= n ; i++) {
			if(n % i == 0) {
				answer = answer+i;
			}
		}
		return answer;
	}
	
}
