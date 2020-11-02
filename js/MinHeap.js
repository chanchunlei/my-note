class MinHeap{
  constructor() {
    this.heap = [];
  }
  swap(i1,i2) { //交换
    const tmp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = tmp;
  }
  getParentIndex(i) {
    //return Math.floor((i-1)/2);
    return (i-1) >> 1;
  }
  shiftUp(index) {
    if(index==0) return; //数组为空直接return
    const parentIndex = this.getParentIndex(index); //获取父元素的index
    if(this.heap[parentIndex]>this.heap[index]) { //大于父节点，就跟父节点交换位置
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex); //递归往上对比父节点
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length-1);
  }
  //
  getLeftIndex(i) {
    return i*2+1;
  }
  getRightIndex(i) {
    return i*2+2;
  }
  shiftDown(index){ //交换过的栈顶值下移操作
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if(this.heap[leftIndex]<this.heap[index]) { //同左节点对比下移
      this.swap(leftIndex,index);
      this.shiftDown(leftIndex);
    }
    if(this.heap[rightIndex]<this.heap[index]) { //同右节点对比下移
      this.swap(rightIndex,index);
      this.shiftDown(rightIndex);
    }
  }
  pop(){
    this.heap[0] = this.heap.pop(); //将堆顶的值换成数组尾部元素
    this.shiftDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
const h = new MinHeap();
h.insert(4);
h.insert(6);
console.log(h)
h.insert(2);
console.log(h)
h.insert(3);
console.log(h);
h.insert(1);
console.log(h);

console.log(h.peek())
console.log(h.size())


//左侧

