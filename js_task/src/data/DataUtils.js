import json_data from './emotion_data.json'

export const data = json_data;

const arrayData = [...data];

function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    

export const sortedData = arrayData.sort(GetSortOrder("count"))
