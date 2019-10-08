package Programmers_12950;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Solution sl = new Solution();
		int[][] arr1 = {{1,2}, {2, 3}};
		int[][] arr2 = {{4,6},{7,9}};
		for(int i = 0 ; i < arr1.length ; i++) {
			for(int j = 0 ; j < arr1[0].length ; j++) {
				System.out.print(sl.solution(arr1, arr2)[i][j]);
			}
		}

	}

}
