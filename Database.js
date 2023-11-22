import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveItem(listItem, id){
    listItem.id = id ? id: new Date().getTime();
    const saveItems = await getItems();
    
    if(id){
        const index = await saveItems.findIndex(item => item.id === id);
        saveItems[index] = listItem;
    } 
    else 
        saveItems.push(listItem);

    return AsyncStorage.setItem('items', JSON.stringify(saveItems));
}

function getItems(){
    return AsyncStorage.getItem('items')
        .then(response => {
            if(response)
                return Promise.resolve(JSON.parse(response));
            else
                return Promise.resolve([]);
        })
}

async function getItem(id){
    const saveItem = await getItems();
    return saveItem.find(item => item.id === id);
}

async function deletarItem(id){
    let saveItems = await getItems();
    const index = await saveItems.findIndex(item => item.id === id);
    saveItems.splice(index, 1);
    return AsyncStorage.setItem('items', JSON.stringify(saveItems))
}

module.exports = {
    saveItem,
    getItems, 
    getItem,
    deletarItem
}