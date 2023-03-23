class queue{
    constructor(){
        this.items={},
        this.rear=0,
        this.front=0
    }

    enqueue(element){
        this.items[this.rear]=element;
        this.rear++;
    }
    dequeue(){
        const item=this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    isEmpty(){
        return this.rear=this.front===0;
    }
    peek(){
        return this.items[this.front];
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items)
    }
    
}
const que=new queue();
que.enqueue(12);
que.enqueue(10)
que.enqueue(11)
que.enqueue(14)
console.log(que.size());
que.print()