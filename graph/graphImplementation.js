class Graph{
    constructor(){
        this.adjacencyList = { };
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '->' +[...this.adjacencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    bfs(start){
        let visited = new Set();
        let queue = [start];
        visited.add(start);
        while(queue.length){
            let vertex = queue.shift();
            console.log(vertex);
            for(let adjacentVertex of this.adjacencyList[vertex]){
                if(!visited.has(adjacentVertex)){
                    visited.add(adjacentVertex);
                    queue.push(adjacentVertex);
                }
            }
        }
    }
    dfs(start){
        let visited = new Set();
        let stack = [start];
        while(stack.length){
            let vertex = stack.pop();
            if(!visited.has(vertex)){
                console.log(vertex);
                visited.add(vertex);
                for(let adjacentVertex of this.adjacencyList[vertex]){
                    if(!visited.has(adjacentVertex)){
                        stack.push(adjacentVertex);
                    }
                }
            }
        }
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A','B');
graph.addEdge('B','C');
graph.display();
graph.bfs('A');
graph.dfs('A');