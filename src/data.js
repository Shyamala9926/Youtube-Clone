export const API_KEY='AIzaSyCep57-S_32Wacuvz0hRD0yMjB0CTJ4F5o';

const value_converter =(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}

export default value_converter;