package Programmers_42748;
import java.util.*;

public class Solution {
	public int[] solution(int[] array, int[][] commands) {
		/*
		 * commands �迭�� (column[0]-1) - (column[1]-1)���� ���� 
		 * ���� �迭 �����ϱ�
		 * column[2]-1�� ���� return 
		 */
		int[] answer = new int[commands.length];
		
		for(int i = 0 ; i < commands.length ; i++) {
			int[] new_array = new int[commands[i][1] - commands[i][0] +1];
			int new_index = 0;
			for(int j = commands[i][0]-1 ; j < commands[i][1] ; j++) {
				new_array[new_index] = array[j];
				new_index++;
			}
			Arrays.sort(new_array);
			answer[i] = new_array[commands[i][2]-1];
		}
		
		return answer;
	}

}
