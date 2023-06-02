# Purpose
// There are 2 columns of checkboxes: Items and needTest. 
// Use b-form-checkbox-group to group the same column checkboxes together, each checkbox presents different value. 
// The needTest checkbox is disabled until the corresponding items checkbox is checked. 
// Which means when the item checkbox is unchecked, the cooresponding needTest checkbox are needed to be unchecked too. 

# Issue Description 
// Since the v-model of b-form-checkbox-group is define as reactive<any[]>([]), but the typeof is object. 
// Hence, the array.splice() method is work but occured an issue. 
// After the splice, the remove action, those checkboxes is no response in UI and value. 
// I need to check the checkboxes mutiple times to finally check it. It causes the bad UI experience to user.

# Solution (Javascript)
// Therefore, I gives id to every needTest's checkboxes. And use document.getElementById to access the checkbox.
// I use click() action because checked and unchekced action is under user mouseclick. 

const needTest_column_id = 'nt' + item_value
const needTest_checkbox = document.getElementById(needTest_column_id)
if (needTest_checkbox) {
    needTest_checkbox.removeAttribute('disabled')
    needTest_checkbox.click()
    needTest_checkbox.setAttribute('disabled', 'disabled')
}
