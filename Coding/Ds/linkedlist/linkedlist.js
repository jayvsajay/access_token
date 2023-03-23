class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev = this.head;
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    insert(index,value){
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }
    }
    removeFrom(index) {
        if(index <0| index>this.size) {
        return null
        }
        let removedNode
        if(index === 0) {
        removedNode =this.head
        this.head =this.head.next
        }else{
            let prev= this.head
            for(let i = 0; i < index-1; i++) {
            prev = prev.next
            }
            removedNode - prev.next
            prev.next =  removedNode.next
        }
        this.size--
        return removedNode.value
        }

        removeValue(value) {
            if(this.isEmpty()) {
            return null
            }
            if(this.head.value===value) {
            this.head = this.head.next
            this.size--
            return value
            }else{
                let prev= this.head
                    while (prev.next & prev.next.value !==value) {
                    prev= prev.next
                    }
                    if(prev.next) {
                    removedNode= prev.next
                    prev.next =removedNode.next
                    this.size--
                    return value
                    }
                    return null
            }
            }
            reverse() {
                let prev = null
                let curr = this.head
                while (curr) {
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
                }
                this.head = prev
            }
                
            search(value){
                    if(this.isEmpty()) {
                    return -1
                    }
                    let i=0
                    let curr = this, head
                    while (curr) {
                    if(curr.value===value) {
                    return 1
                    }
                    curr= curr.next
                    i++
                    }
                    return -1
                }
    print(){
        if(this.isEmpty()){
            console.log("list is Empty")
        }else{
            let curr=this.head
            let listvalues=''
            while(curr){
                listvalues+=`${curr.value}`
                curr=curr.next
            }
            console.log(listvalues)
        }
    }
}

const list = new linkedlist();
console.log('List size', list.getSize())
list.print()
list.insert (10, 0)
list.print()
list.insert (20, 0)
list.print()
list.insert (30, 1)
list.print()
list.insert(40, 2)
list.print();
console.log(list.getSize())
console.log(list. removeFrom(10))