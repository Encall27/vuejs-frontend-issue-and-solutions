# Purpose
I would like to make the data initialization with props data, after on row click, the row data is passed to the pop up form. I have to assign the props data to local data for v-model binding. Since the pop up form is editDataForm, I can change the data and call the API to update it. 
# Issue Description
I copy props data in Vue 3 and it modified the original data. I want to make a copy which is not referenced to the original data (props)
# Solution
// create a deep copy of props.onRowClickData
const dataCopy = JSON.parse(JSON.stringify(props.onRowClickData))
// changableItems - initialization
state.changableItems.selectedFunctionalItems = dataCopy.setting.functional
// make a backup copy , manually set isChangableItemsModified to false after the initialization is complete 
state.isChangableItemsModified = false
