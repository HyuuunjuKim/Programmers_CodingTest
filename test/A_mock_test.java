package test;

import java.util.Arrays;

class A_mock_test {
	 public int[] solution(int[] answers) {
		 int[] answer = new int[3];
		 //������1 �迭 ����
	     int[] arr1 = new int[answers.length];
	     for(int i = 0 ; i <answers.length ; i++) {
	    	 if(i%4 == 0) {
	    		 arr1[i] = 5;
	    	 }
	    	 else if(i%4 == 1){
	    		 arr1[i] = 2;
	    	 }
	    	 else if(i%4 == 2){
	    		 arr1[i] = 3;
	    	 }
	    	 else if(i%4 == 3){
	    		 arr1[i] = 4;
	    	 }
	    	 else {
	    		 arr1[i] = 1;
	    	 }
	     }
		 //������2 �迭 ����
	     int[] arr2 = new int[answers.length];
	     for(int i = 0 ; i <answers.length ; i++) {
	    	 if(i%7 == 0) {
	    		 arr2[i] = 5;
	    	 }
	    	 else if(i%7 == 1){
	    		 arr2[i] = 1;
	    	 }
	    	 else if(i%7 == 2){
	    		 arr2[i] = 2;
	    	 }
	    	 else if(i%7 == 3){
	    		 arr2[i] = 3;
	    	 }
	    	 else if(i%7 == 4){
	    		 arr2[i] = 2;
	    	 }
	    	 else if(i%7 == 5){
	    		 arr2[i] = 4;
	    	 }
	    	 else if(i%7 == 6){
	    		 arr2[i] = 2;
	    	 }
	    	 else {
	    		 arr2[i] = 2;
	    	 }
	     }
		 //������3 �迭 ����
	     int[] arr3 = new int[answers.length];
	     for(int i = 0 ; i <answers.length ; i++) {
	    	 if(i%9 == 0) {
	    		 arr3[i] = 5;
	    	 }
	    	 else if(i%9 == 1){
	    		 arr3[i] = 3;
	    	 }
	    	 else if(i%9 == 2){
	    		 arr3[i] = 1;
	    	 }
	    	 else if(i%9 == 3){
	    		 arr3[i] = 1;
	    	 }
	    	 else if(i%9 == 4){
	    		 arr3[i] = 2;
	    	 }
	    	 else if(i%9 == 5){
	    		 arr3[i] = 2;
	    	 }
	    	 else if(i%9 == 6){
	    		 arr3[i] = 4;
	    	 }
	    	 else if(i%9 == 7){
	    		 arr3[i] = 4;
	    	 }
	    	 else if(i%9 == 8){
	    		 arr3[i] = 5;
	    	 }
	    	 else {
	    		 arr3[i] = 3;
	    	 }
	     }
	     
	     //answer�� �迭�� �����ڵ� �亯�� �迭 ���� ���� ����
	     int sum1= 0;
	     int sum2= 0;
	     int sum3= 0;
	     for(int j=0; j < answers.length ; j++) {
	    	 if(answers[j] == arr1[j]) {
	    		 sum1 = sum1 + 1;
	    	 }
	    	 if(answers[j] == arr2[j]) {
	    		 sum2 = sum2 + 1;
	    	 }
	    	 if(answers[j] == arr3[j]) {
	    		 sum3 = sum3 + 1;
	    	 }
	     }
	     
	     //�� �迭 �����
	     int[] sum_arr = {sum1, sum2, sum3};
	     Arrays.sort(sum_arr);
	     
	     //sum�� ���� ��� �ٸ� ��
	     if(sum_arr[2] != sum_arr[1] && sum_arr[2] ==sum1) {
	    	 
	    	 answer[0] = 1;
	     }
	     else if(sum_arr[2] != sum_arr[1] && sum_arr[2] ==sum2) {
	    	 
	    	 answer[0] = 2;
	     }
	     else if(sum_arr[2] != sum_arr[1] && sum_arr[2] ==sum3) {
	    	 
	    	 answer[0] = 3;
	     }
	     //sum�� ��
	     if(sum_arr[2] == sum_arr[1] && sum_arr[0] ==sum1) {
	    	 
	    	 answer[0] = 2;
	    	 answer[1] = 3;
	     }
	     else if(sum_arr[2] == sum_arr[1] && sum_arr[0] ==sum2) {
	    	 
	    	 answer[0] = 1;
	    	 answer[1] = 3;
	     }
	     else if(sum_arr[2] == sum_arr[1] && sum_arr[0] ==sum3) {
	    	 
	    	 answer[0] = 1;
	    	 answer[1] = 2;
	     }
	     
	     if(sum_arr[2] == sum_arr[1] && sum_arr[1] == sum_arr[0]) {
	    	 
	    	 answer[0] = 1;
	    	 answer[1] = 2;
	    	 answer[2] = 3;
	     }
	     
		 return answer;
	 }
}
