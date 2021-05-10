


const titleHandler= (state='Dashboard',action) =>{
    switch (action.type){
        case 'News':
            document.getElementById('news').style='color:#14B6E4; transition:0.5s';
            document.getElementById('dash').style='color:#d3d3d3; transition:0.5s';
            return action.payload
        case 'Dashboard':
            document.getElementById('dash').style='color:#14B6E4; transition:0.5s';
            document.getElementById('news').style='color:#d3d3d3; transition:0.5s';
            return action.payload
        default:
            return state
    }
}



export default titleHandler;