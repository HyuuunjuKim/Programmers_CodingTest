package Programmrs_12906;

import java.util.Arrays;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Solution sl = new Solution();
		int[] array = {1,1,2,34,3,2,2};
		int[] result = sl.solution(array);
		//배열의 hashcode 출력해서 toString method 사용
		System.out.println(Arrays.toString(result));

	}

}
