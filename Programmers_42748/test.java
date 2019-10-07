package Programmers_42748;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Solution sl = new Solution();
		int[] array = {1,5,2,6,3,7,4};
		int[][] commands = {{2,5,3}, {4,4,1}, {1,7,3}};
		for(int i = 0 ; i < sl.solution(array, commands).length ; i++) {
			System.out.print(sl.solution(array, commands)[i]);
		}
	}

}
