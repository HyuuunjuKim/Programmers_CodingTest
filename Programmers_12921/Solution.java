package Programmers_12921;
import java.util.*;

public class Solution {
	public int solution(int n) {
		int answer = 0;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		//n�� 1���� n-1���� �ݺ��� ������ ��������
		for(int i=2 ; i <= 1000000 ; i++) {
			int count = 0;
			for(int j= 1 ; j<= i ;j++) {
				if(i % j == 0) {
					count++;
				}
			}
			if(count == 2) {
				arrayList.add(i);
			}
			
		}
		if()
		return answer;
	}

}
