

#### 手写排序

1. 冒泡排序 O(n2)

   ```js
   function bubbleSort(arr){
     let len = arr.length;
     for(let i=0; i<len; i++) {
       for(let j=i+1; j<len; j++) {
         if(arr[j]>arr[i]) {
           [arr[i],arr[j]]=[arr[j],arr[i]];
         }
       }
     }
     return arr;
   }
   ```

2. 选择排序 O(n2)

   ```js
   function selectionSort(arr) {
   	let len = arr.length;
   	let mixIndex;
   	for(let i=0; i<len; i++) {
   		mixIndex = i;
   		for(let j=i+1; j<len; j++) {
   			if(arr[mixIndex]>arr[j]) {
   				mixIndex = j;
   			}
   		}
   		[arr[i],arr[mixIndex]] = [arr[mixIndex],arr[i]];
   	}
   	return arr;
   }
   ```

3. 插入排序 O(n2)

   ```js
   function insertionSort(arr) {
     	let len = arr.length;
     	let current,preIndex;
     	for(let i=1; i<len; i++) {
         preIndex = i-1;
         current = arr[i];
         while(preIndex>=0&&arr[preIndex]>current) { //循环对比
           arr[preIndex+1] = arr[preIndex];
           preIndex--;
         }
         arr[preIndex+1] = current; //插入正确的位置
       }
     return arr;
   }
   ```

4. 归并排序 O(N*logN)

   ```js
   function mergeSort(arr){
     let len = arr.length;
     if(len < 2) return arr;
     let middle = Math.floor(len/2),
         left = arr.slice(0,middle),
         right = arr.slice(middle);
     return merge(mergeSort(left),mergeSort(right));//自上而下递归，分割
   }
   function merge(left,right) {
   	let result = [];
     while(left.length && right.length) { //两两对比，循环合并
       if(left[0] >= right[0]) {
         result.push(right.shift());
       }else {
         result.push(left.shift());
       }
     }
     while(left.length) { //循环合并剩余元素
       result.push(left.shift());
     }
     while(right.length) { //循环合并剩余元素
       result.push(right.shift());
     }
     return result;
   }
   ```

5. 快速排序

   ```js
   function quickSort(arr) {
     if(arr.length<=1) return arr;
     let left = [],right = [];
     let pivot = arr.splice(0,1)[0];
     for(let i=0; i<arr.length; i++) {
       if(arr[i]>pivot) {
         right.push(arr[i]);
       }else {
         left.push(arr[i]);
       }
     }
     return quickSort(left).concat([pivot],quickSort(right));
   }
   ```


