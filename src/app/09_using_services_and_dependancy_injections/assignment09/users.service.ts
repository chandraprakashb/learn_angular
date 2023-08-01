export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];


    setToInAative(id:number){
        console.log(this.activeUsers[id]);
        
        this.inactiveUsers.push(this.activeUsers[id])
    }
    
    setToIncative(id:number){
        this.activeUsers.push(this.inactiveUsers[id])
    }
}