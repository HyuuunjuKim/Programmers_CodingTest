package Programmrs_12906;

import java.util.*;

public class Solution {
	public static int[] solution(int[] array) {
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		
		for(int i=0 ; i< array.length -1 ; i++) {
			if(array[i] != array[i+1]) {
				arrayList.add(array[i]);
			}
		}
		//�������� �־������
		arrayList.add(array[array.length - 1]);
		
		//answer�迭 ����
		int[] answer = new int[arrayList.size()];
		for (int i=0 ; i<answer.length ; i++) {
			answer[i] = arrayList.get(i);
		}
		return answer;
	}

}
