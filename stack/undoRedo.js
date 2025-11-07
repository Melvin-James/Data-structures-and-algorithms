class stack{
    constructor(){
        this.undoStack = [];
        this.redoStack = [];
    }
    performAction(action){
        this.undoStack.push(action);
        this.redoStack = [];
        console.log(`${action} performed`);
    }
    undo(){
        if(this.undoStack.length === 0){
            console.log('Nothing to undo');
            return;
        }
        const action = this.undoStack.pop();
        this.redoStack.push(action);
        console.log(`undo ${action}`);
    }
    redo(){
        if(this.redoStack.length === 0){
            console.log('Nothing to redo');
            return;
        }
        const action = this.redoStack.pop();
        this.undoStack.push(action);
        console.log(`redo ${action}`);
    }
    showStacks(){
        console.log('undoStack:',this.undoStack);
        console.log('redoStack:',this.redoStack);
        console.log('----------------------------');
    }
}
const tool = new stack();
tool.performAction('A');
tool.performAction('B');
tool.performAction('C');
tool.showStacks();
tool.undo();
tool.undo();
tool.showStacks();
tool.redo();
tool.showStacks();
tool.performAction('D');
tool.showStacks();