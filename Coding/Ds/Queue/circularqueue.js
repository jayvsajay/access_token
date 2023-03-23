class CQueue{
    constructor(capacity){
        this.items=new Array(capacity);
        this.capacity = capacity;
        this.currenlength=0;
        this.rear=-1;
        this.front=-1;
    }
    isFull(){
        return this.currenlength===this.capacity
    }
    isEmpty(){
        return this.currenlength===0
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear=(this.rear+1)%this.capacity
            this.items[this.rear]=element
            this.currenlength+=1
            if(this.front===-1){
                this.front=this.rear
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item=this.items[this.front]
        this.front=(this.front+1)%this.capacity
        this.currenlength-=1
        if(this.isEmpty){
            this.front=-1
            this.rear=-1
        }
        return item
    }
    print(){
        if(this.isEmpty()){
            return null
        }else{
            let i;
            let str='';
            for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
                str+=this.items[i]+""
            }
            str+=this.items[i]
            console.log(str)
        }
    }
}
const cque=new CQueue(5)
cque.enqueue(12)
cque.enqueue(2)
cque.enqueue(32)
cque.enqueue(13)
cque.enqueue(14)
cque.print()