package Programmers_42578;

import java.util.Collection;
import java.util.HashMap;

public class Solution {
	public int solution(String[][] clothes) {
		int answer = 0;
		int count =1;
		//<�ǻ�����, �ش� �ǻ������� ����>
		HashMap<String, Integer> clothesHash = new HashMap<String, Integer>();
		for(int i = 0; i <clothes.length ; i++) {
			if(!clothesHash.containsKey(clothes[i][1])) {
				// ���ο� �ǻ� �����̸�
				clothesHash.put(clothes[i][1], 1);
			} else {
				// �̹� �ִ� �ǻ� �����̸�
				clothesHash.put(clothes[i][1], clothesHash.get(clothes[i][1])+1);
			}
		}
		for(String key : clothesHash.keySet()) {
			count *= clothesHash.get(key)+1;
		}
		answer = count -1;
		return answer;
	}
	
	public static void main(String[] args) {
		Solution sl = new Solution();
		String[][] clothes= {{"yellow_hat", "headgear"},{"blue_sunglasses", "eyewear"}, {"green_turban", "headgear"}};
		
		System.out.println(sl.solution(clothes));
	}

}
