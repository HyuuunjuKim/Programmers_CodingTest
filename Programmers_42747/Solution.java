package Programmers_42747;

import java.util.Arrays;

public class Solution {
	public int solution(int[] citations) {
		int answer = 0;
		Arrays.sort(citations);

		for (int i = citations[citations.length - 1]; i >= 0; i--) {
			int count = 0;
			for (int j = citations.length - 1; j >= 0; j--) {
				if (citations[j] >= i) {
					count++;
				} else {
					break;
				}
			}
			if (count >= i) {
				answer = i;
				break;
			}
		}
		return answer;
	}

	public static void main(String[] args) {
		Solution sl = new Solution();
		int[] citations = { 3, 0, 6, 1, 5 };
		System.out.println(sl.solution(citations));
	}

}
