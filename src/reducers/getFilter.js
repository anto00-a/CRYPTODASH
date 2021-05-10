


const filterHandler= (state='1',action) =>{
    const hour = document.getElementById('hour');
    const week = document.getElementById('week');
    const weeks = document.getElementById('weeks');
    const month = document.getElementById('month');
    switch(action.type){
        case '1':
            hour.style='color:goldenrod';
            week.style='color:#d3d3d3';
            weeks.style='color:#d3d3d3';
            month.style='color:#d3d3d3';
            return action.payload
        case '7':
            hour.style='color:#d3d3d3';
            week.style='color:goldenrod';
            weeks.style='color:#d3d3d3';
            month.style='color:#d3d3d3';
            return action.payload
        case '15':
            hour.style='color:#d3d3d3';
            week.style='color:#d3d3d3';
            weeks.style='color:goldenrod';
            month.style='color:#d3d3d3';
            return action.payload
        case '30':
            hour.style='color:#d3d3d3';
            week.style='color:#d3d3d3';
            weeks.style='color:#d3d3d3';
            month.style='color:goldenrod';
            return action.payload
        default:
            return state;
    }
}



export default filterHandler;